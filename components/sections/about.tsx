import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";

type AboutSectionProps = {
  locale: Locale;
};

export async function AboutSection({ locale }: AboutSectionProps) {
  const t = await getTranslations({ locale, namespace: "about" });
  const body = t.raw("body") as string[];
  const highlights = t.raw("highlights.items") as string[];
  const avatarBullets = t.raw("avatar.bullets") as string[];
  const passionBullets = t.raw("passion.bullets") as string[];

  return (
    <section className="mt-24" id="about">
      <SectionHeading
        description={t("subtitle")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr,1fr]">
        <Reveal direction="left">
          <article className="glass-panel rounded-3xl border border-white/10 p-8 text-slate-200">
            <div className="space-y-5 text-base leading-relaxed">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent-cyan">
                {t("highlights.title")}
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-4 text-sm text-slate-100"
                    key={highlight}
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal direction="right">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-0">
              <div className="relative h-64 w-full">
                <Image
                  alt={t("media.portraitAlt")}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 100vw"
                  src="/images/my-photo.jpg"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  {t("avatar.label")}
                </p>

                <p className="mt-3 text-base text-white  whitespace-pre-line">
                  {t("avatar.caption")}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {avatarBullets.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <span className="mt-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-0">
              <div className="relative h-64 w-full">
                <Image
                  alt={t("media.bikeAlt")}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  src="/images/my-photo-with-bike.png"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  {t("passion.title")}
                </p>
                <p className="mt-3 text-lg text-white">{t("passion.body")}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {passionBullets.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <span className="mt-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  {t("avatar.bikeCaption")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
