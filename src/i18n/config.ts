export const LOCALES = ["en", "zh-cn"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  "zh-cn": "中文",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  "zh-cn": "zh-Hans",
};
