import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Business Park Security",
  description:
    "Professional business park security officers, mobile patrols, and access control designed to protect multi-tenant properties, parking areas, offices, and after-hours activity.",
  keywords: [
    "business park security",
    "office campus security",
    "corporate plaza security",
    "commercial property security",
    "mobile patrols",
    "access control",
    "secure guard",
    "after-hours security",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Business Park Security",
    description:
      "Professional business park security officers, mobile patrols, and access control designed to protect multi-tenant properties, parking areas, offices, and after-hours activity.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
