import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const slug = body?.slug?.trim()
    const previousSlug = body?.previousSlug?.trim()

    revalidatePath('/blog')
    revalidatePath('/sitemap.xml')
    if (slug) {
      revalidatePath(`/blog/${slug}`)
    }
    if (previousSlug && previousSlug !== slug) {
      revalidatePath(`/blog/${previousSlug}`)
    }

    return NextResponse.json({ revalidated: true, slug: slug || null, previousSlug: previousSlug || null })
  } catch (error) {
    console.error('Blog revalidation failed:', error)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
