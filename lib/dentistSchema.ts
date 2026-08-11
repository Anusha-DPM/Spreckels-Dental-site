export const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://www.centralvalleydentist.com/#dentist',
  name: 'Spreckels Park Dental',
  url: 'https://www.centralvalleydentist.com/',
  telephone: '+1-209-825-1030',
  priceRange: '$$',
  description:
    'Spreckels Park Dental provides General Dentistry, Cosmetic Dentistry, Dental Implants, All-on-4 Dental Implants, Orthodontics, and Sedation Dentistry in Manteca, California.',
  logo: 'https://cdcssl.ibsrv.net/ibimg/smb/768x374_80/webmgr/1k/r/0/6490a8ca9523b_spreckelslogo2.png.webp?1e86dd5b6776ed95ec165c1d460b7ed9',
  image:
    'https://cdcssl.ibsrv.net/ibimg/smb/768x374_80/webmgr/1k/r/0/6490a8ca9523b_spreckelslogo2.png.webp?1e86dd5b6776ed95ec165c1d460b7ed9',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '626 E Yosemite Ave',
    addressLocality: 'Manteca',
    addressRegion: 'CA',
    postalCode: '95336',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.7972535,
    longitude: -121.2082321,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    'Lathrop, CA',
    'Ripon, CA',
    'Garden Acres, CA',
    'Stockton, CA',
    'Tracy, CA',
    'Country Club, CA',
    'Riverbank, CA',
    'Modesto, CA',
    'Ceres, CA',
    'Oakdale, CA',
    'Patterson, CA',
    'Lodi, CA',
    'Brentwood, CA',
    'Turlock, CA',
    'Oakley, CA',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'General Dentistry' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Cosmetic Dentistry' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Dental Implants' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'All-on-4 Dental Implants' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Orthodontics' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Sedation Dentistry' },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Dr. Rujul G. Parikh DDS',
  },
  hasMap: 'https://maps.app.goo.gl/34gz2XcmkvE8KLPt6',
  sameAs: [
    'https://www.facebook.com/spreckelsparkdental',
    'https://www.instagram.com/spreckelsparkdental/',
    'https://maps.app.goo.gl/34gz2XcmkvE8KLPt6',
  ],
} as const
