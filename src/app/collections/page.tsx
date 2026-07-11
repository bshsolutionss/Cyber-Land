import type { Metadata } from "next";
import Link from "next/link";
import { collectionMeta, getProductsByCollection } from "@/features/products";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse all Cyber Land collections — gaming, streaming, office, and more.",
};

export default function CollectionsIndexPage() {
  const collections = Object.entries(collectionMeta)
    .filter(([handle]) => handle !== "all")
    .map(([handle, meta]) => ({
      handle,
      ...meta,
      count: getProductsByCollection(handle).length,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section className="section section--padding">
      <div className="page-width">
        <h1 className="section-title mb-2">Collections</h1>
        <p className="mb-8 text-sm text-black/50 md:text-base">
          {collections.length} collections
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collections.map((c) => (
            <Link
              key={c.handle}
              href={`/collections/${c.handle}`}
              className="group rounded-[var(--rounded-card)] border border-black/8 bg-[#fafafa] p-5 transition-shadow hover:shadow-md"
            >
              <h2 className="heading text-lg font-medium tracking-tight group-hover:opacity-70 md:text-xl">
                {c.title}
              </h2>
              {c.description && (
                <p className="mt-2 line-clamp-2 text-sm text-black/55">
                  {c.description}
                </p>
              )}
              <p className="mt-3 text-xs font-semibold text-[#685aca]">
                {c.count} product{c.count !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
