"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";
import { STORAGE_KEYS } from "@/constants/storage";

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          if (state.items.some((i) => i.id === product.id)) return state;
          return { items: [...state.items, product] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        }));
      },

      toggleItem: (product) => {
        const exists = get().items.some((i) => i.id === product.id);
        if (exists) get().removeItem(product.id);
        else get().addItem(product);
      },

      isInWishlist: (productId) =>
        get().items.some((i) => i.id === productId),

      clear: () => set({ items: [] }),
    }),
    { name: STORAGE_KEYS.wishlist }
  )
);
