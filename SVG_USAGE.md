# SVG Usage Guide

## Overview
This project is now set up to use SVG images efficiently. SVGs are scalable, lightweight, and can be styled with CSS.

## Setup Complete
- ✅ TypeScript declarations for SVG imports
- ✅ Icon utility components
- ✅ Example SVG files
- ✅ Reusable icon components

## Usage Methods

### 1. As React Components (Recommended)
```tsx
import { ArrowIcon, MenuIcon, LogoIcon } from '../components/Icons';

// Basic usage
<ArrowIcon />

// With custom size and color
<ArrowIcon size={32} color="#ff0000" />

// With additional props
<MenuIcon className="menu-icon" onClick={handleClick} />
```

### 2. Direct SVG Import
```tsx
import { ReactComponent as MyIcon } from '../assets/icons/my-icon.svg';

<MyIcon width="24" height="24" fill="currentColor" />
```

### 3. As Image URL
```tsx
import iconUrl from '../assets/icons/my-icon.svg';

<img src={iconUrl} alt="My Icon" width="24" height="24" />
```

## Adding New SVGs

1. Place your SVG file in `src/assets/icons/`
2. Add it to `src/assets/icons/index.ts`
3. Create a component in `src/components/Icons/Icons.tsx`
4. Export it from `src/components/Icons/index.ts`

Example:
```tsx
// In Icons.tsx
import { ReactComponent as NewIconSvg } from '../../assets/icons/new-icon.svg';
export const NewIcon = createIcon(NewIconSvg);

// In index.ts
export { NewIcon } from './Icons';
```

## Benefits
- **Scalable**: Vector graphics scale perfectly at any size
- **Customizable**: Can be styled with CSS (color, size, etc.)
- **Performance**: Smaller file sizes than raster images
- **Accessibility**: Can include title and description elements
- **Interactive**: Can respond to hover, click, etc.

## Best Practices
- Use `currentColor` for fill/stroke to inherit text color
- Keep SVGs simple and optimized
- Use consistent viewBox dimensions
- Add meaningful titles for accessibility
- Consider using CSS custom properties for theming
