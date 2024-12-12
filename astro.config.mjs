import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        react(),
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
        AutoImport({
            imports: ['@/components/YoutubeEmbed'],
        }),
    ],
});
