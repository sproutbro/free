import prisma from "$lib/prisma";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, locals}) => {

        const auth = await locals.auth();
        const name = auth.user.name;
        const email = auth.user.email;
        const data = await request.formData();
        const title = data.get('title');
        const content = data.get('content');
        
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                name,
                email,
            }
        });
        
        return {
            status: 201,
            success: true
        };
    }
};