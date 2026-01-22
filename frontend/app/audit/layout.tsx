import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Free Consultation | Honeycomb Socials',
  description: 'Book your free social media consultation. Let\'s discuss your goals and create a strategic plan to grow your business with beautiful, high-performing content.',
  alternates: {
    canonical: `${baseUrl}/audit`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/audit`,
    title: 'Free Consultation | Honeycomb Socials',
    description: 'Book your free social media consultation and grow your beauty business with strategic social media.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Free Consultation - Honeycomb Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Consultation | Honeycomb Socials',
    description: 'Book your free social media consultation and grow your beauty business.',
    images: [ogImageUrl],
  },
}

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

