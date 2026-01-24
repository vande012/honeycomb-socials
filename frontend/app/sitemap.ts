import { MetadataRoute } from 'next';
import { getAllSitemapEntries } from './utils/sitemap-utils';

/**
 * Next.js built-in sitemap generation
 * This generates /sitemap.xml automatically
 * 
 * This is the recommended approach for Next.js 13+ App Router
 * It integrates better with Next.js routing and caching
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const entries = await getAllSitemapEntries();
    
    return entries.map((entry) => ({
      url: entry.url,
      lastModified: entry.lastModified,
      changeFrequency: entry.changeFrequency || 'weekly',
      priority: entry.priority || 0.5,
    }));
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return minimal sitemap on error
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ];
  }
}


