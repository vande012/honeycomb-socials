import { getAllSitemapEntries, SitemapEntry } from '../utils/sitemap-utils';

/**
 * Generate the sitemap XML for the website
 * This includes static pages and dynamic content from the API
 * 
 * NOTE: This project has two sitemap implementations:
 * 1. app/sitemap.ts - Uses Next.js built-in sitemap generation (RECOMMENDED)
 *    - Automatically generates /sitemap.xml
 *    - Better integration with Next.js routing and caching
 * 2. This file (sitemap.xml/route.ts) - Custom XML sitemap generation with more control
 *    - Generates /sitemap.xml/route (alternative endpoint)
 *    - Can be removed if app/sitemap.ts covers all needs
 * 
 * Both implementations use the same data sources from utils/sitemap-utils.ts
 * 
 * For human-readable sitemap, see: app/sitemap/page.tsx
 */
export async function GET(): Promise<Response> {
  try {
    // Get all sitemap entries
    const urls = await getAllSitemapEntries();
    
    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${urls.map(({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    ${changeFrequency ? `<changefreq>${changeFrequency}</changefreq>` : ''}
    ${priority !== undefined ? `<priority>${priority}</priority>` : ''}
  </url>`).join('')}
</urlset>`;

    // Return the XML with appropriate headers
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
} 