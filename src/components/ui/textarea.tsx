import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-2xl border border-[#0F2745]/15 bg-white px-4 py-3 text-sm text-[#223144] placeholder:text-[#7b8897] outline-none transition focus-visible:ring-2 focus-visible:ring-[#B8925A]/55",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
