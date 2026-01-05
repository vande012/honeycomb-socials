import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar as CalendarIcon,
  Video,
  Image as ImageIcon,
  FileText,
  Hash
} from 'lucide-react'

export const metadata = {
  title: 'Content Creation Services | Social Media Graphics & Videos | Honeycomb Socials',
  description: 'Professional social media content creation for beauty and wellness businesses. Custom graphics, Reels, carousels, and captions designed to convert followers into clients.',
  keywords: 'social media content creation, instagram content creation, reel creation, social media graphics, video content creation, content creation service',
}

export default function ContentCreationPage() {
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
                  src="/content.jpg"
                  alt="Social Media Content Creation Services"
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
                  Content Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Content <span className="italic font-serif">Creation</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Beautiful, on-brand content that converts
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Professional content creation tailored to your aesthetic. We create graphics, videos, Reels, and captions that showcase your brand and attract your ideal clients. Perfect for businesses that want high-quality content without the time investment.
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
                What We Create
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Every piece of content is designed with your brand aesthetic and business goals in mind. Platform-optimized, strategic, and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Graphics & Static Posts */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Graphics & Static Posts</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand-consistent visual designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Instagram feed posts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Carousel graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Pinterest-optimized pins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Custom templates</span>
                  </li>
                </ul>
              </div>

              {/* Video Content */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Video Content & Reels</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Instagram Reels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">TikTok videos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">YouTube Shorts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Professional video editing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Trending audio integration</span>
                  </li>
                </ul>
              </div>

              {/* Captions & Copy */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Captions & Copywriting</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Strategic, engaging captions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand voice alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Call-to-action optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Story captions & text overlays</span>
                  </li>
                </ul>
              </div>

              {/* Hashtags & Optimization */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Hash className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Optimization & Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Hashtag research & strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Platform-specific formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content purpose & goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Performance-driven design</span>
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
                Our Content Creation Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Content creation follows our proven workflow to ensure every piece aligns with your brand and goals.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/process/content-creation.jpg"
                alt="Content creation process and workflow"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1. Strategy & Planning</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We start with understanding your brand, goals, and target audience. This informs every content decision, ensuring each piece serves a purpose and aligns with your business objectives.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2. Content Calendar Approval</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You'll receive a 30-day content calendar outlining every post, its purpose, and the assets needed. You approve the plan before creation begins, ensuring alignment and avoiding revisions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3. Professional Creation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We create all approved content using your brand guidelines, ensuring visual consistency and professional quality. Every graphic, video, and caption is optimized for its platform and purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">4. Review & Approval</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Final approval is required before content is delivered. Minor tweaks are included; this ensures you're confident in every piece representing your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#5C3D2E] to-[#331D08] dark:from-[#331D08] dark:to-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2DEA9] mb-6">
              Ready for Professional Content?
            </h2>
            <p className="text-xl md:text-2xl text-[#F2DEA9]/90 mb-8 leading-relaxed">
              Let's discuss your content needs and create a package that works for your business. Every piece is designed to convert and grow your audience.
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

