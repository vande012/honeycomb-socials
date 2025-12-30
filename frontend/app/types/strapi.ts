/**
 * TypeScript types for Strapi API responses
 */

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: StrapiMeta;
}

export interface StrapiImage {
  id?: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiImage;
    small?: StrapiImage;
    medium?: StrapiImage;
    large?: StrapiImage;
  };
}

export interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: any;
  markdownContent?: string;
  publishedAt: string;
  coverImage?: StrapiImage | null;
  categories?: StrapiCategory[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: StrapiImage | string;
  };
}

export interface GlobalData {
  id: number;
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: StrapiImage | null;
  };
  favicon?: StrapiImage | null;
  navbar?: any;
  footer?: any;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  Order?: number;
}

