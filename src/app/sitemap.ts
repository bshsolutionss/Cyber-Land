import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { supportPages, policyPages } from "@/constants/pages-content";
import {
  collectionMeta,
  products,
} from "@/features/products/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/cart",
    "/checkout",
    "/search",
    "/collections",
    "/account",
    "/account/login",
    "/account/register",
    "/blogs/tech-blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const collections: MetadataRoute.Sitemap = Object.keys(collectionMeta).map(
    (handle) => ({
      url: `${base}/collections/${handle}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.handle}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const pages: MetadataRoute.Sitemap = Object.keys(supportPages).map(
    (slug) => ({
      url: `${base}/pages/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })
  );

  const policies: MetadataRoute.Sitemap = Object.keys(policyPages).map(
    (slug) => ({
      url: `${base}/policies/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })
  );

  const blogPosts: MetadataRoute.Sitemap = [
    "anzu-v2-launch",
    "hive75-v2-guide",
    "level-up-your-setup",
    "streaming-essentials",
  ].map((slug) => ({
    url: `${base}/blogs/tech-blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...collections,
    ...productRoutes,
    ...pages,
    ...policies,
    ...blogPosts,
  ];
}
