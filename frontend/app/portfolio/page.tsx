import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight,
  CheckCircle2,
  Building2,
  Sparkles,
  Target,
  Palette,
  Instagram,
  Youtube
} from 'lucide-react'

export const metadata = {
  title: 'Portfolio | Honeycomb Socials',
  description: 'View my portfolio of social media success stories. See how I help beauty and wellness businesses grow with strategic content that converts. Get inspired.',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                Portfolio
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Our <span className="italic font-serif">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Real results from real businesses. See how I've helped brands improve their social media presence, grow their audience, and connect authentically with their customers.
            </p>
          </div>
        </div>
      </section>

      {/* High Quality Contracting Case Study */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                  Case Study
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Profile <span className="italic font-serif">Optimization</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Client:</span>
                  <span className="text-lg text-foreground/90">High Quality Contracting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Construction + Remodeling</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Work completed as part of an agency role
              </p>
            </div>

            {/* Objective Section */}
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Objective
              </h3>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Improve the visual clarity and professionalism of the brand's social profile to better reflect the quality of their work and build trust with potential clients.
              </p>
            </div>

            {/* Approach Section */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  'Refined cover imagery and profile visuals',
                  'Emphasized project photography',
                  'Aligned branding for consistency',
                  'Optimized layout for clarity and credibility'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Before & After
              </h3>
              
              {/* Before */}
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center">
                  <div className="relative w-full aspect-[16/10] max-w-4xl mx-auto lg:mx-0 rounded-xl overflow-hidden order-2 lg:order-1">
                    <Image
                      src="/mockup1.png"
                      alt="High Quality Contracting - Before optimization"
                      fill
                      className="object-contain"
                      quality={90}
                    />
                  </div>
                  <div className="order-1 lg:order-2 text-center lg:text-right">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Before</h4>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/90">Unclear branding & inconsistent visuals</p>
                  </div>
                </div>
              </div>

              {/* After */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center">
                  <div className="order-1 lg:order-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">After</h4>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/90">Optimized branding & professional presentation</p>
                  </div>
                  <div className="relative w-full aspect-[16/10] max-w-4xl mx-auto lg:mx-0 rounded-xl overflow-hidden order-2 lg:order-2">
                    <Image
                      src="/mockup.png"
                      alt="High Quality Contracting - After optimization"
                      fill
                      className="object-contain"
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Section */}
            <div className="bg-primary/10 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Outcome
              </h3>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                A cleaner, more cohesive profile that clearly communicates the brand's services and professionalism at first glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spanky's Case Study Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                  Case Study
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Spanky's Sports Bar & <span className="italic font-serif">Grill</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 mb-2">
                Spanky's Sports Bar & Grill is a restaurant looking to increase visibility through short-form video content.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Work completed as part of an agency role
              </p>
            </div>

            {/* Content Grid: Video Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Video - Left */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  {/* iPhone Frame */}
                  <div className="relative w-full aspect-[9/19.5] z-10">
                    <Image
                      src="/iphone.png"
                      alt="iPhone frame with Spanky's video"
                      fill
                      className="object-contain"
                      quality={90}
                    />
                    {/* Video inside iPhone screen */}
                    <div className="absolute inset-0 flex items-center justify-center py-[17%] px-[7%]">
                      <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden">
                        <video
                          src="/spanky's.mp4"
                          controls
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-1 lg:order-2">
                {/* Goal Section */}
                <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    Goal
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Increase organic reach on Instagram Reels',
                      'Create relatable, trend-driven content',
                      'Encourage engagement without paid ads'
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strategy Section */}
                <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Strategy & Execution
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Leveraged trending audio and formats',
                      'Focused on humor and staff personality',
                      'Prioritized fast-paced, authentic clips',
                      'Optimized videos for watch time'
                    ].map((strategy, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results Section */}
                <div className="bg-primary/10 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                    Results <span className="text-base font-normal text-foreground/70">(Public Metrics)</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Facebook Reels */}
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">Facebook Reels</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">810k</p>
                          <p className="text-sm text-foreground/80">views</p>
                        </div>
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">10.2k</p>
                          <p className="text-sm text-foreground/80">likes</p>
                        </div>
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">269</p>
                          <p className="text-sm text-foreground/80">comments</p>
                        </div>
                      </div>
                    </div>

                    {/* TikTok */}
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">TikTok</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">500k+</p>
                          <p className="text-sm text-foreground/80">views</p>
                        </div>
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">68k</p>
                          <p className="text-sm text-foreground/80">likes</p>
                        </div>
                        <div>
                          <p className="text-2xl md:text-3xl font-bold text-foreground">1.6k+</p>
                          <p className="text-sm text-foreground/80">comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Showcase Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Branding & <span className="italic font-serif">Graphic Design</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                A selection of self-directed brand visuals created for Honeycomb Socials, focused on visual cohesion, tone, and social-first design.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { src: '/graphic1.png', alt: 'Graphic design example 1' },
                { src: '/graphic2.png', alt: 'Graphic design example 2' },
                { src: '/graphic3.png', alt: 'Graphic design example 3' },
                { src: '/graphic4.png', alt: 'Graphic design example 4' }
              ].map((graphic, index) => (
                <div
                  key={index}
                  className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={graphic.src}
                      alt={graphic.alt}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Platforms I <span className="italic font-serif">Work With</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Managing and growing brands across multiple social media platforms
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[
                { 
                  name: 'Instagram', 
                  svg: null, 
                  icon: Instagram, 
                  color: 'text-pink-500',
                  useIcon: true
                },
                { 
                  name: 'TikTok', 
                  svg: '/icons/tiktok.svg',
                  icon: null,
                  color: '',
                  useIcon: false
                },
                { 
                  name: 'Facebook', 
                  svg: '/icons/facebook.svg',
                  icon: null,
                  color: '',
                  useIcon: false
                },
                { 
                  name: 'Pinterest', 
                  svg: '/icons/pinterest.svg',
                  icon: null,
                  color: '',
                  useIcon: false
                },
                { 
                  name: 'LinkedIn', 
                  svg: '/icons/linkedin.svg',
                  icon: null,
                  color: '',
                  useIcon: false
                },
                { 
                  name: 'YouTube Shorts', 
                  svg: null,
                  icon: Youtube, 
                  color: 'text-red-600',
                  useIcon: true
                }
              ].map((platform, index) => {
                const Icon = platform.icon
                return (
                  <div
                    key={index}
                    className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        {platform.useIcon && Icon ? (
                          <Icon className={`w-6 h-6 ${platform.color}`} />
                        ) : platform.svg ? (
                          <Image
                            src={platform.svg}
                            alt={platform.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        ) : null}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{platform.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your <span className="italic font-serif">Social Media?</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
              Let's work together to create a social media presence that truly represents your brand and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

