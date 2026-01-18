'use client'

import { useEffect, useRef, useState } from 'react'
import { Instagram, Youtube } from 'lucide-react'

// Simple TikTok and Pinterest SVG icons
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const PinterestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
)

interface Stat {
  label: string
  value: string
  hasPlus?: boolean
}

interface StatCardProps {
  platform: string
  icon: React.ReactNode
  stats: Stat[]
}

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

function StatCard({ platform, icon, stats }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-br from-background via-[#faf8f0] to-[#f5eed5] border border-primary/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="text-primary w-6 h-6 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{platform}</h3>
      </div>
      
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className="border-l-2 border-primary pl-3">
            <AnimatedStat stat={stat} shouldAnimate={isVisible} />
          </div>
        ))}
      </div>
    </div>
  )
}

function AnimatedStat({ stat, shouldAnimate }: { stat: Stat; shouldAnimate: boolean }) {
  const parseNumber = (str: string) => {
    // Remove everything except numbers and decimal points
    let cleanStr = str.replace(/[^0-9.]/g, '')
    const num = parseFloat(cleanStr)
    
    // Multiply by 1000 if K, 1000000 if M
    if (str.includes('M')) {
      return isNaN(num) ? 0 : num * 1000000
    } else if (str.includes('K')) {
      return isNaN(num) ? 0 : num * 1000
    }
    return isNaN(num) ? 0 : num
  }

  const formatNumber = (num: number, original: string) => {
    if (original.includes('M')) {
      return `${(num / 1000000).toFixed(1)}M+`
    } else if (original.includes('K')) {
      return `${Math.floor(num / 1000)}K+`
    } else if (original.includes('%')) {
      return `${Math.floor(num)}%`
    }
    return num.toLocaleString() + '+'
  }

  // Handle arrow notation (e.g., "1.7K → 160K")
  if (stat.value.includes('→')) {
    const parts = stat.value.split('→').map(s => s.trim())
    const endPart = parts[1]
    const number = parseNumber(endPart)
    const animatedNumber = useCountUp(number, 2000, shouldAnimate)
    const formattedEnd = formatNumber(animatedNumber, endPart)
    
    return (
      <div>
        <p className="text-xl font-bold text-foreground mb-0.5">
          {parts[0]} → {formattedEnd}
        </p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
    )
  }

  const number = parseNumber(stat.value)
  const animatedNumber = useCountUp(number, 2000, shouldAnimate)
  const displayValue = formatNumber(animatedNumber, stat.value)

  // Determine prefix
  const hasPrefix = stat.label.includes('new subscribers') || 
                    stat.label.includes('impressions') || 
                    stat.label.includes('engagement') ||
                    stat.label.includes('clicks') ||
                    stat.label.includes('growth')

  return (
    <div>
      <p className="text-xl font-bold text-foreground mb-0.5">
        {hasPrefix && '+'}
        {displayValue}
      </p>
      <p className="text-xs text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export function SocialStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Results, Real Growth
            </h2>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              I've helped businesses grow across every major platform with content that converts and strategy that sticks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {/* Loading placeholder */}
            <div className="bg-card border border-border rounded-xl p-5 h-[240px] animate-pulse"></div>
            <div className="bg-card border border-border rounded-xl p-5 h-[240px] animate-pulse"></div>
            <div className="bg-card border border-border rounded-xl p-5 h-[240px] animate-pulse"></div>
            <div className="bg-card border border-border rounded-xl p-5 h-[240px] animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results, Real Growth
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            I've helped businesses grow across every major platform with content that converts and strategy that sticks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          <StatCard
            platform="TikTok"
            icon={<TikTokIcon />}
            stats={[
              { label: 'views', value: '1.5M' },
              { label: 'likes', value: '80K' },
              { label: 'shares', value: '40K' },
              { label: 'comments', value: '2K' }
            ]}
          />

          <StatCard
            platform="YouTube"
            icon={<Youtube className="w-8 h-8" />}
            stats={[
              { label: 'views in 28 days', value: '1.7K → 160K' },
              { label: 'engaged views', value: '755 → 78K' },
              { label: 'new subscribers', value: '120' },
              { label: 'increase across all metrics', value: '999%' }
            ]}
          />

          <StatCard
            platform="Pinterest"
            icon={<PinterestIcon />}
            stats={[
              { label: 'impressions', value: '309%' },
              { label: 'engagement', value: '489%' },
              { label: 'outbound clicks', value: '1,300%' },
              { label: 'audience growth', value: '348%' }
            ]}
          />

          <StatCard
            platform="Instagram"
            icon={<Instagram className="w-8 h-8" />}
            stats={[
              { label: 'views', value: '123K' },
              { label: 'likes', value: '900' },
              { label: 'shares', value: '125' }
            ]}
          />
        </div>
      </div>
    </section>
  )
}

