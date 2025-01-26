import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional(),
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website'),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/blogs' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional(),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/pages' }),
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional(),
    }),
});

const contact = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/contact' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const about = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/about' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: image().optional(),
        }),
});

const workSchema = z.object({
    template: z.boolean().default(false),
    title: z.string(),
    category: z.string(),
    premiere: z.string().optional(),
    duration: z.number().or(z.string()),
    year: z.number(),
    commissioner: z.string().optional(),
    ensemble: z.string(),
    instrumentation: z.string().or(z.array(z.string())).optional(),
    extraNotes: z.array(z.string()).optional(),
    video: z.string().or(z.array(z.string())).optional(),
    audio: z.string().optional(),
});

const works = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/works' }),
    schema: workSchema,
});

const press = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/press' }),
    schema: z.object({
        linkText: z.string(),
        linkUrl: z.string(),
        publication: z.string(),
    }),
});

const news = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.coerce.date(),
            image: image().optional(),
            linkUrl: z.string(),
        }),
});

const hero = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/hero' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            subtitle: z.string().optional(),
            image: z.object({
                src: image(),
                alt: z.string(),
            }),
        }),
});

const gallery = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/gallery' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            images: z.array(
                z.object({
                    src: image(),
                    alt: z.string(),
                    width: z.number(),
                    height: z.number(),
                }),
            ),
        }),
});

export type WorkType = z.infer<typeof workSchema>;

export const collections = { blog, pages, contact, about, works, press, news, hero, gallery };
