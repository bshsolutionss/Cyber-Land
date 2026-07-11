"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/features/products";
import ProductCard from "@/components/common/ProductCard";
import { cn } from "@/utils";

type Props = {
  title: string;
  description?: string;
  products: Product[];
  handle: string;
};

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function CollectionView({
  title,
  description,
  products,
}: Props) {
  const [sort, setSort] = useState<SortKey>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (inStockOnly) list = list.filter((p) => p.available);
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return list;
  }, [products, sort, inStockOnly]);

  return (
    <section className="section section--padding">
      <div className="page-width">
        <div className="mb-6 md:mb-8">
          <h1 className="section-title">{title}</h1>
          {description && (
            <p className="mt-2 max-w-2xl text-sm text-black/60 md:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-black/50">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="h-4 w-4 rounded border-black/20"
              />
              In stock only
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className={cn(
                "rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium outline-none"
              )}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="heading text-xl">No products found</p>
            <p className="mt-2 text-sm text-black/50">
              Try adjusting filters or browse all products.
            </p>
          </div>
        ) : (
          <div className="collection-grid">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 4} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
