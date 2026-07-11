"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/features/products";
import ProductCard from "@/components/common/ProductCard";

function SearchResults() {
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim();

  const results = useMemo(() => {
    if (!q) return [];
    const lower = q.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.tags?.some((t) => t.includes(lower)) ||
        p.collection.some((c) => c.includes(lower)) ||
        p.description?.toLowerCase().includes(lower)
    );
  }, [q]);

  return (
    <section className="section section--padding">
      <div className="page-width">
        <h1 className="section-title mb-2">
          {q ? `Search results for “${q}”` : "Search"}
        </h1>
        <p className="mb-8 text-sm text-black/50">
          {q
            ? `${results.length} result${results.length !== 1 ? "s" : ""}`
            : "Enter a query to search products."}
        </p>
        {results.length > 0 ? (
          <div className="collection-grid">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : q ? (
          <p className="py-16 text-center text-black/50">No products found.</p>
        ) : null}
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="page-width py-20 text-center text-sm text-black/50">
          Loading…
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
