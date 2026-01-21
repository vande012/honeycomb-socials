'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

/**
 * ScrollReveal Component
 * 
 * Performance-optimized scroll animation using Intersection Observer.
 * Triggers animations when elements enter viewport.
 * 
 * @param children - Content to animate
 * @param className - Additional CSS classes
 * @param delay - Animation delay in milliseconds (default: 0)
 * @param threshold - Percentage of element visible before triggering (default: 0.1)
 */
export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Skip animation, show immediately
      element.style.opacity = '1'
      element.style.transform = 'none'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element is visible
            setTimeout(() => {
              element.classList.add('scroll-reveal')
            }, delay)
            
            // Disconnect after animation triggers (performance optimization)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin: '50px', // Start animation slightly before element enters viewport
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  return (
    <div 
      ref={elementRef} 
      className={`opacity-0 ${className}`}
      style={{ 
        transform: 'translateY(40px)',
        transition: 'none' // Prevent initial transition
      }}
    >
      {children}
    </div>
  )
}

/**
 * ScrollFade Component
 * Simple fade-in without translateY movement
 */
export function ScrollFade({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      element.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1'
              element.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }, delay)
            
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  )
}

