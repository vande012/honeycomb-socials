'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Typography } from '../../components/ui/typography';
import { Category } from '../types/blog';

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams);
    
    if (categorySlug) {
      params.set('category', categorySlug);
    } else {
      params.delete('category');
    }
    
    // Reset to first page when filtering
    params.delete('page');
    
    const queryString = params.toString();
    const url = queryString ? `/blog?${queryString}` : '/blog';
    
    router.push(url);
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <Typography variant="h6" className="font-semibold">
        Filter by Category
      </Typography>
      
      <div className="flex flex-wrap gap-2">
        {/* All Categories Option */}
        <Button
          variant={!currentCategory ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(null)}
          className="rounded-full"
        >
          All Posts
          <Badge 
            variant="secondary" 
            className="ml-2 bg-white/20 text-inherit border-0"
          >
            {categories.reduce((total, cat) => total + (cat.blog_posts?.length || 0), 0)}
          </Badge>
        </Button>
        
        {/* Individual Categories */}
        {categories.map((category) => {
          const isActive = currentCategory === category.slug;
          const postCount = category.blog_posts?.length || 0;
          
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category.slug)}
              className="rounded-full"
            >
              {category.name}
              {postCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-white/20 text-inherit border-0"
                >
                  {postCount}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

