// Example usage of blog database functions
import { 
  createBlogPost, 
  getBlogPosts, 
  getBlogPostBySlug, 
  updateBlogPost, 
  deleteBlogPost,
  searchBlogPosts,
  getBlogCategories,
  getBlogTags,
  incrementBlogViews
} from '../lib/blogDatabase';

// Example 1: Create a new blog post
const createNewBlogPost = async () => {
  const blogData = {
    title: "The Complete Guide to Dental Implants in Manteca",
    content: `
      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts that replace the roots of missing teeth. 
      They provide a strong foundation for fixed or removable replacement teeth.</p>
      
      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li>Natural look and feel</li>
        <li>Improved speech and eating</li>
        <li>Long-lasting solution</li>
        <li>Preserves jawbone health</li>
      </ul>
      
      <h2>Our Process</h2>
      <p>At Spreckels Park Dental, we use advanced technology and techniques to ensure 
      the best possible outcomes for our patients.</p>
    `,
    excerpt: "Learn everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    category: "Dental Implants",
    tags: ["dental implants", "manteca", "tooth replacement", "oral surgery"],
    featured: true,
    published: true,
    imageUrl: "/dental-implants-blog.jpg"
  };

  try {
    const newPost = await createBlogPost(blogData);
    console.log('Blog post created:', newPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
  }
};

// Example 2: Get all published blog posts
const getPublishedPosts = async () => {
  try {
    const posts = await getBlogPosts({
      published: true,
      limit: 10
    });
    console.log('Published posts:', posts);
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
  }
};

// Example 3: Get featured blog posts
const getFeaturedPosts = async () => {
  try {
    const featuredPosts = await getBlogPosts({
      published: true,
      featured: true,
      limit: 3
    });
    console.log('Featured posts:', featuredPosts);
    return featuredPosts;
  } catch (error) {
    console.error('Error getting featured posts:', error);
  }
};

// Example 4: Get posts by category
const getPostsByCategory = async (category) => {
  try {
    const posts = await getBlogPosts({
      published: true,
      category: category,
      limit: 5
    });
    console.log(`${category} posts:`, posts);
    return posts;
  } catch (error) {
    console.error('Error getting posts by category:', error);
  }
};

// Example 5: Get a single blog post by slug
const getSinglePost = async (slug) => {
  try {
    const post = await getBlogPostBySlug(slug);
    if (post) {
      // Increment view count when post is viewed
      await incrementBlogViews(post.id);
      console.log('Blog post:', post);
      return post;
    } else {
      console.log('Post not found');
      return null;
    }
  } catch (error) {
    console.error('Error getting post:', error);
  }
};

// Example 6: Update a blog post
const updateExistingPost = async (postId) => {
  const updateData = {
    title: "Updated: Complete Guide to Dental Implants in Manteca",
    content: "Updated content here...",
    published: true,
    featured: false
  };

  try {
    const updatedPost = await updateBlogPost(postId, updateData);
    console.log('Updated post:', updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

// Example 7: Search blog posts
const searchPosts = async (searchTerm) => {
  try {
    const searchResults = await searchBlogPosts(searchTerm);
    console.log('Search results:', searchResults);
    return searchResults;
  } catch (error) {
    console.error('Error searching posts:', error);
  }
};

// Example 8: Get all categories
const getAllCategories = async () => {
  try {
    const categories = await getBlogCategories();
    console.log('Blog categories:', categories);
    return categories;
  } catch (error) {
    console.error('Error getting categories:', error);
  }
};

// Example 9: Get all tags
const getAllTags = async () => {
  try {
    const tags = await getBlogTags();
    console.log('Blog tags:', tags);
    return tags;
  } catch (error) {
    console.error('Error getting tags:', error);
  }
};

// Example 10: Delete a blog post
const deletePost = async (postId) => {
  try {
    const result = await deleteBlogPost(postId);
    if (result) {
      console.log('Post deleted successfully');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

// Example usage in a React component
export const BlogListComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const publishedPosts = await getBlogPosts({
          published: true,
          limit: 6
        });
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-blue-600">{post.category}</span>
              {post.featured && (
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.readTime} min read</span>
                <span>{post.views} views</span>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export {
  createNewBlogPost,
  getPublishedPosts,
  getFeaturedPosts,
  getPostsByCategory,
  getSinglePost,
  updateExistingPost,
  searchPosts,
  getAllCategories,
  getAllTags,
  deletePost
}; 