'use client';

import { ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { heroMetrics } from "@/utils/data";
import { siteConfig } from "@/utils/site-config";

export function HeroSection() {
  const t = useTranslations("hero");
  const tagline = t.raw("tagline") as string[];

  return (
    <section
      aria-label={t("ariaLabel")}
      className="relative overflow-hidden rounded-hero border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-6 py-12 shadow-2xl backdrop-blur-3xl sm:px-12 sm:py-16"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-accent-cyan/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-purple/30 blur-[140px]" />
        <div className="fx-grid" />
      </div>
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <Reveal>
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
              <Sparkles className="h-4 w-4 text-accent-cyan" />
              {t("eyebrow")}
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="text-lg text-slate-200 sm:text-xl">
                {t("description")}
              </p>
            </div>
            <ul className="tagline-grid grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 md:grid-cols-2">
              {tagline.map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                {t("ctaPrimary")}
              </Button>
              <Button href="#contact" variant="secondary">
                {t("ctaSecondary")}
              </Button>
              <Button
                className="border border-white/40 text-white hover:border-white/70"
                href={siteConfig.resumePath}
                download
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2">
                  <ArrowDownToLine className="h-4 w-4" />
                  {t("ctaCv")}
                </span>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40"
                href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
              >
                {siteConfig.contactPhone}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-card border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {t("metrics.title")}
            </p>
            <div className="mt-6 grid gap-6">
              {heroMetrics.map((metric) => (
                <div
                  className="flex items-center justify-between"
                  key={metric.id}
                >
                  <div>
                    <p className="text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {t(metric.labelKey)}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    {t(`metrics.copy.${metric.id}`)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-accent-cyan/30 bg-accent-cyan/5 p-4 text-sm text-slate-200">
              <p className="font-semibold uppercase tracking-[0.4em] text-accent-cyan">
                {t("availability.label")}
              </p>
              <p className="mt-2 text-base text-white">
                {t("availability.value")}
              </p>
              <a
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition hover:text-white"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {t("availability.cta")} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
