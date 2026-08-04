export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  wordPressUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "",
  wcConsumerKey: process.env.WC_CONSUMER_KEY ?? "",
  wcConsumerSecret: process.env.WC_CONSUMER_SECRET ?? "",
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
} as const;
