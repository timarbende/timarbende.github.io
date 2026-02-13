import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
    loader: glob({pattern: "*.md", base: "./src/data/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image_source: z.string(),
        publish_date: z.coerce.date(),
    })
});

export const collections = {projects};