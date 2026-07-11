"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
    remainingForFreeShipping: remaining,
    freeShippingProgress: progress,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="drawer-overlay drawer-overlay--end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
            onClick={closeCart}
          />
          <motion.aside
            className="drawer-panel drawer-panel--end"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          >
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <h2 className="heading text-lg font-medium">
                Cart {itemCount > 0 && `(${itemCount})`}
              </h2>
              <button type="button" onClick={closeCart} aria-label="Close cart">
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="heading text-xl">Your cart is currently empty.</p>
                <p className="text-sm text-black/60">
                  Not sure where to start?
                  <br />
                  Try these collections:
                </p>
                <Link
                  href="/collections/shop-all"
                  className="btn btn-primary"
                  onClick={closeCart}
                >
                  Continue shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="border-b border-black/5 px-5 py-3">
                  {remaining > 0 ? (
                    <p className="mb-2 text-xs font-medium">
                      Spend {formatPrice(remaining)} more to reach free shipping!
                    </p>
                  ) : (
                    <p className="mb-2 text-xs font-medium text-green-700">
                      You&apos;ve unlocked free shipping!
                    </p>
                  )}
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                    <div
                      className="h-full rounded-full bg-[#685aca] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="flex flex-col gap-5">
                    {items.map((item) => (
                      <li
                        key={`${item.product.id}-${item.variant ?? ""}`}
                        className="flex gap-3"
                      >
                        <Link
                          href={`/products/${item.product.handle}`}
                          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#fafafa]"
                          onClick={closeCart}
                        >
                          <Image
                            src={item.product.image}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                            unoptimized
                          />
                        </Link>
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/products/${item.product.handle}`}
                              className="text-sm font-medium leading-snug line-clamp-2"
                              onClick={closeCart}
                            >
                              {item.product.title}
                            </Link>
                            <button
                              type="button"
                              className="shrink-0 p-0.5 opacity-50 hover:opacity-100"
                              onClick={() =>
                                removeItem(item.product.id, item.variant)
                              }
                              aria-label="Remove"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold">
                            {formatPrice(item.product.price)}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                  item.variant
                                )
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-[1.5rem] text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                  item.variant
                                )
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-black/5 px-5 py-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Subtotal</span>
                    <span className="text-base font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-black/50">
                    Tax included. Shipping calculated at checkout.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/checkout"
                      className="btn btn-primary btn-full"
                      onClick={closeCart}
                    >
                      Check out
                    </Link>
                    <Link
                      href="/cart"
                      className="btn btn-secondary btn-full"
                      onClick={closeCart}
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
