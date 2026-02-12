export const locales = ["en", "ro", "ru", "ua"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ro: "Română",
  ru: "Русский",
  ua: "Українська",
};

export const localePrefix: "always" | "as-needed" | "never" = "always";
