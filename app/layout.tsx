import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ConditionalNavigationClient } from "@/components/ConditionalNavigationClient";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import AOSInit from "@/components/AOSInit";
import ToastProvider from "@/components/ToastProvider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pusat Kurikulum Dan Pengembangan Pembelajaran",
  description:
    "Pusat Kurikulum dan Pengembangan Pembelajaran ITERA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AOSInit />
        <ToastProvider />
        <Suspense fallback={<div>Loading...</div>}>
          <ConditionalNavigationClient />
          {children}
          <ConditionalFooter />
        </Suspense>
      </body>
    </html>
  );
}
