import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AppProviders } from "@/components/app-providers";
import { siteBaseUrl } from "@/lib/i18n";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: "FindYourPace",
  description:
    "Free running pace calculator to estimate pace, distance, time and race splits.",
  robots: "index, follow",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FindYourPace",
              url: siteBaseUrl,
              description:
                "Free running pace calculator to estimate pace, distance, time and race splits. Find your pace. Win your race.",
            }),
          }}
        />
      </head>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
