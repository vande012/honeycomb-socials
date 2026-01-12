import Image from 'next/image'
import Link from 'next/link'
import { 
  Phone, 
  FileText, 
  Users, 
  Palette, 
  Calendar as CalendarIcon, 
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export const metadata = {
  title: 'My Process | Social Media Management Workflow | Honeycomb Socials',
  description: 'Our 7-step social media management process: discovery, strategy, content creation, and scheduling. See how we help beauty businesses grow. Book your free consultation.',
  keywords: 'social media management process, how social media management works, social media onboarding process, what to expect social media management, social media management workflow, step by step social media management, monthly social media content calendar, done for you social media',
}

interface ProcessStep {
  number: number
  title: string
  subtitle: string
  icon: any
  image: string
  imageAlt: string
  whatHappens: string[]
  whyItMatters: string[]
  outcome: string[]
  additionalInfo?: string
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Fit Call',
    subtitle: 'Making sure we\'re the perfect match',
    icon: Phone,
    image: '/process/call.jpg',
    imageAlt: 'Social media discovery call for beauty businesses',
    whatHappens: [
      'We discuss your business goals, current challenges, and what success looks like for your beauty or wellness brand on social media.',
      'I\'ll ask about your target audience, brand personality, and preferred platforms.',
      'Ask questions about my social media management process, pricing, and how I work with beauty professionals.'
    ],
    whyItMatters: [
      'Ensures we\'re aligned before moving forward with any social media strategy.',
      'Your social media manager must understand your unique aesthetic and clientele.',
      'If we\'re not a good fit, I\'ll tell you honestly and may refer you to someone better suited.'
    ],
    outcome: [
      'Clear understanding of your business goals and social media objectives',
      'Recommended service package tailored to your budget and needs',
      'Next steps explained in detail',
      'Honest assessment of whether we\'re the right fit'
    ],
    additionalInfo: 'If we\'re not a good fit, I\'ll tell you honestly. My goal is to help you succeed, even if that means connecting you with a different social media consultant.'
  },
  {
    number: 2,
    title: 'Proposal, Contract & Invoice',
    subtitle: 'Making it official',
    icon: FileText,
    image: '/process/contract.jpg',
    imageAlt: 'Social media management contract and proposal',
    whatHappens: [
      'Receive a customized proposal outlining your social media management package.',
      'Service agreement details scope, content deliverables, revisions, and communication expectations.',
      'Professional invoice with clear payment terms.'
    ],
    whyItMatters: [
      'Clear contracts eliminate confusion about posts per month, platforms managed, and response times.',
      'Transparency is essential for done-for-you social media services.',
      'Professional documentation builds credibility and trust for your brand\'s online presence.'
    ],
    outcome: [
      'Signed service agreement confirming our partnership',
      'Invoice paid and project officially booked',
      'Welcome email with onboarding instructions',
      'Scheduling link to book your strategy call'
    ],
    additionalInfo: 'Once your contract is signed and invoice is paid, your project officially enters the Honeycomb workflow. You\'ll receive detailed onboarding instructions within 24 hours.'
  },
  {
    number: 3,
    title: 'Onboarding & Strategy Call',
    subtitle: 'The foundation of your custom content strategy',
    icon: Users,
    image: '/process/onboarding.jpg',
    imageAlt: 'Social media onboarding and strategy session',
    whatHappens: [
      'We define your brand goals: growth, booking inquiries, building authority, or increasing visibility.',
      'Identify your target audience—demographics, psychographics, and what makes them choose you.',
      'Establish brand tone: luxurious, approachable, educational. This guides all content creation.',
      'Determine platform priorities and content direction for Instagram, TikTok, Pinterest.',
      'Set clear KPIs to measure success.',
      'Review upcoming launches, promotions, and events for your content calendar.'
    ],
    whyItMatters: [
      'Separates professional social media management from random posting.',
      'Every post should attract your ideal clients and support business goals.',
      'Brand voice ensures content feels authentic, not generic templates.',
      'KPIs let us track performance and adjust strategy accordingly.'
    ],
    outcome: [
      'Comprehensive brand strategy documented',
      'Target audience profile defined',
      'Platform priorities established',
      'Content themes and pillars identified',
      'Access granted to all necessary platforms and assets',
      'Shared Google Drive folder set up for seamless collaboration'
    ],
    additionalInfo: 'During onboarding, you\'ll also provide access to your social media accounts, any existing brand assets (photos, videos, logos), and your Google Drive. Everything lives in one organized, shared folder for complete clarity and easy access.'
  },
  {
    number: 4,
    title: 'Brand Kit & Mood Board Creation',
    subtitle: 'Defining your visual identity',
    icon: Palette,
    image: '/process/mood board.jpg',
    imageAlt: 'Social media brand kit and mood board for beauty businesses',
    whatHappens: [
      'Create a comprehensive brand kit including color palette, font pairings, and visual guidelines.',
      'Develop photo styles, graphic treatments, and overall aesthetic.',
      'Mood board showcases content style and visual consistency.',
      'Brand guidelines ensure everything stays cohesive and elevated.'
    ],
    whyItMatters: [
      'Visual branding is essential for beauty and wellness businesses.',
      'Cohesive aesthetic builds instant brand recognition on social media.',
      'Professional brand identity elevates you above competitors using generic templates.',
      'Beautiful branding stops the scroll on Instagram, Pinterest, and TikTok.'
    ],
    outcome: [
      'Custom color palette for your brand',
      'Font selections for social media graphics',
      'Visual direction and mood board',
      'Brand guidelines document',
      'Up to 2 rounds of refinements included',
      'Final approval before moving to content creation'
    ],
    additionalInfo: 'Important note: Logo creation is NOT included in social media management services. However, I\'ll integrate your existing logo beautifully into all branded content and graphics. Nothing moves forward to content creation until your brand kit is approved.'
  },
  {
    number: 5,
    title: '30-Day Content Strategy & Calendar',
    subtitle: 'Your custom roadmap to social media success',
    icon: CalendarIcon,
    image: '/process/calendar.jpg',
    imageAlt: 'Monthly social media content calendar',
    whatHappens: [
      'Create your 30-day content calendar with strategic planning for each post.',
      'Include content type (Reel, carousel, Story), topics, captions with hashtags, and required assets.',
      'Plan content to support business goals and audience engagement.',
      'Incorporate trending topics, seasonal relevance, and platform best practices.',
      'Delivered via Google Sheets or Notion for easy review.'
    ],
    whyItMatters: [
      'Monthly content calendar eliminates posting stress for beauty businesses.',
      'Ensures variety: promotions, education, entertainment, and community building.',
      'Batch planning enables better storytelling and campaign cohesion.',
      'Proactive approach means you\'re always ahead, never scrambling for content ideas.'
    ],
    outcome: [
      'Complete 30-day content calendar',
      'Strategic mix of content types and topics',
      'Written captions ready for approval',
      'Clear list of any assets needed from you',
      'Up to 2 rounds of revisions included',
      'Nothing moves forward without your approval'
    ],
    additionalInfo: 'This is your chance to review the content strategy, request changes, and ensure every post aligns with your brand voice and business goals. Your feedback shapes the content before creation even begins.'
  },
  {
    number: 6,
    title: 'Content Creation',
    subtitle: 'Bringing your brand to life',
    icon: Sparkles,
    image: '/process/content-creation.jpg',
    imageAlt: 'Social media content creation for beauty brands',
    whatHappens: [
      'Create all approved posts: graphics, videos, carousels, and final captions.',
      'Optimize content for each platform—Instagram dimensions, TikTok sounds, Pinterest formats.',
      'Ensure brand consistency and strategic design for each post goal.',
      'Format captions with hashtags and clear calls-to-action.',
      'Compile content for your review before scheduling.'
    ],
    whyItMatters: [
      'Quality content creation separates professional management from DIY posting.',
      'Platform-specific optimization maximizes performance—algorithms reward native content.',
      'Beautiful visuals are essential where aesthetics drive purchasing decisions.',
      'Saves hours weekly while maintaining consistency and quality.'
    ],
    outcome: [
      'All agreed-upon content created',
      'Captions finalized with hashtags and CTAs',
      'Content formatted for each platform',
      'Assets compiled and organized',
      'Delivered for your final review and approval',
      'Minor tweaks allowed within original scope'
    ],
    additionalInfo: 'Your approval is required before any content is scheduled. This ensures you\'re 100% confident in everything representing your brand online. Minor adjustments are included; major revisions outside the original scope may incur additional fees.'
  },
  {
    number: 7,
    title: 'Scheduling & Posting',
    subtitle: 'Consistent execution, zero stress',
    icon: Clock,
    image: '/process/scheduling.jpg',
    imageAlt: 'Social media scheduling and posting workflow',
    whatHappens: [
      'Schedule all content for the month using professional scheduling tools.',
      'Posts publish at optimal times based on audience insights and platform best practices.',
      'Monitor performance metrics and track engagement throughout the month.',
      'Receive regular updates on performance and insights.'
    ],
    whyItMatters: [
      'Consistent posting is crucial for social media growth—scheduling ensures you never miss a post.',
      'Optimal timing increases visibility and engagement with ideal clients.',
      'Automation frees you to focus on running your beauty or wellness business.',
      'Done-for-you management keeps your presence active during your busiest weeks.'
    ],
    outcome: [
      'All content scheduled for the month',
      'Automated posting at optimal times',
      'Performance monitoring and tracking',
      'Monthly insights and analytics reports',
      'You can relax knowing your social media is handled',
      'Ongoing management clients repeat this cycle monthly'
    ],
    additionalInfo: 'For ongoing social media management clients, this cycle repeats monthly. Each month, we review what performed well, refine our strategy, and plan the next month\'s content. Your social media evolves with your business.'
  }
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <p className="text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                How It Works
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              My <span className="italic font-serif">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
              A transparent, step-by-step social media management workflow designed for beauty and wellness businesses who want strategic, done-for-you content without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                Get Free Instagram Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What to Expect from Social Media Management
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Working with Honeycomb Socials means no surprises, no confusion, and no guesswork. Here's exactly how my social media management process works, from our first conversation to your content going live. This workflow ensures quality, consistency, and strategic growth for your beauty or wellness business.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div 
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image Section - Sticky on desktop for better alignment */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative lg:sticky lg:top-24`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Decorative step number */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-4xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Section - Better organized with improved spacing */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} lg:py-4`}>
                    {/* Header Section */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                            Step {step.number}
                          </div>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xl lg:text-2xl text-primary font-semibold italic">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Content Sections - Better visual hierarchy */}
                    <div className="space-y-8">
                      {/* What Happens */}
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                          What Happens
                        </h4>
                        <div className="space-y-4">
                          {step.whatHappens.map((item, i) => (
                            <p key={i} className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed pl-8">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Why It Matters */}
                      <div className="bg-card/50 rounded-xl p-6 lg:p-8 border border-border/50">
                        <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                          Why It Matters
                        </h4>
                        <div className="space-y-4">
                          {step.whyItMatters.map((item, i) => (
                            <p key={i} className="text-base lg:text-lg text-foreground/90 leading-relaxed">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                          Outcome
                        </h4>
                        <ul className="space-y-3">
                          {step.outcome.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-base lg:text-lg text-foreground/90">
                              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Info */}
                      {step.additionalInfo && (
                        <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-5 lg:p-6">
                          <p className="text-sm md:text-base lg:text-lg text-foreground/90 italic">
                            <strong>Note:</strong> {step.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ongoing Management Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
              Ongoing Social Media Management
            </h2>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                For ongoing social media management clients, this process becomes a seamless monthly cycle. After your first month, we refine and optimize based on what content performed best, what resonated with your audience, and how your business goals have evolved.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Each month includes strategy refinement, content calendar creation, professional content creation, and consistent scheduling—all designed to grow your online presence while you focus on serving your clients.
              </p>
              <div className="bg-primary/10 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Monthly Deliverables Include:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Custom 30-day content calendar with strategic post planning</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Professional content creation: graphics, captions, videos, and Stories</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Platform-optimized formatting for Instagram, TikTok, Pinterest, and more</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Scheduled posting at optimal times for maximum reach</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Performance tracking and monthly analytics insights</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Strategy adjustments based on data and trends</span>
                  </li>
                </ul>
              </div>
              <p className="text-base md:text-lg text-foreground/80 italic text-center">
                Your social media evolves with your business, staying fresh, relevant, and consistently attracting your ideal clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who This Process Works For
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              My social media management process is specifically designed for beauty and wellness businesses who value aesthetics, strategy, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Salons & Hairstylists', description: 'Social media management for salons that showcases your styling expertise and attracts new clients.' },
              { title: 'Nail Technicians', description: 'Instagram management for nail artists to highlight your artistry and fill your appointment book.' },
              { title: 'Estheticians & Skincare', description: 'Content creation for beauty brands focusing on treatments, results, and client education.' },
              { title: 'Lash & Brow Artists', description: 'Before-and-after content that converts followers into bookings.' },
              { title: 'Makeup Artists', description: 'Portfolio-style content that showcases your talent and books more bridal and event clients.' },
              { title: 'Spas & MedSpas', description: 'Social media for spas that highlights relaxation, luxury, and professional treatments.' },
              { title: 'Boutiques & Lifestyle', description: 'E-commerce social strategy that turns browsers into buyers.' },
              { title: 'Gyms & Fitness', description: 'Community-building content for fitness businesses to attract and retain members.' },
              { title: 'Wedding Florists', description: 'Dreamy, on-brand content designed to attract brides and event planners.' },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
            >
              Explore All Industries We Serve
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Common Questions About the Process
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How long does the entire social media onboarding process take?',
                  answer: 'From your first discovery call to your first month of content being scheduled typically takes 3-4 weeks. This includes time for strategy development, brand kit creation, content calendar approval, content creation, and scheduling. Rush timelines may be available for an additional fee.'
                },
                {
                  question: 'What if I need changes after content is created?',
                  answer: 'Minor tweaks and adjustments within the original scope are included in every package. If you need significant revisions that change the direction or require substantial rework, additional fees may apply. Clear communication during the content calendar approval phase minimizes the need for major revisions later.'
                },
                {
                  question: 'Do I need to provide all the photos and videos?',
                  answer: 'It depends on your package. Some clients provide their own raw content (photos of their work, salon, products, etc.), which I then edit and optimize. Other packages include professional content creation where I source or create visuals. We\'ll discuss your specific needs during the discovery call.'
                },
                {
                  question: 'Can I still post on my own social media accounts?',
                  answer: 'Absolutely! You always maintain full control of your accounts. Many clients choose to still post spontaneous Stories or time-sensitive updates while I handle the strategic, planned content. We\'ll coordinate to ensure everything stays cohesive.'
                },
                {
                  question: 'What happens if I want to pause or cancel my social media management?',
                  answer: 'Contract terms vary by package, but most ongoing management agreements require 30 days\' notice for cancellation or pause. This ensures we can wrap up the current content cycle professionally. All details are clearly outlined in your service agreement.'
                },
                {
                  question: 'How involved do I need to be in the monthly process?',
                  answer: 'Your involvement is flexible based on your preferences. At minimum, you\'ll need to: approve the monthly content calendar (30 minutes), provide any requested photos or information, and approve final content before scheduling. Many clients appreciate being hands-on with strategy, while others prefer a "set it and forget it" approach. Done-for-you social media should work for YOU.'
                },
                {
                  question: 'Do you offer social media management for platforms other than Instagram?',
                  answer: 'Yes! I manage Instagram, TikTok, Pinterest, Facebook, LinkedIn, and YouTube Shorts. Each platform requires different content formats and strategies, so we\'ll discuss during your discovery call which platforms make the most sense for your beauty or wellness business and budget.'
                },
                {
                  question: 'What makes your social media management process different from other agencies?',
                  answer: 'Transparency, customization, and specialization in beauty and wellness. You\'ll never wonder what you\'re paying for—every step is documented and explained. Your strategy is built specifically for YOUR business, not a generic template. And I understand the unique needs of beauty professionals because that\'s who I exclusively work with.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fafafa] to-[#f2e9d0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-6">
              Ready to Start Your <span className="italic font-serif">Social Media Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1f1e1c]/80 mb-8 leading-relaxed">
              Let's talk about your beauty or wellness business, your social media goals, and how my process can help you grow without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-[#1f1e1c] font-semibold rounded-lg transition-all duration-300"
              >
                See My Work
              </Link>
            </div>
            <p className="text-sm md:text-base text-[#1f1e1c]/70 mt-8 italic">
              No pressure, no commitments—just an honest conversation about whether we're the right fit. If we're not, I'll tell you and may even refer you to someone better suited to your needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

