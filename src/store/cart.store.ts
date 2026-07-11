"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, CartTotals, Product } from "@/types";
import { siteConfig } from "@/config/site";
import { STORAGE_KEYS } from "@/constants/storage";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number, variant?: string) => void;
  removeItem: (productId: string, variant?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    variant?: string
  ) => void;
  clearCart: () => void;
  getTotals: () => CartTotals;
}

function matchItem(item: CartItem, productId: string, variant?: string) {
  return item.product.id === productId && item.variant === variant;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      addItem: (product, quantity = 1, variant) => {
        set((state) => {
          const idx = state.items.findIndex((i) =>
            matchItem(i, product.id, variant)
          );
          if (idx >= 0) {
            const items = [...state.items];
            items[idx] = {
              ...items[idx],
              quantity: items[idx].quantity + quantity,
            };
            return { items, isOpen: true };
          }
          return {
            items: [...state.items, { product, quantity, variant }],
            isOpen: true,
          };
        });
      },

      removeItem: (productId, variant) => {
        set((state) => ({
          items: state.items.filter((i) => !matchItem(i, productId, variant)),
        }));
      },

      updateQuantity: (productId, quantity, variant) => {
        if (quantity <= 0) {
          get().removeItem(productId, variant);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            matchItem(i, productId, variant) ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotals: () => {
        const { items } = get();
        const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
        const subtotal = items.reduce(
          (sum, i) => sum + i.product.price * i.quantity,
          0
        );
        const threshold = siteConfig.freeShippingThreshold;
        const remaining = Math.max(0, threshold - subtotal);
        const progress = Math.min(100, (subtotal / threshold) * 100);
        return {
          itemCount,
          subtotal,
          freeShippingThreshold: threshold,
          remainingForFreeShipping: remaining,
          freeShippingProgress: progress,
        };
      },
    }),
    {
      name: STORAGE_KEYS.cart,
      partialize: (state) => ({ items: state.items }),
    }
  )
);
