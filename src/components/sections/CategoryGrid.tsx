"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SafeImage from "@/components/common/SafeImage";
import { categories } from "@/features/products";

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white pb-8 pt-10 md:pb-10 md:pt-12">
      <div className="page-width">
        <h2 className="section-title mb-6 md:mb-8">
          Level Up Your{" "}
          <em className="relative inline-block not-italic">
            <span className="italic">Setup</span>
            <svg
              className="pointer-events-none absolute -bottom-1 left-0 w-[108%] text-[#685aca]"
              viewBox="0 0 140 14"
              fill="none"
              aria-hidden
              preserveAspectRatio="none"
              style={{ height: 11 }}
            >
              <path
                d="M2 9C20 3 45 2 70 5.5C95 9 115 11 138 4"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </em>
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link
                href={cat.href}
                className="category-card group relative block overflow-hidden bg-[#e8e4f6]"
              >
                <SafeImage
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="category-card__label">
                  <span className="block">{cat.title}</span>
                  {"subtitle" in cat && cat.subtitle ? (
                    <span className="mt-0.5 block text-xs font-normal opacity-85">
                      {cat.subtitle}
                    </span>
                  ) : null}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
