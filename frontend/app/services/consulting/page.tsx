import Image from 'next/image'
import Link from 'next/link'
import { 
  Users,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
  Target,
  TrendingUp,
  Lightbulb,
  Video
} from 'lucide-react'

export const metadata = {
  title: 'Social Media Consulting & 1:1 Guidance | Coaching Services | Honeycomb Socials',
  description: 'Social media consulting and 1-on-1 coaching for beauty businesses. Strategy sessions, content audits, and actionable guidance to grow your following. Book a session.',
  keywords: 'social media consulting, social media coaching, 1 on 1 guidance, content audit, social media strategy session, social media training',
}

export default function ConsultingPage() {
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
                  src="/services/consulting.jpeg"
                  alt="Social Media Consulting and Coaching Services"
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
                  Coaching Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Consulting & <span className="italic font-serif">1:1 Guidance</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Hands-on support to help you grow confidently
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Personalized coaching and consulting to improve your social media strategy and execution. Perfect for businesses ready to take their social media in-house or looking for expert guidance to level up their current approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
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
                Consulting Services Available
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Flexible consulting packages tailored to your specific needs. Choose what works best for your business goals and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Strategy Sessions */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Strategy Sessions</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand goals & audience definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content strategy development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform prioritization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Actionable roadmap creation</span>
                  </li>
                </ul>
              </div>

              {/* Content Audits */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Audits</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Account performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content quality review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Improvement recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Written audit report</span>
                  </li>
                </ul>
              </div>

              {/* 1-on-1 Coaching */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">1-on-1 Coaching Calls</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Personalized Q&A sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Real-time feedback & guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Troubleshooting & problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom training & education</span>
                  </li>
                </ul>
              </div>

              {/* Implementation Support */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Implementation Support</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content planning assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Tool recommendations & setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Best practices & tips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Ongoing email support</span>
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
                How Consulting Works
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Consulting services are flexible and tailored to your needs. We start with understanding your goals and challenges, then provide personalized guidance and support.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/call.jpg"
                alt="Social media consulting and coaching call"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Discovery & Assessment</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We start by understanding your current social media situation, goals, and challenges. This may include reviewing your existing content, analytics, and discussing what's working and what isn't.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Personalized Strategy</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Based on your assessment, we develop a customized strategy and action plan. This includes specific recommendations, content ideas, and a roadmap for improvement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Implementation Guidance</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Through coaching calls, we provide hands-on support as you implement the strategy. You'll get real-time feedback, answers to questions, and adjustments as needed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Ongoing Support</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Consulting packages can include ongoing support through email, follow-up calls, or regular check-ins. This ensures you have guidance as you continue to grow and evolve your social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who Benefits from Consulting?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Businesses Taking Social Media In-House</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Perfect if you're ready to manage your own social media but want expert guidance to get started on the right foot. We'll help you build systems, create strategies, and provide training.
                </p>
              </div>

              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Businesses Looking to Level Up</h3>
                <p className="text-foreground/90 leading-relaxed">
                  If you're already posting but not seeing the results you want, consulting can help identify what's missing and provide actionable improvements. Get an outside perspective and expert recommendations.
                </p>
              </div>

              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Businesses with Specific Challenges</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Whether you're struggling with engagement, conversions, brand consistency, or platform strategy, consulting provides focused guidance on your specific challenges.
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
              Ready for Expert Guidance?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's discuss how consulting can help you improve your social media strategy and execution. Every package is customized to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
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

