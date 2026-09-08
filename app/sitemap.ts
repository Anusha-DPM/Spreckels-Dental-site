import { MetadataRoute } from 'next'
import { getPublishedBlogPosts } from '@/lib/blogDatabase'
import { getBlogSitemapUrl } from '@/lib/sanitizeBlogHtml'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.centralvalleydentist.com'

    // Fetch all published blog posts from Firebase
    let blogEntries: MetadataRoute.Sitemap = []
    try {
        const posts = await getPublishedBlogPosts()
        blogEntries = posts
            .map((post: { slug?: string; sitemapEntry?: string; updatedAt?: string; publishDate?: string }) => {
                const url = getBlogSitemapUrl(post.slug) || post.sitemapEntry || ''
                if (!url) return null
                return {
                    url,
                    lastModified: new Date(post.updatedAt || post.publishDate || new Date()),
                    priority: 0.7,
                }
            })
            .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
    }

    // Define static routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/dental-staff',
        '/all-on-4-implant-dentures',
        '/dental-implants',
        '/dental-implants/cost-of-dental-implants-in-salida-california',
        '/dental-implants/cost-of-dental-implants-in-lathrop-california',
        '/dental-implants/cost-of-dental-implants-in-manteca-california',
        '/dental-implants/cost-of-dental-implants-in-stockton-california',
        '/dental-implants/cost-of-dental-implants-in-riverbank-california',
        '/dental-implants/cost-of-dental-implants-in-ripon-california',
        '/dental-implants/cost-of-dental-implants-in-escalon-california',
        '/dental-implants/cost-of-dental-implants-in-patterson-california',
        '/general-cosmetic-dentistry',
        '/smile-gallery',
        '/video-testimonials',
        '/privacy-policy',
        '/disclaimer',
        '/office',
        '/insurance-billing',
        '/appointment-request',
        '/patient-education',
        '/patient-education/educational-videos',
        '/patient-education/cosmetic-general-dentistry',
        '/patient-education/emergency-care',
        '/patient-education/endodontics',
        '/patient-education/implant-dentistry',
        '/patient-education/oral-health',
        '/patient-education/oral-hygiene',
        '/patient-education/oral-surgery',
        '/patient-education/orthodontics',
        '/patient-education/pediatric-dentistry',
        '/patient-education/periodontal-therapy',
        '/patient-education/technology',
        '/services/orthodontics',
        '/services/sedation-dentistry',
        '/services/teeth-whitening',
        '/services/platelet-rich-fibrin-therapy',
    ]

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        priority: route === '' ? 1.0 : 0.8,
    }))

    return [...staticEntries, ...blogEntries]
}
