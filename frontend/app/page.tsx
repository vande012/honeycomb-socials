import { getGlobalData } from './api/api'
import { getBlogPosts } from './api/blog/api'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { SocialStats } from './components/SocialStats'
import { RecentBlogPosts } from './components/RecentBlogPosts'
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
      <section className="py-16 md:py-20 bg-[#5C3D2E] dark:bg-[#331d08]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2DEA9] mb-4">
              Services <span className="italic font-serif">Offered</span>
            </h2>
            <p className="text-lg md:text-xl text-[#F2DEA9]/90 max-w-4xl mx-auto">
              Helping small businesses grow through aesthetic, strategic social media.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-7xl mx-auto">
            {/* Full Social Media Management */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/full-service.jpg"
                  alt="Full Social Media Management"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Full Social Media Management
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Full-service social media management to keep your brand active, consistent, and growing.
              </p>
            </div>

            {/* Content Creation */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/content.jpg"
                  alt="Content Creation"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Content Creation
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Beautiful, on-brand photo and video content tailored to your aesthetic.
              </p>
            </div>

            {/* Brand Identity & Aesthetic Design */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/brand.jpg"
                  alt="Brand Identity & Aesthetic Design"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Brand Identity & Aesthetic Design
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Visual branding that gives your business a cohesive, elevated look.
              </p>
            </div>

            {/* Social Media Strategy */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/strategy.jpg"
                  alt="Social Media Strategy"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Social Media Strategy
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Custom strategy built around your goals, audience, and brand voice.
              </p>
            </div>

            {/* Consulting & 1:1 Guidance */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/consulting.jpg"
                  alt="Consulting & 1:1 Guidance"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Consulting & 1:1 Guidance
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Hands-on support to help you improve your content and grow confidently.
              </p>
            </div>

            {/* Add-On Services */}
            <div className="service-card-animate flex flex-col items-center text-center group">
              <div className="hexagon-image-wrapper mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/addon.jpg"
                  alt="Add-On Services"
                  width={320}
                  height={320}
                  className="hexagon-image"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#F2DEA9] mb-3">
                Add-On Services
              </h3>
              <p className="text-[#F2DEA9]/80 text-base md:text-lg leading-relaxed max-w-sm">
                Extra reels, templates, email snippets, audits, and seasonal promos.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-[#DAA755] hover:bg-[#DAA755]/90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/60" />
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

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Salons & Hairstylists */}
            <a 
              href="/industries/salons-hairstylists" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Salons & Hairstylists
              </h3>
              <p className="text-sm text-muted-foreground">
                Essential for every salon's success
              </p>
            </a>

            {/* Nail Technicians & Nail Salons */}
            <a 
              href="/industries/nail-salons" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Nail Technicians & Nail Salons
              </h3>
              <p className="text-sm text-muted-foreground">
                Integral to every style standard
              </p>
            </a>

            {/* Beauty Brands & Product Lines */}
            <a 
              href="/industries/beauty-brands" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Beauty Brands & Product Lines
              </h3>
              <p className="text-sm text-muted-foreground">
                Essential for market innovation
              </p>
            </a>

            {/* Lash & Brow Artists */}
            <a 
              href="/industries/lash-brow" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Lash & Brow Artists
              </h3>
              <p className="text-sm text-muted-foreground">
                Crucial for every enhancement
              </p>
            </a>

            {/* Makeup Artists */}
            <a 
              href="/industries/makeup-artists" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Makeup Artists
              </h3>
              <p className="text-sm text-muted-foreground">
                Key to every transformation
              </p>
            </a>

            {/* Florist & Wedding */}
            <a 
              href="/industries/florist-wedding" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Florist & Wedding
              </h3>
              <p className="text-sm text-muted-foreground">
                Essential for every celebration
              </p>
            </a>

            {/* Boutique & Lifestyle */}
            <a 
              href="/industries/boutique-lifestyle" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Boutique & Lifestyle
              </h3>
              <p className="text-sm text-muted-foreground">
                Key to curated style experiences
              </p>
            </a>

            {/* Gyms */}
            <a 
              href="/industries/gyms" 
              className="industry-card-animate group bg-card/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Gyms
              </h3>
              <p className="text-sm text-muted-foreground">
                Integral to every fitness journey
              </p>
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              If you're in the beauty industry and your socials don't reflect the quality of your work, we're here to change that.
            </p>
            <a
              href="/portfolio"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

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
