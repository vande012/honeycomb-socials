import React from 'react';
import Image from 'next/image';

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
          <p key={elements.length} className="mb-4 leading-relaxed">
            {parseInlineMarkdown(currentParagraph.join(' '))}
          </p>
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
          const headingContent = parseInlineMarkdown(text);
          const headingClass = "mb-4 mt-8 first:mt-0";
          const headingId = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

          switch (level) {
            case 1:
              elements.push(<h1 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h1>);
              break;
            case 2:
              elements.push(<h2 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h2>);
              break;
            case 3:
              elements.push(<h3 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h3>);
              break;
            case 4:
              elements.push(<h4 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h4>);
              break;
            case 5:
              elements.push(<h5 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h5>);
              break;
            case 6:
              elements.push(<h6 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h6>);
              break;
            default:
              elements.push(<h2 key={elements.length} id={headingId} className={headingClass}>{headingContent}</h2>);
          }
        }
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        flushParagraph();
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Handle images ![alt](url)
      const imageMatch = trimmedLine.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        flushParagraph();
        flushList();
        const alt = imageMatch[1];
        const url = imageMatch[2];
        elements.push(
          <div key={elements.length} className="mb-6">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={url}
                alt={alt || 'Image'}
                width={800}
                height={600}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        );
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
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Check for inline images first
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    
    imageRegex.lastIndex = 0;

    while ((match = imageRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        elements.push(processTextFormatting(text.slice(lastIndex, match.index)));
      }

      // Add inline image
      const alt = match[1];
      const url = match[2];
      elements.push(
        <span key={`img-${match.index}`} className="inline-block my-2">
          <Image
            src={url}
            alt={alt || 'Image'}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
          />
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      elements.push(processTextFormatting(text.slice(lastIndex)));
    }

    // If no images found, just process the text
    if (elements.length === 0) {
      return processTextFormatting(text);
    }

    return elements;
  };

  // Process bold and italic text formatting
  const processTextFormatting = (text: string): React.ReactNode => {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Process bold text (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;

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

