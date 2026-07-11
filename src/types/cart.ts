import type { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
  freeShippingProgress: number;
}
