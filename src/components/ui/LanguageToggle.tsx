"use client";

import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageToggle({ className, compact }: LanguageToggleProps) {
  const { locale, setLocale, dict } = useLocale();

  const options: { id: Locale; label: string }[] = [
    { id: "ar", label: dict.language.ar },
    { id: "en", label: dict.language.en },
  ];

  return (
    <div
      role="group"
      aria-label={dict.language.label}
      className={cn(
        "flex items-center rounded-lg border border-[#0F2745]/12 bg-white/85 p-px shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => setLocale(opt.id)}
          className={cn(
            "min-h-7 rounded-md px-2 py-0.5 text-[10px] font-medium leading-none transition",
            locale === opt.id
              ? "bg-[#0F2745] text-white shadow-sm"
              : "text-[#4a6078] hover:text-[#0F2745]",
            compact && "min-h-6 px-1.5 py-px text-[9px]",
          )}
          aria-pressed={locale === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
