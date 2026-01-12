import { Metadata } from 'next'
import { getGlobalData } from './api/api'
import { getBlogPosts } from './api/blog/api'
import { logger } from './utils/logger'

// Revalidate homepage every 5 minutes
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const globalData = await getGlobalData();
    const global = globalData?.data;

    const metaTitle = global?.metadata?.metaTitle || 'Honeycomb Socials | Social Media Management for Beauty & Wellness';
    const metaDescription =
      global?.metadata?.metaDescription ||
      'Social media management for beauty and wellness businesses. Aesthetic, strategic content that attracts the clients you actually want. Done-for-you social media without the burnout.';

    // Generate OG images from shareImage or fallback to default
    const shareImage = global?.metadata?.shareImage;
    const ogImageUrl = shareImage?.url 
      ? (shareImage.url.startsWith('http') ? shareImage.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/api', '')}${shareImage.url}`)
      : 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        canonical: baseUrl,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: metaTitle,
        description: metaDescription,
        siteName: 'Honeycomb Socials',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: metaTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [ogImageUrl],
      },
    };
  } catch (e) {
    const fallbackOgImage = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
    
    return {
      title: 'Honeycomb Socials | Social Media Management for Beauty & Wellness',
      description: 'Social media management for beauty and wellness businesses. Aesthetic, strategic content that attracts the clients you actually want. Done-for-you social media without the burnout.',
      alternates: {
        canonical: baseUrl,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: 'Honeycomb Socials | Social Media Management for Beauty & Wellness',
        description: 'Social media management for beauty and wellness businesses. Aesthetic, strategic content that attracts the clients you actually want.',
        siteName: 'Honeycomb Socials',
        images: [
          {
            url: fallbackOgImage,
            width: 1200,
            height: 630,
            alt: 'Honeycomb Socials - Social Media Management for Beauty & Wellness',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Honeycomb Socials | Social Media Management for Beauty & Wellness',
        description: 'Social media management for beauty and wellness businesses. Aesthetic, strategic content.',
        images: [fallbackOgImage],
      },
    };
  }
}
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { SocialStats } from './components/SocialStats'
import { RecentBlogPosts } from './components/RecentBlogPosts'
import { ServicesSection } from './components/ServicesSection'
import { IndustriesSection } from './components/IndustriesSection'
import { AnimatedWord } from './components/AnimatedWord'
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

  // Organization Schema for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Honeycomb Socials",
    "url": "https://honeycombsocials.com",
    "logo": "https://honeycombsocials.com/logo-dark.png",
    "description": "Social media management for beauty and wellness businesses that value aesthetics as much as results.",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@honeycombsocials.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section - Enhanced UX & Design */}
      <section className="relative w-full min-h-[900px] sm:min-h-[700px] lg:min-h-[900px] overflow-hidden bg-[#fafafa] -mb-px">
        {/* Full Width Image Background with Subtle Animation */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/home-hero.jpg"
              alt="Beauty social media management"
              fill
              className="object-cover object-center animate-subtle-zoom"
              priority
              quality={90}
              sizes="100vw"
            />
            {/* Refined gradient overlay for better text readability and visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/50 to-[#fafafa]/60 lg:from-[#fafafa] lg:via-[#fafafa]/65 lg:to-transparent" />
            {/* Additional subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]/20" />
          </div>
        </div>

        {/* Content Overlay with Improved Spacing */}
        <div className="relative z-10 h-full min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center">
          <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Decorative Script Text - Refined sizing and spacing */}
            <p className="script-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#c9a86a] mb-3 sm:mb-4 md:mb-5 animate-fade-in-up font-medium">
              welcome!
            </p>
            
            {/* Main Headline - Enhanced typography and spacing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-5 sm:mb-6 md:mb-8 text-[#1f1e1c] animate-fade-in-up animation-delay-100 tracking-tight">
              <span className="block mb-1 sm:mb-2">SOCIAL MEDIA</span>
              <span className="block text-[#c9a86a]">
                <AnimatedWord />
              </span>
            </h1>
            
            {/* Subheadline - Improved readability and visual weight */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1f1e1c]/85 max-w-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed animate-fade-in-up animation-delay-300 font-medium">
              We create aesthetic, strategic social media content that attracts the clients you actually want—no burnout, no guesswork, just beautiful results.
            </p>
            
            {/* CTAs - Enhanced prominence and visual hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 animate-fade-in-up animation-delay-500">
              <Link
                href="/process"
                className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-[#1f1e1c] hover:bg-[#1f1e1c]/95 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-xl hover:shadow-2xl text-center focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-4 text-base sm:text-lg relative overflow-hidden"
                aria-label="Book a free consultation"
              >
                <span className="relative z-10">View Our Process</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#c9a86a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-white/90 backdrop-blur-sm border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl text-center focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-4 text-base sm:text-lg"
                aria-label="Get a free consultation"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Airy Feminine Aesthetic */}
      <section className="relative w-full overflow-hidden bg-white pt-0 pb-16 md:pt-20 md:pb-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto gap-0">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[750px] overflow-hidden order-2 lg:order-1">
            <Image
              src="/salon.jpg"
              alt="Beauty salon workspace with elegant styling"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Side */}
          <div className="bg-[#fafafa] flex items-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 order-1 lg:order-2">
            <div className="max-w-2xl">
              {/* Decorative Script Text */}
              <p className="script-font text-3xl sm:text-4xl text-[#c9a86a] mb-4">
                your beauty business
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1e1c] mb-8 leading-tight">
                Deserves Better Socials
              </h2>
              
              <div className="space-y-6 text-[#1f1e1c]/80 text-base md:text-lg leading-relaxed">
                <p>
                  Your beauty business deserves socials that feel intentional, on-brand, and actually work for you.
                </p>
                
                <p>
                  At Honeycomb Socials, we create platform-specific content with real strategy—no copy-paste templates, no burnout, no guesswork. Just aesthetic, strategic social media marketing that attracts the clients you actually want.
                </p>
                
                <p className="font-medium text-[#1f1e1c]">
                  Ready for support that's both beautiful and effective? Let's talk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="/audit"
                  className="px-8 py-4 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 text-center hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-2"
                  aria-label="Book a free consultation"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/audit"
                  className="px-8 py-4 bg-transparent border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-2"
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

      {/* About Section - Airy Feminine Aesthetic */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Decorative Script Text */}
              <p className="script-font text-3xl sm:text-4xl text-[#c9a86a] mb-4">
                hi, there! I'm Maggie Vandehey
              </p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-8 leading-tight">
                About Honeycomb Socials
              </h2>
              
              <div className="space-y-6 text-base md:text-lg text-[#1f1e1c]/80 leading-relaxed">
                <p>
                  I help salons, stylists, estheticians, injectors, and beauty brands grow with aesthetic content and real strategy—without the burnout or guesswork.
                </p>

                <p>
                  Because posting random Canva templates ≠ marketing. Your business deserves content with intention, not pressure.
                </p>

                <p>
                  If you're tired of posting just to post, if you want your social media to actually attract clients, and if you're ready for a strategy that feels as good as it looks—I'm your girl.
                </p>

                <p>
                  Stick around for branding tips, content ideas, and done-for-you strategies that actually work.
                </p>

                <p className="font-semibold text-[#1f1e1c]">
                  Want to work together? Send me a DM or book a free consultation below.
                </p>

                {/* Soft rounded card */}
                <div className="bg-white border border-[#e5e5e5] rounded-2xl p-6 md:p-8 shadow-sm">
                  <p className="text-base md:text-lg text-[#1f1e1c]/80 leading-relaxed mb-6">
                    <strong className="text-[#1f1e1c]">Feeling stuck with your Instagram?</strong> I'm offering free social media audits to help you figure out what's working, what's not, and how to start attracting the clients you want. It's quick, helpful, and tailored to your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/audit"
                      className="px-6 py-3 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 text-center hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-2"
                      aria-label="Book a free consultation"
                    >
                      Book Free Consultation
                    </a>
                    <a
                      href="/audit"
                      className="px-6 py-3 bg-transparent border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-2"
                      aria-label="Get a free consultation"
                    >
                      Get Free Consultation
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
                  alt="Maggie Vandehey, founder of Honeycomb Socials"
                  width={500}
                  height={650}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
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
    </>
  )
}
