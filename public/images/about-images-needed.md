# Images for About Page - TEMPORARY PLACEHOLDERS IN USE

⚠️ **IMPORTANT**: The About page is currently using temporary placeholder images from Unsplash to prevent build errors. Replace these with actual school images when available.

## Current Placeholder Images in Use:

### Welcome Section
- **Currently using**: `https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop`
- **Should be replaced with**: `welcome-group.jpg` - Image showing students and teacher in a group setting

### Student Welcome Section  
- **Currently using**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=350&fit=crop`
- **Should be replaced with**: `student-portrait.jpg` - Portrait of a smiling student with glasses

### Experience Cards
- **Academics**: `https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop`
- **Clubs & Activities**: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop`
- **Faith & Character**: `https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop`
- **Student Voice**: `https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop`

## Background Images (Currently Using CSS Gradients):
- **Hero Section**: Using blue gradient instead of `hero-about.jpg`
- **Vision & Mission**: Using dark blue gradient instead of `students-group.jpg`

## To Replace with School Images:

1. Add the actual images to `/public/images/` directory
2. Update the src attributes in `About.tsx` to use `/images/filename.jpg`
3. Uncomment and update the background-image CSS properties in `About.module.css`

## Required Images for Production:
- `hero-about.jpg` - Background image for the "What Sets Us Apart" hero section
- `welcome-group.jpg` - Image showing students and teacher in a group setting  
- `student-portrait.jpg` - Portrait of a smiling student with glasses
- `students-group.jpg` - Background image showing a group of students in school uniforms
- `academics.jpg` - Image representing academic activities
- `clubs-activities.jpg` - Image showing extracurricular activities
- `faith-character.jpg` - Image representing character development
- `student-voice.jpg` - Image representing student leadership
