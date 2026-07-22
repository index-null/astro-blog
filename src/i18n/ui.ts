import type { Locale } from "./config";

export const defaultLang: Locale = "en";

export const ui = {
  en: {
    "nav.blog": "Blog",
    "nav.about": "About",
    "home.latest": "Latest blog posts",
    "home.all": "All blog posts",
    "home.page": "Page",
    "tags.title": "Posts tagged with",
  },
  "zh-cn": {
    "nav.blog": "博客",
    "nav.about": "关于",
    "home.latest": "最新文章",
    "home.all": "全部文章",
    "home.page": "页",
    "tags.title": "标签",
  },
} as const satisfies Record<Locale, Record<string, string>>;
