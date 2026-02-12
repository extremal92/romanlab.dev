import { getTranslations } from "next-intl/server";

import { HoverLift } from "@/components/motion/hover-lift";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { contactLinks } from "@/utils/data";

type ContactSectionProps = {
  locale: Locale;
};

export async function ContactSection({ locale }: ContactSectionProps) {
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <section className="mt-24" id="contact">
      <SectionHeading
        description={t("subtitle")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          const isExternal = link.href.startsWith("http");
          const ctaText =
            link.id === "resume" ? t(`${link.id}.title`) : t("connect");

          return (
            <Reveal
              direction={index % 2 === 0 ? "left" : "right"}
              key={link.id}
            >
              <HoverLift>
                <GlassCard accent="cyan" className="p-6">
                <div className="flex min-h-[72px] items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                      {t(`${link.id}.label`)}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {t(`${link.id}.title`)}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-200">
                  {t(`${link.id}.description`)}
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition hover:text-white"
                  download={link.download}
                  href={link.href}
                  rel={isExternal ? "noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  {ctaText} →
                </a>
              </GlassCard>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-300">
        {t("availability")}
      </div>
    </section>
  );
}
