import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b61cd] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#171717] text-white border-2 border-[#171717] hover:bg-[#333]",
        secondary:
          "bg-transparent text-[#171717] border-2 border-[#171717] hover:bg-[#171717] hover:text-white",
        ghost: "bg-transparent text-[#171717] hover:bg-black/5",
      },
      size: {
        default: "rounded-[3.75rem] px-6 py-3 text-sm",
        sm: "rounded-[3.75rem] px-4 py-2 text-xs",
        lg: "rounded-[3.75rem] px-8 py-3.5 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
