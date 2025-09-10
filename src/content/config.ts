import { z, defineCollection } from "astro:content";

const researchSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

// No exported type alias required here; keep schema only.

const researchCollection = defineCollection({ schema: researchSchema });

export const collections = {
    'research': researchCollection
}