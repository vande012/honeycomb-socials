import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export const metadata = {
  title: 'Social Media Marketing for Nail Technicians & Salons | Honeycomb Socials',
  description: 'Grow your nail salon with strategic social media content. Showcase your nail artistry, attract new clients, and build a loyal following with aesthetic content that converts.',
  alternates: {
    canonical: `${baseUrl}/industries/nail-salons`,
  },
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function NailSalonsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/nails.jpeg"
            alt="Nail salon background"
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
              Social Media Marketing For nail artists whose work is strong but marketing feels unclear.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Your nail artistry deserves content that showcases your skills and attracts the clients you want. I create strategic social media that turns followers into bookings.
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
              What I Offer Nail Technicians & Salons
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized social media strategies designed for nail artists who want to grow their client base and showcase their work authentically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Content That Positions Your Expertise</h3>
              <p className="text-muted-foreground mb-4">
                Social media that helps clients recognize your skill and trust your work before they ever book.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Education-led content that builds confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that attracts the right type of clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">A balance of showing and explaining your work</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Content That Builds Trust</h3>
              <p className="text-muted-foreground mb-4">
                Not louder content. Clearer content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Service-focused education</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Honest, straightforward messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Engagement rooted in clarity, not just trends</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Content That Supports Bookings</h3>
              <p className="text-muted-foreground mb-4">
                Social media that guides clients toward booking without relying on discounts or pressure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that highlights services clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Intentional prompts that make booking obvious</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Promotion used sparingly and with purpose</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Keeping Your Brand True to You</h3>
              <p className="text-muted-foreground mb-4">
                Your social media should feel familiar to your clients, not forced.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Collaborative visual direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that reflects your personality and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Consistency without losing creative control</span>
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
            Why Social Media Matters for Nail Salons
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              In today's beauty industry, your social media presence is often the first impression potential clients have of your work. With platforms like Instagram and TikTok driving discovery, having a strategic content plan isn't optional, it's essential for growth.
            </p>
            <p>
              I understand that running a nail salon means you're focused on your craft, not creating content. That's where I come in. I handle the strategy, content creation, and posting so you can focus on what you do best: creating beautiful nails.
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
              src="/industries/nails2.jpeg"
              alt="Analytics dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Grow Your Nail Salon?
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

