'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  maxVisiblePages = 5
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page > 1) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }

    const queryString = params.toString();
    const url = queryString ? `/blog?${queryString}` : '/blog';

    router.push(url);
  };

  // Don't render pagination if there's only one page or no pages
  if (totalPages <= 1) {
    return null;
  }

  // Calculate which page numbers to show
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible range
      let start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages - 1, start + maxVisiblePages - 3);

      // Adjust start if we're near the end
      if (end === totalPages - 1) {
        start = Math.max(2, end - maxVisiblePages + 3);
      }

      // Add ellipsis if there's a gap after first page
      if (start > 2) {
        pages.push('ellipsis');
      }

      // Add visible page range
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if there's a gap before last page
      if (end < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3"
        >
          Previous
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {visiblePages.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                  ...
                </span>
              );
            }

            const isCurrentPage = page === currentPage;

            return (
              <Button
                key={page}
                variant={isCurrentPage ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="min-w-[40px]"
              >
                {page}
              </Button>
            );
          })}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-3"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

