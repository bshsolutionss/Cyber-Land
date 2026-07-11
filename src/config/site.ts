export const siteConfig = {
  name: "Cyber Land",
  legalName: "Cyber Land",
  description:
    "Shop laptops, gaming PCs, computer hardware, keyboards, mice, monitors, and gaming accessories. Level Up Your Setup with Cyber Land.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  support: {
    email: "help@cyberland.com",
    phone: "+91 9611507877",
    phoneHref: "tel:+919611507877",
    whatsapp: "https://wa.me/919611507877",
    hours: "Mon - Sat : 10am - 7pm",
  },
  social: {
    x: "https://x.com/cyberland",
    instagram: "https://www.instagram.com/cyberland/",
    youtube: "https://www.youtube.com/@CyberLand",
    discord: "https://discord.gg/uBn22bYTNB",
  },
  currency: "INR" as const,
  locale: "en-IN" as const,
  freeShippingThreshold: 1000,
  trackOrderUrl: "/pages/track-order",
} as const;
