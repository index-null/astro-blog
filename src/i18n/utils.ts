import { ui, defaultLang } from "./ui";
import { LOCALES, type Locale } from "./config";

export function getLangFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  if (LOCALES.includes(segment as Locale)) return segment as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

/** Given a locale and a path, returns the localized URL. */
export function getLocalizedPath(lang: Locale, path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (LOCALES.includes(segments[0] as Locale)) {
    segments.shift();
  }
  const cleanPath = "/" + segments.join("/");

  if (lang === defaultLang) {
    return cleanPath || "/";
  }
  return `/${lang}${cleanPath}`;
}

/** Get the opposite locale for the switcher. */
export function getOppositeLocale(current: Locale): Locale {
  return current === "en" ? "zh-cn" : "en";
}
