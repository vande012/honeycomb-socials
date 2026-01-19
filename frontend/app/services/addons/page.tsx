import Image from 'next/image'
import Link from 'next/link'
import { 
  Plus,
  CheckCircle2,
  ArrowRight,
  Video,
  FileText,
  Sparkles,
  Calendar as CalendarIcon,
  BarChart3
} from 'lucide-react'

export const metadata = {
  title: 'Add-On Services | Extra Reels, Templates & Audits | Honeycomb Socials',
  description: 'Social media add-ons: extra Reels, templates, email snippets, audits, and seasonal campaigns. Perfect for supplementing your existing strategy. Learn more.',
  keywords: 'social media add-ons, extra reels, social media templates, email marketing snippets, social media audit, seasonal content, campaign content',
}

export default function AddOnsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/addon.jpg"
                  alt="Social Media Add-On Services"
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
                  Add-On Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Add-On <span className="italic font-serif">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6 italic">
                Extra content & services to supplement your strategy
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Need extra Reels for a campaign? Templates for consistent posting? An audit to identify improvements? Add-on services let you supplement your existing strategy with exactly what you need, when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
                >
                  View All Services
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
                Available Add-On Services
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                Flexible add-on services to enhance your social media strategy. Mix and match based on your current needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Extra Reels & Videos */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Extra Reels & Videos</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Additional Instagram Reels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">TikTok video content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">YouTube Shorts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Professional editing included</span>
                  </li>
                </ul>
              </div>

              {/* Template Packages */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Template Packages</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Customizable design templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Multiple format options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand-consistent designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Easy-to-edit files</span>
                  </li>
                </ul>
              </div>

              {/* Email Marketing Snippets */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Email Marketing Snippets</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Social media graphics for emails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Newsletter content snippets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Cross-platform consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Brand-aligned designs</span>
                  </li>
                </ul>
              </div>

              {/* Social Media Audits */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Social Media Audits</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Account performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Content quality review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Improvement recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Written audit report</span>
                  </li>
                </ul>
              </div>

              {/* Seasonal Campaign Content */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Seasonal Campaign Content</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Holiday campaign packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Seasonal promotions & sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Limited-time campaign content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Event-specific graphics & videos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                When to Use Add-On Services
              </h2>
              <p className="text-lg md:text-xl text-foreground/90">
                Add-ons are perfect for supplementing your existing social media strategy with extra content or services when you need them.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Supplementing Full Management</h3>
                <p className="text-foreground/90 leading-relaxed">
                  If you have a full management package but need extra Reels for a specific campaign or seasonal content for holidays, add-ons let you boost your content without changing your base package.
                </p>
              </div>

              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">One-Time Projects</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Need templates for a product launch? An audit before a rebrand? Add-ons are perfect for one-time projects that don't require ongoing services.
                </p>
              </div>

              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Testing & Experimentation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Want to test video content before committing to a full package? Add-ons let you try different content types and see what works for your audience.
                </p>
              </div>

              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Seasonal Needs</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Holiday campaigns, summer promotions, back-to-school content—add-ons let you add seasonal content exactly when you need it, without the commitment of ongoing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fafafa] to-[#f2e9d0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-6">
              Need Extra Support?
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's discuss which add-on services can help supplement your current strategy. Perfect for one-time projects, seasonal campaigns, or testing new content types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-lg transition-all duration-300"
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

