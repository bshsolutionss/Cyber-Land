"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { getProductByHandle } from "@/features/products";
import { calcDiscount, cn, formatPrice } from "@/utils";
import type { Product } from "@/types";

/**
 * Shop the Look — two-column scene + product panel
 * Desktop: scene image LEFT + product card carousel RIGHT
 * Hotspots (live CSS):
 *  28%/80% chair · 75%/50% mouse · 71%/29% monitor · 50%/45% keyboard
 */

const SCENE = "/shop-the-look/scene.png";
const SCENE_CDN =
  "https://cdn.shopify.com/s/files/1/0619/4325/1121/files/Shopthelook2_8012997e-10aa-4148-97f2-fce2fce01b74.png?v=1771593801&width=1920";

const HOTSPOTS = [
  { handle: "altus-ergo-gaming-chair", x: "28%", y: "80%" },
  {
    handle: "anzu-v2-white-ultralight-ergonomic-wireless-gaming-mouse",
    x: "75%",
    y: "50%",
  },
  { handle: "obsidian-27-inch-gaming-monitor", x: "71%", y: "29%" },
  {
    handle: "swarm-white-purple-wireless-gaming-keyboard",
    x: "50%",
    y: "45%",
  },
] as const;

function LookProductPanel({ product }: { product: Product }) {
  const discount = calcDiscount(product.price, product.compareAtPrice);

  return (
    <article className="stl-panel-card mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06]">
      <div className="relative aspect-square bg-[#ebe7f8]">
        {discount > 0 && (
          <span className="absolute left-3 top-3 z-[2] rounded-full bg-[#171717] px-2.5 py-1 text-[11px] font-semibold text-white">
            Save {discount}%
          </span>
        )}
        {product.rating != null && (
          <span className="absolute bottom-3 right-3 z-[2] flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium shadow-sm">
            <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
            {product.rating.toFixed(1)}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="340px"
          unoptimized
        />
      </div>
      <div className="space-y-2 p-4">
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-[15px] font-medium leading-snug text-[#171717] hover:opacity-70">
            {product.title}
          </h3>
        </Link>
        <div className="flex flex-wrap items-baseline gap-2 text-sm">
          <span className="font-semibold">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice > product.price && (
            <span className="text-xs text-black/40 line-through">
              MRP {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <Link
          href={`/products/${product.handle}`}
          className="mt-2 flex w-full items-center justify-center rounded-full bg-[#171717] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
        >
          {product.hasVariants ? "Choose options" : "Add to cart"}
        </Link>
      </div>
    </article>
  );
}

export default function ShopTheLook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sceneSrc, setSceneSrc] = useState(SCENE);

  const products = useMemo(
    () =>
      HOTSPOTS.map((h) => getProductByHandle(h.handle)).filter(
        (p): p is Product => Boolean(p)
      ),
    []
  );

  const activeProduct = products[activeIndex] ?? products[0];

  const selectByHandle = (handle: string) => {
    const idx = HOTSPOTS.findIndex((h) => h.handle === handle);
    if (idx >= 0) setActiveIndex(idx);
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="page-width">
        {/* Desktop: image left | title + card right — matches live layout */}
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* LEFT — scene + hotspots */}
          <div className="relative w-full overflow-hidden rounded-[20px] bg-[#111] md:rounded-[24px]">
            <div className="relative w-full pb-[100%]">
              <Image
                src={sceneSrc}
                alt="Shop the Look gaming setup"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                onError={() => setSceneSrc(SCENE_CDN)}
              />

              {HOTSPOTS.map((hs, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={hs.handle}
                    type="button"
                    className={cn(
                      "stl-hotspot absolute z-[2]",
                      isActive && "stl-hotspot--active"
                    )}
                    style={{
                      left: hs.x,
                      top: hs.y,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => selectByHandle(hs.handle)}
                    onMouseEnter={() => {
                      if (
                        typeof window !== "undefined" &&
                        window.matchMedia("(min-width: 1024px)").matches
                      ) {
                        selectByHandle(hs.handle);
                      }
                    }}
                    aria-label={hs.handle}
                    aria-current={isActive}
                  >
                    <span className="stl-hotspot__dot" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — title + product carousel card */}
          <div className="flex flex-col items-center lg:items-start lg:pt-2">
            <h2 className="mb-5 w-full text-center text-[clamp(1.5rem,2.2vw,1.875rem)] font-normal tracking-tight text-[#171717] md:mb-6 lg:text-left"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Shop the Look
            </h2>

            {activeProduct && <LookProductPanel product={activeProduct} />}

            {/* Dots under card — switch product */}
            <div className="mt-5 flex items-center justify-center gap-2 lg:w-full lg:max-w-[340px]">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-2 w-2 rounded-full border border-[#171717]/40 transition-all",
                    i === activeIndex
                      ? "scale-110 border-[#171717] bg-[#171717]"
                      : "bg-transparent hover:bg-black/20"
                  )}
                  aria-label={`Show ${p.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
