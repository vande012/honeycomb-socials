import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  TrendingUp,
  Users,
  Palette,
  FileText
} from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Full Social Media Management | Done-For-You Social Media | Honeycomb Socials',
  description: 'Complete done-for-you social media management. We handle strategy, content creation, and scheduling for beauty businesses. Monthly calendars included. Book your consultation.',
  alternates: {
    canonical: `${baseUrl}/services/full-management`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/services/full-management`,
    title: 'Full Social Media Management | Honeycomb Socials',
    description: 'Complete done-for-you social media management. We handle strategy, content creation, and scheduling for beauty businesses.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Full Social Media Management - Honeycomb Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Social Media Management | Honeycomb Socials',
    description: 'Complete done-for-you social media management for beauty businesses.',
    images: [ogImageUrl],
  },
}

export default function FullManagementPage() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Social Media Management",
    "description": "Complete done-for-you social media management including strategy, content creation, and scheduling for beauty and wellness businesses.",
    "url": `${baseUrl}/services/full-management`,
    "provider": {
      "@type": "Organization",
      "name": "Honeycomb Socials",
      "url": baseUrl
    },
    "serviceType": "Social Media Management",
    "areaServed": "United States",
    "category": "Social Media Marketing"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/services/full-service.jpeg"
                  alt="Full Social Media Management Service"
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
                  Complete Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Full Social Media <span className="italic font-serif">Management</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Strategy-led, done-for-you social media support.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                This is for business owners who want their social media handled with intention, clarity, and consistency. Instead of juggling content ideas, trends, and posting schedules, this service provides a clear strategy and ongoing execution that supports your business goals. Everything is planned, created, and managed with purpose so your social media works in the background while you focus on running your business.
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
                What's Included
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Full social media management includes my complete strategy-first process followed by ongoing monthly support. This is not about posting more. It's about posting with direction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Discovery & Strategy */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Discovery & Strategy</h3>
                </div>
                <p className="text-foreground/80 mb-4">Every partnership starts with clarity.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">In-depth onboarding and strategy call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clear definition of goals, audience, and priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform focus based on what makes sense for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content direction built around long-term objectives</span>
                  </li>
                </ul>
              </div>

              {/* Brand Alignment */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Brand Alignment</h3>
                </div>
                <p className="text-foreground/80 mb-4">Ensuring your social media feels like a natural extension of your business.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Collaborative visual direction, not a full rebrand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Consistent tone and messaging across content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Guidelines that support cohesion without boxing you in</span>
                  </li>
                </ul>
              </div>

              {/* Content Planning & Creation */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Planning & Creation</h3>
                </div>
                <p className="text-foreground/80 mb-4">Intentional content built from strategy, not trends.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom 30-day content calendar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Edited short-form videos and designed graphics as needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Captions written to support clarity, trust, and action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clear notes on any assets needed from you</span>
                  </li>
                </ul>
              </div>

              {/* Scheduling & Ongoing Management */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Scheduling & Ongoing Management</h3>
                </div>
                <p className="text-foreground/80 mb-4">Execution that follows the plan.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content scheduled according to the monthly strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Hands-off posting once content is approved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Monthly performance review to guide future content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Ongoing refinement based on patterns, not daily fluctuations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our 7-Step Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Full Management includes our complete onboarding and monthly workflow. Every step is designed to ensure quality, consistency, and results.
              </p>
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 mb-8">
              <ol className="space-y-6">
                {[
                  { step: '1', title: 'Discovery & Fit Call', desc: 'Initial consultation to ensure we\'re the right fit' },
                  { step: '2', title: 'Proposal & Contract', desc: 'Customized service agreement and onboarding' },
                  { step: '3', title: 'Onboarding & Strategy', desc: 'Deep dive into your brand, goals, and audience' },
                  { step: '4', title: 'Brand Kit Creation', desc: 'Custom visual identity and aesthetic development' },
                  { step: '5', title: 'Content Calendar', desc: 'Strategic 30-day content planning' },
                  { step: '6', title: 'Content Creation', desc: 'Professional content production' },
                  { step: '7', title: 'Scheduling & Management', desc: 'Automated posting and ongoing optimization' }
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-center">
              <Link
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Cycle Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ongoing Monthly Management
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                After initial onboarding, your monthly cycle includes strategy refinement, content planning, creation, and scheduling.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/calendar.jpg"
                alt="Monthly content calendar and scheduling"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Each month, we review performance data, refine strategies based on what's working, and create fresh content that aligns with your business goals and seasonal trends. You'll receive regular updates and insights, ensuring transparency and continuous improvement.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                This ongoing cycle ensures your social media evolves with your business, staying fresh, relevant, and consistently attracting your ideal clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fafafa] to-[#f2e9d0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-6">
              Ready for Full Management?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's discuss how full social media management can help your business grow. Every package is customized to your needs and goals.
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

