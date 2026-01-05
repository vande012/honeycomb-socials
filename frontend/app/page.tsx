import { getGlobalData } from './api/api'
import { getBlogPosts } from './api/blog/api'
import { logger } from './utils/logger'

// Revalidate homepage every 5 minutes
export const revalidate = 300;
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { SocialStats } from './components/SocialStats'
import { RecentBlogPosts } from './components/RecentBlogPosts'
import { ServicesSection } from './components/ServicesSection'
import { IndustriesSection } from './components/IndustriesSection'
import { Palette, Target, Megaphone, Users, Search, Camera, Dumbbell } from 'lucide-react'

export default async function Home() {
  // Example: Fetch global data from Strapi
  let globalData = null
  try {
    globalData = await getGlobalData()
  } catch (error) {
    // Silently handle - Strapi may not be connected
  }

  // Fetch recent blog posts
  let blogPosts: any[] = []
  try {
    const blogData = await getBlogPosts({ 
      pagination: { pageSize: 4 }
    })
    blogPosts = blogData?.data || []
  } catch (error) {
    logger.error('Failed to fetch blog posts:', error)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Tumble Girl Aesthetic */}
      <section className="relative w-full min-h-[700px] sm:min-h-[750px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#1f1e1c]">
        {/* Desktop Split Layout: Black Left, Video Right */}
        <div className="hidden lg:grid lg:grid-cols-2 absolute inset-0 z-0">
          {/* Left Half - Black Background */}
          <div className="relative bg-[#1f1e1c]">
            {/* Subtle foggy overlay at seam - very subtle blend */}
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#1f1e1c] via-[#1f1e1c]/98 to-transparent z-10 backdrop-blur-[1px]" />
          </div>
          
          {/* Right Half - Video Background */}
          <div className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/honey.jpg"
              className="absolute inset-0 w-full h-full object-cover object-center"
              aria-label="Hero background video"
            >
              <source src="/honey.mp4" type="video/mp4" />
            </video>
            {/* Subtle foggy overlay at seam - very subtle blend */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#1f1e1c]/98 via-[#1f1e1c]/85 to-transparent z-10 backdrop-blur-[1px]" />
            {/* Soft gradient overlay for tumble girl aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1f1e1c]/75 via-[#1f1e1c]/55 to-[#1f1e1c]/65 z-5" />
          </div>
        </div>

        {/* Mobile/Tablet - Full Width Video Background */}
        <div className="lg:hidden absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/honey.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-label="Hero background video"
          >
            <source src="/honey.mp4" type="video/mp4" />
          </video>
          {/* Soft gradient overlay for tumble girl aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1e1c]/75 via-[#1f1e1c]/55 to-[#1f1e1c]/65 z-10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 h-full min-h-[700px] sm:min-h-[750px] md:min-h-0 container mx-auto px-4 md:px-8 flex items-center justify-center lg:justify-start">
          <div className="max-w-4xl w-full py-12 md:py-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 animate-fade-in-up">
              <span className="text-white block drop-shadow-lg">SOCIAL MEDIA</span>
              <span className="text-white block drop-shadow-lg">MANAGEMENT</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-white/95 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 animate-fade-in-up animation-delay-300 font-sans leading-relaxed">
              For small businesses with taste.
            </p>
            
            {/* CTAs - Soft rounded buttons with gentle shadows */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-primary/20 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1f1e1c]"
                aria-label="Book a free consultation"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-center border-2 border-white/30 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1f1e1c]"
                aria-label="Get a free social media audit"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout with Tumble Girl Aesthetic */}
      <section className="relative w-full overflow-hidden bg-foreground py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto gap-0">
          {/* Image Side - Soft rounded corners */}
          <div className="relative h-[500px] lg:h-[750px] overflow-hidden">
            <Image
              src="/salon.jpg"
              alt="Beauty salon workspace with elegant styling"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Side - Cozy padding and soft styling */}
          <div className="bg-card flex items-center px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-8 leading-tight">
                Your Beauty Business Deserves Better
              </h2>
              
              <div className="space-y-6 text-card-foreground/90 text-base md:text-lg leading-relaxed">
                <p>
                  Your beauty business deserves socials that feel intentional, on-brand, and actually work for you.
                </p>
                
                <p>
                  At Honeycomb Socials, we create platform-specific content with real strategy—no copy-paste templates, no burnout, no guesswork. Just aesthetic, strategic social media marketing that attracts the clients you actually want.
                </p>
                
                <p className="font-medium">
                  Ready for support that's both beautiful and effective? Let's talk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl transition-all duration-300 text-center hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Book a free consultation"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/audit"
                  className="px-8 py-4 bg-transparent border-2 border-card-foreground hover:bg-card-foreground/10 text-card-foreground font-semibold rounded-2xl transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-card-foreground focus:ring-offset-2"
                  aria-label="Get a free Instagram audit"
                >
                  Get Free Instagram Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Results Section */}
      <SocialStats />

      {/* Services Section */}
      <ServicesSection />

      {/* Industries We Serve Section */}
      <IndustriesSection />

      {/* About Section - Tumble Girl Aesthetic */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                About Honeycomb Socials
              </h2>
              
              <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Hi, I'm Maggie Vandehey
                  </h3>
                  <p>
                    I help salons, stylists, estheticians, injectors, and beauty brands grow with aesthetic content and real strategy—without the burnout or guesswork.
                  </p>
                </div>

                <p>
                  Because posting random Canva templates ≠ marketing. Your business deserves content with intention, not pressure.
                </p>

                <p>
                  If you're tired of posting just to post, if you want your social media to actually attract clients, and if you're ready for a strategy that feels as good as it looks—I'm your girl.
                </p>

                <p>
                  Stick around for branding tips, content ideas, and done-for-you strategies that actually work.
                </p>

                <p className="font-semibold text-foreground">
                  Want to work together? Send me a DM or book a free consultation below.
                </p>

                {/* Soft rounded card with gentle border */}
                <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-lg">
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                    <strong>Feeling stuck with your Instagram?</strong> I'm offering free social media audits to help you figure out what's working, what's not, and how to start attracting the clients you want. It's quick, helpful, and tailored to your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl transition-all duration-300 text-center hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="Book a free consultation"
                    >
                      Book Free Consultation
                    </a>
                    <a
                      href="/audit"
                      className="px-6 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-2xl transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="Get a free audit"
                    >
                      Get Free Audit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Soft rounded with gentle shadow */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/about.jpg"
                  alt="Maggie Vandehey, founder of Honeycomb Socials"
                  width={500}
                  height={650}
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <RecentBlogPosts posts={blogPosts} />
    </main>
  )
}
