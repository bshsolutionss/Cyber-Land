"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <section className="section section--padding">
        <div className="page-width max-w-xl py-16 text-center">
          <h1 className="section-title">Your cart is empty</h1>
          <p className="mt-3 text-sm text-black/60">
            Not sure where to start? Browse our collections.
          </p>
          <Link href="/collections/shop-all" className="btn btn-primary mt-6">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--padding">
      <div className="page-width">
        <h1 className="section-title mb-8">
          Your cart ({itemCount})
        </h1>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="flex flex-col divide-y divide-black/5 border-y border-black/5">
            {items.map((item) => (
              <li
                key={`${item.product.id}-${item.variant ?? ""}`}
                className="flex gap-4 py-5"
              >
                <Link
                  href={`/products/${item.product.handle}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#fafafa] sm:h-28 sm:w-28"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                    sizes="112px"
                    unoptimized
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/products/${item.product.handle}`}
                      className="text-sm font-medium leading-snug sm:text-base"
                    >
                      {item.product.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        removeItem(item.product.id, item.variant)
                      }
                      aria-label="Remove"
                    >
                      <X className="h-4 w-4 opacity-50 hover:opacity-100" />
                    </button>
                  </div>
                  <p className="font-semibold">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-2">
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
                    <span className="min-w-[1.5rem] text-center text-sm">
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

          <aside className="h-fit rounded-2xl border border-black/8 bg-[#fafafa] p-6">
            <div className="mb-2 flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-6 text-xs text-black/50">
              Tax included. Shipping calculated at checkout.
            </p>
            <Link href="/checkout" className="btn btn-primary btn-full mb-3">
              Check out
            </Link>
            <Link
              href="/collections/shop-all"
              className="btn btn-secondary btn-full"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
