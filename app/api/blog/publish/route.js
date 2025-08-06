import { NextResponse } from 'next/server'
import { createBlogPost, updateBlogPost } from '@/lib/blogDatabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { 
      title, 
      content, 
      excerpt, 
      category, 
      tags, 
      imageUrl, 
      featured, 
      published,
      postId // If editing existing post
    } = body

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const postData = {
      title,
      content,
      excerpt: excerpt || content.substring(0, 150) + '...',
      category: category || 'General Dentistry',
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      imageUrl: imageUrl || '',
      featured: featured || false,
      published: published || false,
      author: 'Admin', // You can make this dynamic later
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }

    let result
    if (postId) {
      // Update existing post
      result = await updateBlogPost(postId, postData)
    } else {
      // Create new post
      result = await createBlogPost(postData)
    }

    return NextResponse.json({
      success: true,
      message: postId ? 'Blog post updated successfully!' : 'Blog post created successfully!',
      post: result
    })

  } catch (error) {
    console.error('Error publishing blog post:', error)
    return NextResponse.json(
      { error: 'Failed to publish blog post', details: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Blog publish endpoint' })
} 