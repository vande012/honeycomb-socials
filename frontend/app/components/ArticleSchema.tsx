import { BlogPost } from '../types/blog';

interface ArticleSchemaProps {
  post: {
    title: string;
    excerpt: string;
    content: any;
    coverImage?: { url: string };
    publishedAt: string;
    updatedAt: string;
    categories?: { name: string }[];
    slug?: string;
  };
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({ post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_SITE_URL environment variable is required');
    return null;
  }

  // Validate required Schema.org Article fields
  const validateSchema = (schema: any) => {
    const required = ['@context', '@type', 'headline', 'datePublished'];
    const missing = required.filter(field => !schema[field]);
    if (missing.length > 0) {
      console.warn('ArticleSchema missing required fields:', missing);
    }
    return schema;
  };

  // Build canonical URL for the article
  const articleUrl = post.slug 
    ? `${baseUrl}/blog/${post.slug}`
    : baseUrl;
  
  const schema = validateSchema({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage?.url ? [{
      '@type': 'ImageObject',
      url: post.coverImage.url,
      width: 1200,
      height: 630,
    }] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Honeycomb Socials',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Honeycomb Socials',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo-dark.png`,
        width: 600,
        height: 600,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl, // Use actual article URL instead of base URL
    },
    articleSection: post.categories?.[0]?.name || 'Blog',
    keywords: post.categories?.map(cat => cat.name).join(', ') || undefined,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;

