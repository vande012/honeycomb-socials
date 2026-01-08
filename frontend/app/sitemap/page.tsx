import { Metadata } from 'next';
import Link from 'next/link';
import { getAllSitemapEntries, SitemapEntry } from '../utils/sitemap-utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Calendar, Globe, BookOpen, Briefcase, Building2 } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sitemap | Honeycomb Socials',
    description: 'Complete sitemap of all pages on Honeycomb Socials. Browse blog posts, services, industries, and more. Find everything you need to grow your business.',
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Group sitemap entries by category for better organization
 */
function groupEntries(entries: SitemapEntry[]) {
  const groups: {
    [key: string]: {
      title: string;
      icon: React.ComponentType<{ className?: string }>;
      entries: SitemapEntry[];
    };
  } = {
    static: {
      title: 'Main Pages',
      icon: Globe,
      entries: [],
    },
    blog: {
      title: 'Blog Posts',
      icon: BookOpen,
      entries: [],
    },
    categories: {
      title: 'Blog Categories',
      icon: FileText,
      entries: [],
    },
    services: {
      title: 'Services',
      icon: Briefcase,
      entries: [],
    },
    industries: {
      title: 'Industries',
      icon: Building2,
      entries: [],
    },
    other: {
      title: 'Other Pages',
      icon: FileText,
      entries: [],
    },
  };

  entries.forEach((entry) => {
    const url = entry.url.replace(baseUrl, '');
    
    if (url === '' || url === '/') {
      groups.static.entries.push(entry);
    } else if (url.startsWith('/blog/category/')) {
      groups.categories.entries.push(entry);
    } else if (url.startsWith('/blog/')) {
      groups.blog.entries.push(entry);
    } else if (url.startsWith('/services/')) {
      groups.services.entries.push(entry);
    } else if (url.startsWith('/industries/')) {
      groups.industries.entries.push(entry);
    } else if (
      url === '/about' ||
      url === '/portfolio' ||
      url === '/process' ||
      url === '/audit' ||
      url === '/blog' ||
      url === '/services' ||
      url === '/industries'
    ) {
      groups.static.entries.push(entry);
    } else {
      groups.other.entries.push(entry);
    }
  });

  // Remove empty groups
  return Object.entries(groups)
    .filter(([_, group]) => group.entries.length > 0)
    .map(([key, group]) => ({ key, ...group }));
}

/**
 * Format date for display
 */
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return 'N/A';
  }
}


export default async function SitemapPage() {
  let entries: SitemapEntry[] = [];
  let error: string | null = null;

  try {
    entries = await getAllSitemapEntries();
  } catch (err) {
    error = 'Failed to load sitemap entries';
    console.error('Error loading sitemap:', err);
  }

  const groupedEntries = groupEntries(entries);
  const totalCount = entries.length;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Complete list of all pages on our website
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-medium"
            >
              <FileText className="w-4 h-4" />
              View XML Sitemap
            </a>
            <p className="text-primary-foreground/70 text-sm">
              {totalCount} total pages
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {error ? (
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Error</CardTitle>
                <CardDescription className="text-red-600">{error}</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="space-y-8">
              {groupedEntries.map((group) => {
                const Icon = group.icon;
                return (
                  <Card key={group.key} className="border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">{group.title}</CardTitle>
                        <span className="ml-auto text-sm text-muted-foreground">
                          {group.entries.length} {group.entries.length === 1 ? 'page' : 'pages'}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.entries.map((entry) => {
                          const url = entry.url.replace(baseUrl, '') || '/';
                          const displayUrl = url === '/' ? 'Home' : url;
                          
                          return (
                            <div
                              key={entry.url}
                              className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card"
                            >
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <Link
                                  href={url}
                                  className="text-primary hover:text-primary/80 font-medium text-sm break-words flex-1"
                                >
                                  {displayUrl}
                                </Link>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{formatDate(entry.lastModified)}</span>
                                </div>
                                {entry.changeFrequency && (
                                  <span className="capitalize">
                                    {entry.changeFrequency}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Additional Information */}
          <Card className="mt-8 border-border">
            <CardHeader>
              <CardTitle>About This Sitemap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This sitemap includes all static pages, blog posts, categories, services, and industry pages
                from our website. Blog posts are automatically added when they are published in our CMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">XML Sitemap</h4>
                  <p className="text-sm">
                    For search engines, visit{' '}
                    <a href="/sitemap.xml" className="text-primary hover:underline">
                      /sitemap.xml
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Last Updated</h4>
                  <p className="text-sm">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

