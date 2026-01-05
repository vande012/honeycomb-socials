"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

// Navigation items - easily customizable
const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "My Process",
    href: "/process",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Salons & Hairstylists", href: "/industries/salons-hairstylists" },
      { label: "Nail Technicians & Salons", href: "/industries/nail-salons" },
      { label: "Beauty Brands & Products", href: "/industries/beauty-brands" },
      { label: "Lash & Brow Artists", href: "/industries/lash-brow" },
      { label: "Makeup Artists", href: "/industries/makeup-artists" },
      { label: "Florist & Wedding", href: "/industries/florist-wedding" },
      { label: "Boutique & Lifestyle", href: "/industries/boutique-lifestyle" },
      { label: "Gyms & Fitness", href: "/industries/gyms" },
      { label: "Spas & MedSpas", href: "/industries/spas-medspas" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Full Social Media Management", href: "/services/full-management" },
      { label: "Content Creation", href: "/services/content-creation" },
      { label: "Brand Identity & Aesthetic Design", href: "/services/brand-identity" },
      { label: "Social Media Strategy", href: "/services/strategy" },
      { label: "Consulting & 1:1 Guidance", href: "/services/consulting" },
      { label: "Add-On Services", href: "/services/addons" },
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = React.useState<string | null>(null)

  return (
    <header className={cn("border-b-2 border-white/20 bg-[#1f1e1c]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1f1e1c]/90 sticky top-0 z-50", className)} role="banner">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Gold logo for dark navbar */}
            <Image
              src="/logo-gold.png"
              alt="Honeycomb Socials"
              width={300}
              height={102}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li 
                  key={item.label}
                  className="relative"
                >
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="text-base font-medium text-white/90 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 pt-2 w-64">
                          <div className="bg-[#1f1e1c] border-2 border-white/20 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-white/90 hover:text-primary hover:bg-white/10 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-base font-medium text-white/90 hover:text-primary transition-colors duration-200 relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side - CTA, Theme toggle and mobile menu */}
          <div className="flex items-center gap-3">
            {/* Free Audit CTA - Desktop only */}
            <Link href="/audit" className="hidden lg:inline-block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Free Audit
              </Button>
            </Link>

            <ThemeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-white/20 bg-[#1f1e1c]/95 backdrop-blur-sm">
            <nav className="py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-primary hover:bg-white/10 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1f1e1c]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            mobileOpenDropdown === item.label && "rotate-180"
                          )} />
                        </button>
                        
                        {/* Mobile Submenu */}
                        {mobileOpenDropdown === item.label && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm text-white/80 hover:text-primary hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-white/90 hover:text-primary hover:bg-white/10 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1f1e1c]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                
                {/* Mobile CTA */}
                <li className="pt-2">
                  <Link
                    href="/audit"
                    className="block mx-4 px-4 py-3 bg-primary text-primary-foreground font-semibold text-center rounded-2xl hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1f1e1c]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Free Audit
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
