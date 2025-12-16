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
  };
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({ post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://honeycombsocials.com';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage?.url ? [post.coverImage.url] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
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
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': baseUrl,
    },
    articleSection: post.categories?.[0]?.name || 'Blog',
    keywords: post.categories?.map(cat => cat.name).join(', ') || undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;

