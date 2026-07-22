import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, BASE } from "../../config.ts";
import { getBlogPosts } from "src/utils";
import { getSlugFromId } from "../../utils";
import { getLocalizedPath } from "../../i18n/utils";

export async function GET(context) {
  const posts = await getBlogPosts("zh-cn");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site + BASE,
    items: posts.map((post) => ({
      ...post.data,
      link: getLocalizedPath("zh-cn", `/posts/${getSlugFromId(post.id)}/`),
    })),
  });
}
