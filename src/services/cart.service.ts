import type { CartItem } from "@/types";
import { siteConfig } from "@/config/site";

/**
 * Cart service — pure calculations / future API sync.
 * Client cart state lives in Zustand (store/cart.store.ts).
 */
export const cartService = {
  getItemCount(items: CartItem[]): number {
    return items.reduce((sum, i) => sum + i.quantity, 0);
  },

  getSubtotal(items: CartItem[]): number {
    return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  },

  getFreeShippingProgress(subtotal: number): {
    remaining: number;
    progress: number;
    unlocked: boolean;
  } {
    const threshold = siteConfig.freeShippingThreshold;
    const remaining = Math.max(0, threshold - subtotal);
    const progress = Math.min(100, (subtotal / threshold) * 100);
    return {
      remaining,
      progress,
      unlocked: remaining === 0 && subtotal > 0,
    };
  },

  /** Future: POST /cart/sync */
  async syncToServer(items: CartItem[]): Promise<void> {
    void items;
    return Promise.resolve();
  },
};
