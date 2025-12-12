import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Cardforyou - Find the Perfect Crypto Card",
    template: "%s | Cardforyou",
  },
  description: "Compare crypto debit cards from top providers like KAST, Crypto.com, Bybit, and more. Find the best cashback rates, rewards, and benefits for your needs.",
  keywords: ["crypto card", "crypto debit card", "KAST card", "crypto.com card", "bybit card", "crypto cashback", "crypto rewards", "bitcoin card", "cryptocurrency card", "compare crypto cards"],
  authors: [{ name: "Cardforyou" }],
  creator: "Cardforyou",
  publisher: "Cardforyou",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cardforyou.com",
    siteName: "Cardforyou",
    title: "Cardforyou - Find the Perfect Crypto Card",
    description: "Compare crypto debit cards from top providers. Find the best cashback rates, rewards, and benefits.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Cardforyou - Crypto Card Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardforyou - Find the Perfect Crypto Card",
    description: "Compare crypto debit cards from top providers. Find the best cashback rates, rewards, and benefits.",
    images: ["/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://cardforyou.com",
  },
  category: "finance",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={outfit.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
