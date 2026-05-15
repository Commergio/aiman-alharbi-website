import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-2xl border border-[#0F2745]/15 bg-white px-4 py-2 text-sm text-[#223144] placeholder:text-[#7b8897] outline-none transition focus-visible:ring-2 focus-visible:ring-[#B8925A]/55",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
