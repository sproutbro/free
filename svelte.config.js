import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    csrf: {
      checkOrigin: false
    },
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;