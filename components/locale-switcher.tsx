"use client";

import type { Route } from "next";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { cn } from "@/utils/cn";

export function LocaleSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale() as Locale;
  const query = useMemo(() => searchParams.toString(), [searchParams]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(nextLocale: Locale) {
    if (nextLocale === locale) return;

    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = nextLocale;
    } else {
      segments.push(nextLocale);
    }

    const nextPath = segments.join("/") || "/";
    const target = query ? `${nextPath}?${query}` : nextPath;
    router.replace(target as Route);
  }

  return (
    <div className={cn("relative z-40", className)} ref={dropdownRef}>
      <button
        className="inline-flex w-full cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-white/30 focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <Globe className="h-4 w-4 text-white/70" />
        <span>{localeLabels[locale]}</span>
      </button>

      {isOpen ? (
        <div className="absolute left-0 z-30 mt-2 w-44 rounded-2xl border border-white/10 bg-space-200 p-2 text-left shadow-2xl backdrop-blur-xl">
          {locales.map((value) => (
            <button
              className={cn(
                "flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10",
                value === locale && "bg-white/10 font-semibold text-white",
              )}
              key={value}
              onClick={() => {
                handleChange(value);
                setIsOpen(false);
              }}
              type="button"
            >
              <span>{localeLabels[value]}</span>
              {value === locale ? (
                <Check className="h-4 w-4 text-accent-cyan" />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
