"use client";

import { useMemo, useSyncExternalStore } from "react";
import { useCartStore } from "@/store/cart.store";
import { siteConfig } from "@/config/site";
import type { CartItem } from "@/types";

const EMPTY_ITEMS: CartItem[] = [];

function useHydrated() {
  return useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
}

/** Cart hook with derived totals — SSR-safe for hydration. */
export function useCart() {
  const hydrated = useHydrated();
  const items = useCartStore((s) => s.items);
  const isOpen = useCartStore((s) => s.isOpen);
  const openCart = useCartStore((s) => s.openCart);
  const closeCart = useCartStore((s) => s.closeCart);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);

  const safeItems = hydrated ? items : EMPTY_ITEMS;

  const totals = useMemo(() => {
    const itemCount = safeItems.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = safeItems.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    );
    const threshold = siteConfig.freeShippingThreshold;
    return {
      itemCount,
      subtotal,
      remainingForFreeShipping: Math.max(0, threshold - subtotal),
      freeShippingProgress: Math.min(100, (subtotal / threshold) * 100),
    };
  }, [safeItems]);

  return {
    items: safeItems,
    isOpen: hydrated ? isOpen : false,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    ...totals,
    hydrated,
  };
}
