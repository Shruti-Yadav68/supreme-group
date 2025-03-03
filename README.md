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
