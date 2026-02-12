import type { MetadataRoute } from "next";

import { siteConfig } from "@/utils/site-config";

export default function robots(): MetadataRoute.Robots {
  const url = new URL(siteConfig.url);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url.origin}/sitemap.xml`,
    host: url.host,
  };
}

