import { getGlobalData } from './api/api'
import { getBlogPosts } from './api/blog/api'
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
    console.error('Failed to fetch blog posts:', error)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home-hero.jpg"
            alt="Pampas grass background"
            fill
            className="object-cover object-center animate-subtle-zoom"
            priority
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 md:px-8 flex items-start md:items-center">
          <div className="max-w-4xl mt-25 sm:mt-40 md:mt-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 animate-fade-in-up">
              <span className="text-white drop-shadow-lg">SOCIAL MEDIA</span>
              <br />
              <span className="text-foreground drop-shadow-lg">MANAGEMENT</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl italic text-foreground font-sans max-w-2xl animate-fade-in-up animation-delay-300">
              For small businesses with taste.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="relative w-full overflow-hidden bg-[#F2E9D0] dark:bg-[#E5D9BC] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto gap-0">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[750px]">
            <Image
              src="/salon.jpg"
              alt="Beauty salon workspace"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Content Side */}
          <div className="bg-[#5d3d2e] dark:bg-[#331d08] flex items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2DEA9] mb-8 leading-tight">
                Your Beauty Business Deserves Better
              </h2>
              
              <div className="space-y-6 text-[#F2DEA9]/90 text-base md:text-lg leading-relaxed">
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
                  className="px-8 py-4 bg-[#DAA755] hover:bg-[#DAA755]/90 text-black font-semibold rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/audit"
                  className="px-8 py-4 bg-transparent border-2 border-[#F2DEA9] hover:bg-[#F2DEA9]/10 text-[#F2DEA9] font-semibold rounded-lg transition-all duration-300 text-center"
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

      {/* About Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
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

                <div className="bg-card border-2 border-primary/20 rounded-xl p-6 md:p-8">
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                    <strong>Feeling stuck with your Instagram?</strong> I'm offering free social media audits to help you figure out what's working, what's not, and how to start attracting the clients you want. It's quick, helpful, and tailored to your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg"
                    >
                      Book Free Consultation
                    </a>
                    <a
                      href="/audit"
                      className="px-6 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300 text-center"
                    >
                      Get Free Audit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/about.jpg"
                  alt="Maggie Vandehey - Honeycomb Socials"
                  width={500}
                  height={650}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  quality={90}
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
