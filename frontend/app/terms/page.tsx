import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
const ogImageUrl = 'https://honeycomb-socials.s3.us-east-1.amazonaws.com/OG_Image_ff4eaa3237.png';

export const metadata: Metadata = {
  title: 'Terms of Service | Honeycomb Socials',
  description: 'Terms of Service for the Honeycomb Socials website. Learn about website usage terms, intellectual property rights, and legal disclaimers.',
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
    description: 'Terms of Service for the Honeycomb Socials website. Learn about website usage terms and legal disclaimers.',
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
    description: 'Terms of Service for the Honeycomb Socials website. Learn about website usage terms and legal disclaimers.',
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
              Please read these Terms of Service carefully before using our website.
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
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    These Terms of Service govern your access to and use of the Honeycomb Socials website.
                  </p>
                </div>
              </div>

              {/* Agreement to Terms */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    These Terms of Service ("Terms") govern your access to and use of the Honeycomb Socials website (the "Website"). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
                  </p>
                  <p>
                    These Terms apply only to website use. Any services provided by Honeycomb Socials are governed by separate written agreements.
                  </p>
                </div>
              </div>

              {/* Use of the Website */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">2. Use of the Website</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    You may use this Website for lawful, informational, and business purposes only. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>misuse or interfere with the Website</li>
                    <li>attempt unauthorized access to systems or data</li>
                    <li>submit false or misleading information</li>
                    <li>use the Website in a way that violates applicable laws or regulations</li>
                  </ul>
                  <p>
                    We reserve the right to restrict or terminate access to the Website at any time for violations of these Terms.
                  </p>
                </div>
              </div>

              {/* No Client Relationship or Professional Advice */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">3. No Client Relationship or Professional Advice</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    Information on this Website is provided for general informational purposes only. Nothing on this Website constitutes marketing, legal, financial, or business advice.
                  </p>
                  <p>
                    Submitting a contact form, inquiry, or application through the Website does not create a client relationship or obligate Honeycomb Socials to provide services. A client relationship is established only through a separate, signed agreement.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    All content on this Website, including text, graphics, logos, images, branding, and written materials, is the property of Honeycomb Socials or its licensors and is protected by intellectual property laws.
                  </p>
                  <p>
                    You may not copy, reproduce, distribute, modify, or create derivative works from Website content without prior written permission.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">5. Third-Party Links</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    This Website may contain links to third-party websites or platforms. Honeycomb Socials is not responsible for the content, policies, or practices of third-party sites. Accessing third-party links is at your own risk.
                  </p>
                </div>
              </div>

              {/* Disclaimer of Warranties */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    This Website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Website's operation, accuracy, or availability.
                  </p>
                  <p>
                    We do not guarantee that the Website will be uninterrupted, error-free, or free from harmful components.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    To the fullest extent permitted by law, Honeycomb Socials shall not be liable for any damages arising from or related to your use of, or inability to use, the Website. This includes, without limitation, indirect, incidental, consequential, or lost-profit damages.
                  </p>
                  <p>
                    Your sole remedy for dissatisfaction with the Website is to stop using it.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the State of Wisconsin, United States, without regard to conflict of law principles.
                  </p>
                </div>
              </div>

              {/* Changes to These Terms */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">9. Changes to These Terms</h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-l-4 border-primary">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <div className="space-y-2 text-foreground/90 leading-relaxed">
                  <p>
                    If you have questions about these Terms, please contact:
                  </p>
                  <p>
                    <strong>Honeycomb Socials</strong><br />
                    Email: <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">contact@honeycombsocials.com</a>
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

