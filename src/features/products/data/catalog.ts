import type { Category, CollectionMeta, HeroSlide, Product } from "@/types";

const CDN = "https://cdn.shopify.com/s/files/1/0619/4325/1121";

export const products: Product[] = [
  {
    id: "1",
    handle: "hive75-v2-black-purple-wired-mechanical-gaming-keyboard",
    title: "Hive75 V2 Black Purple Wired Mechanical Gaming Keyboard",
    price: 3199,
    compareAtPrice: 4600,
    image: `${CDN}/files/75BP.png?v=1781185245&width=1080`,
    rating: 4.7,
    reviewCount: 128,
    available: true,
    hasVariants: true,
    collection: ["mechanical-keyboards", "best-sellers", "new-launches"],
    description:
      "The Hive75 V2 brings premium tactile feedback, hot-swappable switches, and a striking black-purple aesthetic built for competitive gaming.",
    tags: ["keyboard", "mechanical", "wired", "75%"],
  },
  {
    id: "2",
    handle: "swarm-black-purple-wireless-gaming-keyboard",
    title: "Swarm Black Purple Wireless Gaming Keyboard",
    price: 5099,
    compareAtPrice: 10000,
    image: `${CDN}/files/HRAG_GA.png?v=1781185245&width=1080`,
    rating: 4.7,
    reviewCount: 89,
    available: true,
    hasVariants: true,
    collection: ["mechanical-keyboards", "best-sellers"],
    description:
      "Wireless freedom with Swarm. Low-latency 2.4GHz connectivity, multi-device pairing, and a premium gasket-mount feel.",
    tags: ["keyboard", "wireless", "mechanical"],
  },
  {
    id: "3",
    handle: "hive98-v2-white-purple-wired-mechanical-gaming-keyboard",
    title: "Hive98 V2 White Purple Wired Mechanical Gaming Keyboard",
    price: 3499,
    compareAtPrice: 6000,
    image: `${CDN}/files/Frame_1000008583.png?v=1781185245&width=1080`,
    available: true,
    hasVariants: true,
    collection: ["mechanical-keyboards"],
    description:
      "Full-size productivity meets gaming aesthetics. Hive98 V2 in clean white-purple with gasket mount and south-facing LEDs.",
    tags: ["keyboard", "mechanical", "wired", "98%"],
  },
  {
    id: "4",
    handle: "hive65-white-purple-mechanical-gaming-keyboard",
    title: "Hive65 White Purple Wired Mechanical Gaming Keyboard",
    price: 2599,
    compareAtPrice: 4999,
    image: `${CDN}/files/Frame_10000ds09001.png?v=1782725132&width=1000`,
    rating: 4.7,
    reviewCount: 64,
    available: true,
    hasVariants: false,
    collection: ["mechanical-keyboards", "best-sellers"],
    description:
      "Compact 65% layout with no compromise on feel. Perfect for desk space without losing arrow keys.",
    tags: ["keyboard", "mechanical", "65%"],
  },
  {
    id: "5",
    handle: "swarm-x-all-white-wireless-gaming-keyboard",
    title: "Swarm X All White Wireless Gaming Keyboard",
    price: 4099,
    compareAtPrice: 10000,
    image: `${CDN}/files/IUOOYIUTY.png?v=1781185245&width=1080`,
    rating: 4.7,
    reviewCount: 42,
    available: false,
    hasVariants: false,
    amazonLink:
      "https://www.amazon.in/dp-Wireless-Mechanical-Keyboard/dp/B0FLKD14YD",
    collection: ["mechanical-keyboards"],
    description: "All-white Swarm X — wireless mechanical excellence for pure desk aesthetics.",
    tags: ["keyboard", "wireless"],
  },
  {
    id: "6",
    handle: "swarm-white-purple-wireless-gaming-keyboard",
    title: "Swarm White Purple Wireless Gaming Keyboard",
    price: 5099,
    compareAtPrice: 10000,
    image: `${CDN}/files/ZDDGZDFZDHDH.png?v=1781185245&width=1080`,
    rating: 4.7,
    reviewCount: 76,
    available: true,
    hasVariants: true,
    collection: ["mechanical-keyboards", "gamers-essentials"],
    description: "Swarm wireless keyboard in white-purple. Gasket mount, multi-mode connectivity.",
    tags: ["keyboard", "wireless"],
  },
  {
    id: "7",
    handle: "anzu-v2-white-ultralight-ergonomic-wireless-gaming-mouse",
    title: "Anzu V2 White Ultralight Ergonomic Wireless Gaming Mouse",
    price: 2999,
    compareAtPrice: 4999,
    image: `${CDN}/files/Frame1000008117.png?v=1779773842&width=1200`,
    available: true,
    hasVariants: false,
    collection: ["gaming-mouse-and-mousepad", "new-launches", "best-sellers"],
    description:
      "Anzu V2 — ultralight ergonomic wireless mouse engineered for precision and all-day comfort.",
    tags: ["mouse", "wireless", "ultralight"],
    badge: "NEW",
  },
  {
    id: "8",
    handle: "anzu-v2-black-ultralight-ergonomic-wireless-gaming-mouse",
    title: "Anzu V2 Black Ultralight Ergonomic Wireless Gaming Mouse",
    price: 2999,
    compareAtPrice: 4999,
    image: `${CDN}/files/Frame1000008118.png?v=1779778207&width=1200`,
    available: true,
    hasVariants: false,
    collection: ["gaming-mouse-and-mousepad", "new-launches", "best-sellers"],
    description:
      "Anzu V2 Black — the same ultralight ergonomic performance in stealth black.",
    tags: ["mouse", "wireless", "ultralight"],
    badge: "NEW",
  },
  {
    id: "9",
    handle: "chimera-wireless-gaming-mouse",
    title: "Chimera V2 Wireless Gaming Mouse",
    price: 1999,
    compareAtPrice: 4000,
    image: `${CDN}/files/Frame_1000007240.png?v=1782290778&width=1080`,
    rating: 4.4,
    reviewCount: 210,
    available: true,
    hasVariants: false,
    collection: ["gaming-mouse-and-mousepad", "best-sellers"],
    description: "Chimera V2 wireless gaming mouse with major upgrades for competitive play.",
    tags: ["mouse", "wireless"],
  },
  {
    id: "10",
    handle: "harpy-light-weight-rgb-gaming-mouse",
    title: "Harpy Light Weight RGB Gaming Mouse",
    price: 599,
    compareAtPrice: 1499,
    image: `${CDN}/files/Frame_1000007243.png?v=1782290778&width=1080`,
    rating: 4.6,
    reviewCount: 340,
    available: true,
    hasVariants: false,
    collection: ["gaming-mouse-and-mousepad"],
    description: "Lightweight RGB gaming mouse for entry-level and intermediate gamers.",
    tags: ["mouse", "rgb", "wired"],
  },
  {
    id: "11",
    handle: "arma-black-ultralight-gaming-mouse",
    title: "Arma Black 49g Ultralight Wireless Performance Mouse",
    price: 3799,
    compareAtPrice: 8999,
    image: `${CDN}/files/Frame_1000006970_1.png?v=1782282021&width=1200`,
    available: true,
    hasVariants: false,
    collection: ["gaming-mouse-and-mousepad", "best-sellers", "new-launches"],
    description:
      "49g ultralight wireless performance mouse. Built for pros who demand zero compromise.",
    tags: ["mouse", "wireless", "ultralight", "49g"],
  },
  {
    id: "12",
    handle: "altus-ergo-gaming-chair",
    title: "Altus Ergonomic Chair",
    price: 11899,
    compareAtPrice: 30000,
    image: `${CDN}/files/Frame_1000007208_1.png?v=1782288760&width=1080`,
    rating: 4.7,
    reviewCount: 156,
    available: true,
    hasVariants: true,
    collection: ["ergo-wfh-chairs", "best-sellers", "work-from-home-pro"],
    description:
      "Altus ergonomic WFH chair with lumbar support, adjustable armrests, and premium build for marathon sessions.",
    tags: ["chair", "ergonomic"],
  },
  {
    id: "13",
    handle: "obsidian-27-inch-gaming-monitor",
    title: 'Obsidian 27" 200Hz 2K 1440p QHD Gaming IPS Monitor',
    price: 15599,
    compareAtPrice: 30000,
    image: `${CDN}/files/hero_.bip.1726_1.png?v=1782291903&width=1200`,
    rating: 4.8,
    reviewCount: 48,
    available: true,
    hasVariants: false,
    collection: ["monitors", "best-sellers", "gamers-essentials"],
    description:
      "27-inch QHD IPS panel at 200Hz. Blistering refresh for competitive gaming and crisp content creation.",
    tags: ["monitor", "2k", "200hz"],
  },
  {
    id: "14",
    handle: "obsidian-27-inch-100hz-2k-1440p-qhd-ips-monitor",
    title: 'Obsidian 27" 100Hz 2K 1440p QHD IPS Monitor',
    price: 11999,
    compareAtPrice: 21999,
    image: `${CDN}/files/hero_.bip.1664_2.png?v=1782281938&width=1920`,
    available: true,
    hasVariants: false,
    collection: ["monitors"],
    description: "27-inch 2K QHD IPS monitor at 100Hz — perfect for work and play.",
    tags: ["monitor", "2k", "100hz"],
  },
  {
    id: "15",
    handle: "sonic-gaming-mic",
    title: "Sonik Gaming Mic",
    price: 3999,
    compareAtPrice: 8000,
    image: `${CDN}/files/Frame_1000007203_1.png?v=1782288759&width=1080`,
    rating: 5.0,
    reviewCount: 32,
    available: true,
    hasVariants: false,
    collection: ["audio-video-and-lights", "streamers-essential"],
    description: "Studio-quality Sonik gaming microphone for streamers and content creators.",
    tags: ["mic", "audio"],
  },
  {
    id: "16",
    handle: "owl-ultra-hd-streaming-webcam",
    title: "Owl Full HD Streaming Webcam",
    price: 3499,
    compareAtPrice: 5000,
    image: `${CDN}/files/Frame_1000008494.png?v=1781186434&width=1200`,
    rating: 4.9,
    reviewCount: 87,
    available: true,
    hasVariants: false,
    collection: ["audio-video-and-lights", "streamers-essential"],
    description: "Full HD streaming webcam with auto-focus and low-light performance.",
    tags: ["webcam", "streaming"],
  },
  {
    id: "17",
    handle: "kast-black",
    title: "Kast Black Dynamic Microphone",
    price: 4999,
    compareAtPrice: 7500,
    image: `${CDN}/files/Frame_1000007190_a0734750-450d-4194-ab01-adeebdfdb8ac.png?v=1782291903&width=1080`,
    rating: 4.6,
    reviewCount: 54,
    available: true,
    hasVariants: false,
    collection: ["audio-video-and-lights"],
    description: "Kast Black dynamic microphone for broadcast-quality voice capture.",
    tags: ["mic", "dynamic"],
  },
  {
    id: "18",
    handle: "owl-lite-fhd-webcam",
    title: "Owl Lite FHD Webcam",
    price: 1999,
    compareAtPrice: 4999,
    image: `${CDN}/files/Frame_1000007197_1.png?v=1782288759&width=1080`,
    rating: 5.0,
    reviewCount: 29,
    available: true,
    hasVariants: false,
    collection: ["audio-video-and-lights"],
    description: "Affordable full HD webcam for calls, streams, and content.",
    tags: ["webcam"],
  },
  {
    id: "19",
    handle: "go-dots-professional-wireless-mic",
    title: "Go Dots Professional Wireless Mic",
    price: 999,
    compareAtPrice: 1999,
    image: `${CDN}/files/Artboard1_24.png?v=1763113840&width=1920`,
    available: true,
    hasVariants: true,
    collection: ["audio-video-and-lights", "streamers-essential"],
    description: "Compact professional wireless mic system for creators on the go.",
    tags: ["mic", "wireless"],
  },
  {
    id: "20",
    handle: "beluga-gaming-headphone",
    title: "Beluga V2 Gaming Wired Headphones",
    price: 2399,
    compareAtPrice: 4500,
    image: `${CDN}/files/Frame_1000007195.png?v=1782288759&width=1080`,
    rating: 4.4,
    reviewCount: 98,
    available: false,
    hasVariants: false,
    collection: ["audio-video-and-lights"],
    description: "Beluga V2 wired gaming headphones with immersive surround and comfort.",
    tags: ["headphones", "gaming"],
  },
  {
    id: "21",
    handle: "gorec-professional-wireless-mic",
    title: "GoRec Professional Wireless Mic",
    price: 1499,
    compareAtPrice: 4000,
    image: `${CDN}/files/Frame_1000007198.png?v=1782288759&width=1080`,
    rating: 3.7,
    reviewCount: 18,
    available: false,
    hasVariants: false,
    collection: ["audio-video-and-lights"],
    description: "GoRec professional wireless microphone for content creators.",
    tags: ["mic", "wireless"],
  },
];

