import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    template: "%s | ReVolt Energy",
    default: "ReVolt Energy | Powering a Circular Future",
  },
  description: "ReVolt Energy is a premier e-waste recycling SaaS platform. We provide responsible electronics recycling that is simple, traceable, and accessible for consumers and enterprises.",
  keywords: ["e-waste", "recycling", "sustainability", "ITAD", "circular economy", "hardware lifecycle"],
  authors: [{ name: "Abhay Donde" }, { name: "ReVolt Energy Team" }],
  creator: "ReVolt Energy",
  publisher: "ReVolt Energy",
  openGraph: {
    title: "ReVolt Energy | Powering a Circular Future",
    description: "Responsible electronics recycling made simple, traceable, and accessible.",
    url: "https://revolt.energy",
    siteName: "ReVolt Energy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReVolt Energy | Powering a Circular Future",
    description: "Responsible electronics recycling made simple, traceable, and accessible.",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
