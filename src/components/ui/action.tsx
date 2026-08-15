import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.72rem] uppercase tracking-[0.22em] font-normal transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-ink",
        outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-primary-foreground",
        ghost: "border border-background/40 text-background hover:bg-background hover:text-foreground",
        quiet: "text-foreground hover:text-clay",
      },
      size: {
        md: "px-7 py-3.5",
        sm: "px-5 py-2.5",
        bare: "p-0",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function ActionLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(actionVariants({ variant, size }), className)} {...props} />;
}