/**
 * Homepage slideshow image metadata
 * Desktop + mobile variants as used by the live Shopify theme.
 * Local copies under /public/hero for reliable loading; CDN fallbacks too.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/hero/anzu-desktop.png",
    mobileImage: "/hero/anzu-mobile.png",
    href: "/products/anzu-v2-black-ultralight-ergonomic-wireless-gaming-mouse",
    alt: "Anzu V2 New Launch — Ultralight Wireless Performance Mouse",
  },
  {
    id: 2,
    image: "/hero/monitors-desktop.png",
    mobileImage: "/hero/monitors-mobile.png",
    href: "/collections/monitors",
    alt: "Cyber Land Monitors",
  },
  {
    id: 3,
    image: "/hero/arma-desktop.png",
    mobileImage: "/hero/arma-mobile.png",
    href: "/products/arma-black-ultralight-gaming-mouse",
    alt: "Arma Ultralight Mouse",
  },
  {
    id: 4,
    image: "/hero/hive75-desktop.png",
    mobileImage: "/hero/hive75-mobile.png",
    href: "/products/hive75-v2-black-purple-wired-mechanical-gaming-keyboard",
    alt: "Hive75 V2 Keyboard",
  },
];

/** CDN originals (same files as live site) — used if local hero assets missing */
export const heroSlidesCdn: HeroSlide[] = [
  {
    id: 1,
    image: `${CDN}/files/banner3.png?v=1780407525&width=2400`,
    mobileImage: `${CDN}/files/banner3mob.png?v=1780407526&width=1000`,
    href: "/products/anzu-v2-black-ultralight-ergonomic-wireless-gaming-mouse",
    alt: "Anzu V2 New Launch",
  },
  {
    id: 2,
    image: `${CDN}/files/Frame_1000007627.png?v=1775107034&width=2400`,
    mobileImage: `${CDN}/files/qpricedark1.1.png?v=1775107035&width=1000`,
    href: "/collections/monitors",
    alt: "Cyber Land Monitors",
  },
  {
    id: 3,
    image: `${CDN}/files/Frame_1000007021.png?v=1774432814&width=2400`,
    mobileImage: `${CDN}/files/desktop_banner_26.png?v=1774432814&width=1000`,
    href: "/products/arma-black-ultralight-gaming-mouse",
    alt: "Arma Ultralight Mouse",
  },
  {
    id: 4,
    image: `${CDN}/files/banner2_258c725b-501e-4498-9759-592ab720acef.png?v=1781176454&width=2400`,
    mobileImage: `${CDN}/files/banner2mob.png?v=1781176454&width=1000`,
    href: "/products/hive75-v2-black-purple-wired-mechanical-gaming-keyboard",
    alt: "Hive75 V2 Keyboard",
  },
];

