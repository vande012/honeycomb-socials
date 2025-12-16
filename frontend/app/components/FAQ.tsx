'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  documentId?: string
  Question: string
  Answer: string
  Order?: number
  Category?: string | null
}

interface FAQProps {
  faqs: FAQItem[]
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!faqs || faqs.length === 0) {
    return null
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id || faq.documentId || index}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-muted/50"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                  {faq.Question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {faq.Answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16 p-8 bg-card border-2 border-primary/20 rounded-xl">
          <p className="text-lg md:text-xl text-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

