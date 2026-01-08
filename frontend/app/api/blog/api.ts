import { fetchAPI } from '../api';
import { logger } from '@/app/utils/logger';
import { BlogPostResponse, BlogPostsResponse, CategoriesResponse, CategoryResponse } from '@/app/types/blog';

// Correct paths for Strapi v5
const BLOG_POSTS_ENDPOINT = 'blog-posts';  // Could also be 'api::blog-post.blog-post'
const CATEGORIES_ENDPOINT = 'categories';  // Could also be 'api::category.category'

/**
 * Get all blog posts with pagination
 * @param {Object} params Optional parameters for pagination, filtering, etc.
 * @returns {Promise<BlogPostsResponse>} Blog posts data
 */
export async function getBlogPosts(params = {}) {
  const defaultParams = {
    populate: {
      coverImage: {
        populate: '*',
      },
      categories: {
        populate: '*',
      },
      seo: {
        populate: '*',
      },
    },
    sort: ['publishedAt:desc'],
  };

  const mergedParams = { ...defaultParams, ...params };
  logger.log('Getting blog posts with params:', JSON.stringify(mergedParams, null, 2));
  
  try {
    // Try both formats if needed
    try {
      const response = await fetchAPI(BLOG_POSTS_ENDPOINT, mergedParams, {
        next: { revalidate: 300 } // Cache for 5 minutes
      });
      return response as BlogPostsResponse;
    } catch (error) {
      logger.log('Trying alternative endpoint format...');
      const response = await fetchAPI('api::blog-post.blog-post', mergedParams, {
        next: { revalidate: 300 }
      });
      return response as BlogPostsResponse;
    }
  } catch (error) {
    logger.error('Error fetching blog posts:', error);
    throw error;
  }
}

/**
 * Get a single blog post by slug
 * @param {string} slug The slug of the blog post
 * @returns {Promise<BlogPostResponse>} Blog post data
 */
