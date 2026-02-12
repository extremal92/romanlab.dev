import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getLocale } from "next-intl/server";

import { localeLabels, locales, type Locale } from "@/i18n/config";
import { cn } from "@/utils/cn";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const bodyClasses = cn(
  geistSans.variable,
  geistMono.variable,
  "bg-space text-slate-100 antialiased",
);

export const metadata: Metadata = {
  title: "Roman Romanov — Senior Frontend Engineer",
  description:
    "Portfolio of Roman Romanov, a Senior Frontend Engineer crafting performant, scalable, and future-ready experiences.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const normalizedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  return (
    <html
      lang={normalizedLocale}
      data-locale-label={localeLabels[normalizedLocale]}
    >
      <body className={bodyClasses}>{children}</body>
    </html>
  );
}
