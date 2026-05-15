import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export type { Dictionary, Locale };

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}

export const LOCALE_STORAGE_KEY = "aiman-locale";