export const categories: Category[] = [
  {
    title: "Keyboards",
    href: "/collections/mechanical-keyboards",
    image: `${CDN}/collections/V2.png?v=1762756494&width=1200`,
  },
  {
    title: "Gaming Mouse",
    href: "/collections/gaming-mouse-and-mousepad",
    image: `${CDN}/collections/Untitled-4.png?v=1762756477&width=1200`,
  },
  {
    title: "Ergonomic WFH Chairs",
    href: "/collections/ergo-wfh-chairs",
    image: `${CDN}/files/d0d80cd6b35848f887490cb1dd8c5dc8.thumbnail.0000000000.jpg?v=1765198104&width=1080`,
  },
  {
    title: "Audio & Video Devices",
    href: "/collections/audio-video-and-lights",
    image: `${CDN}/collections/untitled.317_1_8b8ac6dd-aa76-4f9a-a0d9-aa6d6f437555.png?v=1762756614&width=1200`,
  },
  {
    title: "All products",
    subtitle: "Check out all our products",
    href: "/collections/shop-all",
    image: `${CDN}/files/all_products.png?v=1737708521&width=1200`,
  },
];

/** Live site Shop the Look scene + product handles (order matches hotspots 1–4) */
export const shopTheLookImage =
  "/shop-the-look/scene.png";

