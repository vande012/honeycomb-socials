import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FAQ } from "./components/FAQ";
import { getFAQs } from "./api/api";

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

/* ============================================
   METADATA CUSTOMIZATION
   ============================================
   Update these values for your project.
   ============================================ */
export const metadata: Metadata = {
  title: "My Template",
  description: "A Next.js + Strapi starter template with Tailwind CSS and TypeScript",
};

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
    console.error('Failed to fetch FAQs in layout:', error);
  }

  const faqs = faqData?.data || [];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${redHatDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="light"
          storageKey="template-theme"
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
              <FAQ faqs={faqs} />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
