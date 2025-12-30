import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Social Media Marketing for Beauty Brands & Products | Honeycomb Socials',
  description: 'Build your beauty brand with strategic social media marketing. Aesthetic content, brand identity development, and growth strategies for beauty product companies.',
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function BeautyBrandsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
              src="/industries/beauty.jpg"
              alt="Beauty brands background"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
          />
        </div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="bg-white/50 dark:bg-background/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Social Media Marketing for Beauty Brands & Products
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Build a beauty brand that stands out. We create aesthetic content and strategic marketing that connects with your audience and drives sales.
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
              What We Offer Beauty Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive social media strategies designed to build brand awareness, drive product sales, and create a loyal community around your beauty products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Launch Campaigns</h3>
              <p className="text-muted-foreground mb-4">
                Strategic campaigns that build anticipation and drive sales for new product launches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Pre-launch teaser content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Launch day content strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Influencer collaboration planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Multi-platform rollout strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Identity & Aesthetic</h3>
              <p className="text-muted-foreground mb-4">
                Develop a cohesive visual identity that makes your brand instantly recognizable and memorable.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Visual brand guidelines</span>
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
                  <span className="text-foreground/90">Consistent aesthetic across platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">User-Generated Content Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Leverage customer content to build trust, showcase products, and create authentic brand moments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">UGC campaign development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content curation & reposting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Hashtag strategy for discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Customer testimonial features</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">E-commerce & Sales Content</h3>
              <p className="text-muted-foreground mb-4">
                Drive product sales with strategic content that converts browsers into buyers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Product feature highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">How-to & tutorial content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Seasonal & promotional campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Shopping-friendly content formats</span>
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
            Building Beauty Brands That Convert
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The beauty industry is crowded, and standing out requires more than just great products. Your social media presence needs to tell a story, build trust, and create desire—all while maintaining an aesthetic that reflects your brand values.
            </p>
            <p>
              We specialize in helping beauty brands create content that doesn't just look good—it performs. From product launches to community building, we develop strategies that align with your brand goals and drive measurable results.
            </p>
            <p>
              Whether you're launching a new line or looking to scale your existing presence, we create customized social media support that fits your unique needs and budget. No cookie-cutter templates, just strategic content that works.
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
              Ready to Build Your Beauty Brand?
            </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Let's create a social media strategy that grows your brand and drives product sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
            </Link>
            <Link href="/services/brand-identity">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">View Brand Services</Button>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

