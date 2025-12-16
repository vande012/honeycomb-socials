'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 hexagon-button group"
      aria-label="Scroll to top"
    >
      <div className="hexagon-shape bg-primary hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
        <ArrowUp className="w-6 h-6 text-primary-foreground transition-transform duration-300 group-hover:-translate-y-1" />
      </div>
    </button>
  )
}

