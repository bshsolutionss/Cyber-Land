export type { Product, Category, HeroSlide, CollectionMeta } from "@/types";
export {
  products,
  heroSlides,
  heroSlidesCdn,
  categories,
  shopTheLookImage,
  shopTheLookImageCdn,
  shopTheLookProducts,
  instagramPosts,
  logoUrl,
  logoWhiteUrl,
  getProductByHandle,
  getRelatedProducts,
  getProductsByCollection,
  collectionMeta,
} from "./data/catalog";
export * from "./hooks/useProducts";
