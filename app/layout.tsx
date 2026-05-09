import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeContext";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageLoader from "@/components/layout/PageLoader";
import Aurora from "@/components/animated/Aurora";
import CursorGlow from "@/components/layout/CursorGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasbeer.dev"),
  title: {
    default: "Jasbeer | Backend & Platform Engineer",
    template: "%s | Jasbeer",
  },
  description:
    "Mohammad Jasbeer — Backend & Platform Engineer crafting reliable distributed systems, observability, and AI-assisted developer tooling.",
  applicationName: "Jasbeer Portfolio",
  authors: [{ name: "Mohammad Jasbeer" }],
  creator: "Mohammad Jasbeer",
  keywords: [
    "Mohammad Jasbeer",
    "Jasbeer",
    "Backend Engineer",
    "Platform Engineer",
    "Distributed Systems",
    "RabbitMQ",
    "Go",
    "Python",
    "Kubernetes",
    "AI Tooling",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jasbeer | Backend & Platform Engineer",
    description:
      "Backend & Platform Engineer focused on resilient distributed systems, developer platforms, and AI-assisted tooling.",
    siteName: "Jasbeer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasbeer | Backend & Platform Engineer",
    description:
      "Backend & Platform Engineer focused on resilient distributed systems, developer platforms, and AI-assisted tooling.",
    creator: "@jasbeer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: "#0c0c0e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Aurora />
          <CursorGlow />
          <SmoothScroll />
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
