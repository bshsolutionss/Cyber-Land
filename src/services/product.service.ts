import type { Product, ProductFilters } from "@/types";
import {
  collectionMeta,
  getProductsByCollection,
  products,
} from "@/features/products/data/catalog";

/**
 * Product service — all product data access goes through here.
 * Swap catalog implementation for a real API without touching UI.
 */
export const productService = {
  async getAll(): Promise<Product[]> {
    return [...products];
  },

  async getByHandle(handle: string): Promise<Product | null> {
    return products.find((p) => p.handle === handle) ?? null;
  },

  async getById(id: string): Promise<Product | null> {
    return products.find((p) => p.id === id) ?? null;
  },

  async getByCollection(handle: string): Promise<Product[]> {
    return getProductsByCollection(handle);
  },

  listCollections() {
    return Object.entries(collectionMeta).map(([handle, meta]) => ({
      handle,
      ...meta,
    }));
  },

  async getRelated(product: Product, limit = 4): Promise<Product[]> {
    return products
      .filter(
        (p) =>
          p.id !== product.id &&
          p.collection.some((c) => product.collection.includes(c))
      )
      .slice(0, limit);
  },

  async search(query: string): Promise<Product[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.includes(q)) ||
        p.collection.some((c) => c.includes(q)) ||
        p.description?.toLowerCase().includes(q)
    );
  },

  async filterProducts(
    list: Product[],
    filters: ProductFilters
  ): Promise<Product[]> {
    let result = [...list];
    if (filters.inStockOnly) {
      result = result.filter((p) => p.available);
    }
    if (filters.minPrice != null) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice != null) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }
    if (filters.tags?.length) {
      result = result.filter((p) =>
        filters.tags!.some((t) => p.tags?.includes(t))
      );
    }
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return result;
  },

  getCollectionMeta(handle: string) {
    return (
      collectionMeta[handle] ?? {
        title: handle
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      }
    );
  },

  getAllHandles(): string[] {
    return products.map((p) => p.handle);
  },

  getCollectionHandles(): string[] {
    return Object.keys(collectionMeta);
  },
};
