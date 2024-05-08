import prisma from "$lib/prisma";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const {id} = params;
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return {
        body: post
    }
}