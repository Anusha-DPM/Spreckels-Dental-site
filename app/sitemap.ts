import { MetadataRoute } from 'next'
import { getPublishedBlogPosts } from '@/lib/blogDatabase'
import { getBlogSitemapUrl } from '@/lib/sanitizeBlogHtml'

export const revalidate = 3600

const BASE_URL = 'https://www.centralvalleydentist.com'

/** Restored money pages that should be recrawled and re-indexed first. */
const MONEY_PAGE_PATHS = new Set([
    '',
    '/about',
    '/services',
    '/all-on-4-implant-dentures',
    '/dental-implants',
    '/dental-implants-manteca-ca',
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
    '/dental-staff',
    '/video-testimonials',
    '/services/sedation-dentistry',
    '/services/platelet-rich-fibrin-therapy',
])

const MONEY_PAGES_LASTMOD = new Date('2026-09-10T00:00:00.000Z')
const STATIC_PAGES_LASTMOD = new Date('2026-09-01T00:00:00.000Z')
const BLOG_FETCH_TIMEOUT_MS = 2500

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
    try {
        const timeout = new Promise<never>((_, reject) => {
            setTimeout(() => reject(new Error('Blog sitemap fetch timed out')), BLOG_FETCH_TIMEOUT_MS)
        })
        const posts = await Promise.race([getPublishedBlogPosts(), timeout])
        return posts
            .map((post: { slug?: string; sitemapEntry?: string; updatedAt?: string; publishDate?: string }) => {
                const url = getBlogSitemapUrl(post.slug) || post.sitemapEntry || ''
                if (!url) return null
                return {
                    url,
                    lastModified: new Date(post.updatedAt || post.publishDate || MONEY_PAGES_LASTMOD),
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                }
            })
            .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
        return []
    }
}

function getStaticEntries(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/dental-staff',
        '/all-on-4-implant-dentures',
        '/dental-implants',
        '/dental-implants-manteca-ca',
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

    return staticRoutes.map((route) => {
        const isMoneyPage = MONEY_PAGE_PATHS.has(route)
        return {
            url: `${BASE_URL}${route}`,
            lastModified: isMoneyPage ? MONEY_PAGES_LASTMOD : STATIC_PAGES_LASTMOD,
            changeFrequency: isMoneyPage ? 'weekly' : 'monthly',
            priority: route === '' ? 1.0 : isMoneyPage ? 0.9 : 0.6,
        }
    })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticEntries = getStaticEntries()

    try {
        const blogEntries = await getBlogEntries()
        return [...staticEntries, ...blogEntries]
    } catch (error) {
        console.error('Error generating sitemap blog entries:', error)
        return staticEntries
    }
}
