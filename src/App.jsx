import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FeaturedDishes from './components/FeaturedDishes';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { addAnimationClasses, animateOnScroll } from './utils/animationUtils';
import { addTouchHoverEffects, preventDoubleTapZoom } from './utils/touchUtils';
import { lazyLoadImages, optimizeAnimations } from './utils/performanceUtils';
import { initMobileMenu } from './utils/swipeUtils';
import { optimizeForMobile, handleMobileTouchEvents, handleOrientationChange } from './utils/mobileOptimization';
import { monitorPerformance, optimizeRendering, preloadResources, lazyLoadComponents, compressImages } from './utils/performanceMonitor';
import { enhanceAccessibility, improveKeyboardNavigation, addImageLabels, improveFormAccessibility, addLandmarks } from './utils/accessibilityEnhancer';
import { enhanceUI, addMicroInteractions, enhanceVisualHierarchy, addLoadingStates, addSkeletonLoaders } from './utils/uiEnhancer';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Start observing for scroll animations
    animateOnScroll();
    
    // Add touch hover effects
    addTouchHoverEffects();
    
    // Prevent zoom on double tap
    preventDoubleTapZoom();
    
    // Lazy load images
    lazyLoadImages();
    
    // Optimize animations
    optimizeAnimations();
    
    // Initialize mobile menu with swipe support
    initMobileMenu();
    
    // Optimize for mobile devices
    optimizeForMobile();
    
    // Handle mobile touch events
    handleMobileTouchEvents();
    
    // Handle orientation changes
    handleOrientationChange();
    
    // Monitor performance
    monitorPerformance();
    
    // Optimize rendering
    optimizeRendering();
    
    // Preload critical resources
    preloadResources();
    
    // Lazy load components
    lazyLoadComponents();
    
    // Compress images
    compressImages();
    
    // Enhance accessibility
    enhanceAccessibility();
    
    // Improve keyboard navigation
    improveKeyboardNavigation();
    
    // Add image labels
    addImageLabels();
    
    // Improve form accessibility
    improveFormAccessibility();
    
    // Add landmarks
    addLandmarks();
    
    // Enhance UI
    enhanceUI();
    
    // Add micro-interactions
    addMicroInteractions();
    
    // Enhance visual hierarchy
    enhanceVisualHierarchy();
    
    // Add loading states
    addLoadingStates();
    
    // Add skeleton loaders
    addSkeletonLoaders();
    
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <FeaturedDishes />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;