import prisma from "$lib/prisma";

/** @type {import('./$types').PageLoad} */
export async function load({url}) {

    const query = url.searchParams.get('query');

    if(query) {
        let posts = await prisma.post.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { content: { contains: query, mode: 'insensitive' } }
                ]
            }
        });

        posts.forEach(post => {
            post.createdAt = post.createdAt.toLocaleDateString();
        });

        return { posts };
    }

    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    posts.forEach(post => {
        post.createdAt = post.createdAt.toLocaleDateString();
    });
    
    return { posts };
}