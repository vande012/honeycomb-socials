"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Home, Palette, Code, BookOpen, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { Typography } from "./ui/typography"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "./utils"

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const navItems: NavItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    label: "Design System",
    href: "#color-palette",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Components",
    href: "#components",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Blog",
    href: "/blog",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.5,
  },
}

const sharedTransition = {
  duration: 0.3,
}

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className={cn("border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <motion.div 
              className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            />
            <Typography variant="large" className="font-bold">
              Vande Design System
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:block p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/40"
            initial="initial"
            whileHover="hover"
          >
            <ul className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="block rounded-lg overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: 0,
                      }}
                    />
                    <motion.a
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 relative z-10 bg-transparent text-muted-foreground hover:text-foreground transition-colors rounded-lg text-sm"
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    >
                      <span className={cn("transition-colors duration-300", `group-hover:${item.iconColor}`)}>
                        {item.icon}
                      </span>
                      <span className="hidden lg:inline">{item.label}</span>
                    </motion.a>
                    <motion.a
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground hover:text-foreground transition-colors rounded-lg text-sm"
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    >
                      <span className={cn("transition-colors duration-300", `group-hover:${item.iconColor}`)}>
                        {item.icon}
                      </span>
                      <span className="hidden lg:inline">{item.label}</span>
                    </motion.a>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={item.iconColor}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

