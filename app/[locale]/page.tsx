import { Suspense } from "react";

import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import type { Locale } from "@/i18n/config";

function PageContent({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection />
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return (
    <Suspense fallback={null}>
      <PageContent locale={locale} />
    </Suspense>
  );
}
