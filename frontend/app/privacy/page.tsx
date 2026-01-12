import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Privacy Policy | Honeycomb Socials',
  description: 'Privacy Policy for Honeycomb Socials. Learn how we collect, use, and protect your personal information and data.',
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/privacy`,
    title: 'Privacy Policy | Honeycomb Socials',
    description: 'Privacy Policy for Honeycomb Socials. Learn how we collect, use, and protect your personal information.',
    siteName: 'Honeycomb Socials',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Honeycomb Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Honeycomb Socials',
    description: 'Privacy Policy for Honeycomb Socials. Learn how we collect, use, and protect your personal information.',
    images: [ogImageUrl],
  },
}

export default function PrivacyPage() {
  const lastUpdated = 'January 2026'

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F2E9D0] to-[#F2DEA9] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy <span className="italic font-serif">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border/50 space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">1. Introduction</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Honeycomb Socials ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us.
                  </p>
                  <p>
                    By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy. We reserve the right to update this Privacy Policy at any time. Material changes will be communicated to active clients and users through email or prominent notice on our website.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We collect information that you provide directly to us, information collected automatically when you use our services, and information from third parties.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">2.1 Information You Provide</h3>
                  <p>
                    When you use our services, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                    <li><strong>Business Information:</strong> Business name, industry, business goals, target audience</li>
                    <li><strong>Account Information:</strong> Social media account credentials and access permissions</li>
                    <li><strong>Content and Materials:</strong> Photos, videos, brand assets, and other materials you provide for content creation</li>
                    <li><strong>Communication:</strong> Messages, inquiries, feedback, and other communications you send to us</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method information (processed securely through third-party payment processors)</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">2.2 Information Collected Automatically</h3>
                  <p>
                    When you visit our website or use our services, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, unique device identifiers</li>
                    <li><strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, search queries, referring website</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar technologies (see Section 7)</li>
                    <li><strong>Analytics Data:</strong> Website analytics, performance metrics, and user behavior data</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">2.3 Information from Third Parties</h3>
                  <p>
                    We may receive information from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Social Media Platforms:</strong> Public profile information, content, and analytics data from platforms we manage on your behalf</li>
                    <li><strong>Payment Processors:</strong> Payment confirmation and transaction information</li>
                    <li><strong>Service Providers:</strong> Information from third-party services we use to deliver our services</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our social media management services, including content creation, strategy development, and account management</li>
                    <li><strong>Communication:</strong> To respond to inquiries, provide customer support, send service updates, and communicate about your account or services</li>
                    <li><strong>Billing and Payment:</strong> To process payments, send invoices, and manage billing and account information</li>
                    <li><strong>Business Operations:</strong> To manage client relationships, fulfill contractual obligations, and operate our business</li>
                    <li><strong>Marketing:</strong> To send marketing communications, newsletters, and promotional materials (with your consent, where required by law)</li>
                    <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, improve our services, develop new features, and enhance user experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our terms of service, and protect our rights and interests</li>
                    <li><strong>Security:</strong> To detect, prevent, and address security issues, fraud, and other harmful activity</li>
                  </ul>
                </div>
              </div>

              {/* How We Share Your Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  
                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4.1 Service Providers</h3>
                  <p>
                    We may share information with third-party service providers who perform services on our behalf, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment processors for billing and payment processing</li>
                    <li>Email service providers for communication</li>
                    <li>Cloud storage providers for data storage</li>
                    <li>Analytics providers for website and service analytics</li>
                    <li>Social media scheduling and management tools</li>
                    <li>Other service providers necessary for service delivery</li>
                  </ul>
                  <p>
                    These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4.2 Legal Requirements</h3>
                  <p>
                    We may disclose information if required by law, court order, or government regulation, or if we believe disclosure is necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights, property, or safety, or that of our clients or others</li>
                    <li>Investigate fraud, security issues, or other harmful activity</li>
                    <li>Enforce our terms of service or other agreements</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4.3 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4.4 With Your Consent</h3>
                  <p>
                    We may share your information with your consent or at your direction, including for portfolio purposes, testimonials, or case studies (with your permission).
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">5. Data Security</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure password requirements and authentication procedures</li>
                    <li>Access controls limiting information access to authorized personnel only</li>
                    <li>Regular security assessments and updates</li>
                    <li>Secure cloud storage and backup systems</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the security of your account credentials and notifying us immediately of any unauthorized access.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We retain your personal information for as long as necessary to provide our services, fulfill our contractual obligations, comply with legal requirements, resolve disputes, and enforce our agreements. Specific retention periods depend on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The type of information and purpose for which it was collected</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Business and operational needs</li>
                    <li>Your requests to delete information</li>
                  </ul>
                  <p>
                    When information is no longer needed, we will securely delete or anonymize it, subject to legal retention requirements.
                  </p>
                </div>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to collect and store information about your use of our website. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Provide personalized content and advertising</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website. We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired).
                  </p>
                </div>
              </div>

              {/* Your Rights and Choices */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">8. Your Rights and Choices</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information and receive a copy</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                    <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                    <li><strong>Data Portability:</strong> Request transfer of your personal information to another service provider</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">contact@honeycombsocials.com</a>. We will respond to your request within a reasonable timeframe, subject to applicable law.
                  </p>
                  <p>
                    You may also unsubscribe from marketing communications by clicking the unsubscribe link in our emails or contacting us directly.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">10. Third-Party Links</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites, services, or social media platforms. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </div>
              </div>

              {/* International Data Transfers */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">11. International Data Transfers</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries. We take steps to ensure your information is protected in accordance with this Privacy Policy.
                  </p>
                </div>
              </div>

              {/* California Privacy Rights */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">12. California Privacy Rights</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to know what personal information we collect, use, and disclose</li>
                    <li>The right to delete personal information (subject to certain exceptions)</li>
                    <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                    <li>The right to non-discrimination for exercising your privacy rights</li>
                  </ul>
                  <p>
                    To exercise your California privacy rights, please contact us at <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">contact@honeycombsocials.com</a>.
                  </p>
                </div>
              </div>

              {/* Changes to This Privacy Policy */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Posting the updated Privacy Policy on our website with a new "Last Updated" date</li>
                    <li>Sending an email notification to active clients</li>
                    <li>Providing prominent notice on our website for significant changes</li>
                  </ul>
                  <p>
                    Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-l-4 border-primary">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">14. Contact Information</h2>
                <div className="space-y-2 text-foreground/90 leading-relaxed">
                  <p>
                    If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <p>
                    <strong>Honeycomb Socials</strong><br />
                    Email: <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">contact@honeycombsocials.com</a><br />
                    Address: 8310 South Valley Highway, Suite 300, Englewood, CO 80112<br />
                    Phone: +1-303-414-2057
                  </p>
                  <p className="mt-4">
                    We will respond to your inquiry within a reasonable timeframe and in accordance with applicable law.
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
              Questions About Privacy?
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 mb-8">
              If you have questions about our Privacy Policy or privacy practices, please don't hesitate to reach out.
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
                href="/terms"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

