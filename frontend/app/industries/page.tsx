import Link from 'next/link';
import { 
  Scissors, 
  Palette, 
  Syringe, 
  HandMetal, 
  Package, 
  Eye, 
  Paintbrush, 
  Dumbbell 
} from 'lucide-react';

const industries = [
  {
    title: 'Salons & Hairstylists',
    href: '/industries/salons-hairstylists',
    icon: Scissors,
    description: 'Social media marketing tailored for hair salons, stylists, and beauty professionals.',
  },
  {
    title: 'Nail Technicians & Salons',
    href: '/industries/nail-salons',
    icon: HandMetal,
    description: 'Showcase your nail artistry and grow your client base with strategic content.',
  },
  {
    title: 'Beauty Brands & Products',
    href: '/industries/beauty-brands',
    icon: Package,
    description: 'Build your beauty brand with aesthetic content and strategic marketing.',
  },
  {
    title: 'Lash & Brow Artists',
    href: '/industries/lash-brow',
    icon: Eye,
    description: 'Attract more clients with stunning before-and-after content.',
  },
  {
    title: 'Makeup Artists',
    href: '/industries/makeup-artists',
    icon: Paintbrush,
    description: 'Showcase your artistry and book more clients with beautiful social content.',
  },
  {
    title: 'Florist & Wedding',
    href: '/industries/florist-wedding',
    icon: Palette,
    description: 'Attract brides and event planners with dreamy, on-brand content.',
  },
  {
    title: 'Boutique & Lifestyle',
    href: '/industries/boutique-lifestyle',
    icon: Package,
    description: 'Grow your boutique with content that converts browsers into buyers.',
  },
  {
    title: 'Gyms & Fitness',
    href: '/industries/gyms',
    icon: Dumbbell,
    description: 'Build a strong community and attract members with motivating content.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in beauty and wellness businesses that value aesthetics as much as results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.href}
                href={industry.href}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

