import Image from 'next/image'
import Link from 'next/link'
import { 
  Palette,
  CheckCircle2,
  ArrowRight,
  Brush,
  Type,
  Image as ImageIcon,
  Eye,
  Layers
} from 'lucide-react'

export const metadata = {
  title: 'Brand Identity & Aesthetic Design | Visual Branding Services | Honeycomb Socials',
  description: 'Professional brand identity and aesthetic design for social media. Custom color palettes, typography, mood boards, and visual style guides for beauty and wellness businesses.',
  keywords: 'brand identity design, aesthetic design, visual branding, brand kit, color palette design, social media branding, brand style guide',
}

export default function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] dark:from-[#331D08] dark:to-[#6D3710] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/brand.jpg"
                  alt="Brand Identity and Aesthetic Design Services"
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
                  Branding Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Brand Identity & <span className="italic font-serif">Aesthetic Design</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Visual branding that elevates your business
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Create a cohesive, elevated brand aesthetic that makes your business instantly recognizable. Professional visual branding designed specifically for social media—because your online presence should reflect the quality of your services.
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
                What's Included in Your Brand Kit
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                A comprehensive brand identity package designed specifically for social media. Everything you need for visual consistency across all platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Color Palette */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Color Palette</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom color selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Primary & secondary colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Accent color options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Hex codes & RGB values</span>
                  </li>
                </ul>
              </div>

              {/* Typography */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Type className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Typography & Fonts</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Font pairings & selections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Heading & body font choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Typography hierarchy guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Social media optimization</span>
                  </li>
                </ul>
              </div>

              {/* Visual Direction */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Visual Direction</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Photo style & aesthetic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Graphic treatment guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Filter & editing preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Visual consistency rules</span>
                  </li>
                </ul>
              </div>

              {/* Mood Board & Guidelines */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mood Board & Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Comprehensive mood board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand guidelines document</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Social media usage rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Do's and don'ts guide</span>
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
                Our Brand Identity Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Creating your brand kit follows Step 4 of our proven workflow, ensuring everything aligns with your business goals and aesthetic vision.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/mood board.jpg"
                alt="Brand kit and mood board creation process"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Brand Discovery</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We start by understanding your business, target audience, and aesthetic preferences. This ensures your brand identity resonates with your ideal clients and reflects your unique style.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Visual Development</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Using insights from your strategy session, we develop color palettes, select fonts, and define your visual direction. Every choice is intentional and aligned with your brand goals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Mood Board Creation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We create a comprehensive mood board showcasing your aesthetic direction, photo styles, and visual consistency. This serves as a reference for all future content creation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Guidelines & Approval</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Your complete brand guidelines document is delivered for review. Up to 2 rounds of refinements are included to ensure everything is perfect before moving forward.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-primary/10 border-l-4 border-primary rounded-r-lg p-4">
              <p className="text-sm md:text-base text-foreground/90 italic">
                <strong>Important Note:</strong> Logo creation is not included in brand identity services. However, we'll beautifully integrate your existing logo into all branded content and provide guidelines for its usage on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#5C3D2E] to-[#331D08] dark:from-[#331D08] dark:to-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2DEA9] mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl md:text-2xl text-[#F2DEA9]/90 mb-8 leading-relaxed">
              Let's create a brand identity that makes your business instantly recognizable and attracts your ideal clients.
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
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#F2DEA9] hover:bg-[#F2DEA9]/10 text-[#F2DEA9] font-semibold rounded-lg transition-all duration-300"
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

