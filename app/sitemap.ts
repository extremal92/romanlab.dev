import type { MetadataRoute } from "next";

import { locales, defaultLocale } from "@/i18n/config";
import { siteConfig } from "@/utils/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const localeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
  }));

  return [...baseEntries, ...localeEntries];
}

