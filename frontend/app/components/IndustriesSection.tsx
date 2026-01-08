'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Scissors, 
  Sparkles, 
  Package, 
  Eye, 
  Palette, 
  Flower2, 
  ShoppingBag, 
  Dumbbell,
  Heart
} from 'lucide-react'

interface Industry {
  id: string
  title: string
  href: string
  benefit: string
  icon: React.ComponentType<{ className?: string }>
  image?: string
}

const industries: Industry[] = [
  {
    id: 'salons',
    title: 'Salons & Hairstylists',
    href: '/industries/salons-hairstylists',
    benefit: 'Showcase your work and book more clients',
    icon: Scissors,
    image: '/industries/salon.jpeg'
  },
  {
    id: 'nail-salons',
    title: 'Nail Technicians & Salons',
    href: '/industries/nail-salons',
    benefit: 'Turn your nail art into client bookings',
    icon: Sparkles,
    image: '/industries/nail.jpeg'
  },
  {
    id: 'beauty-brands',
    title: 'Beauty Brands & Products',
    href: '/industries/beauty-brands',
    benefit: 'Build brand loyalty through authentic content',
    icon: Package,
    image: '/industries/beauty.jpg'
  },
  {
    id: 'lash-brow',
    title: 'Lash & Brow Artists',
    href: '/industries/lash-brow',
    benefit: 'Transform before/afters into repeat bookings',
    icon: Eye,
    image: '/industries/eyebrow.jpg'
  },
  {
    id: 'makeup-artists',
    title: 'Makeup Artists',
    href: '/industries/makeup-artists',
    benefit: 'Portfolio that attracts your ideal clients',
    icon: Palette,
    image: '/industries/makeup.jpg'
  },
  {
    id: 'florist-wedding',
    title: 'Florist & Wedding',
    href: '/industries/florist-wedding',
    benefit: 'Capture the beauty of every arrangement',
    icon: Flower2,
    image: '/industries/florist.jpg'
  },
  {
    id: 'boutique-lifestyle',
    title: 'Boutique & Lifestyle',
    href: '/industries/boutique-lifestyle',
    benefit: 'Curated style that drives sales',
    icon: ShoppingBag,
    image: '/industries/botique.jpg'
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    href: '/industries/gyms',
    benefit: 'Build community and attract members',
    icon: Dumbbell,
    image: '/industries/gym.jpg'
  },
  {
    id: 'spas-medspas',
    title: 'Spas & MedSpas',
    href: '/industries/spas-medspas',
    benefit: 'Attract clients seeking relaxation and professional treatments',
    icon: Heart,
    image: '/industries/spa.jpeg'
  }
]

export function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background md:bg-transparent">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/industries.jpg"
          alt="Beauty industry professional"
          fill
          className="object-cover object-center brightness-90"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/70" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
              Industries We Support
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-3xl">
            Tailored Solutions for Diverse Sectors
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl">
            We specialize in beauty and wellness businesses that value aesthetics as much as results.
          </p>
        </div>

        {/* Industries Grid - Enhanced Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Link
                key={industry.id}
                href={industry.href}
                className="group bg-gradient-to-br from-card via-[#faf8f0] to-[#f5eed5] backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/40 block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Learn more about ${industry.title}`}
              >
                {/* Industry Image */}
                <div className="relative h-[200px] overflow-hidden bg-card rounded-t-2xl" style={{ marginTop: '-1px', marginLeft: '-1px', marginRight: '-1px', width: 'calc(100% + 2px)' }}>
                  <Image
                    src={industry.image || '/industries.jpg'}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Bottom gradient overlay - more prominent on mobile for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent md:from-background/60 md:via-background/30 md:to-transparent" />
                  
                  {/* Icon Badge - Top Right */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 z-10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {industry.benefit}
                  </p>
                  
                  {/* CTA Link */}
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-card via-[#faf8f0] to-[#f5eed5] backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/20 max-w-4xl mx-auto shadow-lg">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            If you're in the beauty industry and your socials don't reflect the quality of your work, we're here to change that.
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary via-[#d4b87a] to-[#c9a86a] hover:from-primary/95 hover:via-[#d4b87a]/95 hover:to-[#c9a86a]/95 text-primary-foreground font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="View our portfolio"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

