import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";

import { BackgroundFX } from "./background-fx";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteShell({ children, locale }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFX />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-16 sm:px-8">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </div>
    </div>
  );
}
