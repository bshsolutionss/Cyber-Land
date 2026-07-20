import { siteConfig } from "@/config/site";

/** Pakistani Rupee display: Rs. 1,000 */
export function formatPrice(amount: number): string {
  const formatted = new Intl.NumberFormat(siteConfig.locale, {
    maximumFractionDigits: 0,
  }).format(amount);
  return `Rs. ${formatted}`;
}

export function calcDiscount(price: number, compareAt: number): number {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
