import Image from 'next/image'
import Link from 'next/link'
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube,
  Sparkles,
  Target,
  Palette,
  TrendingUp,
  Heart,
  Briefcase,
  Calendar,
  Video
} from 'lucide-react'

export const metadata = {
  title: 'About Maggie Vandehey | Honeycomb Socials',
  description: 'Meet Maggie Vandehey, social media strategist helping beauty and wellness businesses grow online. Authentic content that converts. View portfolio and book a consultation.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section - Hidden on mobile, shown after subtitle */}
            <div className="hidden lg:flex order-1 lg:order-1 justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/MaggieVandehey.jpg?v=2"
                    alt="Maggie Vandehey - Social Media Strategist"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                    About
                  </p>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                  Maggie <span className="italic font-serif">Vandehey</span>
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                  Social Media Strategist + Content Creator
                </p>
              </div>

              {/* Image Section - Shown on mobile after subtitle */}
              <div className="flex lg:hidden justify-center mb-6">
                <div className="relative w-full max-w-md">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/MaggieVandehey.jpg?v=2"
                      alt="Maggie Vandehey - Social Media Strategist"
                      fill
                      className="object-cover"
                      priority
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>

              <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
                <p className="text-xl md:text-2xl font-medium text-foreground">
                  I'm a social media manager and strategist with a passion for helping small businesses thrive and grow online.
                </p>
                <p>
                  I have extensive experience managing and growing brands across TikTok, Pinterest, Facebook, LinkedIn, and YouTube Shorts. My approach combines strategic thinking with creative execution, helping businesses create content that looks good, performs well, and feels authentic.
                </p>
                <p>
                  I specialize in short-form video, branded content, and platform-specific strategy. Every brand is unique, and I believe your social media should reflect that—not generic templates or one-size-fits-all solutions.
                </p>
                <p>
                  What drives me? Seeing small businesses succeed. There's nothing more rewarding than watching a client's engagement grow, their community expand, and their brand come to life through thoughtful, strategic content.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Experience Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Background & <span className="italic font-serif">Experience</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Experience Items - Left */}
              <div className="space-y-8">
              {/* Greenlight Designs */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Greenlight Designs
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      Social Media Manager
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm md:text-base">August 2024 - October 2025</span>
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      Managed social media strategy and content creation for multiple brands, focusing on platform-specific optimization and authentic brand storytelling. Developed and executed campaigns that increased engagement and grew online communities across Instagram, TikTok, and Pinterest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honeycomb Socials */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Honeycomb Socials
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      Founder & Social Media Manager
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm md:text-base">October 2025 - Present</span>
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      Founded Honeycomb Socials to provide customized social media support tailored to each client's unique goals and budget. Specializing in helping beauty, wellness, and lifestyle businesses create content that resonates with their audience and drives real results.
                    </p>
                  </div>
                </div>
              </div>
              </div>

              {/* Image - Right */}
              <div className="order-first lg:order-last flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/MaggieVandehey1.jpg"
                      alt="Maggie Vandehey"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Areas of <span className="italic font-serif">Expertise</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Specialized skills that help your brand stand out and connect with your audience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Palette,
                  title: 'Brand Identity & Visual Direction',
                  description: 'Creating cohesive visual identities that tell your brand story and resonate with your target audience.'
                },
                {
                  icon: Target,
                  title: 'Promotional Ideation',
                  description: 'Developing creative campaign concepts that drive engagement and conversions without feeling salesy.'
                },
                {
                  icon: Sparkles,
                  title: 'Social-First Content Design',
                  description: 'Designing content specifically for each platform, optimized for how users actually consume content.'
                },
                {
                  icon: Heart,
                  title: 'Feminine Brand Positioning',
                  description: 'Helping beauty and wellness brands connect authentically with their audience through thoughtful positioning.'
                },
                {
                  icon: TrendingUp,
                  title: 'Trend-Aware Execution',
                  description: 'Staying ahead of platform trends and algorithm changes to keep your content performing at its best.'
                },
                {
                  icon: Briefcase,
                  title: 'Customized Strategy',
                  description: 'Tailoring social media support to each client\'s unique goals, budget, and brand voice.'
                }
              ].map((expertise, index) => {
                const Icon = expertise.icon
                return (
                  <div
                    key={index}
                    className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {expertise.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {expertise.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Platforms I <span className="italic font-serif">Work With</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Managing and growing brands across multiple social media platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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

      {/* Pricing Philosophy Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Customized Social Media Support
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                I offer customized social media support tailored to each client's goals and budget. My pricing and packages are customized to each individual client, because I believe every business deserves a strategy that fits their unique needs—not a one-size-fits-all approach.
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8">
                Whether you're just starting out or looking to scale your existing presence, I work with you to create a plan that makes sense for where you are now and where you want to go.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Want to Work <span className="italic font-serif">Together?</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8">
              Let's talk about how we can grow your brand online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

