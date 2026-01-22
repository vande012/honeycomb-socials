'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'
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
    title: 'Salons & HairStylists',
    href: '/industries/salons-hairstylists',
    benefit: 'Attract the right clients and book with intention',
    icon: Scissors,
    image: '/industries/salon.jpeg'
  },
  {
    id: 'nail-salons',
    title: 'Nail Technicians & Nail Salons',
    href: '/industries/nail-salons',
    benefit: 'Consistent content that leads to appointments',
    icon: Sparkles,
    image: '/industries/nails.jpeg'
  },
  {
    id: 'beauty-brands',
    title: 'Beauty Brands & Products',
    href: '/industries/beauty-brands',
    benefit: 'Content that supports long-term brand growth',
    icon: Package,
    image: '/services/beautybrands.jpeg'
  },
  {
    id: 'lash-brow',
    title: 'Lash & Brow Artists',
    href: '/industries/lash-brow',
    benefit: 'Clear positioning that turns views into bookings',
    icon: Eye,
    image: '/industries/eyebrow.jpg'
  },
  {
    id: 'makeup-artists',
    title: 'Makeup Artists',
    href: '/industries/makeup-artists',
    benefit: 'Turn visibility into intentional bookings.',
    icon: Palette,
    image: '/industries/makeup.jpeg'
  },
  {
    id: 'florist-wedding',
    title: 'Florists & Wedding Businesses',
    href: '/industries/florist-wedding',
    benefit: 'Show up clearly in a crowded wedding market.',
    icon: Flower2,
    image: '/industries/florists.jpeg'
  },
  {
    id: 'boutique-lifestyle',
    title: 'Boutique & Lifestyle Brands',
    href: '/industries/boutique-lifestyle',
    benefit: 'Create content that reflects your brand and supports sales.',
    icon: ShoppingBag,
    image: '/industries/boutique.jpeg'
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    href: '/industries/gyms',
    benefit: 'Show up consistently without burning out.',
    icon: Dumbbell,
    image: '/industries/gymsfitness.jpeg'
  },
  {
    id: 'spas-medspas',
    title: 'Spas & Medspas',
    href: '/industries/spas-medspas',
    benefit: 'Create confidence and consistency across your online presence.',
    icon: Heart,
    image: '/industries/spa.jpg'
  }
]

export function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background md:bg-transparent">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0">
        <Image
          src="/industries.jpeg"
          alt="Beauty industry professional"
          fill
          className="object-cover object-center brightness-90 animate-breathe gpu-accelerate"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/10" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary float-organic"></div>
              <p className="text-md md:text-base font-bold text-foreground uppercase tracking-wider">
                Industries I Support
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-3xl">
              Strategy-first social media for female-forward brands
            </h2>
            <p className="text-xl md:text-xl text-bold max-w-3xl">
              I partner with beauty and wellness brands to build thoughtful, strategy-led social media.
            </p>
          </div>
        </ScrollReveal>

        {/* Industries Grid - Enhanced Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Link
                key={industry.id}
                href={industry.href}
                className="group bg-gradient-to-br from-card via-[#faf8f0] to-[#f5eed5] backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/40 block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 gpu-accelerate"
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
        <ScrollReveal delay={100}>
          <div className="text-center bg-gradient-to-br from-card via-[#faf8f0] to-[#f5eed5] backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/20 max-w-4xl mx-auto shadow-lg">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              See what social media looks like when it's built with intention
            </p>
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary via-[#d4b87a] to-[#c9a86a] hover:from-primary/95 hover:via-[#d4b87a]/95 hover:to-[#c9a86a]/95 text-primary-foreground font-semibold rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 gpu-accelerate"
              aria-label="View my portfolio"
            >
              See My Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

