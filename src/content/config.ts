import { defineCollection, z } from "astro:content";

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    venue: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.literal("Present"), z.coerce.date()]),
    urlPath: z.string(),
  }),
});

const teaching = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    venue: z.string().optional(),
    date: z.coerce.date(),
    location: z.string(),
    urlPath: z.string(),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    urlPath: z.string(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    urlPath: z.string(),
  }),
});

export const collections = { talks, teaching, portfolio, posts };
