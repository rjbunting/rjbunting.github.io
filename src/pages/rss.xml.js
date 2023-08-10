import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function get(context) {
  const news = await getCollection("news");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: news.map((post) => ({
      title: newspost.data.title,
      pubDate: newspost.data.pubDate,
      description: newspost.data.description,
      link: `/news/${newspost.slug}/`,
    })),
  });
}
