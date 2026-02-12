import Link from "next/link";

import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  children,
  className,
  variant = "primary",
  href,
  ...rest
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  const finalClassName = cn(variantClass, className);

  if (href) {
    return (
      <Link
        className={finalClassName}
        href={href as React.ComponentProps<typeof Link>["href"]}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} type="button" {...rest}>
      {children}
    </button>
  );
}
