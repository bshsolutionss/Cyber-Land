"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/features/products";
import ProductCard from "@/components/common/ProductCard";

type Props = {
  title: string;
  products: Product[];
  id?: string;
};

export default function ProductSection({ title, products: items, id }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="section section--padding" id={id}>
      <div className="page-width">
        <div className="mb-5 flex items-end justify-between gap-4 md:mb-6">
          <h2 className="section-title">{title}</h2>
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 text-[#171717] transition-colors hover:bg-[#171717] hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 text-[#171717] transition-colors hover:bg-[#171717] hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="slider-track gap-3 md:gap-4">
          {items.map((p, i) => (
            <div
              key={p.id}
              className="w-[46vw] max-w-[280px] sm:w-[38vw] md:w-[28vw] md:max-w-[240px] lg:w-[20vw] lg:max-w-[260px] xl:max-w-[280px]"
            >
              <ProductCard product={p} priority={i < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
