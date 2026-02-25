import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
    loader: glob({pattern: "*.md", base: "./src/data/projects"}),
    schema: z.object({
        title: z.string(),
        short_description: z.string(),
        long_description: z.string(),
        image_source: z.string().optional(),
        trailer_url: z.string().optional(),
        publish_date: z.coerce.date(),
        tech_stack: z.array(z.string()),
        github_link: z.string().optional(),
        order: z.number().optional().default(0)
    })
});

const corporate_projects = defineCollection({
    loader: glob({pattern: "*.md", base: "./src/data/corporate_projects"}),
    schema: z.object({
        title: z.string(),
        image_source: z.string().optional(),
        short_description: z.string(),
        long_description: z.string(),
        corporate_name: z.string(),
        tech_stack: z.array(z.string())
    })
});

export const collections = {projects, corporate_projects};