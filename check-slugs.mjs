import { getPublishedBlogPosts } from './lib/blogDatabase.js';

async function main() {
    try {
        const posts = await getPublishedBlogPosts();
        if (posts.length > 0) {
            console.log('SLUG_LIST_START');
            posts.forEach(p => console.log(p.slug));
            console.log('SLUG_LIST_END');
        } else {
            console.log('NO_POSTS_FOUND');
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
