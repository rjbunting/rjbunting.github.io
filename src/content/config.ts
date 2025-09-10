import { z, defineCollection } from "astro:content";

const researchSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

export type ResearchSchema = z.infer<typeof researchSchema>;

const researchCollection = defineCollection({ schema: researchSchema });

export const collections = {
    'research': researchCollection
}