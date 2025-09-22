// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    astroIcon({
      include: {
        mdi: ['*'], // all Material Design Icons
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
