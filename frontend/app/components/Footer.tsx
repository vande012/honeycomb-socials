import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

// Social media links
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/honeycomb.socials/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/HoneycombSocials/',
    icon: Facebook,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@honeycomb.socials',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
];

// Navigation structure matching navbar
const footerNav = {
  main: [
    { label: 'About', href: '/about' },
    { label: 'My Process', href: '/process' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  industries: {
    title: 'Industries',
    links: [
      { label: 'Salons & Hairstylists', href: '/industries/salons-hairstylists' },
      { label: 'Nail Technicians & Salons', href: '/industries/nail-salons' },
      { label: 'Beauty Brands & Products', href: '/industries/beauty-brands' },
      { label: 'Lash & Brow Artists', href: '/industries/lash-brow' },
      { label: 'Makeup Artists', href: '/industries/makeup-artists' },
      { label: 'Florist & Wedding', href: '/industries/florist-wedding' },
      { label: 'Boutique & Lifestyle', href: '/industries/boutique-lifestyle' },
      { label: 'Gyms & Fitness', href: '/industries/gyms' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Full Social Media Management', href: '/services/full-management' },
      { label: 'Content Creation', href: '/services/content-creation' },
      { label: 'Brand Identity & Aesthetic Design', href: '/services/brand-identity' },
      { label: 'Social Media Strategy', href: '/services/strategy' },
      { label: 'Consulting & 1:1 Guidance', href: '/services/consulting' },
      { label: 'Add-On Services', href: '/services/addons' },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {/* Dark logo for light theme */}
              <Image
                src="/logo-dark.png?v=2"
                alt="Honeycomb Socials"
                width={300}
                height={102}
                className="h-24 md:h-28 w-auto object-contain dark:hidden"
                priority
              />
              {/* Light logo for dark theme */}
              <Image
                src="/logo-light.png?v=2"
                alt="Honeycomb Socials"
                width={300}
                height={102}
                className="h-24 md:h-28 w-auto object-contain hidden dark:block"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Social media management for beauty and wellness businesses that value aesthetics as much as results.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {footerNav.industries.title}
            </h3>
            <ul className="space-y-3">
              {footerNav.industries.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {footerNav.services.title}
            </h3>
            <ul className="space-y-3">
              {footerNav.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Honeycomb Socials. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

