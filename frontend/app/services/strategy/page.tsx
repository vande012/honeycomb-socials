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
                Custom strategy built around your goals
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Data-driven social media strategy designed specifically for your business. We research your audience, develop content pillars, create strategic calendars, and set measurable goals. Perfect for businesses ready to execute their own content with a solid plan in place.
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
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
                A comprehensive strategy package that gives you the roadmap to social media success. Research, planning, and actionable insights you can implement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Audience Research */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Audience Research</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Target audience profiling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Demographic & psychographic analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Competitor research & analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform-specific audience insights</span>
                  </li>
                </ul>
              </div>

              {/* Content Strategy */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content pillar development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Topic ideation & themes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand voice & tone guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content mix & variety planning</span>
                  </li>
                </ul>
              </div>

              {/* Content Calendar */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">30-Day Content Calendar</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Strategic post planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content type & format recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Posting schedule & timing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Topic & purpose for each post</span>
                  </li>
                </ul>
              </div>

              {/* KPIs & Tracking */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">KPIs & Tracking</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Goal setting & KPIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Metrics to track</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Analytics setup guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Review & optimization recommendations</span>
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
                Our Strategy Development Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Strategy services combine Steps 3 and 5 of our process—deep onboarding and comprehensive content calendar planning.
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
                  We start with a comprehensive strategy call where we dive deep into your business goals, target audience, brand personality, and content direction. This foundational session informs all strategy decisions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Research & Analysis</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We conduct thorough audience research, competitor analysis, and platform-specific research to understand where your ideal clients are and what content resonates with them.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Strategy Development</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Using insights from research and your goals, we develop content pillars, define your brand voice, and create a strategic framework for your social media presence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Content Calendar Creation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We create your 30-day content calendar with strategic post planning, topics, content types, and purposes. This calendar serves as your roadmap for the month ahead.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">5. Review & Refinement</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You review the complete strategy package and content calendar. Up to 2 rounds of revisions are included to ensure everything aligns perfectly with your vision.
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
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-lg transition-all duration-300"
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

