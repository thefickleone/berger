import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-luxury-blue)] focus-visible:ring-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-luxury-blue)] text-white shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-[var(--color-charcoal-900)]",
  secondary:
    "glass-soft text-[var(--color-charcoal-900)] hover:-translate-y-0.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return <button ref={ref} className={cn(baseStyles, variants[variant], className)} {...props} />;
});

