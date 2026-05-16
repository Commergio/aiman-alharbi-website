"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium leading-snug transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-normal text-center sm:whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-[#0F2745] text-white shadow-sm hover:bg-[#0B1E35] focus-visible:ring-[#0F2745] ring-offset-white",
        secondary:
          "border border-[#0F2745]/20 bg-white text-[#0F2745] hover:border-[#0F2745]/40 hover:bg-[#F7F9FC] focus-visible:ring-[#0F2745] ring-offset-white",
        gold: "bg-[#B8925A] text-white shadow-sm hover:bg-[#a8834d] focus-visible:ring-[#B8925A] ring-offset-white",
        ghost:
          "text-[#243447] hover:bg-[#F5F7FA] hover:text-[#0F2745] focus-visible:ring-[#0F2745] ring-offset-white",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-auto min-h-12 px-6 py-3 text-base sm:h-12 sm:px-8 sm:py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