export const shopTheLookImageCdn = `${CDN}/files/Shopthelook2_8012997e-10aa-4148-97f2-fce2fce01b74.png?v=1771593801&width=1920`;

export const shopTheLookProducts = [
  "altus-ergo-gaming-chair",
  "anzu-v2-white-ultralight-ergonomic-wireless-gaming-mouse",
  "obsidian-27-inch-gaming-monitor",
  "swarm-white-purple-wireless-gaming-keyboard",
] as const;

export const instagramPosts = [
  {
    image: `${CDN}/files/ST.jpg?v=1771234439&width=600`,
    caption: "From a Bollywood Mom's favorite brand to next-gen keyboards",
  },
  {
    image: `${CDN}/files/Image-62.jpg?v=1771244720&width=600`,
    caption: "It's more than you think",
  },
  {
    image: `${CDN}/files/Image-993.jpg?v=1771245310&width=600`,
    caption: "Naruto x Cyber Land Gaming Keyboard Unboxing",
  },
  {
    image: `${CDN}/files/Image-906.jpg?v=1771245533&width=600`,
    caption: "COME LET's UNBOX MY TRIPOD!",
  },
  {
    image: `${CDN}/files/Image-749.jpg?v=1771245792&width=600`,
    caption: "CYBER LAND CHIMERA V2 Unboxing & Review",
  },
  {
    image: `${CDN}/files/Image-511.jpg?v=1771244884&width=600`,
    caption: "Meet the Cyber Land Swarm 65",
  },
];

