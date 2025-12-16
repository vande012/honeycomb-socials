'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowLeft, Share2, Linkedin } from 'lucide-react';
import { getS3URL } from '../../api/api';
import { formatDate, getReadingTime } from '../../utils/blog-helpers';
import RichTextRenderer from '../../components/RichTextRenderer';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import TableOfContents from '../../components/TableOfContents';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

interface BlogPostClientProps {
  post: {
    title: string;
    publishedAt: string;
    excerpt?: string;
    content: any;
    coverImage?: any;
    categories?: any[];
    slug: string;
    markdownContent?: string;
  };
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get cover image URL
  const getCoverImageUrl = () => {
    if (!post.coverImage) return null;

    const image = post.coverImage as any;

    if (typeof image === 'string') {
      return image.startsWith('http') ? image : getS3URL(image);
    }

    if (image.url) {
      return image.url.startsWith('http') ? image.url : getS3URL(image.url);
    }

    if (image.formats?.large?.url) {
      return image.formats.large.url.startsWith('http')
        ? image.formats.large.url
        : getS3URL(image.formats.large.url);
    }

    if (image.data?.attributes?.url) {
      const attrs = image.data.attributes;
      return attrs.url.startsWith('http') ? attrs.url : getS3URL(attrs.url);
    }

    return null;
  };

  const coverImageUrl = getCoverImageUrl();
  const formattedDate = formatDate(post.publishedAt);
  const readingTime = post.content ? getReadingTime(JSON.stringify(post.content)) : 0;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnSocial = (platform: string) => {
    const text = `Check out this article: ${post.title}`;
    const url = currentUrl;

    let shareUrl = '';
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'x':
        shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-primary min-h-[60vh] md:min-h-[50vh]">
        {/* Image Background */}
        {coverImageUrl && (
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category: any) => (
                  <Link
                    key={category?.id || Math.random()}
                    href={`/blog/category/${category?.slug || 'uncategorized'}`}
                  >
                    <Badge variant="secondary" className="bg-background/20 text-primary-foreground hover:bg-background/30">
                      {category?.name || 'Uncategorized'}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center text-primary-foreground/80 mb-6">
              <span className="mr-4">{formattedDate}</span>
              <span className="mr-4">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{readingTime} min read</span>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Navigation & Share */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-medium mr-2">Share:</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => shareOnSocial('linkedin')}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Table of Contents */}
            {(post.markdownContent || (post.content && typeof post.content === 'string')) && (
              <TableOfContents
               className='mb-12' content={post.markdownContent || (typeof post.content === 'string' ? post.content : '')}
              />
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {(() => {
                if (post.markdownContent && typeof post.markdownContent === 'string' && post.markdownContent.trim()) {
                  return <MarkdownRenderer content={post.markdownContent} />;
                }

                if (post.content && Array.isArray(post.content) && post.content.length > 0) {
                  return <RichTextRenderer content={post.content} />;
                }

                if (post.content && typeof post.content === 'string' && post.content.trim()) {
                  return <MarkdownRenderer content={post.content} />;
                }

                if (post.content && typeof post.content === 'object' && !Array.isArray(post.content)) {
                  const textContent = post.content.text || post.content.content || post.content.body;
                  if (textContent && typeof textContent === 'string') {
                    return <MarkdownRenderer content={textContent} />;
                  }
                }

                return (
                  <p className="text-muted-foreground italic">
                    Content is not available.
                  </p>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Want to Learn More?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto">
              Explore more articles and insights on our blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button variant="secondary" size="lg">
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}