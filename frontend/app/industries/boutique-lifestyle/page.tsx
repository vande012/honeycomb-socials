import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Social Media Marketing for Boutiques & Lifestyle Brands | Honeycomb Socials',
  description: 'Grow your boutique or lifestyle brand with strategic social media content. Convert browsers into buyers with aesthetic content and e-commerce strategies that drive sales.',
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function BoutiqueLifestylePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/boutique.jpeg"
            alt="Boutique lifestyle background"
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
              Social Media Marketing for Boutiques & Lifestyle Brands
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Grow your boutique with content that converts browsers into buyers. We create aesthetic, strategic social media that drives sales and builds a loyal community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
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
              What We Offer Boutiques & Lifestyle Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive social media strategies designed to drive e-commerce sales, build brand awareness, and create a loyal customer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Showcase & Styling</h3>
              <p className="text-muted-foreground mb-4">
                Highlight your products with content that showcases their appeal and drives sales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Product feature content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Styling & outfit inspiration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">New arrival highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Shopping-friendly formats</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">E-commerce & Sales Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Convert followers into customers with strategic sales content and promotions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Sale & promotion campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Limited-time offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Gift guide content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Cart abandonment reminders</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Lifestyle & Community Building</h3>
              <p className="text-muted-foreground mb-4">
                Build a loyal community around your brand with lifestyle content that resonates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Behind-the-scenes content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Customer spotlights & UGC</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Brand story & values content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Seasonal & trend content</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Aesthetic & Visual Identity</h3>
              <p className="text-muted-foreground mb-4">
                Create a cohesive visual brand that makes your boutique instantly recognizable.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Consistent brand aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Custom templates & graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Brand voice development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Instagram feed curation</span>
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
            Why Social Media Matters for Boutiques
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              In today's retail landscape, your social media presence is often the first touchpoint potential customers have with your brand. With platforms like Instagram and TikTok driving discovery, having strategic, sales-focused content isn't optional—it's essential for growth.
            </p>
            <p>
              We understand that running a boutique means you're focused on inventory, customer service, and day-to-day operations, not creating content. That's where we come in. We handle the content strategy, product photography guidance, and posting schedule so you can focus on what you do best.
            </p>
            <p>
              Our approach combines aesthetic product content with real e-commerce strategy. We help you showcase your products in a way that builds desire, drives traffic to your store, and converts browsers into buyers.
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
              Ready to Grow Your Boutique?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's create a social media strategy that drives sales and builds a loyal customer community.
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

