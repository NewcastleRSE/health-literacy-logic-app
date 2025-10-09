import adapter from '@sveltejs/adapter-static';
import {mdsvex} from 'mdsvex'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const mdsvexOptions = {
  extensions: ['.md'],
  layout: { 
    article: dirname(fileURLToPath(import.meta.url)) + '/src/lib/layouts/ArticleLayout.svelte'
},
  smartypants: {
    quotes: false,
    ellipses: true,
    backticks: true,
    dashes: true
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'], 
    kit: {
      adapter: adapter({
        fallback: '404.html'
      })
    },
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
      relative: true,
    },
    preprocess: [mdsvex(mdsvexOptions)]
};

export default config;
