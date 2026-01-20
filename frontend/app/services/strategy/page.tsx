import Image from 'next/image'
import Link from 'next/link'
import { 
  Users,
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp,
  Calendar as CalendarIcon,
  BarChart3,
  Lightbulb
} from 'lucide-react'

export const metadata = {
  title: 'Social Media Strategy Services | Custom Content Strategy | Honeycomb Socials',
  description: 'Custom social media strategy for beauty businesses. Audience research, content pillars, and 30-day calendars that convert. Get your strategic plan today.',
  keywords: 'social media strategy, content strategy, social media planning, audience research, content calendar, social media consulting, custom strategy',
}

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/services/strategy.jpeg"
                  alt="Social Media Strategy Services"
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
                  Strategy Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Social Media <span className="italic font-serif">Strategy</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Clear direction for what to post and why.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                This service is for business owners who want clarity before execution. Instead of guessing what content will work or posting inconsistently, this strategy gives you a clear plan built around your goals, your audience, and how social media should support your business. You execute the content yourself, but with direction that actually makes sense.
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
                This strategy service provides a clear, usable roadmap for your social media. It's designed to be implemented, not sit in a folder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Audience & Direction */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Audience & Direction</h3>
                </div>
                <p className="text-foreground/80 mb-4">Understanding who you're talking to and what they need to hear.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clarification of your ideal audience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Insight into what your audience looks for on social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform focus based on your goals, not trends</span>
                  </li>
                </ul>
              </div>

              {/* Content Direction */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Direction</h3>
                </div>
                <p className="text-foreground/80 mb-4">Defining what your content should consistently communicate.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content pillars aligned with your business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Topic direction and messaging themes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Guidance around tone and voice for social media</span>
                  </li>
                </ul>
              </div>

              {/* 30-Day Content Plan */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">30-Day Content Plan</h3>
                </div>
                <p className="text-foreground/80 mb-4">A clear plan you can follow immediately.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">30-day content calendar with post ideas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Recommended content types and formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Purpose and intent for each post</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Notes on what to share and why</span>
                  </li>
                </ul>
              </div>

              {/* Goals & Measurement */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Goals & Measurement</h3>
                </div>
                <p className="text-foreground/80 mb-4">Knowing what to pay attention to.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Clear goals tied to your strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Guidance on which metrics matter and which don't</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Direction for reviewing performance without overanalyzing</span>
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
                My Strategy Development Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Strategy follows the same intentional workflow used across all Honeycomb Socials services, with a focus on clarity and alignment.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/onboarding.jpg"
                alt="Strategy development and onboarding process"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Strategy Session</h3>
                <p className="text-foreground/90 leading-relaxed">
                  I start with a focused strategy call to understand your business, goals, audience, and current challenges. This sets the direction for everything that follows.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Research & Review</h3>
                <p className="text-foreground/90 leading-relaxed">
                  I review your current social media presence, industry context, and audience behavior to identify what needs clarity and what should be prioritized.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Strategy Development</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Based on your goals and insights, I define your content pillars, messaging direction, and overall approach to social media.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Content Calendar Creation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You receive a 30-day content calendar outlining what to post, the purpose of each post, and how it supports your goals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">5. Review & Refinement</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You review the full strategy and calendar. Up to two rounds of revisions are included to ensure the plan feels aligned and realistic to implement.
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
              Ready for a Strategic Plan?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's create a custom social media strategy that gives you the roadmap to success. Perfect for businesses ready to execute with a solid plan.
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
  )
}