export const logoUrl = `${CDN}/files/Cyber Land_Black_Logo_3x-100.jpg?v=1763638279&width=140`;
export const logoWhiteUrl = `${CDN}/files/Cyber Land_Black_Logo_3x-100.jpg?v=1763638279&width=140`;

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.collection.some((c) => product.collection.includes(c))
    )
    .slice(0, limit);
}

export const collectionMeta: Record<string, CollectionMeta> = {
  "best-sellers": {
    title: "Bestsellers",
    description: "Our most loved gear, trusted by creators and gamers.",
  },
  "mechanical-keyboards": {
    title: "Keyboards",
    description: "Mechanical keyboards engineered for performance and style.",
  },
  "gaming-mouse-and-mousepad": {
    title: "Mouse and Mousepads",
    description: "Ultralight and precision wireless gaming mice and pads.",
  },
  "mouse-and-mousepads": {
    title: "Mouse",
    description: "Performance gaming mice for every playstyle.",
  },
  "ergo-wfh-chairs": {
    title: "Ergonomic Chairs",
    description: "Chairs built for long sessions and better posture.",
  },
  "audio-video-and-lights": {
    title: "Audio Video and Lights",
    description: "Mics, webcams, and audio gear for creators.",
  },
  monitors: {
    title: "Monitors",
    description: "High-refresh gaming and creator monitors.",
  },
  "new-launches": {
    title: "New Launches",
    description: "The latest from Cyber Land.",
  },
  controllers: {
    title: "Controllers",
    description: "Gaming controllers for every setup.",
  },
  "gaming-controller": {
    title: "Gaming Controller",
    description: "Precision controllers built for competitive play.",
  },
  "shop-all": {
    title: "Shop All",
    description: "Check out all our products.",
  },
  all: {
    title: "All products",
    description: "Browse the complete Cyber Land catalog.",
  },
  "pc-builder-starter-kit": {
    title: "PC Builder Starter Kit",
    description: "Everything you need to start your PC build.",
  },
  "work-from-home-pro": {
    title: "Office Essentials",
    description: "Gear for productive WFH and office setups.",
  },
  "streamers-essential": {
    title: "Streamers Essential",
    description: "Must-have gear for streamers.",
  },
  streaming: {
    title: "Streaming",
    description: "Cameras, mics, and tools for live streaming.",
  },
  "gamers-essentials": {
    title: "Gamers Essentials",
    description: "Core gaming gear curated for performance.",
  },
  "gaming-gear": {
    title: "Gaming",
    description: "Keyboards, mice, and controllers for gamers.",
  },
  accessories: {
    title: "Accessories",
    description: "Essential accessories to complete your setup.",
  },
  "back-in-stock": {
    title: "Back In Stock",
    description: "Popular Cyber Land products that are available again.",
  },
  "best-deals-under-1999": {
    title: "Best Deals under Rs.1999",
    description: "Top picks under Rs. 1,999.",
  },
  "end-of-season-sale": {
    title: "EOSS All Deals",
    description: "End of season sale — biggest discounts on Cyber Land gear.",
  },
  "freebie-eligible": {
    title: "Freebie Eligible",
    description: "Products eligible for freebies on qualifying orders.",
  },
  "naruto-collab": {
    title: "Cyber Land X Naruto",
    description: "Limited collab gear inspired by Naruto.",
  },
  "payday-sale": {
    title: "PAYDAY SALE",
    description: "Payday specials on gaming and creator gear.",
  },
  products: {
    title: "Products",
    description: "Featured Cyber Land products.",
  },
  "shark-sale": {
    title: "Shark Sale",
    description: "Shark Sale deals across the catalog.",
  },
  "shop-best-sale-deals": {
    title: "Shop Best Sale Deals",
    description: "Hand-picked best sale deals right now.",
  },
  "summer-sale": {
    title: "Summer Sale",
    description: "Summer Sale savings on Cyber Land gear.",
  },
};

