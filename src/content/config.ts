import { z, defineCollection } from "astro:content";

const researchSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const newsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

export type ResearchSchema = z.infer<typeof researchSchema>;
export type NewsSchema = z.infer<typeof newsSchema>;

const researchCollection = defineCollection({ schema: researchSchema });
const newsCollection = defineCollection({ schema: newsSchema });

export const collections = {
    'research': researchCollection,
    'news': newsCollection
}