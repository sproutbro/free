import prisma from '$lib/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
    const query = url.searchParams.get('query');
    const posts = await prisma.post.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { content: { contains: query, mode: 'insensitive' } }
            ]
        }
    });

    return { posts };
}