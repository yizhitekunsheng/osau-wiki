import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['strategy', 'combat', 'economy', 'events', 'beginner']),
    published: z.date(),
    updated: z.date().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { guides };
