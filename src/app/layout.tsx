import type { Metadata, Viewport } from "next";
import { Comfortaa, Inter, Jost } from "next/font/google";
import AppProviders from "@/components/providers/AppProviders";
import SiteShell from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  style: ["normal", "italic"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  weight: ["700"],
});

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Cyber Land: Laptops, Gaming PCs, Hardware & Accessories",
    template: "%s | Cyber Land",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  // Explicitly disable all favicon / app icon metadata
  icons: {},
  keywords: [
    "Cyber Land",
    "laptops",
    "gaming PCs",
    "computer hardware",
    "gaming accessories",
    "gaming keyboard",
    "gaming mouse",
    "mechanical keyboard",
    "computer accessories",
    "electronics",
    "Pakistan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Cyber Land: Laptops, Gaming PCs, Hardware & Accessories",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Land: Laptops, Gaming PCs & Tech Accessories",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable} ${comfortaa.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
