import { getBlogPostBySlug } from './lib/blogDatabase.js';

async function main() {
    const slug = 'digital-implant-dentistry-in-2026-accuracy-limitations-and-future-trends';
    console.log('Fetching post:', slug);
    try {
        const post = await getBlogPostBySlug(slug);
        if (post) {
            console.log('Post found!');
            console.log('Title:', post.title);
            console.log('Content Type:', typeof post.content);
            console.log('Content Length:', post.content?.length);
            console.log('Content Preview:', JSON.stringify(post.content).substring(0, 200));
        } else {
            console.log('Post not found');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

main();
