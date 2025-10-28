# Component Structure Documentation

## Overview
This project uses a modular component architecture with reusable components organized in the `components/` directory. All components are exported through a central `index.ts` file for easy importing.

## Component Organization

### Layout Components
- **Layout.tsx** - Main layout wrapper with Header and Footer
- **Header.tsx** - Navigation header with responsive menu
- **Footer.tsx** - Site footer with links and social media

### Hero Sections
- **HeroSection.tsx** - Main homepage hero section
- **AboutHeroSection.tsx** - About page specific hero section

### Content Sections
- **TrustedBySection.tsx** - Company logos and trust indicators
- **InfoStatsSection.tsx** - Statistics display (legacy)
- **StatsSection.tsx** - New flexible statistics component
- **AboutUsSection.tsx** - About us content section
- **TestimonialSection.tsx** - Customer testimonials with carousel
- **ServicesSection.tsx** - Services offered
- **MissionSection.tsx** - Company mission statement
- **FeaturesSection.tsx** - Product features
- **ValuesSection.tsx** - Company values and principles
- **TeamSection.tsx** - Team member profiles
- **FAQSection.tsx** - Frequently asked questions
- **NewOutgridAppSection.tsx** - Mobile app promotion
- **CTASection.tsx** - Call-to-action section

### UI Components
- **LogoCarousel.tsx** - Animated logo carousel

## Usage

### Importing Components
```typescript
// Import individual components
import { Layout, HeroSection, CTASection } from '../components'

// Or import specific components
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
```

### Using the Layout Component
```typescript
import { Layout } from '../components'

export default function MyPage() {
  return (
    <Layout>
      {/* Your page content here */}
      <HeroSection />
      <CTASection />
    </Layout>
  )
}
```

### Component Props
Most components accept props for customization:

```typescript
// Example: Customizing StatsSection
<StatsSection
  title="Custom Title"
  description="Custom description"
  stats={[
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Projects Completed" }
  ]}
  bgColor="bg-blue-50"
/>
```

## Component Features

### Responsive Design
All components are built with Tailwind CSS and are fully responsive across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

### Animations
Components use Framer Motion for smooth animations:
- Fade-in effects on scroll
- Hover animations
- Staggered animations for lists
- Smooth transitions

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## File Structure
```
components/
├── index.ts                 # Central export file
├── Layout.tsx              # Main layout wrapper
├── Header.tsx              # Navigation header
├── Footer.tsx              # Site footer
├── HeroSection.tsx         # Homepage hero
├── AboutHeroSection.tsx    # About page hero
├── TrustedBySection.tsx    # Trust indicators
├── StatsSection.tsx        # Statistics display
├── AboutUsSection.tsx      # About content
├── TestimonialSection.tsx  # Testimonials
├── ServicesSection.tsx     # Services
├── MissionSection.tsx      # Mission statement
├── FeaturesSection.tsx     # Features
├── ValuesSection.tsx       # Company values
├── TeamSection.tsx         # Team members
├── FAQSection.tsx          # FAQ
├── NewOutgridAppSection.tsx # App promotion
├── CTASection.tsx          # Call to action
└── LogoCarousel.tsx        # Logo carousel
```

## Best Practices

1. **Reusability**: Components are designed to be reusable across different pages
2. **Props**: Use props for customization instead of hardcoding values
3. **TypeScript**: All components use TypeScript interfaces for type safety
4. **Performance**: Components use Next.js Image optimization and lazy loading
5. **Consistency**: Maintain consistent styling and animation patterns

## Adding New Components

1. Create the component file in the `components/` directory
2. Add TypeScript interfaces for props
3. Include responsive design with Tailwind CSS
4. Add Framer Motion animations where appropriate
5. Export the component in `components/index.ts`
6. Update this documentation

## Example: Creating a New Section Component

```typescript
'use client'

import { motion } from 'framer-motion'

interface MySectionProps {
  title?: string
  description?: string
  className?: string
}

export default function MySection({
  title = "Default Title",
  description = "Default description",
  className = ""
}: MySectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
``` 