import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		{
			name: 'build-work-log',
			async buildStart() {
				await import('./build-license-file.js');
			},
		},
		enhancedImages(),
		sveltekit(),
	],
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2022',
		},
	},
	build: {
		target: 'es2022',
	},
});
