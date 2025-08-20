import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '../../components/ui/typography';

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
  // Handle string content (markdown or plain text)
  if (typeof content === 'string') {
    return (
      <div className={`prose prose-slate max-w-none ${className}`}>
        <Typography variant="p" className="whitespace-pre-wrap">
          {content}
        </Typography>
      </div>
    );
  }

  // Handle array of rich text blocks
  if (!Array.isArray(content)) {
    return null;
  }

  const renderNode = (node: RichTextNode): React.ReactNode => {
    if (node.type === 'text') {
      let text = node.text || '';
      
      // Apply text formatting
      if (node.bold) text = `**${text}**`;
      if (node.italic) text = `*${text}*`;
      if (node.code) text = `\`${text}\``;
      
      let className = '';
      if (node.bold) className += ' font-bold';
      if (node.italic) className += ' italic';
      if (node.underline) className += ' underline';
      if (node.strikethrough) className += ' line-through';
      if (node.code) className += ' font-mono bg-muted px-1 py-0.5 rounded text-sm';
      
      return (
        <span key={Math.random()} className={className.trim()}>
          {node.text}
        </span>
      );
    }
    
    if (node.type === 'link') {
      const url = node.url || '#';
      const isExternal = url.startsWith('http');
      
      if (isExternal) {
        return (
          <a 
            key={Math.random()} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {node.children?.map(renderNode) || node.text}
          </a>
        );
      }
      
      return (
        <Link key={Math.random()} href={url} className="text-primary hover:underline">
          {node.children?.map(renderNode) || node.text}
        </Link>
      );
    }
    
    return null;
  };

  const renderBlock = (block: RichTextBlock, index: number): React.ReactNode => {
    const key = `block-${index}`;
    
    switch (block.type) {
      case 'paragraph':
        return (
          <Typography key={key} variant="p" className="mb-4 leading-relaxed">
            {block.children?.map(renderNode)}
          </Typography>
        );
        
      case 'heading':
        const level = block.level || 1;
        const variants = {
          1: 'h1',
          2: 'h2', 
          3: 'h3',
          4: 'h4',
          5: 'h5',
          6: 'h6'
        } as const;
        
        return (
          <Typography 
            key={key} 
            variant={variants[level as keyof typeof variants] || 'h2'} 
            className="mb-4 mt-8 first:mt-0"
          >
            {block.children?.map(renderNode)}
          </Typography>
        );
        
      case 'list':
        const ListComponent = block.format === 'ordered' ? 'ol' : 'ul';
        const listClassName = block.format === 'ordered' 
          ? 'list-decimal list-inside mb-4 space-y-2'
          : 'list-disc list-inside mb-4 space-y-2';
          
        return (
          <ListComponent key={key} className={listClassName}>
            {block.children?.map((child, childIndex) => (
              <li key={childIndex} className="leading-relaxed">
                {renderNode(child)}
              </li>
            ))}
          </ListComponent>
        );
        
      case 'list-item':
        return (
          <li key={key} className="leading-relaxed">
            {block.children?.map(renderNode)}
          </li>
        );
        
      case 'quote':
        return (
          <blockquote key={key} className="border-l-4 border-primary pl-6 mb-4 italic text-muted-foreground">
            {block.children?.map(renderNode)}
          </blockquote>
        );
        
      case 'code':
        return (
          <pre key={key} className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm font-mono">
              {block.children?.map(renderNode)}
            </code>
          </pre>
        );
        
      case 'image':
        if (!block.image?.url) return null;
        
        return (
          <div key={key} className="mb-6">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={block.image.url}
                alt={block.image.alternativeText || 'Image'}
                width={block.image.width || 800}
                height={block.image.height || 400}
                className="w-full h-auto"
              />
            </div>
            {block.image.alternativeText && (
              <Typography variant="small" className="text-muted-foreground text-center mt-2">
                {block.image.alternativeText}
              </Typography>
            )}
          </div>
        );
        
      default:
        // Handle unknown block types gracefully
        return (
          <div key={key} className="mb-4">
            {block.children?.map(renderNode)}
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
