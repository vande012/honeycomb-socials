import React from 'react';
import { Typography } from '../../components/ui/typography';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) {
    return null;
  }

  // Simple markdown parsing for basic elements
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inCodeBlock = false;
    let codeBlock: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <Typography key={elements.length} variant="p" className="mb-4 leading-relaxed">
            {parseInlineMarkdown(currentParagraph.join(' '))}
          </Typography>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside mb-4 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeBlock.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm font-mono">
              {codeBlock.join('\n')}
            </code>
          </pre>
        );
        codeBlock = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
          inCodeBlock = false;
        } else {
          flushParagraph();
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlock.push(line);
        return;
      }

      // Handle headers
      if (trimmedLine.startsWith('#')) {
        flushParagraph();
        flushList();
        
        const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
        if (headerMatch) {
          const level = headerMatch[1].length;
          const text = headerMatch[2];
          const variants = {
            1: 'h1',
            2: 'h2',
            3: 'h3',
            4: 'h4',
            5: 'h5',
            6: 'h6'
          } as const;

          elements.push(
            <Typography 
              key={elements.length} 
              variant={variants[level as keyof typeof variants] || 'h2'}
              className="mb-4 mt-8 first:mt-0"
            >
              {parseInlineMarkdown(text)}
            </Typography>
          );
        }
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        flushParagraph();
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Handle blockquotes
      if (trimmedLine.startsWith('> ')) {
        flushParagraph();
        flushList();
        elements.push(
          <blockquote key={elements.length} className="border-l-4 border-primary pl-6 mb-4 italic text-muted-foreground">
            {parseInlineMarkdown(trimmedLine.slice(2))}
          </blockquote>
        );
        return;
      }

      // Handle empty lines
      if (trimmedLine === '') {
        flushParagraph();
        flushList();
        return;
      }

      // Regular paragraph text
      flushList();
      currentParagraph.push(trimmedLine);
    });

    // Flush any remaining content
    flushParagraph();
    flushList();
    flushCodeBlock();

    return elements;
  };

  // Parse inline markdown elements
  const parseInlineMarkdown = (text: string): React.ReactNode => {
    let result = text;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Process bold text (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    
    // Reset regex
    boldRegex.lastIndex = 0;
    
    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }
      
      // Add bold text
      elements.push(
        <strong key={`bold-${match.index}`} className="font-bold">
          {match[1]}
        </strong>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    // If no bold text found, try italic
    if (elements.length === 0) {
      const italicRegex = /\*(.*?)\*/g;
      italicRegex.lastIndex = 0;
      lastIndex = 0;
      
      while ((match = italicRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          elements.push(text.slice(lastIndex, match.index));
        }
        
        elements.push(
          <em key={`italic-${match.index}`} className="italic">
            {match[1]}
          </em>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      if (lastIndex < text.length) {
        elements.push(text.slice(lastIndex));
      }
    }

    // If no formatting found, return original text
    if (elements.length === 0) {
      return text;
    }

    return elements;
  };

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      {parseMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;

