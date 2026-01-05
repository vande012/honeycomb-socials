'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

interface Service {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const services: Service[] = [
  {
    id: 'full-management',
    title: 'Full Social Media Management',
    description: 'Full-service social media management to keep your brand active, consistent, and growing.',
    image: '/full-service.jpg',
    imageAlt: 'Full Social Media Management'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Beautiful, on-brand photo and video content tailored to your aesthetic.',
    image: '/content.jpg',
    imageAlt: 'Content Creation'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Aesthetic Design',
    description: 'Visual branding that gives your business a cohesive, elevated look.',
    image: '/brand.jpg',
    imageAlt: 'Brand Identity & Aesthetic Design'
  },
  {
    id: 'strategy',
    title: 'Social Media Strategy',
    description: 'Custom strategy built around your goals, audience, and brand voice.',
    image: '/strategy.jpg',
    imageAlt: 'Social Media Strategy'
  },
  {
    id: 'consulting',
    title: 'Consulting & 1:1 Guidance',
    description: 'Hands-on support to help you improve your content and grow confidently.',
    image: '/consulting.jpg',
    imageAlt: 'Consulting & 1:1 Guidance'
  },
  {
    id: 'addons',
    title: 'Add-On Services',
    description: 'Extra reels, templates, email snippets, audits, and seasonal promos.',
    image: '/addon.jpg',
    imageAlt: 'Add-On Services'
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0)

  const nextService = () => {
    setSelectedService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setSelectedService((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[selectedService]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground mb-4">
            Services <span className="italic font-serif">Offered</span>
          </h2>
          <p className="text-lg md:text-xl text-card-foreground/90 max-w-4xl mx-auto">
            Helping small businesses grow through aesthetic, strategic social media.
          </p>
        </div>

        {/* Services Layout: List + Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Services List */}
            <div className="order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-5 md:p-7 rounded-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      selectedService === index
                        ? 'bg-primary text-primary-foreground shadow-xl scale-[1.02]'
                        : 'bg-card-foreground/10 hover:bg-card-foreground/20 text-card-foreground border-2 border-card-foreground/20 hover:border-card-foreground/30'
                    }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-serif ${selectedService === index ? 'font-bold' : 'font-medium'} mb-2`}>
                      {service.title}
                    </h3>
                    {selectedService === index && (
                      <p className="text-sm md:text-base text-black/80 mt-2">
                        {service.description}
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/services"
                  className="inline-block w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Explore all services"
                >
                  Explore All Services
                </a>
              </div>
            </div>

            {/* Right: Carousel - Fixed Height */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-card-foreground/10 rounded-3xl overflow-hidden border-2 border-card-foreground/20 w-full h-[500px] md:h-[600px] lg:h-[650px] shadow-lg">
                {/* Carousel Image - Fixed height container */}
                <div className="relative w-full h-full">
                  <Image
                    src={currentService.image}
                    alt={currentService.imageAlt}
                    fill
                    className="object-cover"
                    priority={selectedService === 0}
                    quality={90}
                  />
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/40 to-transparent" />
                </div>

                {/* Carousel Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-card-foreground mb-3">
                    {currentService.title}
                  </h3>
                  <p className="text-card-foreground/90 text-base md:text-lg leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Carousel Navigation - Enhanced visibility */}
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  <Button
                    onClick={prevService}
                    variant="outline"
                    size="icon"
                    className="bg-card/95 hover:bg-card border-2 border-card-foreground/30 text-card-foreground shadow-lg backdrop-blur-sm hover:scale-110 transition-all"
                    aria-label="Previous service"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={nextService}
                    variant="outline"
                    size="icon"
                    className="bg-card/95 hover:bg-card border-2 border-card-foreground/30 text-card-foreground shadow-lg backdrop-blur-sm hover:scale-110 transition-all"
                    aria-label="Next service"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Carousel Indicators - Enhanced visibility */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        selectedService === index
                          ? 'w-8 bg-primary shadow-md'
                          : 'w-2 bg-card-foreground/40 hover:bg-card-foreground/60'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

