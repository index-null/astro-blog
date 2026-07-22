import { getCollection } from "astro:content";
import type { Locale } from "./i18n/config";
import { DEFAULT_LOCALE } from "./i18n/config";

/**
 * Get published blog posts for a given locale.
 * For non-default locales, also includes en posts that lack a translation
 * (silent fallback: shows en content when zh-cn version doesn't exist).
 */
export const getBlogPosts = async (
  locale: Locale = "en",
  showHidden = false,
) => {
  const allPosts = (await getCollection("blog")).filter(
    (post: any) =>
      post.data.published !== false && (showHidden || !post.data.hidden),
  );

  // Build set of slugs that exist in the target locale
  const targetSlugs = new Set<string>();
  allPosts.forEach((post) => {
    const [postLocale, ...rest] = post.id.split("/");
    if (postLocale === locale) {
      targetSlugs.add(rest.join("/"));
    }
  });

  // For default locale, just filter by locale prefix
  // For non-default, include en fallback for untranslated posts
  const posts = allPosts.filter((post: any) => {
    const [postLocale, ...rest] = post.id.split("/");
    const slug = rest.join("/");

    if (postLocale === locale) return true;
    // fallback: include en posts that don't have a translation in target locale
    if (locale !== DEFAULT_LOCALE && postLocale === DEFAULT_LOCALE) {
      return !targetSlugs.has(slug);
    }
    return false;
  });

  return posts.sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
};

/** Get ALL published posts (regardless of locale) for cross-locale operations. */
export const getAllBlogPosts = async (showHidden = false) => {
  const posts = (await getCollection("blog"))
    .filter(
      (post: any) =>
        post.data.published !== false && (showHidden || !post.data.hidden),
    )
    .sort(
      (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

  return posts;
};

/** Get all unique slugs across en and zh-cn locales (without locale prefix), excluding unpublished. */
export const getAllUniqueSlugs = async () => {
  const posts = (await getCollection("blog")).filter((post: any) => {
    const [locale] = post.id.split("/");
    return (
      (locale === "en" || locale === "zh-cn") && post.data.published !== false
    );
  });
  const slugSet = new Set<string>();
  posts.forEach((post) => {
    const [, ...slugParts] = post.id.split("/");
    slugSet.add(slugParts.join("/"));
  });
  return Array.from(slugSet);
};

/** Get a single post by locale and slug, with fallback to en. Only returns published posts. */
export const getPostBySlug = async (locale: Locale, slug: string) => {
  const posts = (await getCollection("blog")).filter(
    (post: any) => post.data.published !== false,
  );
  // try exact match first
  const exactMatch = posts.find((post) => post.id === `${locale}/${slug}`);
  if (exactMatch) return exactMatch;
  // fallback to en
  return posts.find((post) => post.id === `en/${slug}`) || null;
};

/** Extract slug without locale prefix from post id. */
export const getSlugFromId = (id: string): string => {
  const [, ...slugParts] = id.split("/");
  return slugParts.join("/");
};