/** Resolve products for any collection handle (tag match + smart filters). */
export function getProductsByCollection(handle: string): Product[] {
  const h = handle.toLowerCase();

  if (h === "shop-all" || h === "all" || h === "products") {
    return [...products];
  }

  // Smart / sale collections
  if (h === "best-deals-under-1999") {
    return products.filter((p) => p.price <= 1999);
  }
  if (
    h === "end-of-season-sale" ||
    h === "payday-sale" ||
    h === "shark-sale" ||
    h === "summer-sale" ||
    h === "shop-best-sale-deals"
  ) {
    return products.filter(
      (p) =>
        p.compareAtPrice > p.price &&
        (p.compareAtPrice - p.price) / p.compareAtPrice >= 0.3
    );
  }
  if (h === "freebie-eligible") {
    return products.filter((p) => p.available);
  }
  if (h === "back-in-stock") {
    return products.filter((p) => p.available && (p.rating ?? 0) >= 4.5);
  }
  if (h === "gaming-gear") {
    return products.filter(
      (p) =>
        p.collection.includes("mechanical-keyboards") ||
        p.collection.includes("gaming-mouse-and-mousepad") ||
        p.collection.includes("controllers") ||
        p.tags?.includes("keyboard") ||
        p.tags?.includes("mouse")
    );
  }
  if (h === "mouse-and-mousepads") {
    return products.filter(
      (p) =>
        p.collection.includes("gaming-mouse-and-mousepad") ||
        p.tags?.includes("mouse")
    );
  }
  if (h === "gaming-controller" || h === "controllers") {
    return products.filter(
      (p) =>
        p.collection.includes("controllers") || p.tags?.includes("controller")
    );
  }
  if (h === "streaming" || h === "streamers-essential") {
    return products.filter(
      (p) =>
        p.collection.includes("audio-video-and-lights") ||
        p.collection.includes("streamers-essential") ||
        p.tags?.includes("webcam") ||
        p.tags?.includes("mic") ||
        p.tags?.includes("streaming")
    );
  }
  if (h === "accessories") {
    return products.filter(
      (p) =>
        p.tags?.includes("mic") ||
        p.tags?.includes("webcam") ||
        p.collection.includes("audio-video-and-lights")
    );
  }
  if (h === "naruto-collab") {
    return products.filter(
      (p) =>
        p.collection.includes("mechanical-keyboards") ||
        p.title.toLowerCase().includes("swarm") ||
        p.title.toLowerCase().includes("hive")
    );
  }
  if (h === "pc-builder-starter-kit") {
    return products.filter(
      (p) =>
        p.collection.includes("pc-builder-starter-kit") ||
        p.collection.includes("mechanical-keyboards") ||
        p.collection.includes("gaming-mouse-and-mousepad") ||
        p.collection.includes("monitors")
    );
  }
  if (h === "work-from-home-pro") {
    return products.filter(
      (p) =>
        p.collection.includes("work-from-home-pro") ||
        p.collection.includes("ergo-wfh-chairs") ||
        p.collection.includes("monitors") ||
        p.collection.includes("audio-video-and-lights")
    );
  }
  if (h === "gamers-essentials") {
    return products.filter(
      (p) =>
        p.collection.includes("gamers-essentials") ||
        p.collection.includes("mechanical-keyboards") ||
        p.collection.includes("gaming-mouse-and-mousepad") ||
        p.collection.includes("monitors")
    );
  }

  // Direct tag match
  const tagged = products.filter((p) => p.collection.includes(h));
  if (tagged.length > 0) return tagged;

  // Fallback empty
  return [];
}
