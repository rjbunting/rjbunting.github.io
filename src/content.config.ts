import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const researchSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

const researchCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
    schema: researchSchema,
});

export const collections = {
    research: researchCollection,
};
