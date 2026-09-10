const { securityHeaders } = require('./lib/securityHeaders')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure SEO metadata (title, description, robots, canonical) is rendered in <head>
  // for crawlers and audit tools, not streamed into <body>.
  htmlLimitedBots: /.*/,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.weserv.nl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.firebaseapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.appspot.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.firebasestorage.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.officite.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'smb.ibsrv.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    // Allow all HTTPS images (for external URLs)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // Dental implants
      { source: '/dental-implants.html', destination: '/dental-implants', statusCode: 301 },
      { source: '/implant-dentist', destination: '/dental-implants', statusCode: 301 },
      { source: '/implant-dentist.html', destination: '/dental-implants', statusCode: 301 },
      { source: '/implants', destination: '/dental-implants', statusCode: 301 },
      { source: '/services/dental-implants', destination: '/dental-implants', statusCode: 301 },

      // All-on-4 implant dentures
      { source: '/all-on-4-implant-dentures.html', destination: '/all-on-4-implant-dentures', statusCode: 301 },
      { source: '/all-on-4', destination: '/all-on-4-implant-dentures', statusCode: 301 },
      { source: '/all-on-4.html', destination: '/all-on-4-implant-dentures', statusCode: 301 },
      { source: '/allon4', destination: '/all-on-4-implant-dentures', statusCode: 301 },
      { source: '/all-on-four', destination: '/all-on-4-implant-dentures', statusCode: 301 },
      { source: '/services/all-on-4-implant-dentures', destination: '/all-on-4-implant-dentures', statusCode: 301 },

      // Sedation dentistry
      { source: '/sedation-dentistry', destination: '/services/sedation-dentistry', statusCode: 301 },
      { source: '/sedation-dentistry.html', destination: '/services/sedation-dentistry', statusCode: 301 },
      { source: '/anxious-patients', destination: '/services/sedation-dentistry', statusCode: 301 },
      { source: '/AnxiousPatients.aspx', destination: '/services/sedation-dentistry', statusCode: 301 },
      { source: '/anxiouspatients.aspx', destination: '/services/sedation-dentistry', statusCode: 301 },

      // General & cosmetic dentistry
      { source: '/general-cosmetic-dentistry.html', destination: '/general-cosmetic-dentistry', statusCode: 301 },
      { source: '/cosmetic-dentistry', destination: '/general-cosmetic-dentistry', statusCode: 301 },
      { source: '/cosmetic-dentistry.html', destination: '/general-cosmetic-dentistry', statusCode: 301 },
      { source: '/services/general-cosmetic-dentistry', destination: '/general-cosmetic-dentistry', statusCode: 301 },
      { source: '/services/cosmetic-dentistry', destination: '/general-cosmetic-dentistry', statusCode: 301 },
      { source: '/dental-exams-teeth-cleaning', destination: '/general-cosmetic-dentistry', statusCode: 301 },

      // Smile gallery
      { source: '/smile-gallery.html', destination: '/smile-gallery', statusCode: 301 },
      { source: '/gallery', destination: '/smile-gallery', statusCode: 301 },
      { source: '/gallery.html', destination: '/smile-gallery', statusCode: 301 },
      { source: '/before-and-after', destination: '/smile-gallery', statusCode: 301 },

      // Dental staff
      { source: '/dental-staff.html', destination: '/dental-staff', statusCode: 301 },
      { source: '/staff', destination: '/dental-staff', statusCode: 301 },
      { source: '/staff.html', destination: '/dental-staff', statusCode: 301 },
      { source: '/about-us/our-team', destination: '/dental-staff', statusCode: 301 },
      { source: '/meet-the-team', destination: '/dental-staff', statusCode: 301 },
      { source: '/our-team', destination: '/dental-staff', statusCode: 301 },

      // Video testimonials
      { source: '/video-testimonials.html', destination: '/video-testimonials', statusCode: 301 },
      { source: '/testimonials', destination: '/video-testimonials', statusCode: 301 },
      { source: '/testimonials.html', destination: '/video-testimonials', statusCode: 301 },

      // Platelet rich fibrin
      { source: '/platelet-rich-fibrin-therapy', destination: '/services/platelet-rich-fibrin-therapy', statusCode: 301 },
      { source: '/platelet-rich-fibrin-therapy.html', destination: '/services/platelet-rich-fibrin-therapy', statusCode: 301 },
      { source: '/prf', destination: '/services/platelet-rich-fibrin-therapy', statusCode: 301 },
      { source: '/prf-therapy', destination: '/services/platelet-rich-fibrin-therapy', statusCode: 301 },

      // Other service aliases
      { source: '/orthodontics', destination: '/services/orthodontics', statusCode: 301 },
      { source: '/orthodontics.html', destination: '/services/orthodontics', statusCode: 301 },
      { source: '/teeth-whitening', destination: '/services/teeth-whitening', statusCode: 301 },
      { source: '/teeth-whitening.html', destination: '/services/teeth-whitening', statusCode: 301 },

      // Practice / contact aliases
      { source: '/about-us', destination: '/about', statusCode: 301 },
      { source: '/AboutUs.aspx', destination: '/about', statusCode: 301 },
      { source: '/aboutus.aspx', destination: '/about', statusCode: 301 },
      { source: '/dental-offices', destination: '/office', statusCode: 301 },
      { source: '/dental-offices.html', destination: '/office', statusCode: 301 },
      { source: '/appointment', destination: '/appointment-request', statusCode: 301 },
      { source: '/appointment.html', destination: '/appointment-request', statusCode: 301 },
      { source: '/dental-faqs', destination: '/dental-implants-manteca-ca', statusCode: 301 },

      // Legacy education hub and sitemap aliases
      { source: '/articles', destination: '/patient-education', statusCode: 301 },
      { source: '/articles/:path*', destination: '/patient-education', statusCode: 301 },
      { source: '/sitemap', destination: '/sitemap.xml', statusCode: 301 },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig 