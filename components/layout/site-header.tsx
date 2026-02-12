"use client";

import Link from "next/link";
import type { Route } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { siteConfig } from "@/utils/site-config";
import Image from "next/image";

export function SiteHeader() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = siteConfig.navItems;

  return (
    <header className="sticky top-6 z-40 mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="glass-panel relative flex items-center justify-between rounded-full border border-white/10 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 overflow-hidden items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-widest text-slate-200">
            <Image
              src="/logo.png"
              alt="RRDev"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
            {/* <span className="absolute inset-0 rounded-2xl border border-white/40 opacity-40" /> */}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              RRDev
            </p>
            <p className="text-sm font-semibold text-white">
              {siteConfig.name}
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="transition hover:text-white"
              href={item.href as Route}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />

          <Link className="btn-secondary" href="#projects">
            {t("projects")}
          </Link>
          <Link className="btn-primary" href="#contact">
            {t("contact")}
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="glass-panel mt-3 rounded-3xl border border-white/10 p-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="tracking-wide"
                href={item.href as Route}
                onClick={() => setIsOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center w-[130px] mb-3">
              <LocaleSwitcher className="w-full justify-between" />
            </div>
            <div className="flex items-center gap-3 w-full">
              <Link
                className="btn-secondary flex-1 text-center"
                href="#projects"
              >
                {t("projects")}
              </Link>
              <Link className="btn-primary flex-1 text-center" href="#contact">
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
