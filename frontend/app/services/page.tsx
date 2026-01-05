import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles,
  Calendar as CalendarIcon,
  Palette,
  Users,
  Clock,
  Plus,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export const metadata = {
  title: 'Services | Social Media Management & Content Strategy | Honeycomb Socials',
  description: 'Professional social media management, content creation, brand identity design, and strategic consulting for beauty and wellness businesses. Custom packages tailored to your needs.',
  keywords: 'social media management services, content creation services, brand identity design, social media strategy, social media consulting, done for you social media',
}

const services = [
  {
    id: 'full-management',
    title: 'Full Social Media Management',
    description: 'Complete done-for-you social media management. We handle strategy, content creation, scheduling, and optimization so you can focus on your business.',
    image: '/full-service.jpg',
    imageAlt: 'Full Social Media Management Services',
    href: '/services/full-management',
    icon: Sparkles,
    highlights: [
      'Complete 7-step onboarding process',
      'Monthly content calendars',
      'Professional content creation',
      'Automated scheduling',
      'Performance tracking & analytics'
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Beautiful, on-brand photo and video content tailored to your aesthetic. Professional graphics, Reels, carousels, and Stories that convert.',
    image: '/content.jpg',
    imageAlt: 'Social Media Content Creation Services',
    href: '/services/content-creation',
    icon: CalendarIcon,
    highlights: [
      'Custom graphics & visuals',
      'Video content & Reels',
      'Platform-optimized formatting',
      'Brand-consistent design',
      'Strategic captions & hashtags'
    ]
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Aesthetic Design',
    description: 'Visual branding that gives your business a cohesive, elevated look. Create a recognizable brand aesthetic across all platforms.',
    image: '/brand.jpg',
    imageAlt: 'Brand Identity and Aesthetic Design Services',
    href: '/services/brand-identity',
    icon: Palette,
    highlights: [
      'Custom color palettes',
      'Typography & font selection',
      'Visual style guides',
      'Mood board creation',
      'Brand consistency across platforms'
    ]
  },
  {
    id: 'strategy',
    title: 'Social Media Strategy',
    description: 'Custom strategy built around your goals, audience, and brand voice. Data-driven plans that help you grow and convert.',
    image: '/strategy.jpg',
    imageAlt: 'Social Media Strategy Services',
    href: '/services/strategy',
    icon: Users,
    highlights: [
      'Audience research & targeting',
      'Content pillar development',
      '30-day content calendars',
      'Platform-specific strategies',
      'KPI setting & tracking'
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting & 1:1 Guidance',
    description: 'Hands-on support to help you improve your content and grow confidently. Perfect for businesses ready to take their social media in-house.',
    image: '/consulting.jpg',
    imageAlt: 'Social Media Consulting Services',
    href: '/services/consulting',
    icon: Clock,
    highlights: [
      'Strategy sessions',
      'Content audits & reviews',
      '1-on-1 coaching calls',
      'Actionable recommendations',
      'Custom training & education'
    ]
  },
  {
    id: 'addons',
    title: 'Add-On Services',
    description: 'Extra reels, templates, email snippets, audits, and seasonal promos. Perfect for supplementing your existing strategy or special campaigns.',
    image: '/addon.jpg',
    imageAlt: 'Social Media Add-On Services',
    href: '/services/addons',
    icon: Plus,
    highlights: [
      'Additional Reels & videos',
      'Template packages',
      'Email marketing snippets',
      'Social media audits',
      'Seasonal campaign content'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] dark:from-[#331D08] dark:to-[#6D3710] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                Our Services
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Services <span className="italic font-serif">We Offer</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
              Customized social media support tailored to your beauty or wellness business. From full management to strategic consulting, we offer solutions that fit your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                View Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {service.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Integration Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Our Services Work
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Every service follows our proven 7-step process—from initial discovery to ongoing optimization. Whether you choose full management or a single service, you'll experience the same level of strategy, quality, and professionalism.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#5C3D2E] to-[#331D08] dark:from-[#331D08] dark:to-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2DEA9] mb-6">
              Ready to Grow Your <span className="italic font-serif">Social Presence?</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#F2DEA9]/90 mb-8 leading-relaxed">
              Let's discuss which service is right for your business. Every package is customized to your goals, budget, and unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#DAA755] hover:bg-[#DAA755]/90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#F2DEA9] hover:bg-[#F2DEA9]/10 text-[#F2DEA9] font-semibold rounded-lg transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

