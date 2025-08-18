import { deLocalizeUrl } from '$lib/paraglide/runtime.js';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;

// SvelteKit expects a transport object for client-side routing
export const transport = {};
