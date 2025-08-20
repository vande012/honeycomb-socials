import { BlogPost } from '../types/blog';

/**
 * Format date in a readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate reading time for content
 */
export function getReadingTime(content: any): number {
  let wordCount = 0;

  if (typeof content === 'string') {
    // Handle markdown or plain text content
    wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  } else if (Array.isArray(content)) {
    // Handle rich text blocks
    content.forEach((block: any) => {
      if (block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).filter((word: string) => word.length > 0).length;
          }
        });
      }
    });
  }

  // Average reading speed is 200-250 words per minute
  const wordsPerMinute = 225;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Sort blog posts based on different criteria
 */
export function sortBlogPosts(posts: BlogPost[], sortBy: string): BlogPost[] {
  const sortedPosts = [...posts];

  switch (sortBy) {
    case 'newest':
      return sortedPosts.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    
    case 'oldest':
      return sortedPosts.sort((a, b) => 
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    
    case 'a-z':
      return sortedPosts.sort((a, b) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    
    case 'z-a':
      return sortedPosts.sort((a, b) => 
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    
    default:
      return sortedPosts;
  }
}

/**
 * Extract excerpt from rich text content
 */
export function extractExcerpt(content: any, maxLength: number = 160): string {
  let text = '';

  if (typeof content === 'string') {
    text = content;
  } else if (Array.isArray(content)) {
    // Extract text from rich text blocks
    for (const block of content) {
      if (block.type === 'paragraph' && block.children) {
        const paragraphText = block.children
          .filter((child: any) => child.type === 'text')
          .map((child: any) => child.text)
          .join(' ');
        
        if (paragraphText.trim()) {
          text = paragraphText;
          break; // Use first paragraph
        }
      }
    }
  }

  // Clean up text and truncate
  text = text.replace(/\s+/g, ' ').trim();
  
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Check if a post is recent (published within last 7 days)
 */
export function isRecentPost(publishedAt: string): boolean {
  const publishedDate = new Date(publishedAt);
  const now = new Date();
  const daysDiff = (now.getTime() - publishedDate.getTime()) / (1000 * 3600 * 24);
  
  return daysDiff <= 7;
}

/**
 * Group posts by category
 */
export function groupPostsByCategory(posts: BlogPost[]): Record<string, BlogPost[]> {
  const grouped: Record<string, BlogPost[]> = {};
  
  posts.forEach(post => {
    const categoryName = post.categories?.[0]?.name || 'Uncategorized';
    
    if (!grouped[categoryName]) {
      grouped[categoryName] = [];
    }
    
    grouped[categoryName].push(post);
  });
  
  return grouped;
}

/**
 * Get related posts based on categories
 */
export function getRelatedPosts(
  currentPost: BlogPost, 
  allPosts: BlogPost[], 
  limit: number = 3
): BlogPost[] {
  const currentCategories = currentPost.categories?.map(cat => cat.id) || [];
  
  if (currentCategories.length === 0) {
    // If no categories, return most recent posts
    return allPosts
      .filter(post => post.id !== currentPost.id)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  }
  
  // Find posts with matching categories
  const relatedPosts = allPosts
    .filter(post => {
      if (post.id === currentPost.id) return false;
      
      const postCategories = post.categories?.map(cat => cat.id) || [];
      return postCategories.some(catId => currentCategories.includes(catId));
    })
    .sort((a, b) => {
      // Sort by number of matching categories, then by date
      const aMatches = a.categories?.filter(cat => 
        currentCategories.includes(cat.id)
      ).length || 0;
      const bMatches = b.categories?.filter(cat => 
        currentCategories.includes(cat.id)
      ).length || 0;
      
      if (aMatches !== bMatches) {
        return bMatches - aMatches;
      }
      
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
  
  // If we don't have enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => 
        post.id !== currentPost.id && 
        !relatedPosts.some(related => related.id === post.id)
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit - relatedPosts.length);
    
    relatedPosts.push(...recentPosts);
  }
  
  return relatedPosts;
}