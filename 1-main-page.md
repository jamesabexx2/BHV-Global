Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
BHV Global Product Distribution Company Website UI Design
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Home, Mission, Alliances, Brands, Contact Us, Main Page Spanish
- Top banner with company tagline in blue background
- Logo positioned top-left, size approximately 150x50px
- Navigation bar height: 60px
- White background with black text
- Language selector (Spanish) indicated by flag icon

2. Layout Components:
- Header section: Full-width hero area with overlay text (height: 400px)
- Three-column layout for location/contact information
- Contact form width: 50% of container
- Footer height: 200px with logo and menu items
- Responsive container max-width: 1200px

3. Content Sections:
- Hero section with company introduction
- Mission statement section
- International presence section with location cards
- Brands/sectors overview
- Contact form section
- Footer with navigation and contact details

4. Interactive Controls:
- Contact form with 4 input fields
- Submit button in blue (#4169E1)
- Navigation hover states
- Location cards with contact information
- Language selector toggle

5. Colors:
- Primary Blue: #4169E1
- Secondary Gray: #666666
- Text Black: #000000
- Background White: #FFFFFF
- Footer Background: #F5F5F5

6. Grid/Layout Structure:
- 12-column grid system
- 20px gutters between columns
- Responsive breakpoints at 768px, 992px, 1200px
- Container padding: 0 15px
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   ├── Navigation
│   │   └── Container
│   ├── features/
│   │   ├── ContactForm
│   │   ├── LocationCard
│   │   ├── HeroSection
│   │   └── BrandShowcase
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Multi-language support (English/Spanish)
- Contact form with validation
- Responsive navigation system
- Location-based content display
- Brand showcase gallery

3. State Management:
```typescript
interface AppState {
  language: {
    current: 'en' | 'es',
    translations: Record<string, string>
  },
  contact: {
    formData: ContactFormData,
    status: 'idle' | 'loading' | 'success' | 'error'
  },
  locations: {
    items: Location[],
    selected: string | null
  }
}
```

4. Component Architecture:
- Layout components (Header, Footer, Navigation)
- Feature components (ContactForm, LocationCard)
- Shared components (Button, Input, Card)
- HOCs for language switching

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 992px,
  'wide': 1200px
);
```
</development_planning>