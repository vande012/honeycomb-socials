import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownRenderer from './MarkdownRenderer';

/**
 * RichTextRenderer - Renders Strapi v5 rich text content
 * 
 * Strapi v5 rich text fields return an array of blocks in this format:
 * [
 *   {
 *     "type": "paragraph",
 *     "children": [
 *       {
 *         "type": "text",
 *         "text": "Some text",
 *         "bold": true,
 *         "italic": false
 *       }
 *     ]
 *   }
 * ]
 */

interface RichTextBlock {
  type: string;
  children?: RichTextNode[];
  image?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  url?: string;
  level?: number;
  format?: 'ordered' | 'unordered';
}

interface RichTextNode {
  type: 'text' | 'link';
  text?: string;
  url?: string;
  children?: RichTextNode[];
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface RichTextRendererProps {
  content: RichTextBlock[] | string;
  className?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content, className = '' }) => {
  // Handle string content (markdown or plain text) - use MarkdownRenderer for full markdown support
  if (typeof content === 'string') {
    return <MarkdownRenderer content={content} className={className} />;
  }

  // Handle array of rich text blocks
  if (!Array.isArray(content)) {
    return null;
  }

  // Helper to replace placeholders in text
  const replacePlaceholdersInline = (
    text: string, 
    allPlaceholders: Array<{ placeholder: string; content: React.ReactNode }>
  ): React.ReactNode => {
    const parts = text.split(/(__[\w_]+_\d+__)/g);
    return parts.map((part, index) => {
      const found = allPlaceholders.find(p => p.placeholder === part);
      if (found) {
        return <React.Fragment key={`part-${index}`}>{found.content}</React.Fragment>;
      }
      return <React.Fragment key={`part-${index}`}>{part}</React.Fragment>;
    });
  };

  // Process inline markdown in text (underscores and asterisks for italics/bold)
  const processInlineMarkdown = (text: string): React.ReactNode => {
    if (!text) return '';
    
    let processedText = text;
    let keyCounter = 0;

    // Collect all link matches first (process links before other formatting)
    const linkMatches: Array<{ match: string; text: string; url: string; index: number }> = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(text)) !== null) {
      linkMatches.push({
        match: match[0],
        text: match[1],
        url: match[2],
        index: match.index
      });
    }

    // Replace link matches in reverse order to preserve indices
    const linkPlaceholders: Array<{ placeholder: string; content: React.ReactNode }> = [];
    for (let i = linkMatches.length - 1; i >= 0; i--) {
      const linkMatch = linkMatches[i];
      const placeholder = `__LINK_${i}__`;
      const isExternal = linkMatch.url.startsWith('http://') || linkMatch.url.startsWith('https://');
      linkPlaceholders.push({
        placeholder,
        content: isExternal ? (
          <a 
            key={`link-${keyCounter++}`} 
            href={linkMatch.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {linkMatch.text}
          </a>
        ) : (
          <Link 
            key={`link-${keyCounter++}`} 
            href={linkMatch.url}
            className="text-primary hover:underline font-medium"
          >
            {linkMatch.text}
          </Link>
        )
      });
      processedText = processedText.substring(0, linkMatch.index) + 
                     placeholder + 
                     processedText.substring(linkMatch.index + linkMatch.match.length);
    }

    // Collect all bold matches
    const boldMatches: Array<{ match: string; content: string; index: number }> = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    // Reset regex lastIndex
    boldRegex.lastIndex = 0;
    while ((match = boldRegex.exec(processedText)) !== null) {
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
            {replacePlaceholdersInline(boldMatch.content, linkPlaceholders)}
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
            {replacePlaceholdersInline(italicMatch.content, [...linkPlaceholders, ...boldPlaceholders])}
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
            {replacePlaceholdersInline(italicMatch.content, [...linkPlaceholders, ...boldPlaceholders])}
          </em>
        )
      });
      processedText = processedText.substring(0, italicMatch.index) + 
                     placeholder + 
                     processedText.substring(italicMatch.index + italicMatch.match.length);
    }

    // Replace all placeholders in the final text
    const allPlaceholders = [
      ...linkPlaceholders,
      ...boldPlaceholders,
      ...italicUnderscorePlaceholders,
      ...italicAsteriskPlaceholders
    ];
    
    return replacePlaceholdersInline(processedText, allPlaceholders);
  };

  const renderNode = (node: RichTextNode, index: number = 0): React.ReactNode => {
    if (node.type === 'text') {
      let className = '';
      if (node.bold) className += ' font-bold';
      if (node.italic) className += ' italic';
      if (node.underline) className += ' underline';
      if (node.strikethrough) className += ' line-through';
      if (node.code) className += ' font-mono bg-muted px-1 py-0.5 rounded text-sm';

      // Process inline markdown patterns in the text
      const processedContent = processInlineMarkdown(node.text || '');

      return (
        <span key={`text-${index}`} className={className.trim() || undefined}>
          {processedContent}
        </span>
      );
    }

    if (node.type === 'link') {
      const url = node.url || '#';
      const isExternal = url.startsWith('http') || url.startsWith('//');

      if (isExternal) {
        return (
          <a
            key={`link-${index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {node.children?.map((child, i) => renderNode(child, i)) || node.text || ''}
          </a>
        );
      }

      return (
        <Link key={`link-${index}`} href={url} className="text-primary hover:underline">
          {node.children?.map((child, i) => renderNode(child, i)) || node.text || ''}
        </Link>
      );
    }

    // Handle nested children for other node types
    if (node.children && node.children.length > 0) {
      return (
        <React.Fragment key={`fragment-${index}`}>
          {node.children.map((child, i) => renderNode(child, i))}
        </React.Fragment>
      );
    }

    return null;
  };

  const renderHeading = (key: string, level: number, children: RichTextNode[] | undefined, index: number) => {
    const content = children?.map(renderNode);
    const headingClass = "mb-4 mt-8 first:mt-0";
    
    // Generate ID from the text content
    const text = children?.map(child => child.text || '').join('').trim() || '';
    const headingId = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

    switch (level) {
      case 1: return <h1 key={key} id={headingId} className={headingClass}>{content}</h1>;
      case 2: return <h2 key={key} id={headingId} className={headingClass}>{content}</h2>;
      case 3: return <h3 key={key} id={headingId} className={headingClass}>{content}</h3>;
      case 4: return <h4 key={key} id={headingId} className={headingClass}>{content}</h4>;
      case 5: return <h5 key={key} id={headingId} className={headingClass}>{content}</h5>;
      case 6: return <h6 key={key} id={headingId} className={headingClass}>{content}</h6>;
      default: return <h2 key={key} id={headingId} className={headingClass}>{content}</h2>;
    }
  };

  const renderBlock = (block: RichTextBlock, index: number): React.ReactNode => {
    const key = `block-${index}`;

    switch (block.type) {
      case 'paragraph':
        return (
          <p key={key} className="mb-4 leading-relaxed">
            {block.children?.map((child, i) => renderNode(child, i)) || ''}
          </p>
        );

      case 'heading':
        return renderHeading(key, block.level || 1, block.children, index);

      case 'list':
        const ListComponent = block.format === 'ordered' ? 'ol' : 'ul';
        const listClassName = block.format === 'ordered'
          ? 'list-decimal list-inside mb-4 space-y-2 ml-4'
          : 'list-disc list-inside mb-4 space-y-2 ml-4';

        return (
          <ListComponent key={key} className={listClassName}>
            {block.children?.map((child, childIndex) => (
              <li key={`list-item-${childIndex}`} className="leading-relaxed">
                {child.children?.map((node, nodeIndex) => renderNode(node, nodeIndex)) || renderNode(child, childIndex)}
              </li>
            ))}
          </ListComponent>
        );

      case 'list-item':
        return (
          <li key={key} className="leading-relaxed">
            {block.children?.map((child, i) => renderNode(child, i))}
          </li>
        );

      case 'quote':
      case 'blockquote':
        return (
          <blockquote key={key} className="border-l-4 border-primary pl-6 mb-4 italic text-muted-foreground py-2">
            {block.children?.map((child, i) => renderNode(child, i))}
          </blockquote>
        );

      case 'code':
        // Extract text from code block
        const codeText = block.children?.map(child => child.text || '').join('') || '';
        return (
          <pre key={key} className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm font-mono whitespace-pre">
              {codeText}
            </code>
          </pre>
        );

      case 'image':
        if (!block.image?.url) return null;

        // Handle both full URLs and relative paths
        const imageUrl = block.image.url.startsWith('http') 
          ? block.image.url 
          : block.image.url.startsWith('/') 
            ? block.image.url 
            : `/${block.image.url}`;

        return (
          <div key={key} className="mb-6">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={block.image.alternativeText || 'Image'}
                width={block.image.width || 800}
                height={block.image.height || 400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>
          </div>
        );

      default:
        // Handle unknown block types gracefully
        // Log in development to help identify missing block types
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Unknown rich text block type: ${block.type}`, block);
        }
        return (
          <div key={key} className="mb-4">
            {block.children?.map((child, i) => renderNode(child, i))}
          </div>
        );
    }
  };

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      {content.map(renderBlock)}
    </div>
  );
};

export default RichTextRenderer;
