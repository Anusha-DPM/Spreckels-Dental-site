export interface DentalImplantCostPageConfig {
  slug: string
  metaTitle: string
  metaDescription: string
  city: string
  /** Display name used in headings, e.g. "Salida, California" */
  cityDisplay: string
  whyChooseImage: string
  benefitsImage: string
  introBoldPractice?: boolean
  consultationAboutLink?: boolean
  faqBoldPractice?: boolean
}

export const dentalImplantCostPages: DentalImplantCostPageConfig[] = [
  {
    slug: 'cost-of-dental-implants-in-salida-california',
    metaTitle: 'Dental Implants in Salida CA',
    metaDescription:
      'Replace missing teeth with dental implants in Salida, CA. Learn about treatment options, benefits, candidacy, and the implant process.',
    city: 'Salida',
    cityDisplay: 'Salida, California',
    whyChooseImage: '/page top1.jpeg',
    benefitsImage: '/page-bottom1.jpeg',
    introBoldPractice: true,
    consultationAboutLink: true,
  },
  {
    slug: 'cost-of-dental-implants-in-lathrop-california',
    metaTitle: 'Restore Your Smile with Dental Implants Lathrop',
    metaDescription:
      'Explore dental implants in Lathrop, CA, for a secure and natural-looking tooth replacement. Schedule your implant consultation today.',
    city: 'Lathrop',
    cityDisplay: 'Lathrop, California',
    whyChooseImage: '/page top2.jpeg',
    benefitsImage: '/page-bottom2.jpeg',
  },
  {
    slug: 'cost-of-dental-implants-in-manteca-california',
    metaTitle: 'Dental Implant Treatment in Manteca CA',
    metaDescription:
      'Learn how dental implants in Manteca, CA, can restore missing teeth, improve chewing, and provide lasting support for your smile.',
    city: 'Manteca',
    cityDisplay: 'Manteca, California',
    whyChooseImage: '/page top3.jpeg',
    benefitsImage: '/page-bottom3.jpeg',
  },
  {
    slug: 'cost-of-dental-implants-in-stockton-california',
    metaTitle: 'Missing Tooth Solutions with Implants Stockton',
    metaDescription:
      'Considering dental implants in Stockton, CA? Review the treatment process, benefits, candidacy requirements, and restoration options.',
    city: 'Stockton',
    cityDisplay: 'Stockton, California',
    whyChooseImage: '/page top4.jpeg',
    benefitsImage: '/page-bottom4.jpeg',
  },
  {
    slug: 'cost-of-dental-implants-in-riverbank-california',
    metaTitle: 'Dental Implants for Missing Teeth in Riverbank',
    metaDescription:
      'Restore missing teeth with dental implants in Riverbank, CA. Explore personalized options designed for function, comfort, and appearance.',
    city: 'Riverbank',
    cityDisplay: 'Riverbank, California',
    whyChooseImage: '/page top5.jpeg',
    benefitsImage: '/page-bottom5.jpeg',
    introBoldPractice: true,
  },
  {
    slug: 'cost-of-dental-implants-in-ripon-california',
    metaTitle: 'Long-Lasting Dental Implants in Ripon CA',
    metaDescription:
      'Learn about dental implants in Ripon, CA, and how implant-supported restorations can provide stability, comfort, and natural-looking results.',
    city: 'Ripon',
    cityDisplay: 'Ripon, California',
    whyChooseImage: '/page top6.jpeg',
    benefitsImage: '/page-bottom6.jpeg',
  },
  {
    slug: 'cost-of-dental-implants-in-escalon-california',
    metaTitle: 'Dental Implant Options in Escalon CA',
    metaDescription:
      'Explore dental implant options in Escalon, CA, for replacing one or more missing teeth and restoring everyday comfort and confidence.',
    city: 'Escalon',
    cityDisplay: 'Escalon, California',
    whyChooseImage: '/page top7.jpeg',
    benefitsImage: '/page-bottom7.jpeg',
  },
  {
    slug: 'cost-of-dental-implants-in-patterson-california',
    metaTitle: 'Restore Missing Teeth with Implants Patterson',
    metaDescription:
      'Learn how dental implants in Patterson, CA, can replace missing teeth and support a stable, functional, and natural-looking smile.',
    city: 'Patterson',
    cityDisplay: 'Patterson, California',
    whyChooseImage: '/page top8.jpeg',
    benefitsImage: '/page-bottom8.jpeg',
    introBoldPractice: true,
    consultationAboutLink: true,
    faqBoldPractice: true,
  },
]

export function getDentalImplantCostPageConfig(slug: string): DentalImplantCostPageConfig | undefined {
  return dentalImplantCostPages.find((page) => page.slug === slug)
}
