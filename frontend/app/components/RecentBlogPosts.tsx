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
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#fafafa] via-[#faf8f0] to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1e1c] mb-4">
            Latest Insights
          </h2>
          <p className="text-lg md:text-xl text-[#1f1e1c]/80 max-w-3xl mx-auto">
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
                className="group bg-gradient-to-br from-white via-[#faf8f0] to-[#f5eed5] border border-[#e5e5e5] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#c9a86a] focus:ring-offset-2"
                aria-label={`Read blog post: ${post.title}`}
              >
                {/* Cover Image */}
                {coverImageUrl && (
                  <div className="relative h-48 overflow-hidden bg-[#f2e9d0]">
                    <Image
                      src={coverImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                          className="text-xs bg-[#f2e9d0] text-[#1f1e1c] hover:bg-[#c9a86a] hover:text-white transition-colors border-0"
                        >
                          {category?.name || 'Uncategorized'}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1f1e1c] mb-3 line-clamp-2 group-hover:text-[#c9a86a] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-[#1f1e1c]/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-[#1f1e1c]/60">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1f1e1c] via-[#2a2825] to-[#1f1e1c] hover:from-[#1f1e1c]/95 hover:via-[#2a2825]/95 hover:to-[#1f1e1c]/95 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-[#1f1e1c] focus:ring-offset-2 relative overflow-hidden"
            aria-label="View all blog posts"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c9a86a]/20 via-[#d4b87a]/30 to-[#c9a86a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

