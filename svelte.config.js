import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Build a fully static site suitable for GitHub Pages. The output directory is `docs` so
		// you can publish the `docs/` folder from the repository Settings → Pages.
		adapter: adapter({
			// output folders for static build
			pages: 'docs',
			assets: 'docs',
			// optional: provide a fallback page for SPA-style routing (unnecessary for pure static sites)
			// fallback: '200.html'
		}),

		// Allow building with a repo subpath by setting the BASE_PATH environment variable.
		// Example (Windows cmd):
		//   set "BASE_PATH=/your-repo-name" && npm run build
		paths: {
			base: process.env.BASE_PATH || ''
		}
	}
};

export default config;
