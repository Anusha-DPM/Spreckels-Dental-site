export interface BlogPost {
    id?: string
    title: string
    content: string
    excerpt?: string
    coverImage?: string
    imageUrl?: string
    tags: string[]
    categories: string[]
    metaTitle: string
    metaDescription: string
    slug: string
    published: boolean
    publishDate: string
    createdAt: string
    updatedAt: string
    author?: string
}
