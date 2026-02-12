import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 text-left text-white md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div>
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-accent-cyan">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex-shrink-0">{actions}</div> : null}
    </div>
  );
}
