import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Social Media Marketing for Salons & Hairstylists | Honeycomb Socials',
  description: 'Grow your salon or hairstyling business with strategic social media content. Showcase transformations, attract clients, and keep your books full with aesthetic content that converts.',
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function SalonsHairstylistsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/salon-2.jpg"
            alt="Salon background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="bg-white/50 dark:bg-background/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Social Media Marketing for Salons & Hairstylists
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Your work is stunning. Your social media should reflect that. We create content and strategy that attracts your dream clients and keeps your books full.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
              </Link>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get Free Audit</Button>
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
              What We Offer Salons & Stylists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Before & After Content</h3>
              <p className="text-muted-foreground mb-4">
                Showcase transformations that stop the scroll and book appointments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Platform-optimized content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Strategic posting schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Hashtag research & strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Development</h3>
              <p className="text-muted-foreground mb-4">
                Create a cohesive look that makes your salon instantly recognizable.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Visual branding & aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Brand voice development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Custom templates & graphics</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Reel & Video Production</h3>
              <p className="text-muted-foreground mb-4">
                Short-form video content that showcases your skills and personality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Trending audio & formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Professional editing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Hook-driven storytelling</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Client Attraction Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Convert followers into paying clients with strategic content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Audience targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Call-to-action optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Engagement tactics</span>
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
              In today's beauty industry, your social media presence is often the first impression potential clients have of your work. With platforms like Instagram and TikTok driving discovery, having a strategic content plan isn't optional—it's essential for growth.
            </p>
            <p>
              We understand that running a salon means you're focused on your craft, not creating content. That's where we come in. We handle the strategy, content creation, and posting so you can focus on what you do best: creating beautiful transformations.
            </p>
            <p>
              Our approach combines aesthetic content with real strategy—no generic templates or one-size-fits-all solutions. Every piece of content is designed to showcase your unique style, attract your ideal clients, and drive bookings.
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
              <Link href="/contact">
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
  );
}

