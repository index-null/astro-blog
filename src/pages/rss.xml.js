import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, SITE } from "../config.ts";
import { getBlogPosts } from "src/utils";
import { getSlugFromId } from "../utils";
import { getLocalizedPath } from "../i18n/utils";

export async function GET(context) {
  const posts = await getBlogPosts("en");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE,
    customData: `<language>en-us</language>`,
    items: posts.map((post) => ({
      ...post.data,
      link: new URL(
        getLocalizedPath("en", `/posts/${getSlugFromId(post.id)}/`),
        SITE
      ).href,
    })),
  });
}
