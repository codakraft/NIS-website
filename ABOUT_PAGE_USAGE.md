# About Page Usage

## Importing the About Component

```tsx
import About from './pages/About';

// Or if using from the index file
import About from './pages/About/About';
```

## Using in React Router

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
```

## Component Features

The About component includes:

1. **Hero Section** - "What Sets Us Apart" with background image
2. **Welcome Section** - Introduction text with welcome image
3. **Student Welcome** - Personal welcome with student portrait
4. **Vision & Mission** - Cards displaying school vision and mission
5. **NIS Experience** - Grid of experience cards (Academics, Clubs, Faith, Student Voice)
6. **Up Next** - Three-column layout with lorem content
7. **Footer** - Contact information and social links

## Styling

The component uses CSS modules (`About.module.css`) with:
- Responsive design (mobile, tablet, desktop)
- Custom color scheme matching the brand
- Hover effects and transitions
- Grid layouts for different sections

## Images Required

Make sure to add the required images to `/public/images/`:
- hero-about.jpg
- welcome-group.jpg  
- student-portrait.jpg
- students-group.jpg
- academics.jpg
- clubs-activities.jpg
- faith-character.jpg
- student-voice.jpg

## Customization

To customize the content:
1. Edit the text content in `About.tsx`
2. Modify colors and styles in `About.module.css`
3. Replace placeholder images with actual school photos
4. Update social media links in the footer section
