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
    canonicalUrl?: string
    keyword?: string
    slug: string
    published: boolean
    publishDate: string
    createdAt: string
    updatedAt: string
    author?: string
    jsonLdSchema?: string
    blogPostingSchema?: string
    personSchema?: string
    dentistSchema?: string
    breadcrumbActive?: string
    faqSchema?: string
    medicalConditionSchema?: string
    howToSchema?: string
    /** Exact URL written to /sitemap.xml for this post */
    sitemapEntry?: string
    /** Per-post HTML/CSS/JS/JSON-LD injected only on that blog detail page */
    customCode?: string
    ogTitle?: string
    ogDescription?: string
    ogUrl?: string
    twitterCard?: string
    twitterTitle?: string
    twitterDescription?: string
}
