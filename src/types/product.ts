export interface Product {
  id: string;
  handle: string;
  title: string;
  price: number;
  compareAtPrice: number;
  image: string;
  hoverImage?: string;
  images?: string[];
  rating?: number;
  reviewCount?: number;
  available: boolean;
  hasVariants?: boolean;
  amazonLink?: string;
  collection: string[];
  description?: string;
  tags?: string[];
  badge?: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  available: boolean;
  sku?: string;
}

export interface Category {
  title: string;
  href: string;
  image: string;
  subtitle?: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  mobileImage?: string;
  href: string;
  alt: string;
}

export interface CollectionMeta {
  title: string;
  description?: string;
}

export type ProductSortKey = "featured" | "price-asc" | "price-desc" | "name";

export interface ProductFilters {
  inStockOnly?: boolean;
  sort?: ProductSortKey;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
}
