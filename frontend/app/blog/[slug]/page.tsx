import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/app/api/blog/api';
import { getS3URL } from '@/app/api/api';
import ArticleSchema from '@/app/components/ArticleSchema';
import { generateHreflangTags, generateOptimalMetaTitle } from '@/app/utils/seo';
import { generateConsistentOgImages } from '@/app/utils/metadata';
import { logger } from '@/app/utils/logger';
import qs from 'qs';
import BlogPostClient from './BlogPostClient';

// Next.js 15 compatible type definitions
type Params = Promise<{ slug: string }>;

// Revalidate blog posts every hour - content changes less frequently
export const revalidate = 3600;
export const dynamic = 'force-static';
export const dynamicParams = true;

/**
 * Generate metadata for the page
 */
export async function generateMetadata(
  props: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    // Properly await the params object
    const { slug } = await props.params;
    const post = await getBlogPostBySlug(slug).catch(error => {
      logger.error('Error generating metadata:', error);
      return { data: null };
    });

    if (!post || !post.data) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const { title, excerpt, seo, publishedAt, updatedAt, content, markdownContent, coverImage, categories } = post.data;

    // Base URL from environment - required
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) {
      logger.error('NEXT_PUBLIC_SITE_URL environment variable is required');
      throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
    }

    // Canonical URL for this blog post
    const canonicalUrl = `${baseUrl}/blog/${slug}`;

    // Generate optimal meta title and description
    const metaTitle = generateOptimalMetaTitle(
      seo?.metaTitle || title || 'Blog Post'
    );

    // Format blog post title as "Title | Blog"
    const blogPostTitle = title ? `${title} | Blog` : 'Blog Post | Blog';
    // Use full metaDescription from Strapi without truncation
    const metaDescription = seo?.metaDescription || excerpt || 'Read this article';

    // Use global shareImage from Strapi (cached via getGlobalData)
    // This ensures consistent OG images across all blog posts
    const ogImages = await generateConsistentOgImages(blogPostTitle || 'Blog Post');

    return {
      title: blogPostTitle,
      description: metaDescription,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'en': canonicalUrl,
          'x-default': canonicalUrl,
        },
      },
      openGraph: {
        images: ogImages,
        type: 'article',
        url: canonicalUrl,
        title: blogPostTitle,
        description: metaDescription,
        publishedTime: publishedAt,
        modifiedTime: updatedAt || publishedAt,
        authors: ['Honeycomb Socials'],
        section: categories?.[0]?.name || 'Blog',
        tags: categories?.map(c => c.name) || [],
      },
      twitter: {
        card: 'summary_large_image',
        images: ogImages.map(img => img.url),
        title: blogPostTitle,
        description: metaDescription,
      },
      other: {
        'article:published_time': publishedAt,
        'article:modified_time': updatedAt || publishedAt,
        'article:author': 'Honeycomb Socials',
        'article:section': categories?.[0]?.name || 'Blog',
        'article:tag': categories?.map(c => c.name).join(',') || '',
      },
    };
  } catch (error) {
    logger.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read this article',
    };
  }
}

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts({
      pagination: {
        limit: 100, // Limit to 100 posts for static generation
      },
    }).catch(error => {
      logger.error('Error fetching posts for static params:', error);
      // Return empty array to allow dynamic rendering, but log for monitoring
      return { data: [] };
    });

    if (!posts || !posts.data || !Array.isArray(posts.data)) {
      logger.warn('No posts data available for static params generation - will use dynamic rendering');
      // Return empty array to allow dynamic rendering
      return [];
    }

    const slugs = posts.data
      .filter(post => post.slug) // Ensure slug exists
      .map((post) => ({
        slug: post.slug,
      }));

    logger.log(`Generated ${slugs.length} static params for blog posts`);
    return slugs;
  } catch (error) {
    logger.error('Error generating static params:', error);
    // Return empty to allow dynamic rendering, but alert monitoring
    return [];
  }
}

/**
 * Direct API fetch to be used as fallback if needed
 */
