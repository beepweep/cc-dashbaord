import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Cardforyou - Find the perfect crypto card",
  description: "Compare rewards, fees, and benefits of top crypto cards.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
