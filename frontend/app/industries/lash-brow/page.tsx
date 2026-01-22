import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export const metadata = {
  title: 'Social Media Marketing for Lash & Brow Artists | Honeycomb Socials',
  description: 'Grow your lash and brow business with strategic social media content. Showcase transformations, attract clients, and build a loyal following with before-and-after content that converts.',
  alternates: {
    canonical: `${baseUrl}/industries/lash-brow`,
  },
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function LashBrowPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/eyebrow.jpg"
            alt="Lash brow background"
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
              Social Media Marketing for Lash & Brow Artists
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Your work is excellent, but your social media should do more than show results. It should help clients understand your process, your professionalism, and whether you're the right fit before they book.
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
              What I Offer Lash & Brow Artists
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategy-first social media support designed to help your content clearly communicate what you offer and build trust with potential clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Content With a Purpose</h3>
              <p className="text-muted-foreground mb-4">
                Every post is intentional, not filler.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Strategy-led content direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear messaging around services and specialties</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Consistency without relying on transformations</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Process & Technique Content</h3>
              <p className="text-muted-foreground mb-4">
                Build authority and trust by showcasing your expertise and attention to detail.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Application process videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Technique tutorials & tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Aftercare education content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Style variety showcases</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Client Education & Trust Building</h3>
              <p className="text-muted-foreground mb-4">
                Educate potential clients and build confidence in your services through valuable content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Service explanation content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Maintenance & care guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Common questions answered</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Client testimonials & reviews</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Booking & Retention Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Convert followers into clients and keep them coming back with strategic booking content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Fill appointment slots content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Retouch reminder campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Package & membership promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Gift card & special occasion content</span>
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
            Why Social Media Matters for Lash & Brow Artists
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              For lash and brow artists, social media is often where clients decide if they trust you before they ever book. They are looking for clarity, professionalism, and confidence in your work, not just a quick visual result.
            </p>
            <p>
              Without a clear strategy, it's easy to post consistently and still feel unsure if your content is actually helping your business. Social media should support your bookings, not add pressure or distraction from your craft.
            </p>
            <p>
              That's where a strategy-first approach matters. Instead of relying on trends or constant transformations, I focus on helping your content clearly communicate what you offer, who it's for, and what clients can expect. The goal is to build trust, set expectations, and make booking feel like an easy next step.
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
              Ready to Attract More Clients?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's create a social media strategy that showcases your artistry and fills your appointment book.
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

