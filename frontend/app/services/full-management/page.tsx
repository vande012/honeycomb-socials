import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  TrendingUp,
  Users,
  Palette,
  FileText
} from 'lucide-react'

export const metadata = {
  title: 'Full Social Media Management | Done-For-You Social Media | Honeycomb Socials',
  description: 'Complete done-for-you social media management. We handle strategy, content creation, and scheduling for beauty businesses. Monthly calendars included. Book your consultation.',
  keywords: 'full social media management, done for you social media, monthly social media management, social media management service, complete social media management',
}

export default function FullManagementPage() {
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
                  src="/full-service.jpg"
                  alt="Full Social Media Management Service"
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
                  Complete Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Full Social Media <span className="italic font-serif">Management</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Complete done-for-you social media management
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                The most comprehensive service we offer. We handle everything from strategy and content creation to scheduling and optimization. You focus on your business while we grow your online presence with strategic, beautiful content.
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
                Full social media management includes our complete 7-step process plus ongoing monthly management. Everything you need to grow your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Discovery & Strategy */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Discovery & Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Comprehensive onboarding call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand goals & audience definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom content strategy development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform prioritization</span>
                  </li>
                </ul>
              </div>

              {/* Brand Identity */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Brand Identity</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom color palette</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Typography & font selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Visual style guide & mood board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand consistency guidelines</span>
                  </li>
                </ul>
              </div>

              {/* Content Creation */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Content Creation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Monthly 30-day content calendar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Professional graphics & visuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Reels, carousels, & static posts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Strategic captions & hashtags</span>
                  </li>
                </ul>
              </div>

              {/* Scheduling & Management */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Scheduling & Management</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Automated scheduling at optimal times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform management & monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Performance tracking & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Monthly strategy refinement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our 7-Step Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Full Management includes our complete onboarding and monthly workflow. Every step is designed to ensure quality, consistency, and results.
              </p>
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 mb-8">
              <ol className="space-y-6">
                {[
                  { step: '1', title: 'Discovery & Fit Call', desc: 'Initial consultation to ensure we\'re the right fit' },
                  { step: '2', title: 'Proposal & Contract', desc: 'Customized service agreement and onboarding' },
                  { step: '3', title: 'Onboarding & Strategy', desc: 'Deep dive into your brand, goals, and audience' },
                  { step: '4', title: 'Brand Kit Creation', desc: 'Custom visual identity and aesthetic development' },
                  { step: '5', title: 'Content Calendar', desc: 'Strategic 30-day content planning' },
                  { step: '6', title: 'Content Creation', desc: 'Professional content production' },
                  { step: '7', title: 'Scheduling & Management', desc: 'Automated posting and ongoing optimization' }
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-center">
              <Link
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Cycle Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ongoing Monthly Management
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                After initial onboarding, your monthly cycle includes strategy refinement, content planning, creation, and scheduling.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/calendar.jpg"
                alt="Monthly content calendar and scheduling"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Each month, we review performance data, refine strategies based on what's working, and create fresh content that aligns with your business goals and seasonal trends. You'll receive regular updates and insights, ensuring transparency and continuous improvement.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                This ongoing cycle ensures your social media evolves with your business, staying fresh, relevant, and consistently attracting your ideal clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fafafa] to-[#f2e9d0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-6">
              Ready for Full Management?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's discuss how full social media management can help your business grow. Every package is customized to your needs and goals.
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

