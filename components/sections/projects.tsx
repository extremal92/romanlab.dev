import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { HoverLift } from "@/components/motion/hover-lift";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { projectCards } from "@/utils/data";
import type { Route } from "next";

type ProjectsSectionProps = {
  locale: Locale;
};

export async function ProjectsSection({ locale }: ProjectsSectionProps) {
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <section className="mt-24" id="projects">
      <SectionHeading
        actions={
          <Link
            className="btn-secondary inline-flex items-center gap-2"
            href="https://github.com/extremal92"
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            {t("cta")}
          </Link>
        }
        description={t("subtitle")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <div className="mt-10 grid gap-8">
        {projectCards.map((project, index) => (
          <Reveal
            direction={index % 2 === 0 ? "left" : "right"}
            key={project.id}
          >
            <HoverLift>
              <GlassCard accent="blue" className="p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex flex-1 gap-4 flex-col sm:flex-row">
                    <div className="relative h-18 w-18 flex-shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        alt={t(`cards.${project.id}.label`)}
                        className="object-contain"
                        fill
                        sizes="72px"
                        src={project.logo}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                        {t(`cards.${project.id}.label`)}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {t(`cards.${project.id}.title`)}
                      </h3>
                      <p className="mt-4 text-slate-200">
                        {t(`cards.${project.id}.description`)}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 lg:max-w-[460px] xl:max-w-fit">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                      {t("impact")}
                    </p>
                    <p className="mt-2 text-base text-white">
                      {project.metrics}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  {project.site ? (
                    <Link
                      className="inline-flex items-center gap-2 text-accent-purple transition hover:text-white"
                      href={project.site as Route}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t("actions.demo")} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </GlassCard>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
