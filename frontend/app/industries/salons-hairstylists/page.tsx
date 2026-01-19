import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Social Media Marketing for Salons & Hairstylists | Honeycomb Socials',
  description: 'Grow your salon or hairstyling business with strategic social media content. Showcase transformations, attract clients, and keep your books full with aesthetic content that converts.',
  alternates: {
    canonical: `${baseUrl}/industries/salons-hairstylists`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/industries/salons-hairstylists`,
    title: 'Social Media Marketing for Salons & Hairstylists | Honeycomb Socials',
    description: 'Grow your salon or hairstyling business with strategic social media content.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing for Salons & Hairstylists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing for Salons & Hairstylists',
    description: 'Grow your salon or hairstyling business with strategic social media content.',
    images: [ogImageUrl],
  },
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function SalonsHairstylistsPage() {
  // WebPage Schema for industry page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Social Media Marketing for Salons & Hairstylists",
    "description": "Specialized social media management services for salons and hairstylists. Showcase transformations and attract clients with strategic content.",
    "url": `${baseUrl}/industries/salons-hairstylists`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": `${baseUrl}/industries`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Salons & Hairstylists",
          "item": `${baseUrl}/industries/salons-hairstylists`
        }
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Honeycomb Socials"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/salon2.jpeg"
            alt="Salon background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Social Media Marketing for Salons & Hairstylists
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
            Social media shouldn’t be harder than doing hair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
              </Link>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What I Offer Salons & Stylists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Clear Direction</h3>
              <p className="text-muted-foreground mb-4">
                Social media that's built around why you're posting, not just what you're posting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Defined content pillars tied to your booking goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that attracts the clients you actually want</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">A plan that makes posting feel purposeful instead of reactive</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Alignment</h3>
              <p className="text-muted-foreground mb-4">
                Your social media should feel like you, not a template.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Collaborative visual direction that builds consistency over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Brand voice refinement so your captions sound natural, not forced</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Guidelines that support your look</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Short-Form Video Support</h3>
              <p className="text-muted-foreground mb-4">
                You don't need to be a content creator. You need direction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Simple guidance on what to film and how to film it</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Short shot lists based on your services and schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Edited short-form videos that align with your strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Booking-Focused Content Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Content with a job to do.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear calls to action that make booking obvious</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Education-led posts that build trust before the appointment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content structured to support inquiries, not just engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Why Social Media Matters for Salons & Stylists
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              For most salons and stylists, social media is the first place potential clients go to decide if they want to book with you. Not to admire your work, but to understand your vibe, your expertise, and whether you feel like the right fit.
            </p>
            <p>
              Without a clear strategy, it's easy to post consistently and still feel stuck. Content starts to feel random, trends feel exhausting, and bookings feel unpredictable.
            </p>
            <p>
              That's where a strategy-first approach changes everything.
            </p>
            <p>
              Instead of leading with aesthetics or copying what everyone else is doing, I focus on clarity. Clear messaging. Clear positioning. Clear direction. From there, your content supports your business goals, builds trust with the right clients, and makes booking feel like the natural next step.
            </p>
            <p>
              The goal isn't to post more or chase trends. It's to use social media intentionally so it works for you while you focus on your clients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/analytics.jpg"
              alt="Analytics dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Fill Your Books?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's create a social media strategy that brings in clients and showcases your talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">View All Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

