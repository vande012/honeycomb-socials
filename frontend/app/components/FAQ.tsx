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
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#fafafa] to-[#f2e9d0]/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="script-font text-3xl sm:text-4xl text-[#c9a86a] mb-4">
            got questions?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[#1f1e1c]/80">
            I've got answers and I'm here to help
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id || faq.documentId || index}
              className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left transition-all duration-200 ${
                  openIndex === index
                    ? 'bg-[#f2e9d0]/30'
                    : 'hover:bg-[#fafafa]'
                }`}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1f1e1c] pr-4">
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
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2 bg-[#fafafa]/50">
                  <p className="text-base md:text-lg text-[#1f1e1c]/80 leading-relaxed">
                    {faq.Answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-br from-[#f2e9d0]/50 to-white border border-[#c9a86a]/20 rounded-2xl shadow-sm">
          <p className="script-font text-2xl sm:text-3xl text-[#c9a86a] mb-2">
            still have questions?
          </p>
          <p className="text-lg md:text-xl text-[#1f1e1c] mb-6">
            I'm here to help!
          </p>
          <a
            href="/audit"
            className="inline-block px-8 py-4 bg-[#1f1e1c] hover:bg-[#1f1e1c]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

