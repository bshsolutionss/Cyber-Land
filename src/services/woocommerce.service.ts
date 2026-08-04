import axios from "axios";
import { env } from "@/config/env";
import type { Product } from "@/types";

/**
 * WooCommerce REST API Service
 * Handles fetching products, categories, and syncing orders with your WordPress/WooCommerce store.
 */
const getWcBaseUrl = () => {
  const baseUrl = env.wordPressUrl.replace(/\/$/, "");
  return `${baseUrl}/wp-json/wc/v3`;
};

export const woocommerceClient = axios.create({
  timeout: 15000,
});

woocommerceClient.interceptors.request.use((config) => {
  if (env.wordPressUrl && env.wcConsumerKey && env.wcConsumerSecret) {
    config.baseURL = getWcBaseUrl();
    config.params = {
      ...config.params,
      consumer_key: env.wcConsumerKey,
      consumer_secret: env.wcConsumerSecret,
    };
  }
  return config;
});

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
  const primaryImg = imageList[0] || "/images/placeholder.jpg";
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
    collection: (wcProduct.categories || []).map((c) => c.slug),
    description: wcProduct.short_description || wcProduct.description || "",
    tags: (wcProduct.tags || []).map((t) => t.slug),
    badge: wcProduct.on_sale ? "Sale" : undefined,
  };
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
    const response = await woocommerceClient.get<WooCommerceRawProduct[]>("/products", { params });
    return (response.data || []).map(mapWooProductToAppProduct);
  },

  /**
   * Fetch single product by ID or slug
   */
  async getProductById(id: number | string): Promise<Product> {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    const response = await woocommerceClient.get<WooCommerceRawProduct>(`/products/${id}`);
    return mapWooProductToAppProduct(response.data);
  },

  /**
   * Fetch categories from WooCommerce
   */
  async getCategories() {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    const response = await woocommerceClient.get("/products/categories");
    return response.data;
  },

  /**
   * Create an order in WooCommerce
   */
  async createOrder(orderData: Record<string, unknown>) {
    if (!this.isConfigured()) {
      throw new Error("WooCommerce URL is not configured yet in .env.local");
    }
    const response = await woocommerceClient.post("/orders", orderData);
    return response.data;
  },
};
