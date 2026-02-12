import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  accent?: "cyan" | "purple" | "magenta" | "blue";
};

const accentMap: Record<
  NonNullable<GlassCardProps["accent"]>,
  string
> = {
  cyan: "from-accent-cyan/30 to-accent-blue/20",
  purple: "from-accent-purple/40 to-accent-magenta/30",
  magenta: "from-accent-magenta/40 to-accent-purple/40",
  blue: "from-accent-blue/40 to-accent-cyan/30",
};

export function GlassCard({
  children,
  className,
  accent = "cyan",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-card border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl transition duration-300 hover:border-white/20",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-60 blur-3xl transition duration-500 group-hover:opacity-80",
          `bg-gradient-to-br ${accentMap[accent]}`
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
