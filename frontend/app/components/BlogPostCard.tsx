import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BlogPost } from '../types/blog';
import { formatDate, getReadingTime } from '../utils/blog-helpers';
import { getS3URL } from '../api/api';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const { title, slug, excerpt, coverImage, categories, publishedAt, content } = post;

  // Calculate reading time
  const readingTime = getReadingTime(content || excerpt || '');

  // Format date
  const formattedDate = formatDate(publishedAt);

  // Get image URL
  const imageUrl = coverImage?.url
    ? (coverImage.url.startsWith('http') ? coverImage.url : getS3URL(coverImage.url))
    : '/api/placeholder/400/240';

  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 col-span-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <Image
              src={imageUrl}
              alt={coverImage?.alternativeText || title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Featured
                </Badge>
                {categories && categories.length > 0 && (
                  <Badge variant="secondary">
                    {categories[0].name}
                  </Badge>
                )}
              </div>

              <CardTitle className="text-2xl lg:text-3xl mb-3 leading-tight">
                <Link
                  href={`/blog/${slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              </CardTitle>

              <CardDescription className="text-base leading-relaxed line-clamp-3">
                {excerpt}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <time dateTime={publishedAt}>{formattedDate}</time>
                <span>{readingTime} min read</span>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <Link href={`/blog/${slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={coverImage?.alternativeText || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {categories && categories.length > 0 && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-background/90 text-foreground">
                {categories[0].name}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardHeader className="pb-2">
          <CardTitle className="text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className="line-clamp-3 mb-4">
            {excerpt}
          </CardDescription>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <time dateTime={publishedAt}>{formattedDate}</time>
            <span>{readingTime} min read</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