export async function getBlogPostBySlug(slug: string) {
  logger.log(`Fetching blog post with slug: ${slug}`);
  
  // First try with wildcard populate - safest approach for unknown content structure
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*'
  };

  try {
    // Try multiple endpoint variations to increase chances of success
    const endpointVariations = [
      BLOG_POSTS_ENDPOINT,
      'api::blog-post.blog-post', 
      'blog-post',
      'articles',
      'article',
      'posts',
      'post'
    ];
    
    let response = null;
    let error = null;
    
    // Try each endpoint until one works
    for (const endpoint of endpointVariations) {
      try {
        logger.log(`Trying to fetch blog post with endpoint: ${endpoint}`);
        response = await fetchAPI(endpoint, params, {
          next: { revalidate: 3600 } // Cache for 1 hour - blog posts change less frequently
        });
        if (response) {
          logger.log(`Success with endpoint: ${endpoint}`);
          break;
        }
      } catch (endpointError) {
        logger.warn(`Failed with endpoint ${endpoint}:`, endpointError);
        error = endpointError;
      }
    }
    
    // If wildcard populate failed, try with deep populate for relations
    if (!response) {
      logger.log('Trying with deep populate...');
      const deepParams = {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          coverImage: {
            populate: '*',
          },
          categories: {
            populate: '*',
          },
          seo: {
            populate: '*',
          },
          images: {
            populate: '*'
          },
        }
      };
      
      for (const endpoint of endpointVariations) {
        try {
          logger.log(`Trying deep populate with endpoint: ${endpoint}`);
          response = await fetchAPI(endpoint, deepParams, {
            next: { revalidate: 3600 }
          });
          if (response) {
            logger.log(`Success with deep populate and endpoint: ${endpoint}`);
            break;
          }
        } catch (endpointError) {
          logger.warn(`Failed deep populate with endpoint ${endpoint}:`, endpointError);
          error = endpointError;
        }
      }
    }
    
    // If all endpoints failed, throw the last error
    if (!response) {
      logger.error(`All endpoints failed to fetch blog post with slug: ${slug}`);
      throw error || new Error('Failed to fetch blog post');
    }
    
    logger.log(`Blog post response data:`, {
      hasData: !!response.data,
      dataType: response.data ? (Array.isArray(response.data) ? 'array' : 'object') : 'none',
      length: response.data && Array.isArray(response.data) ? response.data.length : 'n/a'
    });
    
    // Log the actual content structure for debugging
    const postData = Array.isArray(response.data) ? response.data[0] : response.data;
    if (postData) {
      logger.log('Post content structure:', {
        hasContent: !!postData.content,
        contentType: typeof postData.content,
        hasMarkdownContent: !!postData.markdownContent,
        markdownContentType: typeof postData.markdownContent,
        allFields: Object.keys(postData),
        contentPreview: postData.content ? JSON.stringify(postData.content).substring(0, 100) : 'none'
      });
    }
    
    // Check if we have any data
    if (!response.data || (Array.isArray(response.data) && response.data.length === 0)) {
      logger.error(`No blog post found with slug: ${slug}`);
      // Use type assertion to handle the null case
      return { data: null, meta: response.meta } as unknown as BlogPostResponse;
    }
    
    // Handle both array and single object responses
    return {
      data: Array.isArray(response.data) ? response.data[0] : response.data,
      meta: response.meta,
    } as BlogPostResponse;
  } catch (error) {
    logger.error(`Error fetching blog post with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Get all categories
 * @param {Object} params Optional parameters
 * @returns {Promise<CategoriesResponse>} Categories data
 */
export async function getCategories(params = {}) {
  const defaultParams = {
    populate: '*',
    sort: ['name:asc'],
  };

  const mergedParams = { ...defaultParams, ...params };
  
  try {
    // Try both formats if needed
    try {
      const response = await fetchAPI(CATEGORIES_ENDPOINT, mergedParams, {
        next: { revalidate: 3600 } // Cache for 1 hour - categories change infrequently
      });
      return response as CategoriesResponse;
    } catch (error) {
      logger.log('Trying alternative endpoint format for categories...');
      const response = await fetchAPI('api::category.category', mergedParams, {
        next: { revalidate: 3600 }
      });
      return response as CategoriesResponse;
    }
  } catch (error) {
    logger.error('Error fetching categories:', error);
    throw error;
  }
}

/**
 * Get a single category by slug
 * @param {string} slug The slug of the category
 * @returns {Promise<CategoryResponse>} Category data
 */
export async function getCategoryBySlug(slug: string) {
  logger.log(`Fetching category with slug: ${slug}`);
  
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*' // Use wildcard populate for Strapi v5 compatibility
  };

  try {
    // Try both formats if needed
    let response;
    try {
      response = await fetchAPI(CATEGORIES_ENDPOINT, params, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });
    } catch (firstError) {
      logger.log('Trying alternative endpoint format for category...');
      response = await fetchAPI('api::category.category', params, {
        next: { revalidate: 3600 }
      });
    }
    
    logger.log(`Category response data structure:`, {
      hasData: !!response.data,
      dataType: response.data ? (Array.isArray(response.data) ? 'array' : 'object') : 'none',
      length: response.data && Array.isArray(response.data) ? response.data.length : 'n/a'
    });
    
    // Check if we have any data
    if (!response.data || (Array.isArray(response.data) && response.data.length === 0)) {
      logger.error(`No category found with slug: ${slug}`);
      // Use type assertion to handle the null case
      return { data: null, meta: response.meta } as unknown as CategoryResponse;
    }
    
    // Handle both array and single object responses
    return {
      data: Array.isArray(response.data) ? response.data[0] : response.data,
      meta: response.meta,
    } as CategoryResponse;
  } catch (error) {
    logger.error(`Error fetching category with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Get blog posts filtered by category slug
 * @param {string} categorySlug The slug of the category to filter by
 * @param {Object} params Additional parameters
 * @returns {Promise<BlogPostsResponse>} Blog posts data
 */
export async function getBlogPostsByCategory(categorySlug: string, params = {}) {
  const defaultParams = {
    filters: {
      categories: {
        slug: {
          $eq: categorySlug,
        },
      },
    },
    populate: {
      coverImage: {
        populate: '*',
      },
      categories: {
        populate: '*',
      },
      seo: {
        populate: '*',
      },
    },
    sort: ['publishedAt:desc'],
  };

  const mergedParams = { ...defaultParams, ...params };
  logger.log(`Getting blog posts for category ${categorySlug} with params:`, JSON.stringify(mergedParams, null, 2));
  
  try {
    // Try both formats if needed
    try {
      const response = await fetchAPI(BLOG_POSTS_ENDPOINT, mergedParams, {
        next: { revalidate: 300 } // Cache for 5 minutes
      });
      return response as BlogPostsResponse;
    } catch (error) {
      logger.log('Trying alternative endpoint format for filtered posts...');
      const response = await fetchAPI('api::blog-post.blog-post', mergedParams, {
        next: { revalidate: 300 }
      });
      return response as BlogPostsResponse;
    }
  } catch (error) {
    logger.error(`Error fetching blog posts for category ${categorySlug}:`, error);
    throw error;
  }
} 