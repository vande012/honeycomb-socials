import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Red_Hat_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FAQ } from "./components/FAQ";
import FAQSchema from "./components/FAQSchema";
import { getFAQs, getGlobalData } from "./api/api";
import { generateIconMetadata } from "./utils/favicon";
import { logger } from "./utils/logger";
import GoogleAnalytics from "./components/GoogleAnalytics";

/* ============================================
   FONT CUSTOMIZATION
   ============================================
   Change fonts here. Geist is used by default.
   For Google Fonts: https://fonts.google.com/
   Import and configure your preferred fonts below.
   ============================================ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

/* ============================================
   METADATA CUSTOMIZATION
   ============================================
   Update these values for your project.
   ============================================ */
export async function generateMetadata(): Promise<Metadata> {
  try {
    const globalData = await getGlobalData();
    const global = globalData?.data;

    const metaTitle = global?.metadata?.metaTitle || "Honeycomb Socials";
    const metaDescription =
      global?.metadata?.metaDescription ||
      "Social media management for beauty and wellness businesses that value aesthetics as much as results.";

    const icons = generateIconMetadata(global?.favicon || null);

    // Generate OG images from shareImage or favicon
    const shareImage = global?.metadata?.shareImage;
    const ogImageUrl = shareImage?.url 
      ? (shareImage.url.startsWith('http') ? shareImage.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/api', '')}${shareImage.url}`)
      : 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

    return {
      title: metaTitle,
      description: metaDescription,
      icons,
      metadataBase: new URL(baseUrl),
      verification: {
        google: 'PiCARpWIU9pPH_JBRHigCXJ5uKID6IUgm1zV-Af29Hg',
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: metaTitle,
        description: metaDescription,
        siteName: 'Honeycomb Socials',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: metaTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [ogImageUrl],
      },
    };
  } catch (e) {
    const fallbackOgImage = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
    
    return {
      title: "Honeycomb Socials",
      description:
        "Social media management for beauty and wellness businesses. Aesthetic content that converts followers into clients. Book your free consultation today.",
      metadataBase: new URL(baseUrl),
      verification: {
        google: 'PiCARpWIU9pPH_JBRHigCXJ5uKID6IUgm1zV-Af29Hg',
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: 'Honeycomb Socials',
        description: 'Social media management for beauty and wellness businesses',
        siteName: 'Honeycomb Socials',
        images: [
          {
            url: fallbackOgImage,
            width: 1200,
            height: 630,
            alt: 'Honeycomb Socials',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Honeycomb Socials',
        description: 'Social media management for beauty and wellness businesses',
        images: [fallbackOgImage],
      },
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch FAQs from Strapi
  let faqData = null;
  try {
    faqData = await getFAQs();
  } catch (error) {
    logger.error('Failed to fetch FAQs in layout:', error);
  }

  const faqs = faqData?.data || [];

  // Transform FAQs for schema component (only include FAQs with both Question and Answer)
  const faqsForSchema = faqs
    .filter((faq: any) => faq.Question && faq.Answer)
    .map((faq: any) => ({
      Question: faq.Question,
      Answer: faq.Answer,
    }));

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${redHatDisplay.variable} ${dancingScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        {faqsForSchema.length > 0 && <FAQSchema faqs={faqsForSchema} />}
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
            <FAQ faqs={faqs} />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
