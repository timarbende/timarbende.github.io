import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
    loader: glob({pattern: "*.md", base: "./src/data/projects"}),
    schema: z.object({
        title: z.string(),
        short_description: z.string(),
        long_description: z.string(),
        image_source: z.string(),
        trailer_url: z.string().optional(),
        publish_date: z.coerce.date(),
        tech_stack: z.array(z.string())
    })
});

export const collections = {projects};