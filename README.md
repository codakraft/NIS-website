# Norwegian International School Landing Page

A modern, responsive landing page for the Norwegian International School built with React, TypeScript, and CSS Modules.

## Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **TypeScript Support** - Strongly typed components with proper interfaces
- **CSS Modules** - Component-scoped styling without external dependencies
- **Modern UI Components** - Clean, professional design with smooth animations
- **Semantic HTML** - Accessibility-focused markup
- **Customizable Content** - Easy to modify through centralized data files

## Component Architecture

```
src/
├── components/
│   ├── NorwegianSchoolLandingPage.tsx     # Main landing page component
│   ├── Header/
│   │   ├── Header.tsx                      # Navigation header
│   │   └── Header.module.css
│   ├── Hero/
│   │   ├── Hero.tsx                        # Hero section with pagination
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.tsx                       # About section
│   │   └── About.module.css
│   ├── Statistics/
│   │   ├── Statistics.tsx                  # Statistics display
│   │   └── Statistics.module.css
│   ├── Testimonials/
│   │   ├── Testimonials.tsx                # Testimonials section
│   │   └── Testimonials.module.css
│   ├── CategoryGrid/
│   │   ├── CategoryGrid.tsx                # Category grid layout
│   │   └── CategoryGrid.module.css
│   └── Footer/
│       ├── Footer.tsx                      # Site footer
│       └── Footer.module.css
├── data/
│   └── siteData.ts                         # Centralized data configuration
├── types/
│   └── index.ts                            # TypeScript interfaces
└── styles/
    └── globals.css                         # Global styles and CSS variables
```

## Design System

### Color Palette
- **Primary Blue**: #3B4A9C
- **Accent Red**: #D32F2F
- **Accent Orange**: #FF9800
- **White**: #FFFFFF
- **Light Background**: #F5F5F5
- **Dark Overlay**: rgba(0,0,0,0.4)

### Typography
- **Font Family**: Arial, Helvetica, sans-serif
- **Responsive Font Sizes**: Automatically adjusts for different screen sizes
- **Text Hierarchy**: Proper heading structure for accessibility

### Spacing
- Uses CSS custom properties for consistent spacing
- Responsive spacing that adapts to screen size
- Grid and flexbox layouts for modern responsive design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Images

The website expects images in the `public/images/` directory:

- **hero-bg.jpg** - Hero background (1920x1080px)
- **classroom.jpg** - Classroom scene (400x300px)
- **teaching.jpg** - Teaching scene (400x300px)
- **library.jpg** - Library scene (400x350px)
- **academics.jpg** - Academic activities (600x400px)
- **culture.jpg** - Cultural activities (600x400px)
- **culture2.jpg** - Cultural activities variation (600x400px)
- **campus.jpg** - Campus exterior (600x400px)
- **campus2.jpg** - Campus facilities (600x400px)
- **community.jpg** - Community activities (600x400px)

## Customization

### Content Updates

Edit the `src/data/siteData.ts` file to update:
- Navigation items
- Statistics
- Testimonials
- Category cards
- Footer content
- Contact information

### Styling Updates

Each component has its own CSS module file for isolated styling:
- Global styles: `src/styles/globals.css`
- Component styles: `src/components/[ComponentName]/[ComponentName].module.css`

### TypeScript Interfaces

All data structures are typed in `src/types/index.ts`:
- `NavigationItem` - Navigation menu items
- `Statistic` - Statistical data display
- `Testimonial` - User testimonials
- `CategoryCard` - Category grid items
- `FooterSection` - Footer sections
- `SocialMediaLink` - Social media links

## Responsive Breakpoints

- **Mobile**: Up to 768px
- **Tablet**: 769px to 1024px
- **Desktop**: 1025px and above

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- CSS-only animations and transitions
- Optimized image loading
- Minimal bundle size (no external UI libraries)
- Semantic HTML for SEO optimization

## Accessibility Features

- Proper heading hierarchy
- Alt text for images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for the Norwegian International School.

---

Built with ❤️ using React, TypeScript, and CSS Modules

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
