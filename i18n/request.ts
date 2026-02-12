import { getRequestConfig } from "next-intl/server";

import { Locale, defaultLocale, locales } from "./config";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("../messages/en.json").then((mod) => mod.default),
  ro: () => import("../messages/ro.json").then((mod) => mod.default),
  ru: () => import("../messages/ru.json").then((mod) => mod.default),
  ua: () => import("../messages/ua.json").then((mod) => mod.default),
};

export default getRequestConfig(async ({ locale }) => {
  // Normalize locale coming from Next / browser (e.g. "en-US" -> "en")
  const raw = locale || defaultLocale;
  const base = raw.split("-")[0] as Locale;

  const isSupported = (locales as readonly string[]).includes(base);
  const currentLocale: Locale = isSupported ? base : defaultLocale;

  return {
    locale: currentLocale,
    messages: await dictionaries[currentLocale](),
    timeZone: "Europe/Bucharest",
  };
});
