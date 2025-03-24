import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
  DOMAIN_URL,
} from "@/config/common";
import { baseOpenGraph } from "@/app/shared-metadata";
import { baseURL } from "@/lib/utils";
import { body, header } from "@/assets/fonts";
import { Header } from "@/components/core/header";
import CallToAction from "@/components/shared/call-to-action";
import Footer from "@/components/core/footer";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: APP_TITLE_TEMPLATE,
  },
  metadataBase: baseURL,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "amazon",
    "agency",
    "marketing",
    "fba",
    "brand",
    "seller",
    "management",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    ...baseOpenGraph,
    emails: ["homematterzsg@gmail.com"],
    url: DOMAIN_URL,
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col font-body ${header.variable} ${body.variable} antialiased`}
      >
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
