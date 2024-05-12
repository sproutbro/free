import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		https: {
			key: fs.readFileSync('/etc/letsencrypt/live/diving.run/fullchain.pem'),
			cert: fs.readFileSync('/etc/letsencrypt/live/diving.run/privkey.pem'),
		}
	}
});
