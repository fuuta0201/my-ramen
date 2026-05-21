import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

export const buttonVariants = cva(
  "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background shadow-sm transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        secondary:
          "border border-border bg-card text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
