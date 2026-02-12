"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";

type IntlProviderProps = {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, unknown>;
  timeZone?: string;
};

export function IntlProvider({
  children,
  locale,
  messages,
  timeZone,
}: IntlProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}
