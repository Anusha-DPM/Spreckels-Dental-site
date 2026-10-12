'use client'

import VideoTestimonialFeature from './VideoTestimonialFeature'
import { VIDEO_TESTIMONIAL_HEADING } from './videoTestimonialsShared'

interface FeaturedVideoTestimonialSectionProps {
  showViewAllButton?: boolean
}

export default function FeaturedVideoTestimonialSection({
  showViewAllButton = false,
}: FeaturedVideoTestimonialSectionProps) {
  return (
    <VideoTestimonialFeature
      title={VIDEO_TESTIMONIAL_HEADING}
      showViewAllButton={showViewAllButton}
    />
  )
}
