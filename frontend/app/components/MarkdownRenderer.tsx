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
    let processedText = text;
    let keyCounter = 0;

    // Collect all bold matches first
    const boldMatches: Array<{ match: string; content: string; index: number }> = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    while ((match = boldRegex.exec(text)) !== null) {
      boldMatches.push({
        match: match[0],
        content: match[1],
        index: match.index
      });
    }

    // Replace bold matches in reverse order to preserve indices
    const boldPlaceholders: Array<{ placeholder: string; content: React.ReactNode }> = [];
    for (let i = boldMatches.length - 1; i >= 0; i--) {
      const boldMatch = boldMatches[i];
      const placeholder = `__BOLD_${i}__`;
      boldPlaceholders.push({
        placeholder,
        content: (
          <strong key={`bold-${keyCounter++}`} className="font-bold">
            {boldMatch.content}
          </strong>
        )
      });
      processedText = processedText.substring(0, boldMatch.index) + 
                     placeholder + 
                     processedText.substring(boldMatch.index + boldMatch.match.length);
    }

    // Collect all underscore italic matches
    // Match underscores for italics - handle cases like _"text"_, _text_, and _still_
    // This regex matches _text_ patterns, avoiding word-internal underscores when possible
    const italicUnderscoreMatches: Array<{ match: string; content: string; index: number }> = [];
    // Simple regex that matches _text_ - we'll filter out word-internal matches by checking context
    const italicUnderscoreRegex = /_(.+?)_/g;
    // Reset regex lastIndex and reuse existing match variable
    italicUnderscoreRegex.lastIndex = 0;
    while ((match = italicUnderscoreRegex.exec(processedText)) !== null) {
      const fullMatch = match[0];
      const content = match[1];
      const matchIndex = match.index;
      
      // Check if this is a valid italic match (not part of a word)
      // Valid if: at start/end of string, or surrounded by non-word characters/whitespace
      const beforeChar = matchIndex > 0 ? processedText[matchIndex - 1] : '';
      const afterChar = matchIndex + fullMatch.length < processedText.length 
        ? processedText[matchIndex + fullMatch.length] 
        : '';
      
      const isWordCharBefore = /[a-zA-Z0-9]/.test(beforeChar);
      const isWordCharAfter = /[a-zA-Z0-9]/.test(afterChar);
      
      // Only add if not part of a word (i.e., not surrounded by word characters)
      // This allows: _"text"_, _text_, _still_ but avoids: word_with_underscores
      if (!isWordCharBefore && !isWordCharAfter && content && content.trim().length > 0) {
        italicUnderscoreMatches.push({
          match: fullMatch,
          content: content,
          index: matchIndex
        });
      }
    }

    // Replace underscore italic matches in reverse order
    const italicUnderscorePlaceholders: Array<{ placeholder: string; content: React.ReactNode }> = [];
    for (let i = italicUnderscoreMatches.length - 1; i >= 0; i--) {
      const italicMatch = italicUnderscoreMatches[i];
      const placeholder = `__ITALIC_UNDERSCORE_${i}__`;
      italicUnderscorePlaceholders.push({
        placeholder,
        content: (
          <em key={`italic-underscore-${keyCounter++}`} className="italic">
            {italicMatch.content}
          </em>
        )
      });
      processedText = processedText.substring(0, italicMatch.index) + 
                     placeholder + 
                     processedText.substring(italicMatch.index + italicMatch.match.length);
    }

    // Collect all asterisk italic matches (single *, not **)
    const italicAsteriskMatches: Array<{ match: string; content: string; index: number }> = [];
    const italicAsteriskRegex = /(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g;
    // Reset regex lastIndex and reuse existing match variable
    italicAsteriskRegex.lastIndex = 0;
    while ((match = italicAsteriskRegex.exec(processedText)) !== null) {
      italicAsteriskMatches.push({
        match: match[0],
        content: match[1],
        index: match.index
      });
    }

    // Replace asterisk italic matches in reverse order
    const italicAsteriskPlaceholders: Array<{ placeholder: string; content: React.ReactNode }> = [];
    for (let i = italicAsteriskMatches.length - 1; i >= 0; i--) {
      const italicMatch = italicAsteriskMatches[i];
      const placeholder = `__ITALIC_ASTERISK_${i}__`;
      italicAsteriskPlaceholders.push({
        placeholder,
        content: (
          <em key={`italic-asterisk-${keyCounter++}`} className="italic">
            {italicMatch.content}
          </em>
        )
      });
      processedText = processedText.substring(0, italicMatch.index) + 
                     placeholder + 
                     processedText.substring(italicMatch.index + italicMatch.match.length);
    }

    // Split the processed text and replace placeholders
    const parts = processedText.split(/(__\w+_\d+__)/g);
    
    return parts.map((part, index) => {
      // Check if this part is a placeholder
      const boldPlaceholder = boldPlaceholders.find(p => p.placeholder === part);
      if (boldPlaceholder) {
        return <React.Fragment key={`part-${index}`}>{boldPlaceholder.content}</React.Fragment>;
      }

      const italicUnderscorePlaceholder = italicUnderscorePlaceholders.find(p => p.placeholder === part);
      if (italicUnderscorePlaceholder) {
        return <React.Fragment key={`part-${index}`}>{italicUnderscorePlaceholder.content}</React.Fragment>;
      }

      const italicAsteriskPlaceholder = italicAsteriskPlaceholders.find(p => p.placeholder === part);
      if (italicAsteriskPlaceholder) {
        return <React.Fragment key={`part-${index}`}>{italicAsteriskPlaceholder.content}</React.Fragment>;
      }

      // Regular text
      return <React.Fragment key={`part-${index}`}>{part}</React.Fragment>;
    });
  };

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      {parseMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;

