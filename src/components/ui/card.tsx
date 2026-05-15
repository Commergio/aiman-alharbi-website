import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-[1.35rem] border border-[#0F2745]/10 bg-white p-6 shadow-[0_14px_36px_-22px_rgba(15,39,69,0.45)] backdrop-blur-[2px] sm:rounded-3xl",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg font-semibold text-[#0F2745]", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm leading-7 text-[#364E68]", className)}
      {...props}
    />
  );
}

export { Card, CardDescription, CardTitle };
