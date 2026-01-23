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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export const metadata = {
  title: 'My Process | Social Media Management Workflow | Honeycomb Socials',
  description: 'My 7-step social media management process: discovery, strategy, content creation, and scheduling. See how we help beauty businesses grow. Book your free consultation.',
  keywords: 'social media management process, how social media management works, social media onboarding process, what to expect social media management, social media management workflow, step by step social media management, monthly social media content calendar, done for you social media',
  alternates: {
    canonical: `${baseUrl}/process`,
  },
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
    subtitle: 'Making sure we\'re the right fit',
    icon: Phone,
    image: '/process/Step 1 .jpeg',
    imageAlt: 'Social media discovery call for beauty businesses',
    whatHappens: [
      'Everything starts with a discovery call to confirm we\'re the right fit for each other.',
      'We discuss your business, goals, challenges, and what success looks like for you on social media.'
    ],
    whyItMatters: [
      'Why it matters, so we\'re aligned and honest before moving forward.'
    ],
    outcome: [
      'Shared understanding of goals',
      'Clear next steps',
      'Honest fit assessment'
    ],
    additionalInfo: 'If we\'re not a good fit, I\'ll tell you, and I\'ll help you find someone who is.'
  },
  {
    number: 2,
    title: 'Proposal, Contract & Invoice',
    subtitle: 'Making it official',
    icon: FileText,
    image: '/process/contract.jpg',
    imageAlt: 'Social media management contract and proposal',
    whatHappens: [
      'You receive a customized proposal based on your goals and what support you need.',
      'Once we agree on scope and investment, we confirm your onboarding, send a contract, and get you scheduled.'
    ],
    whyItMatters: [
      'Transparent paperwork removes confusion and sets expectations clearly.'
    ],
    outcome: [
      'Signed agreement',
      'Project officially booked',
      'Onboarding instructions sent'
    ],
    additionalInfo: 'Clear documentation ensures we\'re both aligned on expectations and deliverables from the start.'
  },
  {
    number: 3,
    title: 'Onboarding & Strategy Call',
    subtitle: 'Building your foundation',
    icon: Users,
    image: '/process/Step 3.jpeg',
    imageAlt: 'Social media onboarding and strategy session',
    whatHappens: [
      'This is where we build your strategy. We define your goals, identify your ideal audience, choose platform priorities, and outline your content direction.'
    ],
    whyItMatters: [
      'Strategy is the foundation — so every post supports your business goals with intention.'
    ],
    outcome: [
      'Documented strategy',
      'Audience profile',
      'Platform direction',
      'Content themes'
    ],
    additionalInfo: 'This call sets the direction for everything that follows, ensuring your content is built with purpose.'
  },
  {
    number: 4,
    title: 'Brand Kit & Mood Board Creation',
    subtitle: 'Your visual identity',
    icon: Palette,
    image: '/process/step 4.jpeg',
    imageAlt: 'Social media brand kit and mood board for beauty businesses',
    whatHappens: [
      'I create a visual guide that defines your brand\'s colors, fonts, style, and overall look.',
      'This keeps your feed cohesive and helps content feel intentionally you.'
    ],
    whyItMatters: [
      'Visual identity builds recognition and trust with your audience.'
    ],
    outcome: [
      'Brand colors and fonts',
      'Visual style guide',
      'Mood board direction'
    ],
    additionalInfo: 'This ensures every piece of content feels cohesive and aligned with your brand before we move into creation.'
  },
  {
    number: 5,
    title: '30-Day Content Strategy & Calendar',
    subtitle: 'Your clear plan for what to post and why it matters',
    icon: CalendarIcon,
    image: '/process/Step 5.jpeg',
    imageAlt: 'Monthly social media content calendar',
    whatHappens: [
      'I create a 30-day content calendar built around your goals, core content pillars, and overall strategy.',
      'Each post is mapped out with the content type (Reel, carousel, or Story), topic, and written caption.',
      'I also clearly note anything I need from you, so there\'s no last-minute guessing or scrambling.',
      'This plan becomes the foundation for everything I post on your behalf.'
    ],
    whyItMatters: [
      'A strategic content calendar removes daily decision fatigue and replaces it with clarity.',
      'Instead of posting randomly or reactively, your content works together to support your business goals, build trust with your audience, and create consistency across the month.',
      'Planning ahead also allows for stronger storytelling and a more cohesive online presence.'
    ],
    outcome: [
      'A complete 30-day content calendar',
      'Strategic mix of content types and topics',
      'Written captions ready for review',
      'Clear list of any assets needed from you',
      'Up to two rounds of revisions included',
      'Final approval before any content moves forward'
    ],
    additionalInfo: 'This is your opportunity to review the direction, request changes, and make sure everything aligns with your brand voice and goals. Nothing is created or posted without your sign-off.'
  },
  {
    number: 6,
    title: 'Content Creation',
    subtitle: 'Turning the plan into execution',
    icon: Sparkles,
    image: '/process/Step 6.jpeg',
    imageAlt: 'Social media content creation for beauty brands',
    whatHappens: [
      'I create and refine the content outlined in your approved strategy and calendar.',
      'This is where videos are edited, graphics are designed when needed, and captions are finalized, all with the strategy we set in mind.',
      'Everything is prepared intentionally for the platforms we\'ve chosen, without forcing trends or formats that don\'t fit your business.',
      'Once content is ready, it\'s compiled and sent to you for review before anything moves forward.'
    ],
    whyItMatters: [
      'This step is about execution with purpose.',
      'Instead of rushing to post or reacting in real time, your content is created thoughtfully and tied back to your goals.',
      'Editing and refinement happen here so what goes live feels aligned, clear, and intentional — not rushed or random.',
      'It also gives you space to stay focused on your business while knowing your content is handled.'
    ],
    outcome: [
      'All agreed-upon content created and refined',
      'Videos edited and graphics designed as needed',
      'Captions finalized and aligned with strategy',
      'Content compiled for easy review',
      'Final approval before scheduling',
      'Minor tweaks included within the original scope'
    ],
    additionalInfo: 'Nothing is posted without your approval. This step ensures everything accurately represents your brand and feels right before it goes live.'
  },
  {
    number: 7,
    title: 'Scheduling & Posting',
    subtitle: 'Following through on the plan',
    icon: Clock,
    image: '/process/Step 7.jpg',
    imageAlt: 'Social media scheduling and posting workflow',
    whatHappens: [
      'I schedule the approved content according to the strategy we\'ve already set for the month.',
      'Posts are planned intentionally so your content goes out consistently without requiring daily attention or last-minute decisions.',
      'Once everything is scheduled, it runs in the background while you focus on your business.',
      'At the end of the month, I review performance and analytics to understand what supported your goals and what needs adjustment moving forward.'
    ],
    whyItMatters: [
      'This step is about consistency without pressure.',
      'Instead of reacting day by day, your social media runs on a plan you\'ve already approved.',
      'That consistency builds trust with your audience while giving you mental space back.',
      'Monthly analytics reviews allow us to make thoughtful decisions based on patterns, not daily fluctuations or vanity metrics.'
    ],
    outcome: [
      'All approved content scheduled for the month',
      'Intentional posting cadence based on strategy',
      'Hands-off execution once content is approved',
      'Monthly performance and analytics review',
      'Clear insights to inform the next month\'s plan'
    ],
    additionalInfo: 'For ongoing social media management clients, this cycle repeats monthly. Each month, we review what worked, refine the strategy as needed, and plan the next phase of content so your social media continues to support your business as it evolves.'
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
              A clear, step-by-step social media workflow for beauty and wellness brands who want strategy before posting, without the overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
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
              What to Expect from the Process
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              This workflow removes guesswork and gives your social media a clear direction, from our first conversation through your content going live.
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
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative lg:sticky lg:top-[132px]`}>
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
                For ongoing clients, this process becomes a steady monthly rhythm, not a constant push for more, but a thoughtful cycle built around your goals.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Each month, we review what went live, look at overall performance, and make intentional adjustments where needed. Strategy is refined based on patterns over time, not short-term fluctuations, so your social media stays aligned with your business as it grows and changes.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                The focus is consistency, clarity, and follow-through, so your online presence continues to support your work without requiring daily attention from you.
              </p>
              <div className="bg-primary/10 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Monthly Support Includes:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>A custom 30-day content calendar built around your goals</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Content creation based on the agreed strategy (video editing, graphics when needed, and refined captions)</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Scheduled posting according to the monthly plan</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Monthly analytics review to understand what's working and what needs adjustment</span>
                  </li>
                  <li className="flex items-start gap-3 text-base md:text-lg text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Strategy refinement to guide the next month's content</span>
                  </li>
                </ul>
              </div>
              <p className="text-base md:text-lg text-foreground/80 italic text-center">
                Your social media evolves intentionally as your business grows.
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
              Who This Process Is For
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              This process is for you if social media feels heavier than it should.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              If you care about your business, want to show up intentionally online, and know that posting without a plan isn't working anymore, you're in the right place.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I work with beauty and wellness businesses who want clarity before content and consistency without burnout.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mt-6 font-semibold">
              This tends to resonate most if you're a…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Salon Owner or Hairstylist', description: 'You want to attract the right clients, not just more followers, and turn your content into consistent bookings.', href: '/industries/salons-hairstylists' },
              { title: 'Nail Technician or Nail Salon', description: 'You\'re tired of posting beautiful work without seeing it translate into steady appointments.', href: '/industries/nail-salons' },
              { title: 'Esthetician or Skincare Professional', description: 'You want to educate your audience, build trust, and position your services clearly so clients know what to book.', href: '/industries/beauty-brands' },
              { title: 'Lash or Brow Artist', description: 'You\'re ready to move beyond before-and-afters and create demand for your expertise.', href: '/industries/lash-brow' },
              { title: 'Makeup Artist', description: 'You want your work positioned professionally so it attracts aligned bridal and event clients.', href: '/industries/makeup-artists' },
              { title: 'Spa or MedSpa Owner', description: 'You need content that feels calm, credible, and aligned with the level of service you provide.', href: '/industries/spas-medspas' },
              { title: 'Boutique or Lifestyle Brand', description: 'You want your online presence to support sales without losing your brand\'s personality.', href: '/industries/boutique-lifestyle' },
              { title: 'Gym or Fitness Business', description: 'You\'re focused on building a committed community, not just quick sign-ups.', href: '/industries/gyms' },
              { title: 'Wedding Florist', description: 'You want to stand out in a crowded market and attract couples who already feel aligned with your work.', href: '/industries/florist-wedding' },
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block group"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
            >
              Explore all industries I support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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
                href="/audit"
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

