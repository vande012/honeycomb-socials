import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

interface BlogPost {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: any;
  categories?: any[];
}

interface RecentBlogPostsProps {
  posts: BlogPost[];
}

export function RecentBlogPosts({ posts }: RecentBlogPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const getReadingTime = (content: any) => {
    if (!content) return 5;
    const text = typeof content === 'string' ? content : JSON.stringify(content);
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getCoverImageUrl = (coverImage: any) => {
    if (!coverImage) return null;

    if (typeof coverImage === 'string') {
      return coverImage.startsWith('http') ? coverImage : `https://honeycomb-socials.s3.us-east-1.amazonaws.com${coverImage}`;
    }

    if (coverImage.url) {
      return coverImage.url.startsWith('http') 
        ? coverImage.url 
        : `https://honeycomb-socials.s3.us-east-1.amazonaws.com${coverImage.url}`;
    }

    if (coverImage.formats?.medium?.url) {
      return coverImage.formats.medium.url.startsWith('http')
        ? coverImage.formats.medium.url
        : `https://honeycomb-socials.s3.us-east-1.amazonaws.com${coverImage.formats.medium.url}`;
    }

    if (coverImage.data?.attributes?.url) {
      const url = coverImage.data.attributes.url;
      return url.startsWith('http') ? url : `https://honeycomb-socials.s3.us-east-1.amazonaws.com${url}`;
    }

    return null;
  };

  return (
    <section className="py-16 md:py-20 bg-[#f2dea9] dark:bg-[#6d3810]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tips, strategies, and insights to help you grow your beauty business through social media.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {posts.slice(0, 4).map((post) => {
            const coverImageUrl = getCoverImageUrl(post.coverImage);
            const readingTime = getReadingTime(post.excerpt);

            return (
              <Link
                key={post.id || post.documentId}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Cover Image */}
                {coverImageUrl && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={coverImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((category: any) => (
                        <Badge
                          key={category?.id || Math.random()}
                          variant="secondary"
                          className="text-xs"
                        >
                          {category?.name || 'Uncategorized'}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(post.publishedAt)}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{readingTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg group"
          >
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

