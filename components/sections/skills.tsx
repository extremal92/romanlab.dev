import { getTranslations } from "next-intl/server";

import { HoverLift } from "@/components/motion/hover-lift";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { skillCategories } from "@/utils/data";

type SkillsSectionProps = {
  locale: Locale;
};

export async function SkillsSection({ locale }: SkillsSectionProps) {
  const t = await getTranslations({ locale, namespace: "skills" });

  return (
    <section className="mt-24" id="skills">
      <SectionHeading
        description={t("subtitle")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const items = t.raw(`categories.${category.id}.items`) as string[];
          const LabelIcon = category.icon;

          return (
            <Reveal
              direction={index % 2 === 0 ? "left" : "right"}
              key={category.id}
            >
              <HoverLift>
                <GlassCard accent={category.accent}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                      <LabelIcon className="h-6 w-6 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                        {t(`categories.${category.id}.label`)}
                      </p>
                      <p className="text-xl font-semibold text-white">
                        {t(`categories.${category.id}.title`)}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {items.map((item) => (
                      <li className="flex items-start gap-3" key={item}>
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
