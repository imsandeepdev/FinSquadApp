import en, { TranslationKey } from "./en";
import hi from "./hi";

export type LanguageCode = "en" | "hi";

export type { TranslationKey };

/**
 * To add a new language in future:
 *   1. Create ./<code>.ts exporting Record<TranslationKey, string> (copy hi.ts
 *      as a template — TS will flag any missing keys).
 *   2. Import it below and add it to both `translations` and `AVAILABLE_LANGUAGES`.
 * Nothing else in the app needs to change — the language picker and every
 * screen using t() picks it up automatically.
 */
export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en,
  hi,
};

export interface LanguageOption {
  code: LanguageCode;
  /** Shown in the language's own script, e.g. "हिन्दी" not "Hindi". */
  nativeLabel: string;
  /** Shown as a secondary hint, in English. */
  englishLabel: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: "en", nativeLabel: "English", englishLabel: "English" },
  { code: "hi", nativeLabel: "हिन्दी", englishLabel: "Hindi" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "en";
