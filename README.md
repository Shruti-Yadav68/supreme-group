<<<<<<< HEAD
# supreme-group
This project focuses on delivering an interactive and accessible video-based UI experience. The implementation follows best practices in performance optimization, accessibility, and responsive design to ensure a seamless user experience.

# Project Setup Instructions

Clone the Repository:

git clone https://github.com/your-repo/project-name.git
cd project-name

Install Dependencies:

npm install

Run the Development Server:

npm run dev

Build for Production:

npm run build

Run Tests (if applicable):

npm test

# Component Architecture Overview

Main Components

PassengerSection.tsx: Handles video selection, state management, and UI layout.

VideoProgressIndicator.tsx: Displays the circular progress indicator based on video playback.

CabinSelector.tsx: Provides clickable cabin images to switch videos.

# State Management

React State Hooks (useState): Used to manage the currently active video.

Refs (useRef): Used to directly interact with the video player element.

Effects (useEffect): Handles updates to the video source and stroke animation.

# Responsive Design Strategy

Flexbox & Grid: Ensures proper alignment and spacing.

CSS Media Queries: Adjusts layout based on screen size.

Relative Sizing (vh, vw, %, rem): Enhances adaptability across devices.

Mobile-First Approach: Optimized first for mobile and then for larger screens.

# Performance Optimization Techniques Employed

Lazy Loading: Loads video sources only when required.

Memoization (useMemo): Prevents unnecessary re-renders for static values.

Efficient Event Listeners: Cleanup in useEffect to avoid memory leaks.

# Optimized Video Playback:

Used playsInline, muted, and autoplay to enhance performance.

Managed video loading efficiently via load() method.

Reduced Repaints & Reflows: Utilized CSS optimizations.

# Accessibility Considerations

ARIA Labels: Added for interactive elements.

Keyboard Navigation Support: Ensured buttons and interactive components are accessible via Tab key.

Color Contrast Compliance: Maintained WCAG guidelines for text visibility.

Semantic HTML: Used button, video, svg, etc., for better screen reader support.

# Explanation of Third-Party Libraries Used

React (v18): Core UI framework.

Tailwind CSS: For styling and layout.

TypeScript: For type safety and better code maintainability.

# Assumptions Made & Decisions Taken

Assumed all videos will have the same aspect ratio for consistency.

Chose stroke-dashoffset animation for progress indication to avoid unnecessary re-renders.

Decided to use inline SVG elements instead of external files for better control and styling.

Used useRef instead of useState for the video player to avoid redundant re-renders.

# Challenges Faced & Potential Solutions

1. Video Not Updating Dynamically

Issue: Changing the src attribute alone didn’t refresh the video.
Solution: Used videoRef.current.load() to force a reload before playing.

2. Stroke-Dashoffset Animation Delay

Issue: The animation was lagging behind the video progress.
Solution: Updated stroke-dashoffset within the timeupdate event listener for real-time sync.

3. Performance Bottlenecks in Video Playback

# Issue: Frequent state updates caused unnecessary re-renders.
Solution: Used useRef for direct DOM manipulation and avoided excessive useState updates.

# Suggested Upcoming Features & Improvements

Video Controls: Add play/pause, rewind, and volume control.

Dynamic Video Loading: Load videos asynchronously for better performance.

User Preferences: Save last played video in localStorage.

Full-Screen Mode: Allow users to expand the video.

Multi-Language Support: Implement i18n for wider accessibility.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 83bd50e (initail commit for project setup and designing)
