import { MetadataRoute } from 'next'

/**
 * Next.js built-in robots.txt generation
 * This generates /robots.txt automatically
 * 
 * Configures search engine crawlers to index all pages
 * and points them to the sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Disallow API routes
          '/_next/',         // Disallow Next.js internals
          '/admin/',         // Disallow admin if exists
        ],
      },
      {
        userAgent: 'GPTBot',  // OpenAI's web crawler
        allow: '/',
      },
      {
        userAgent: 'CCBot',   // Common Crawl bot
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

