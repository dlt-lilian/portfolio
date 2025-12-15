import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit()],
    preview: {
        allowedHosts: ['portfolio-production-3fa2.up.railway.app'],
    }
});
