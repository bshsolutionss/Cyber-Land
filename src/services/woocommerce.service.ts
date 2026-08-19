import axios from "axios";
import { env } from "@/config/env";
import type { Product } from "@/types";

/**
 * WooCommerce REST API Service
 * Handles fetching products, categories, and syncing orders with your WordPress/WooCommerce store.
 * Supports both Pretty Permalinks (/wp-json/wc/v3) and Plain Permalinks (/index.php?rest_route=/wc/v3).
 */
const getCleanBaseUrl = () => {
  return env.wordPressUrl.replace(/\/$/, "");
};

export interface WooCommerceRawProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: string;
  average_rating: string;
  rating_count: number;
  description: string;
  short_description: string;
  categories: { id: number; name: string; slug: string }[];
  tags: { id: number; name: string; slug: string }[];
  images: { id: number; src: string; name: string; alt: string }[];
  variations: number[];
}

export function mapWooProductToAppProduct(wcProduct: WooCommerceRawProduct): Product {
  const imageList = (wcProduct.images || []).map((img) => img.src);
  const primaryImg = imageList[0] || "/images/mock-laptop.jpg";
  const hoverImg = imageList[1] || primaryImg;

  return {
    id: String(wcProduct.id),
    handle: wcProduct.slug || String(wcProduct.id),
    title: wcProduct.name || "",
    price: Number(wcProduct.price || wcProduct.regular_price || 0),
    compareAtPrice: Number(wcProduct.regular_price || wcProduct.price || 0),
    image: primaryImg,
    hoverImage: hoverImg,
    images: imageList.length ? imageList : [primaryImg],
    rating: Number(wcProduct.average_rating || 5),
    reviewCount: Number(wcProduct.rating_count || 0),
    available: wcProduct.stock_status === "instock",
    hasVariants: Boolean(wcProduct.variations?.length),
    collection: (wcProduct.categories || []).flatMap((c) => [
      c.slug.toLowerCase(),
      c.name.toLowerCase(),
    ]),
    description: wcProduct.short_description || wcProduct.description || "",
    tags: (wcProduct.tags || []).map((t) => t.slug),
    badge: wcProduct.on_sale ? "Sale" : undefined,
  };
}

async function wcRequest<T = unknown>(
  method: "GET" | "POST",
  endpoint: string,
  dataOrParams?: Record<string, unknown>
): Promise<T> {
  const baseUrl = getCleanBaseUrl();
  const authParams = {
    consumer_key: env.wcConsumerKey,
    consumer_secret: env.wcConsumerSecret,
  };

  // Try Pretty Permalink endpoint first
  try {
    const url = `${baseUrl}/wp-json/wc/v3${endpoint}`;
    if (method === "GET") {
      const res = await axios.get<T>(url, {
        params: { ...dataOrParams, ...authParams },
        timeout: 12000,
      });
      return res.data;
    } else {
      const res = await axios.post<T>(url, dataOrParams, {
        params: authParams,
        timeout: 12000,
      });
      return res.data;
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      // Fallback for Plain Permalinks via ?rest_route=
      const fallbackUrl = `${baseUrl}/index.php`;
      if (method === "GET") {
        const res = await axios.get<T>(fallbackUrl, {
          params: {
            rest_route: `/wc/v3${endpoint}`,
            ...dataOrParams,
            ...authParams,
          },
          timeout: 12000,
        });
        return res.data;
      } else {
        const res = await axios.post<T>(fallbackUrl, dataOrParams, {
          params: {
            rest_route: `/wc/v3${endpoint}`,
            ...authParams,
          },
          timeout: 12000,
        });
        return res.data;
      }
    }
    throw err;
  }
}

export const woocommerceService = {
  /**
   * Check if WooCommerce credentials and URL are configured
   */
  isConfigured(): boolean {
    return Boolean(
      env.wordPressUrl &&
        env.wordPressUrl !== "https://your-wordpress-domain.com" &&
        env.wcConsumerKey &&
        env.wcConsumerSecret
    );
  },

  /**
   * Fetch products directly from WooCommerce REST API mapped to app Product[]
   */
  async getProducts(params?: Record<string, unknown>): Promise<Product[]> {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    const rawList = await wcRequest<WooCommerceRawProduct[]>("GET", "/products", params);
    return (rawList || []).map(mapWooProductToAppProduct);
  },

  /**
   * Fetch single product by ID or slug
   */
  async getProductById(id: number | string): Promise<Product> {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    const raw = await wcRequest<WooCommerceRawProduct>("GET", `/products/${id}`);
    return mapWooProductToAppProduct(raw);
  },

  /**
   * Fetch categories from WooCommerce
   */
  async getCategories() {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    return wcRequest("GET", "/products/categories");
  },

  /**
   * Create an order in WooCommerce
   */
  async createOrder(orderData: Record<string, unknown>) {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    return wcRequest("POST", "/orders", orderData);
  },
};
