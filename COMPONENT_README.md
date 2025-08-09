# Norwegian International School Landing Page Component

A React TypeScript component that recreates the Norwegian International School header design with modern styling and responsive behavior.

## Features

- ✅ Responsive design that works on mobile, tablet, and desktop
- ✅ TypeScript support with proper interfaces
- ✅ CSS Modules for scoped styling
- ✅ Accessible hamburger menu
- ✅ Smooth hover animations
- ✅ Shield-shaped logo with crown icon
- ✅ Action buttons with arrow indicators

## Component Structure

```
NorwegianSchoolLandingPage.tsx    # Main component
NorwegianSchoolLandingPage.module.css    # Styled with CSS modules
types/norwegian-school.ts    # TypeScript interfaces
```

## Usage

```tsx
import React from "react";
import NorwegianSchoolLandingPage from "./components/NorwegianSchoolLandingPage";

const App: React.FC = () => {
  const handleMenuClick = () => {
    // Add your navigation logic here
    console.log("Menu clicked");
  };

  const handleNISExperienceClick = () => {
    // Navigate to NIS Experience page
    console.log("NIS Experience clicked");
  };

  const handleTakeATourClick = () => {
    // Navigate to tour page
    console.log("Take a Tour clicked");
  };

  const handleApplyClick = () => {
    // Navigate to application form
    console.log("Apply clicked");
  };

  return (
    <NorwegianSchoolLandingPage
      onMenuClick={handleMenuClick}
      onNISExperienceClick={handleNISExperienceClick}
      onTakeATourClick={handleTakeATourClick}
      onApplyClick={handleApplyClick}
    />
  );
};
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onMenuClick` | `() => void` | No | Callback when hamburger menu is clicked |
| `onNISExperienceClick` | `() => void` | No | Callback when "NIS Experience" button is clicked |
| `onTakeATourClick` | `() => void` | No | Callback when "Take a Tour" button is clicked |
| `onApplyClick` | `() => void` | No | Callback when "Apply" button is clicked |

## Design Elements

- **Hamburger Menu**: Purple background with three white lines
- **Logo**: Shield-shaped with crown icon and school name
- **Action Buttons**: Semi-transparent red buttons with hover effects
- **Background**: Gradient from light blue to gray
- **Typography**: Clean, hierarchical text sizing

## Responsive Behavior

- **Desktop**: Horizontal layout with logo centered
- **Tablet**: Maintains horizontal layout with adjusted spacing
- **Mobile**: Stacked layout with hamburger menu repositioned

## Customization

The component uses CSS modules, so you can customize styling by modifying the `.module.css` file. Key variables include:

- Logo colors and sizing
- Button colors and effects
- Background gradients
- Responsive breakpoints

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
