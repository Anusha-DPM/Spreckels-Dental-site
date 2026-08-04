import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const slug = body?.slug?.trim()

    revalidatePath('/blog')
    if (slug) {
      revalidatePath(`/blog/${slug}`)
    }

    return NextResponse.json({ revalidated: true, slug: slug || null })
  } catch (error) {
    console.error('Blog revalidation failed:', error)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
