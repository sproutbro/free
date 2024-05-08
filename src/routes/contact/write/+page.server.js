import prisma from "$lib/prisma";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const title = data.get('title');
        const content = data.get('content');
        const newPost = await prisma.post.create({
            data: {
                title,
                content
            }
        });

        return {
            status: 201,
            success: true
        };
    }
};