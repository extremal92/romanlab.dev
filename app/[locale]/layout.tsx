import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getMessages,
  getTimeZone,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Suspense, type ReactNode } from "react";

import { locales, type Locale } from "@/i18n/config";
import { SiteShell } from "@/components/layout/site-shell";
import { IntlProvider } from "@/providers/intl-provider";
import { siteConfig } from "@/utils/site-config";

type LayoutParams = {
  locale: string;
};

type Props = {
  children: ReactNode;
  params: Promise<LayoutParams>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "seo" });
  const title = t("title");
  const description = t("description");
  const ogTitle = t("ogTitle");
  const ogDescription = t("ogDescription");
  const pageUrl = `${siteConfig.url}/${locale}`;

  const languages = locales.reduce(
    (acc, currentLocale) => ({
      ...acc,
      [currentLocale]: `/${currentLocale}`,
    }),
    {} as Record<string, string>,
  );

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const timeZone = await getTimeZone();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Senior Frontend Engineer",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    nationality: "Romanian",
    worksFor: {
      "@type": "Organization",
      name: "Roman Romanov",
    },
    sameAs: siteConfig.socials.map((social) => social.href),
  };

  return (
    <>
      <IntlProvider locale={locale} messages={messages} timeZone={timeZone}>
        <Suspense fallback={null}>
          <SiteShell locale={locale}>{children}</SiteShell>
        </Suspense>
      </IntlProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
