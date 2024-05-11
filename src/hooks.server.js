import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authenticationHandle } from './auth';

async function authorizationHandle({ event, resolve }) {
	if (event.url.pathname.startsWith('/contact/write')) {
        const session = await event.locals.auth();
        if (!session) {
            throw redirect(303, '/auth/signin');
        }
    }

    return resolve(event);
}

export const handle = sequence(authenticationHandle, authorizationHandle);