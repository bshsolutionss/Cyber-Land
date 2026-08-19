import type { Product, ProductFilters } from "@/types";
import {
  collectionMeta,
  getProductsByCollection,
  products,
} from "@/features/products/data/catalog";
import { woocommerceService } from "./woocommerce.service";

/**
 * Product service — all product data access goes through here.
 * Connects directly to WooCommerce REST API when configured in .env.local,
 * with fallback to local catalog.
 */
export const productService = {
  async getAll(): Promise<Product[]> {
    if (woocommerceService.isConfigured()) {
      try {
        const wcProducts = await woocommerceService.getProducts();
        if (wcProducts.length > 0) return wcProducts;
      } catch (err) {
        console.warn("WooCommerce API fetch failed, using catalog fallback:", err);
      }
    }
    return [...products];
  },

  async getByHandle(handle: string): Promise<Product | null> {
    if (woocommerceService.isConfigured()) {
      try {
        const wcProducts = await woocommerceService.getProducts({ slug: handle });
        if (wcProducts.length > 0) return wcProducts[0];
      } catch (err) {
        console.warn("WooCommerce API getByHandle failed, using catalog fallback:", err);
      }
    }
    return products.find((p) => p.handle === handle) ?? null;
  },

  async getById(id: string): Promise<Product | null> {
    if (woocommerceService.isConfigured()) {
      try {
        const product = await woocommerceService.getProductById(id);
        if (product) return product;
      } catch (err) {
        console.warn("WooCommerce API getById failed, using catalog fallback:", err);
      }
    }
    return products.find((p) => p.id === id) ?? null;
  },

  async getByCollection(handle: string): Promise<Product[]> {
    if (woocommerceService.isConfigured()) {
      try {
        const allWc = await woocommerceService.getProducts();
        if (allWc.length > 0) {
          const h = handle.toLowerCase();
          if (h === "all" || h === "shop-all" || h === "products") {
            return allWc;
          }
          const matched = allWc.filter((p) => {
            const cols = p.collection.map((c) => c.toLowerCase());
            const tags = (p.tags || []).map((t) => t.toLowerCase());
            const titleLower = p.title.toLowerCase();

            if (h === "new-laptops") {
              return (
                cols.includes("new-laptops") ||
                cols.includes("new laptops") ||
                tags.includes("new") ||
                tags.includes("new-laptops") ||
                titleLower.includes("new laptop") ||
                (cols.includes("laptops") && !cols.includes("used-laptops") && !tags.includes("used"))
              );
            }

            if (h === "used-laptops") {
              return (
                cols.includes("used-laptops") ||
                cols.includes("used laptops") ||
                tags.includes("used") ||
                tags.includes("used-laptops") ||
                tags.includes("refurbished") ||
                titleLower.includes("used") ||
                titleLower.includes("refurbished")
              );
            }

            if (h === "laptops") {
              return (
                cols.includes("laptops") ||
                cols.includes("new-laptops") ||
                cols.includes("used-laptops") ||
                titleLower.includes("laptop")
              );
            }

            if (h === "new-cpu") {
              return (
                cols.includes("new-cpu") ||
                cols.includes("new cpu") ||
                (cols.includes("cpu") && (tags.includes("new") || !cols.includes("used-cpu"))) ||
                titleLower.includes("new cpu") ||
                titleLower.includes("new processor")
              );
            }

            if (h === "used-cpu") {
              return (
                cols.includes("used-cpu") ||
                cols.includes("used cpu") ||
                (cols.includes("cpu") && (tags.includes("used") || tags.includes("refurbished"))) ||
                titleLower.includes("used cpu") ||
                titleLower.includes("used processor")
              );
            }

            if (h === "cpu" || h === "cpus" || h === "processors") {
              return (
                cols.includes("cpu") ||
                cols.includes("cpus") ||
                cols.includes("new-cpu") ||
                cols.includes("used-cpu") ||
                cols.includes("processors") ||
                titleLower.includes("processor") ||
                titleLower.includes("cpu") ||
                titleLower.includes("intel core") ||
                titleLower.includes("ryzen")
              );
            }

            return (
              cols.some((c) => c === h) ||
              tags.some((t) => t === h) ||
              p.handle.toLowerCase().includes(h) ||
              titleLower.includes(h)
            );
          });
          return matched;
        }
      } catch (err) {
        console.warn("WooCommerce API getByCollection failed, using catalog fallback:", err);
      }
    }
    return getProductsByCollection(handle);
  },

  listCollections() {
    return Object.entries(collectionMeta).map(([handle, meta]) => ({
      handle,
      ...meta,
    }));
  },

  async getRelated(product: Product, limit = 4): Promise<Product[]> {
    const all = await this.getAll();
    return all
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

    if (woocommerceService.isConfigured()) {
      try {
        const wcProducts = await woocommerceService.getProducts({ search: query });
        if (wcProducts.length > 0) return wcProducts;
      } catch (err) {
        console.warn("WooCommerce search API failed, using catalog fallback:", err);
      }
    }

    const all = await this.getAll();
    return all.filter(
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
