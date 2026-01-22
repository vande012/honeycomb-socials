import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export const metadata = {
  title: 'Social Media Marketing for Boutiques & Lifestyle Brands | Honeycomb Socials',
  description: 'Grow your boutique or lifestyle brand with strategic social media content. Convert browsers into buyers with aesthetic content and e-commerce strategies that drive sales.',
  alternates: {
    canonical: `${baseUrl}/industries/boutique-lifestyle`,
  },
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
              Social media for boutiques that helps shoppers understand what you sell and why it's worth buying.
            </p>
            <div className="flex justify-center">
              <Link href="/audit">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
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
              What I Offer Boutiques & Lifestyle Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategy-first social media support designed to help customers understand your products, your brand, and why buying from you makes sense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Positioning Content</h3>
              <p className="text-muted-foreground mb-4">
                Content that helps shoppers quickly understand what you sell and who it's for.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear product-focused messaging that highlights value, not just visuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content that explains how products fit into real life</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Direction that supports confident buying decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sales-Supporting Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Social media that supports purchasing without relying on constant promotions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear communication around collections, drops, and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Thoughtful calls to action that guide customers naturally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content planned around the buyer journey, not urgency tactics</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Story & Lifestyle Context</h3>
              <p className="text-muted-foreground mb-4">
                Helping customers connect with your brand beyond a single product.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that reflects your values and point of view</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Context that helps customers feel aligned with your brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Social proof used intentionally, not excessively</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Alignment & Consistency</h3>
              <p className="text-muted-foreground mb-4">
                Making sure your social media feels cohesive without locking you into a look.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Visual direction that supports recognition over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Consistent tone and messaging across platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Structure that allows your brand to evolve as you grow</span>
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
            Why Social Media Matters for Boutiques & Lifestyle Brands
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              For boutiques and lifestyle brands, social media is often where customers decide if they trust your brand enough to buy. They are looking for clarity around your products, your style, and what sets you apart before they ever click through to your site.
            </p>
            <p>
              Without a clear strategy, social media can become a stream of product posts that still lead to hesitation at checkout. When messaging lacks direction, interest doesn't always turn into action.
            </p>
            <p>
              That's why a strategy-first approach matters. Instead of focusing on constant promotions or aesthetic trends, I help shape content that explains your value, builds trust, and supports confident purchasing decisions. The goal is not just visibility, but clarity that leads to sales.
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
  );
}

