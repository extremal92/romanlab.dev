import { cn } from "@/utils/cn";

type BadgeProps = {
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

export function Badge({ label, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90",
        className
      )}
    >
      {icon}
      {label}
    </span>
  );
}
