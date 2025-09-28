import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use "adapter-static" to build the app files into this app's static dir
		adapter: adapter({
			pages: 'static/rp',
			assets: 'static/rp',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
