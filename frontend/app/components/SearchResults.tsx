'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Typography } from '../../components/ui/typography';
import { SearchResult, SearchResponse } from '../api/search/route';

interface SearchResultsProps {
  initialQuery: string;
  initialPage: number;
  initialType: string;
}

const contentTypeIcons = {
  blog: '📄',
  page: '📋',
  faq: '❓',
};

const contentTypeLabels = {
  blog: 'Blog Post',
  page: 'Page',
  faq: 'FAQ',
};

export default function SearchResults({ 
  initialQuery, 
  initialPage, 
  initialType 
}: SearchResultsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentType, setCurrentType] = useState(initialType);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 10;

  // Perform search
  const performSearch = async (searchQuery: string, page: number, type: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setTotal(0);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&page=${page}&pageSize=${pageSize}&type=${type}`);
      
      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data: SearchResponse = await response.json();
      setResults(data.results);
      setTotal(data.total);
    } catch (err) {
      setError('Failed to perform search. Please try again.');
      setResults([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  // Update URL when search parameters change
  const updateURL = (newQuery: string, newPage: number, newType: string) => {
    const params = new URLSearchParams();
    
    if (newQuery.trim()) {
      params.set('q', newQuery);
    }
    
    if (newPage > 1) {
      params.set('page', newPage.toString());
    }
    
    if (newType !== 'all') {
      params.set('type', newType);
    }

    const queryString = params.toString();
    const url = queryString ? `/search?${queryString}` : '/search';
    
    router.push(url, { scroll: false });
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newPage = 1;
    setCurrentPage(newPage);
    updateURL(query, newPage, currentType);
    performSearch(query, newPage, currentType);
  };

  // Handle type filter change
  const handleTypeChange = (newType: string) => {
    const newPage = 1;
    setCurrentType(newType);
    setCurrentPage(newPage);
    updateURL(query, newPage, newType);
    performSearch(query, newPage, newType);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updateURL(query, newPage, currentType);
    performSearch(query, newPage, currentType);
  };

  // Perform initial search
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery, initialPage, initialType);
    }
  }, []); // Only run on mount

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Search Form */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blog posts, pages, and FAQs..."
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Type Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { value: 'all', label: 'All Results' },
          { value: 'blog', label: 'Blog Posts' },
          { value: 'page', label: 'Pages' },
          { value: 'faq', label: 'FAQs' },
        ].map((typeOption) => (
          <Button
            key={typeOption.value}
            variant={currentType === typeOption.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleTypeChange(typeOption.value)}
            className="rounded-full"
          >
            {typeOption.label}
          </Button>
        ))}
      </div>

      {/* Results */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <Card>
          <CardContent className="p-6 text-center">
            <Typography variant="h6" className="text-destructive mb-2">
              Search Error
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              {error}
            </Typography>
          </CardContent>
        </Card>
      ) : results.length > 0 ? (
        <>
          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <Typography variant="small" className="text-muted-foreground">
              Found {total} result{total !== 1 ? 's' : ''} for "{query}"
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              Page {currentPage} of {totalPages}
            </Typography>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results.map((result) => (
              <Card key={result.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">
                      {contentTypeIcons[result.type]}
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Typography variant="h6" className="leading-tight">
                          <Link 
                            href={result.url}
                            className="hover:text-primary transition-colors"
                          >
                            {result.title}
                          </Link>
                        </Typography>
                        <Badge variant="outline" className="text-xs">
                          {contentTypeLabels[result.type]}
                        </Badge>
                      </div>
                      
                      <Typography variant="p" className="text-muted-foreground leading-relaxed">
                        {result.excerpt}
                      </Typography>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Link 
                          href={result.url}
                          className="text-primary hover:underline"
                        >
                          {result.url}
                        </Link>
                        {result.publishedAt && (
                          <time dateTime={result.publishedAt}>
                            {new Date(result.publishedAt).toLocaleDateString()}
                          </time>
                        )}
                        {result.category && (
                          <Badge variant="secondary" className="text-xs">
                            {result.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </Button>
              
              <span className="px-4 py-2 text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      ) : query ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Typography variant="h6" className="mb-2">
              No Results Found
            </Typography>
            <Typography variant="p" className="text-muted-foreground mb-4">
              We couldn't find any results for "{query}". Try adjusting your search terms.
            </Typography>
            <Button 
              variant="outline" 
              onClick={() => {
                setQuery('');
                setResults([]);
                setTotal(0);
                updateURL('', 1, 'all');
              }}
            >
              Clear Search
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Typography variant="h6" className="mb-2">
              Start Searching
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Enter a search term to find blog posts, pages, and FAQs.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

