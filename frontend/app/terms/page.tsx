import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Terms of Service | Honeycomb Socials',
  description: 'Terms of Service for Honeycomb Socials social media management services. Review our service agreement, payment terms, and client responsibilities.',
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/terms`,
    title: 'Terms of Service | Honeycomb Socials',
    description: 'Terms of Service for Honeycomb Socials social media management services.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Terms of Service - Honeycomb Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Honeycomb Socials',
    description: 'Terms of Service for Honeycomb Socials social media management services.',
    images: [ogImageUrl],
  },
}

export default function TermsPage() {
  const lastUpdated = 'January 2026'

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of <span className="italic font-serif">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
              Please read these Terms of Service carefully before using our social media management services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border/50 space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    These Terms of Service ("Terms") govern your use of Honeycomb Socials' services, including but not limited to social media management, content creation, brand identity development, strategy consulting, and related services (collectively, "Services"). By engaging with our Services, you ("Client," "you," or "your") agree to be bound by these Terms.
                  </p>
                  <p>
                    Honeycomb Socials ("we," "us," "our," or "Company") reserves the right to modify these Terms at any time. Material changes will be communicated to active clients. Your continued use of our Services after such modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">2. Services Description</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Honeycomb Socials provides customized social media management services for beauty and wellness businesses. Our Services may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full social media management including strategy, content creation, and scheduling</li>
                    <li>Content creation services (graphics, videos, captions, hashtags)</li>
                    <li>Brand identity and aesthetic design development</li>
                    <li>Social media strategy consulting</li>
                    <li>One-on-one guidance and consulting</li>
                    <li>Add-on services including extra content, templates, audits, and seasonal campaigns</li>
                  </ul>
                  <p>
                    Specific deliverables, timelines, and scope of work are outlined in individual service agreements or proposals. All Services are customized to each client's unique needs, goals, and budget.
                  </p>
                </div>
              </div>

              {/* Service Agreements */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">3. Service Agreements</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Before Services begin, clients receive a customized proposal and service agreement that specifies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Scope of work and deliverables</li>
                    <li>Service duration and timelines</li>
                    <li>Payment terms and pricing</li>
                    <li>Client responsibilities and requirements</li>
                    <li>Revision and approval processes</li>
                    <li>Cancellation and termination policies</li>
                  </ul>
                  <p>
                    The service agreement supersedes these general Terms to the extent of any conflict. Both parties must sign the service agreement before Services commence.
                  </p>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Payment terms are specified in each service agreement. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Invoices are due within the timeframe specified in the service agreement (typically 7-14 days)</li>
                    <li>Services may not commence until initial payment is received</li>
                    <li>For ongoing monthly services, invoices are issued monthly in advance</li>
                    <li>Late payments may result in service suspension until payment is received</li>
                    <li>All fees are non-refundable except as specified in the service agreement or required by law</li>
                  </ul>
                  <p>
                    Honeycomb Socials reserves the right to charge interest on overdue accounts at a rate of 1.5% per month, and clients are responsible for any collection or legal fees incurred due to non-payment.
                  </p>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Clients agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, complete, and timely information necessary for Service delivery</li>
                    <li>Grant necessary access to social media accounts and platforms for Service delivery</li>
                    <li>Respond to requests for approval, feedback, or information within agreed-upon timeframes</li>
                    <li>Provide brand assets, photos, videos, or other materials as needed for content creation</li>
                    <li>Maintain account security and notify us immediately of any security breaches</li>
                    <li>Comply with platform terms of service and applicable laws and regulations</li>
                    <li>Obtain necessary rights, licenses, or permissions for any materials provided to us</li>
                  </ul>
                  <p>
                    Delays in client response or provision of materials may result in project timeline adjustments. We are not responsible for delays caused by client actions or omissions.
                  </p>
                </div>
              </div>

              {/* Content Ownership and Usage Rights */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">6. Content Ownership and Usage Rights</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    <strong>Client Content:</strong> Clients retain ownership of all content, brand assets, and materials they provide to Honeycomb Socials. Clients grant us a license to use such materials solely for the purpose of delivering Services.
                  </p>
                  <p>
                    <strong>Work Product:</strong> Upon full payment, clients own all final work product created specifically for them, including graphics, videos, captions, brand kits, mood boards, and strategies. This ownership is subject to the terms below.
                  </p>
                  <p>
                    <strong>Portfolio Rights:</strong> Honeycomb Socials retains the right to display work created for clients in our portfolio, marketing materials, and case studies, unless otherwise agreed in writing. We respect client confidentiality and will not disclose sensitive business information without consent.
                  </p>
                  <p>
                    <strong>Third-Party Assets:</strong> Content may incorporate third-party assets (fonts, stock images, music, etc.) subject to their respective licenses. Clients are responsible for obtaining appropriate licenses for ongoing use of such assets after the Services conclude.
                  </p>
                </div>
              </div>

              {/* Revisions and Approval */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">7. Revisions and Approval</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Service agreements typically include a specified number of revision rounds for deliverables. Minor adjustments within the original scope are included. Significant revisions that change the direction or require substantial rework may incur additional fees.
                  </p>
                  <p>
                    Clients must approve content calendars and final content before scheduling or publication. Approval processes and timeframes are outlined in the service agreement. Delays in approval may affect posting schedules.
                  </p>
                  <p>
                    Once content is approved and published, requests for changes to published content may incur additional fees.
                  </p>
                </div>
              </div>

              {/* Platform Access and Account Management */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">8. Platform Access and Account Management</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Clients grant Honeycomb Socials access to their social media accounts for the purpose of content creation, scheduling, and management. We agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use access credentials solely for Service delivery</li>
                    <li>Maintain confidentiality of account credentials</li>
                    <li>Follow platform terms of service and best practices</li>
                    <li>Not make unauthorized changes to account settings</li>
                  </ul>
                  <p>
                    Clients maintain full control of their accounts and may revoke access at any time. However, revocation may impact our ability to deliver Services. Clients are responsible for maintaining account security and immediately revoking access if credentials are compromised.
                  </p>
                </div>
              </div>

              {/* Cancellation and Termination */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">9. Cancellation and Termination</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    <strong>Client Cancellation:</strong> Clients may cancel Services with written notice. Cancellation terms are specified in individual service agreements. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ongoing monthly services typically require 30 days' written notice</li>
                    <li>Project-based services may be cancelled, but work completed to date remains payable</li>
                    <li>Clients remain responsible for all fees incurred up to the cancellation date</li>
                  </ul>
                  <p>
                    <strong>Termination by Honeycomb Socials:</strong> We reserve the right to terminate Services for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Non-payment or repeated late payment</li>
                    <li>Violation of these Terms or the service agreement</li>
                    <li>Client conduct that is unethical, illegal, or harmful to our reputation</li>
                    <li>Client breach of platform terms of service</li>
                  </ul>
                  <p>
                    Upon termination, clients retain ownership of all work product delivered to date, subject to full payment of all outstanding fees.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">10. Confidentiality</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Both parties agree to maintain confidentiality of proprietary and confidential information shared during the course of Services. This includes business strategies, financial information, client lists, and other sensitive data.
                  </p>
                  <p>
                    Confidential information does not include information that is publicly available, independently developed, or required to be disclosed by law. We respect client confidentiality and will not disclose sensitive business information without consent, except as necessary for Service delivery.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">11. Intellectual Property</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Honeycomb Socials retains ownership of our methodologies, processes, templates, and general knowledge. Clients own work product specifically created for them, as detailed in Section 6.
                  </p>
                  <p>
                    Clients warrant that all materials provided to us do not infringe upon any third-party intellectual property rights. Clients are responsible for obtaining necessary rights, licenses, or permissions for any third-party content used in our Services.
                  </p>
                </div>
              </div>

              {/* Warranties and Disclaimers */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">12. Warranties and Disclaimers</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    <strong>Service Warranty:</strong> We warrant that Services will be performed with reasonable skill and care. We do not guarantee specific results, including but not limited to follower growth, engagement rates, or business outcomes, as these depend on numerous factors beyond our control.
                  </p>
                  <p>
                    <strong>Platform Changes:</strong> Social media platforms frequently change their algorithms, features, and terms of service. We are not responsible for changes that impact Services or account performance.
                  </p>
                  <p>
                    <strong>No Guarantees:</strong> While we use best practices and strategic approaches, we do not guarantee specific metrics, rankings, or business results. Social media performance is influenced by many factors, including platform algorithms, market conditions, and client industry.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">13. Limitation of Liability</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    To the maximum extent permitted by law, Honeycomb Socials' total liability for any claims arising from or related to Services shall not exceed the total amount paid by the client for Services in the twelve (12) months preceding the claim.
                  </p>
                  <p>
                    We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits, lost revenue, or business interruption, even if we have been advised of the possibility of such damages.
                  </p>
                  <p>
                    This limitation does not apply to liability that cannot be excluded or limited by applicable law.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">14. Indemnification</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Clients agree to indemnify, defend, and hold harmless Honeycomb Socials from any claims, damages, losses, costs, or expenses (including legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client's use of Services or work product</li>
                    <li>Client's breach of these Terms or the service agreement</li>
                    <li>Client's violation of any law or third-party rights</li>
                    <li>Materials or content provided by the client that infringe third-party rights</li>
                  </ul>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">15. Dispute Resolution</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    In the event of a dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                  </p>
                  <p>
                    These Terms are governed by the laws of the State of Colorado, United States, without regard to conflict of law principles.
                  </p>
                </div>
              </div>

              {/* General Provisions */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">16. General Provisions</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    <strong>Entire Agreement:</strong> These Terms, together with the service agreement, constitute the entire agreement between the parties and supersede all prior agreements or understandings.
                  </p>
                  <p>
                    <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
                  </p>
                  <p>
                    <strong>Waiver:</strong> Failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.
                  </p>
                  <p>
                    <strong>Assignment:</strong> Clients may not assign or transfer their rights or obligations under these Terms without our written consent. We may assign our rights and obligations to any successor or affiliate.
                  </p>
                  <p>
                    <strong>Force Majeure:</strong> Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control, including natural disasters, pandemics, platform outages, or government actions.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-l-4 border-primary">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">17. Contact Information</h2>
                <div className="space-y-2 text-foreground/90 leading-relaxed">
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <p>
                    <strong>Honeycomb Socials</strong><br />
                    Email: <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">contact@honeycombsocials.com</a><br />
                    Address: 8310 South Valley Highway, Suite 300, Englewood, CO 80112
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 mb-8">
              If you have any questions about these Terms of Service, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

