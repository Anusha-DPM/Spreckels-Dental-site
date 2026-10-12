import { NextRequest, NextResponse } from 'next/server'
import { createBlogPost, updateBlogPost } from '../../../../lib/blogDatabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { action, postData, postId } = body

    if (action === 'create') {
      const newPostId = await createBlogPost(postData)
      return NextResponse.json({ 
        success: true, 
        message: 'Blog post created successfully',
        postId: newPostId 
      })
    } else if (action === 'update') {
      await updateBlogPost(postId, postData)
      return NextResponse.json({ 
        success: true, 
        message: 'Blog post updated successfully' 
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Blog publish error:', error)
    return NextResponse.json(
      { error: 'Failed to process blog post' },
      { status: 500 }
    )
  }
}
