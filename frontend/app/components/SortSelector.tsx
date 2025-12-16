'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../components/ui/button';

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'a-z', label: 'A to Z' },
  { value: 'z-a', label: 'Z to A' },
];

export default function SortSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'newest';

  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (sortValue !== 'newest') {
      params.set('sort', sortValue);
    } else {
      params.delete('sort');
    }

    // Reset to first page when sorting
    params.delete('page');

    const queryString = params.toString();
    const url = queryString ? `/blog?${queryString}` : '/blog';

    router.push(url);
  };

  return (
    <div className="space-y-3">
      <h6 className="font-semibold">
        Sort Posts
      </h6>

      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => {
          const isActive = currentSort === option.value;

          return (
            <Button
              key={option.value}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => handleSortChange(option.value)}
              className="rounded-full"
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

