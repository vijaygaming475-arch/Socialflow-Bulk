import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#07090E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://socialflow-bulk.vercel.app"
  ),
  title: {
    default: "SocialFlow Bulk — Bulk Video Scheduling for Creators",
    template: "%s | SocialFlow Bulk",
  },
  description:
    "Organize, schedule and manage creator-owned video publishing workflows for TikTok, Facebook Pages and YouTube.",
  keywords: [
    "bulk video scheduler",
    "video scheduling software",
    "TikTok publisher",
    "Facebook page video manager",
    "YouTube shorts scheduler",
    "creator productivity",
    "desktop video management",
  ],
  authors: [{ name: "SocialFlow Bulk" }],
  creator: "SocialFlow Bulk",
  publisher: "SocialFlow Bulk",
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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/app-icon-1024.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialflow-bulk.vercel.app",
    title: "SocialFlow Bulk — Bulk Video Scheduling for Creators",
    description:
      "Organize, schedule and manage creator-owned video publishing workflows for TikTok, Facebook Pages and YouTube.",
    siteName: "SocialFlow Bulk",
    images: [
      {
        url: "/app-icon-1024.png",
        width: 1024,
        height: 1024,
        alt: "SocialFlow Bulk - Creator Video Scheduling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialFlow Bulk — Bulk Video Scheduling for Creators",
    description:
      "Organize, schedule and manage creator-owned video publishing workflows for TikTok, Facebook Pages and YouTube.",
    images: ["/app-icon-1024.png"],
  },
  alternates: {
    canonical: "https://socialflow-bulk.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#07090E] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

