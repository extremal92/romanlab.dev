import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/utils/site-config";

type SiteFooterProps = {
  locale: Locale;
};

export async function SiteFooter({ locale }: SiteFooterProps) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="mt-20 border-t border-white/5 bg-space/60 py-10 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">{siteConfig.name}</p>
          <p>{t("tagline")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-white">
          {siteConfig.socials.map((social) => (
            <a
              className="transition hover:text-accent-cyan"
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target="_blank"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {t("rights")}
        </p>
      </div>
    </footer>
  );
}
