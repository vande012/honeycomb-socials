import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export const metadata = {
  title: 'Social Media Marketing for Gyms & Fitness Businesses | Honeycomb Socials',
  description: 'Grow your gym or fitness business with strategic social media content. Build a strong community, attract members, and motivate your audience with content that converts.',
  alternates: {
    canonical: `${baseUrl}/industries/gyms`,
  },
};

// Revalidate every hour - static content
export const revalidate = 3600;

export default function GymsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/industries/gymsfitness.jpeg"
            alt="Gym fitness background"
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
              Social Media Marketing for Gyms & Fitness Businesses
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
              Growing a gym isn't about posting workouts every day. It's about helping the right people understand your environment, your programs, and whether your gym fits their goals. This approach focuses on clarity, consistency, and messaging that supports both new member decisions and long-term retention.
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
              What I Offer Gyms & Fitness Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategy-first social media support designed to help potential members understand what makes your gym different and feel confident walking through the door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Community-Focused Content</h3>
              <p className="text-muted-foreground mb-4">
                Content that reflects the culture of your gym, not just the workouts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that highlights your environment and values</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Real context around who your gym is for</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content that supports belonging and long-term commitment</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Membership Clarity & Positioning</h3>
              <p className="text-muted-foreground mb-4">
                Helping potential members understand what they're signing up for.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear communication around programs, classes, and training options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content that explains who your gym is best suited for</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that reduces hesitation before joining</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Educational & Trust-Building Content</h3>
              <p className="text-muted-foreground mb-4">
                Content that supports confidence, not overwhelm.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Simple explanations around training approaches and expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Educational content tied to your programs, not trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Messaging that builds credibility without overposting</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Facility & Program Context</h3>
              <p className="text-muted-foreground mb-4">
                Helping people visualize the experience before they visit.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Clear representation of your space and offerings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Content that sets realistic expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">Direction that supports informed decisions</span>
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
            Why Social Media Matters for Gyms & Fitness Businesses
          </h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              For gyms and fitness businesses, social media is often where potential members decide if they feel comfortable showing up. They are not just looking for motivation. They are looking for clarity around your culture, your coaching style, and whether your gym fits their lifestyle.
            </p>
            <p>
              Without a clear strategy, social media can become a mix of workouts, quotes, and announcements that still leave people unsure about joining. When content lacks direction, interest doesn't always turn into memberships.
            </p>
            <p>
              That's why a strategy-first approach matters. Instead of focusing on constant motivation or trends, I help shape content that clearly communicates what your gym offers, who it's for, and what members can expect. The goal is to support confident decisions, stronger retention, and a community that grows intentionally.
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
              Ready to Build Your Fitness Community?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's create a social media strategy that attracts members and builds a strong, engaged community.
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

