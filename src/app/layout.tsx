import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { site } from "@/shared/config/site";
import "@/shared/styles/globals.scss";

const body = localFont({ src: "../../public/fonts/golos-text-variable.ttf", variable: "--font-body", display: "swap", weight: "400 700", fallback: ["Arial"] });
const display = localFont({ src: "../../public/fonts/lora-variable.ttf", variable: "--font-display", display: "swap", weight: "400 700", fallback: ["Georgia"] });

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
  title: site.title,
  description: site.description,
  applicationName: "Тефити",
  category: "Кофейня",
  formatDetection: { telephone: false },
  openGraph: { title: site.title, description: site.description, siteName: site.name, locale: "ru_RU", type: "website", ...(site.url ? { url: site.url, images: [{ url: "/social-cover.jpg", width: 1200, height: 630, alt: "Тефити — кофе и десерты на Красной, 98" }] } : {}) },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, ...(site.url ? { images: ["/social-cover.jpg"] } : {}) },
  robots: { index: Boolean(site.url), follow: Boolean(site.url), googleBot: { index: Boolean(site.url), follow: Boolean(site.url), "max-image-preview": "large" } },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png", sizes: "64x64", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  other: { "geo.region": "RU-KDA", "geo.placename": "Краснодар", "geo.position": "45.031838;38.973118", ICBM: "45.031838, 38.973118" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#8eacb5", colorScheme: "light" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ru" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>;
}
