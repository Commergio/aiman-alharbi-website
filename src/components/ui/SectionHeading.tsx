import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({ title, subtitle, align = "start", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 space-y-3 sm:mb-10 md:mb-14 lg:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span
          className="h-px w-10 bg-gradient-to-r from-[#B8925A] to-transparent rtl:bg-gradient-to-l"
          aria-hidden
        />
        <p className="font-body-en text-[10px] uppercase tracking-[0.38em] text-[#8a9bb0]">{subtitle}</p>
      </div>
      <h2 className="text-balance text-2xl leading-[1.25] text-[#0F2745] sm:text-3xl md:text-[2.35rem]">{title}</h2>
    </div>
  );
}