async function fetchPostDirectly(slug: string) {
  try {
    logger.log(`Trying direct fetch for post with slug: ${slug}`);

    // Try both possible API endpoints and formats
    const endpoints = [
      'blog-posts',
      'blog-post',
      'articles', // Try other potential content types
      'article'
    ];

    let post = null;

    for (const endpoint of endpoints) {
      if (post) break;

      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        if (!apiUrl) {
          logger.error('NEXT_PUBLIC_STRAPI_API_URL is not set');
          continue;
        }
        const baseUrl = apiUrl.replace(/\/$/, '');

        // Try with qs library for more reliable parameter formatting
        const params = {
          filters: {
            slug: {
              $eq: slug,
            },
          },
          populate: {
            coverImage: true,
            categories: true,
            seo: true,
            content: true,
          },
        };

        // Import qs at the top of the file and use it here
        const queryString = qs.stringify(params, {
          encodeValuesOnly: true,
        });

        // Build the full URL
        const url = `${baseUrl}/api/${endpoint}?${queryString}`;
        logger.log(`Trying direct fetch from: ${url}`);

        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN || ''}`,
          },
          next: { revalidate: 3600 }, // Match page-level revalidation (1 hour)
        });

        if (!response.ok) {
          logger.log(`Endpoint ${endpoint} returned ${response.status}`);
          continue;
        }

        const data = await response.json();
        logger.log(`Direct fetch response structure:`, {
          hasData: !!data.data,
          dataType: data.data ? (Array.isArray(data.data) ? 'array' : 'object') : 'none',
        });

        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          post = {
            data: data.data[0],
            meta: data.meta
          };
          logger.log(`Successfully found post with endpoint: ${endpoint}`);
          break;
        } else if (data.data) {
          post = {
            data: data.data,
            meta: data.meta
          };
          logger.log(`Successfully found post with endpoint: ${endpoint}`);
          break;
        }
      } catch (endpointError) {
        logger.error(`Error fetching from endpoint ${endpoint}:`, endpointError);
      }
    }

    // If all API endpoints failed, try one more approach with the proxy API
    if (!post) {
      try {
        const proxyUrl = `/api/blog?type=posts&slug=${slug}`;
        logger.log(`Trying proxy API: ${proxyUrl}`);

        const response = await fetch(proxyUrl, {
          next: { revalidate: 3600 }, // Match page-level revalidation (1 hour)
        });

        if (response.ok) {
          const data = await response.json();
          if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            post = {
              data: data.data[0],
              meta: data.meta
            };
          } else if (data.data) {
            post = {
              data: data.data,
              meta: data.meta
            };
          }
        }
      } catch (proxyError) {
        logger.error('Error with proxy fetch:', proxyError);
      }
    }

    return post;
  } catch (error) {
    logger.error('Error in direct fetch:', error);
    return null;
  }
}

/**
 * Blog post page component
 */
export default async function BlogPostPage({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    logger.log(`Rendering blog post page for slug: ${slug}`);

    // Try getting the post through the normal API
    let post = await getBlogPostBySlug(slug).catch(error => {
      logger.error('Error in getBlogPostBySlug:', error);
      return null;
    });

    // If not found, try direct fetch as fallback
    if (!post || !post.data) {
      logger.log(`Post not found through normal API, trying direct fetch for: ${slug}`);
      const directPost = await fetchPostDirectly(slug);

      if (!directPost || !directPost.data) {
        logger.error(`Post not found with slug: ${slug} after all attempts`);
        notFound();
      }

      post = directPost;
    }

    // Ensure post data exists before destructuring
    if (!post.data) {
      logger.error(`Post data is null or undefined for slug: ${slug}`);
      notFound();
    }

    // Extract post data with safe fallbacks
    const {
      title = 'Untitled Post',
      publishedAt = new Date().toISOString(),
      updatedAt = publishedAt,
      excerpt = '',
      content = null,
      markdownContent = null,
      coverImage = null,
      categories = [],
      slug: postSlug = slug
    } = post.data || {};

    // Prepare the post data for the client component
    const postData = {
      title,
      publishedAt,
      excerpt,
      content,
      markdownContent: markdownContent || undefined,
      coverImage,
      categories,
      slug: postSlug
    };

    return (
      <>
        <ArticleSchema
          post={{
            title,
            excerpt,
            content: content || markdownContent || '',
            coverImage: coverImage?.url ? { url: coverImage.url } : undefined,
            publishedAt,
            updatedAt: updatedAt || publishedAt,
            categories,
            slug: postSlug
          }}
        />
        <BlogPostClient post={postData} />
      </>
    );
  } catch (error) {
    logger.error('Error fetching blog post:', error);
    notFound();
  }
} 