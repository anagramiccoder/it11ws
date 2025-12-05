import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// Use BASE_PATH to set a repo subpath when building for GitHub Pages
	// e.g. (Windows cmd): set "BASE_PATH=/my-repo" && npm run build
	base: process.env.BASE_PATH || '/',
	plugins: [tailwindcss(), sveltekit()]
});
