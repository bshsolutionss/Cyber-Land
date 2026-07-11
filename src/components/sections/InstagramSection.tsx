"use client";

import Image from "next/image";
import { instagramPosts } from "@/features/products";

export default function InstagramSection() {
  return (
    <section className="section section--padding" aria-label="Real people. Real style.">
      <div className="page-width">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="section-title">Real people. Real style.</h2>
          <p className="mt-2 text-sm font-semibold tracking-wide text-black/60 md:text-base">
            LEVEL UP YOUR SETUP!
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/cyberland"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className="relative h-8 w-8 overflow-hidden rounded-full bg-black/10">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0619/4325/1121/files/logo_0da4c800-ced3-428e-9dcf-aeee048a60f0.jpg?v=1771233444"
                  alt="@cyberland"
                  fill
                  className="object-cover"
                  sizes="32px"
                  unoptimized
                />
              </span>
              @cyberland
            </a>
            <a
              href="https://www.instagram.com/cyberland"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Follow
            </a>
          </div>
        </div>

        <div className="ig-grid">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/cyberland"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-item"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 16vw"
                unoptimized
              />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-black/50">
          *Free shipping and returns*
        </p>
      </div>
    </section>
  );
}
