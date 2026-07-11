export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Primary desktop/mobile menu — exact order from live header.
 * Dropdowns: Shop by Setup, Software & Support only.
 */
export const mainNav: NavItem[] = [
  { label: "Bestsellers", href: "/collections/best-sellers" },
  {
    label: "Shop by Setup",
    href: "#",
    children: [
      {
        label: "PC builder starter kit",
        href: "/collections/pc-builder-starter-kit",
      },
      {
        label: "Work from home essentials",
        href: "/collections/work-from-home-pro",
      },
      {
        label: "Streamers essential",
        href: "/collections/streamers-essential",
      },
      {
        label: "Gaming essentials",
        href: "/collections/gamers-essentials",
      },
    ],
  },
  { label: "New Launches", href: "/collections/new-launches" },
  { label: "Monitor", href: "/collections/monitors" },
  { label: "Ergo Chairs", href: "/collections/ergo-wfh-chairs" },
  { label: "Keyboards", href: "/collections/mechanical-keyboards" },
  {
    label: "Mouse and Mousepads",
    href: "/collections/gaming-mouse-and-mousepad",
  },
  { label: "Controllers", href: "/collections/controllers" },
  {
    label: "Audio Video & Lights",
    href: "/collections/audio-video-and-lights",
  },
  {
    label: "Software & Support",
    href: "#",
    children: [
      { label: "Kontrol Web Software", href: "/pages/kontrol" },
      { label: "Software downloads", href: "/pages/downloads" },
      { label: "Contact us", href: "/pages/contact" },
    ],
  },
];

/** Mobile drawer extras after main nav (live: Wishlist only) */
export const mobileNavExtras: NavItem[] = [
  { label: "Wishlist", href: "/pages/wishlist" },
];

export const announcements = [
  {
    text: "ANZU V2 NEW LAUNCH",
    textMobile: "ANZU V2 NEW LAUNCH",
    href: "/products/anzu-v2-black-ultralight-ergonomic-wireless-gaming-mouse",
  },
  {
    text: "Freebies on orders above ₹5000",
    textMobile: "Freebies on orders above 5000",
    href: null as string | null,
  },
  {
    text: "7 Days Returns and Replacement*",
    textMobile: "7 Days Return and Replacement*",
    href: "/pages/returns-exchanges",
  },
];

export const footerQuickLinks = [
  { label: "Downloads", href: "/pages/downloads" },
  { label: "FAQs", href: "/pages/faq" },
  { label: "Track Order", href: "/pages/track-order" },
  { label: "Returns & Exchanges", href: "/pages/returns-exchanges" },
  { label: "Warranty", href: "/pages/warranty-guidelines" },
  { label: "Contact Us", href: "/pages/contact" },
  { label: "Support", href: "/pages/support" },
  { label: "B2B Orders", href: "/pages/b2b-queries" },
  { label: "Creators Program", href: "/pages/creators-program" },
  {
    label: "Campus Ambassador Program",
    href: "/pages/campus-ambassador-program",
  },
  { label: "Blog", href: "/blogs/tech-blog" },
  { label: "All Collections", href: "/collections" },
];

export const footerSocials = [
  { label: "X", href: "https://x.com/cyberland" },
  { label: "Instagram", href: "https://www.instagram.com/cyberland/" },
  { label: "Youtube", href: "https://www.youtube.com/@CyberLand" },
  { label: "Discord", href: "https://discord.gg/uBn22bYTNB" },
];

export const footerPolicies = [
  { label: "Refund policy", href: "/policies/refund-policy" },
  { label: "Privacy policy", href: "/policies/privacy-policy" },
  { label: "Terms of service", href: "/policies/terms-of-service" },
  { label: "Shipping policy", href: "/policies/shipping-policy" },
  { label: "Contact information", href: "/policies/contact-information" },
];
