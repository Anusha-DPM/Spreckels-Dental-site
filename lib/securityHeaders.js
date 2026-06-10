const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.digitalpresencematters.com https://www.googletagmanager.com https://apis.google.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https: http:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.firebasestorage.app https://*.firebaseapp.com https://link.digitalpresencematters.com https://www.google-analytics.com wss://*.firebaseio.com",
  "frame-src 'self' https://link.digitalpresencematters.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://link.digitalpresencematters.com",
  "frame-ancestors 'none'",
].join('; ')

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy,
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

module.exports = { contentSecurityPolicy, securityHeaders }
