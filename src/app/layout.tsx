import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { site } from "@/shared/config/site";
import "@/shared/styles/globals.scss";
const font = localFont({ src: "../../public/fonts/golos-text-variable.ttf", variable: "--font-body", display: "swap", weight: "400 700", fallback: ["Arial"] });
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
  title: site.title, description: site.description, applicationName: site.name, category: "Дизайн-концепт", formatDetection: { telephone: false },
  openGraph: { title: site.title, description: site.description, siteName: site.name, locale: "ru_RU", type: "website", ...(site.url ? { url: site.url, images: [{ url: "/social-cover.jpg", width: 1200, height: 630, alt: "Слой — вымышленная кофе-студия" }] } : {}) },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, ...(site.url ? { images: ["/social-cover.jpg"] } : {}) },
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png", sizes: "64x64", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f7f9", colorScheme: "light" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ru" className={font.variable}><body>{children}</body></html>;
}
