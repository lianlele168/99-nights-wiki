import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import config from "@/data/game.config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.baseUrl),
  title: {
    default: "99 Nights in the Forest Wiki — Codes, Class Tier List & Guides 2026",
    template: "%s | 99 Nights in the Forest Wiki",
  },
  description:
    "The #1 unofficial 99 Nights in the Forest wiki. Find all active codes, class tier list, entity guide, diamond tips, and survival strategies. Updated daily.",
  keywords: [
    "99 Nights in the Forest",
    "99 Nights in the Forest wiki",
    "99 Nights in the Forest codes",
    "99 Nights in the Forest class tier list",
    "99 Nights in the Forest entity guide",
    "99 Nights in the Forest diamonds",
    "99 Nights Roblox",
  ],
  authors: [{ name: "99 Nights Wiki" }],
  openGraph: {
    type: "website",
    siteName: "99 Nights in the Forest Wiki",
    title: "99 Nights in the Forest Wiki — Codes, Class Tier List & Guides 2026",
    description:
      "The #1 unofficial 99 Nights in the Forest wiki. Codes, tier list, entity guide and more.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "99 Nights in the Forest Wiki",
    description: "Codes, class tier list, entity guide and survival tips.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
