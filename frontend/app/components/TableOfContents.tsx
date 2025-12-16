'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: any;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, className = '' }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Extract headings from content
  useEffect(() => {
    const extractHeadings = () => {
      const headings: TOCItem[] = [];

      // Handle rich text content (array of blocks)
      if (Array.isArray(content)) {
        content.forEach((block, index) => {
          if (block.type === 'heading' && block.children) {
            const text = block.children
              .map((child: any) => child.text || '')
              .join('')
              .trim();

            if (text) {
              const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
              headings.push({
                id,
                text,
                level: block.level || 1,
              });
            }
          }
        });
      }
      // Handle markdown content (string)
      else if (typeof content === 'string') {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          const headerMatch = line.trim().match(/^(#{1,6})\s+(.+)$/);
          if (headerMatch) {
            const level = headerMatch[1].length;
            const text = headerMatch[2].trim();
            const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

            headings.push({
              id,
              text,
              level,
            });
          }
        });
      }

      setTocItems(headings);
    };

    extractHeadings();
  }, [content]);

  // Handle scroll spy
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const headingElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const windowHeight = window.innerHeight;
      const midPoint = windowHeight / 2;

      // Find the heading that's closest to the midpoint
      let currentHeading = '';
      let closestDistance = Infinity;

      headingElements.forEach(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - midPoint);

          if (distance < closestDistance && rect.top <= midPoint + 100) {
            closestDistance = distance;
            currentHeading = element.id;
          }
        }
      });

      setActiveId(currentHeading);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // Scroll to heading - position at midpoint of screen
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with block: 'center' for better browser support
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  };

  // Don't render if no headings
  if (tocItems.length === 0) {
    return null;
  }

  return (
    <Card className={`sticky top-24 ${className}`}>
      <CardHeader className="pb-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Table of Contents</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? '▼' : '▲'}
          </Button>
        </div>
      </CardHeader>

      {!isCollapsed && (
        <CardContent className="pt-0">
          <nav className="space-y-1">
            {tocItems.map((item) => {
              const isActive = activeId === item.id;
              const indentClass = item.level > 1 ? `ml-${(item.level - 1) * 4}` : '';

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`
                    block w-full text-left text-sm py-1 px-2 rounded transition-colors
                    ${isActive
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                    ${indentClass}
                  `}
                >
                  <span className="text-sm truncate">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </nav>
        </CardContent>
      )}
    </Card>
  );
};

export default TableOfContents;

