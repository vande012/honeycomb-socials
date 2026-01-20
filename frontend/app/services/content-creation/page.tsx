import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar as CalendarIcon,
  Video,
  Image as ImageIcon,
  FileText,
  Hash
} from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Content Creation Services | Social Media Graphics & Videos | Honeycomb Socials',
  description: 'Professional social media content creation for beauty businesses. Custom graphics, Reels, and captions that convert followers into clients. Get started today.',
  alternates: {
    canonical: `${baseUrl}/services/content-creation`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/services/content-creation`,
    title: 'Content Creation Services | Honeycomb Socials',
    description: 'Professional social media content creation for beauty businesses. Custom graphics, Reels, and captions that convert.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Content Creation Services - Honeycomb Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Creation Services | Honeycomb Socials',
    description: 'Professional social media content creation for beauty businesses.',
    images: [ogImageUrl],
  },
}

export default function ContentCreationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Creation Services",
    "description": "Professional social media content creation including custom graphics, Reels, and captions for beauty and wellness businesses.",
    "url": `${baseUrl}/services/content-creation`,
    "provider": {
      "@type": "Organization",
      "name": "Honeycomb Socials",
      "url": baseUrl
    },
    "serviceType": "Content Creation",
    "areaServed": "United States"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/content.jpg"
                  alt="Social Media Content Creation Services"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                  Content Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Content <span className="italic font-serif">Creation</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Strategy-led content, created with intention.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                This service is for businesses who want consistent, high-quality content without guessing what to post or why. Instead of just making things look good, content is created from a clear plan so every piece supports your goals. You get thoughtful execution without having to manage the details yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What I Create
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Content is created with both clarity and consistency in mind. Every piece has a purpose, and nothing is posted just to fill space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Graphics & Static Content */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Graphics & Static Content</h3>
                </div>
                <p className="text-foreground/80 mb-4">Visual content that supports recognition and understanding.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand-aligned static posts and carousels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Visuals that support your messaging, not distract from it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform-appropriate formatting when needed</span>
                  </li>
                </ul>
              </div>

              {/* Short-Form Video Content */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Short-Form Video Content</h3>
                </div>
                <p className="text-foreground/80 mb-4">Edited, intentional video built from a clear direction.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Short-form video editing for Instagram, TikTok, and Shorts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Guidance on what to film so content feels manageable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Videos created to support your strategy, not chase trends</span>
                  </li>
                </ul>
              </div>

              {/* Captions & Messaging */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Captions & Messaging</h3>
                </div>
                <p className="text-foreground/80 mb-4">Words that explain, position, and guide.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Captions written to align with your brand voice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Messaging that supports clarity and trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clear calls to action where they make sense</span>
                  </li>
                </ul>
              </div>

              {/* Content Optimization */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Hash className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Optimization</h3>
                </div>
                <p className="text-foreground/80 mb-4">Ensuring content fits the platform and the goal.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform-specific formatting where needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clear intent behind each post</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Design and structure aligned with your strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Integration Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How Content Creation Works
              </h2>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/services/content.jpeg"
                alt="Content creation process and workflow"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Strategy & Direction</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Before anything is created, we clarify your goals, audience, and content direction. This ensures every piece of content has a reason for existing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Content Calendar Approval</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You receive a 30-day content plan outlining each post, its purpose, and what is needed from you, if anything. The plan is approved before creation begins.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Content Creation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  All approved content is created based on the strategy and direction we've set. This includes editing videos, creating graphics when needed, and refining captions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Review & Delivery</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You review the final content before delivery. Minor adjustments are included so you feel confident in everything representing your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fafafa] to-[#f2e9d0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-6">
              Ready for Professional Content?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's discuss your content needs and create a package that works for your business. Every piece is designed to convert and grow your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

