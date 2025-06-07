---
trigger: manual
---

1. Build system: Next.js (version 15.3.2)
2. Testing framework: Not specified
3. Framework: Next.js (version 15.3.2) and React (version 19.0.0)
4. Styling: Tailwind CSS (version ^4)
5. Type checking: TypeScript (version ^5)
6. Linting: ESLint (version ^9) with Next.js configuration
7. Additional dependencies:
   - Lucide React (^0.511.0)
   - React DOM (^19.0.0)
   - Various TypeScript type definitions

# BHVGlobal Tech Stack Rules

## Core Framework Rules
1. **Next.js Compliance**: All pages must follow Next.js 15.3 conventions
2. **React Version**: Use React 19 syntax and features exclusively
3. **Component Structure**: Components must be function components using React Hooks

## Styling Rules
4. **Tailwind CSS**: Use Tailwind CSS for all styling (no inline styles or CSS files)
5. **Responsive Design**: Implement mobile-first responsive layouts
6. **Design System**: Follow consistent spacing (4px increments) and color palette

## Code Quality Rules
7. **TypeScript Typing**: All components and functions must have TypeScript type definitions
8. **ESLint Compliance**: Pass all ESLint rules from eslint-config-next
9. **File Organization**: 
   - Pages in `src/app/*/page.tsx`
   - Components in `src/components/*`
   - Layouts in `src/components/layout/*`

## Performance Rules
10. **Bundle Size**: Keep individual component bundles under 15KB
11. **Image Optimization**: Use Next.js Image component for all images
12. **Code Splitting**: Dynamically import non-essential components
