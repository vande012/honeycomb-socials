import { fetchAPI } from '../api/api';

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';

/**
 * Get static pages for sitemap
 */
export function getStaticPages(): SitemapEntry[] {
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}

/**
 * Get blog posts for sitemap
 */
export async function getBlogPosts(): Promise<SitemapEntry[]> {
  try {
    const response = await fetchAPI('blog-posts', {
      pagination: {
        pageSize: 100, // Adjust as needed
      },
      sort: ['publishedAt:desc'],
      fields: ['slug', 'publishedAt', 'updatedAt'],
    });

    if (!response?.data || !Array.isArray(response.data)) {
      console.warn('No blog posts found for sitemap');
      return [];
    }

    return response.data.map((post: any) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.publishedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

/**
 * Get blog categories for sitemap
 */
export async function getBlogCategories(): Promise<SitemapEntry[]> {
  try {
    const response = await fetchAPI('categories', {
      pagination: {
        pageSize: 50,
      },
      sort: ['name:asc'],
      fields: ['slug', 'updatedAt', 'publishedAt'],
    });

    if (!response?.data || !Array.isArray(response.data)) {
      console.warn('No blog categories found for sitemap');
      return [];
    }

    return response.data.map((category: any) => ({
      url: `${SITE_URL}/blog/category/${category.slug}`,
      lastModified: category.updatedAt || category.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Error fetching blog categories for sitemap:', error);
    return [];
  }
}

/**
 * Get industry pages for sitemap
 */
export async function getIndustryPages(): Promise<SitemapEntry[]> {
  try {
    const response = await fetchAPI('industries', {
      pagination: {
        pageSize: 50,
      },
      sort: ['displayOrder:asc'],
      fields: ['slug', 'updatedAt', 'publishedAt'],
      filters: {
        isActive: {
          $eq: true,
        },
      },
    });

    if (!response?.data || !Array.isArray(response.data)) {
      console.warn('No industries found for sitemap');
      return [];
    }

    return response.data.map((industry: any) => ({
      url: `${SITE_URL}/industries/${industry.slug}`,
      lastModified: industry.updatedAt || industry.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching industries for sitemap:', error);
    return [];
  }
}

/**
 * Get service pages for sitemap
 */
export function getServicePages(): SitemapEntry[] {
  const currentDate = new Date().toISOString();
  
  // Static service pages - these could eventually come from Strapi
  const servicePages = [
    'executive-search',
    'fractional-hiring',
    'contingency-hiring',
  ];

  return servicePages.map(service => ({
    url: `${SITE_URL}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}

/**
 * Get FAQ pages for sitemap
 */
export async function getFAQPages(): Promise<SitemapEntry[]> {
  try {
    // FAQ page itself
    const currentDate = new Date().toISOString();
    
    return [
      {
        url: `${SITE_URL}/faq`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      },
    ];
  } catch (error) {
    console.error('Error generating FAQ pages for sitemap:', error);
    return [];
  }
}

/**
 * Get all pages from Strapi for sitemap
 */
export async function getStrapiPages(): Promise<SitemapEntry[]> {
  try {
    const response = await fetchAPI('pages', {
      pagination: {
        pageSize: 100,
      },
      sort: ['updatedAt:desc'],
      fields: ['slug', 'updatedAt', 'publishedAt'],
    });

    if (!response?.data || !Array.isArray(response.data)) {
      console.warn('No Strapi pages found for sitemap');
      return [];
    }

    return response.data.map((page: any) => ({
      url: `${SITE_URL}${page.slug.startsWith('/') ? page.slug : `/${page.slug}`}`,
      lastModified: page.updatedAt || page.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching Strapi pages for sitemap:', error);
    return [];
  }
}

/**
 * Generate all sitemap entries
 */
export async function getAllSitemapEntries(): Promise<SitemapEntry[]> {
  try {
    const [
      staticPages,
      blogPosts,
      categories,
      industries,
      servicePages,
      faqPages,
      strapiPages,
    ] = await Promise.all([
      Promise.resolve(getStaticPages()),
      getBlogPosts(),
      getBlogCategories(),
      getIndustryPages(),
      Promise.resolve(getServicePages()),
      getFAQPages(),
      getStrapiPages(),
    ]);

    return [
      ...staticPages,
      ...blogPosts,
      ...categories,
      ...industries,
      ...servicePages,
      ...faqPages,
      ...strapiPages,
    ];
  } catch (error) {
    console.error('Error generating sitemap entries:', error);
    return getStaticPages(); // Fallback to static pages only
  }
}