import Link from 'next/link'
import { Home, Search, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Decorative Script Text */}
          <p className="script-font text-3xl sm:text-4xl text-primary mb-4 animate-fade-in-up">
            oops!
          </p>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            404
          </h1>
          
          {/* Subheading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            Page Not <span className="italic font-serif">Found</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-500">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 w-5 h-5" />
              Return Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-semibold rounded-lg transition-all duration-300"
            >
              <Search className="mr-2 w-5 h-5" />
              Browse Blog
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-card/50 rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/about"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center p-3 rounded-lg hover:bg-primary/5"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center p-3 rounded-lg hover:bg-primary/5"
              >
                Services
              </Link>
              <Link
                href="/process"
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center p-3 rounded-lg hover:bg-primary/5"
              >
                My Process
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-sm text-foreground/60 mt-8">
            If you believe this is an error, please{' '}
            <a href="mailto:contact@honeycombsocials.com" className="text-primary hover:underline">
              email us
            </a>
            {' '}and let us know.
          </p>
        </div>
      </section>
    </main>
  )
}

