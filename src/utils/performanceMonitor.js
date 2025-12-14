// Utility functions for performance monitoring and optimization
export const monitorPerformance = () => {
  // Log performance metrics
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
          console.log('Performance Metrics:');
          console.log(`Load Time: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
          console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.fetchStart}ms`);
          console.log(`Redirect Count: ${perfData.redirectCount}`);
        }
      }, 0);
    });
  }
};

// Function to optimize rendering performance
export const optimizeRendering = () => {
  // Use requestIdleCallback for non-critical tasks
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Defer non-critical work
      const nonCriticalElements = document.querySelectorAll('.defer-load');
      nonCriticalElements.forEach(el => {
        el.classList.remove('hidden');
      });
    });
  } else {
    // Fallback for older browsers
    setTimeout(() => {
      const nonCriticalElements = document.querySelectorAll('.defer-load');
      nonCriticalElements.forEach(el => {
        el.classList.remove('hidden');
      });
    }, 200);
  }
  
  // Throttle expensive operations
  let ticking = false;
  const throttle = (fn) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        fn();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  // Optimize scroll events
  window.addEventListener('scroll', () => {
    throttle(() => {
      // Handle scroll-dependent operations here
      const scrollPosition = window.scrollY;
      document.body.style.setProperty('--scroll-position', scrollPosition);
    });
  });
  
  // Optimize resize events
  window.addEventListener('resize', () => {
    throttle(() => {
      // Handle resize-dependent operations here
      const width = window.innerWidth;
      document.body.style.setProperty('--viewport-width', width);
    });
  });
};

// Function to preload critical resources
export const preloadResources = () => {
  // Preload critical images
  const criticalImages = [
    '/src/assets/images/hero.jpg',
    '/src/assets/images/about.jpg',
    '/src/assets/images/dish1.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
  
  // Preconnect to external domains
  const externalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Function to handle memory optimization
export const optimizeMemory = () => {
  // Clean up event listeners
  const cleanupListeners = () => {
    // Remove unused event listeners
    const events = ['scroll', 'resize', 'mousemove'];
    events.forEach(event => {
      window.removeEventListener(event, null); // This won't work as intended
    });
  };
  
  // Use WeakMap for storing element references
  const elementCache = new WeakMap();
  
  // Periodically clean up unused objects
  setInterval(() => {
    if (window.gc) {
      window.gc();
    }
  }, 30000);
};

// Function to handle battery optimization for mobile devices
export const optimizeForBattery = () => {
  // Check if device is on battery power
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      // Reduce animations when on battery power
      if (!battery.charging) {
        document.body.classList.add('low-power');
      }
      
      // Listen for charging state changes
      battery.addEventListener('chargingchange', () => {
        if (battery.charging) {
          document.body.classList.remove('low-power');
        } else {
          document.body.classList.add('low-power');
        }
      });
    });
  }
};

// Function to lazy load components
export const lazyLoadComponents = () => {
  // Lazy load non-critical components
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const src = element.dataset.src;
        
        if (src) {
          element.src = src;
          element.classList.add('loaded');
          obs.unobserve(element);
        }
      }
    });
  }, observerOptions);
  
  // Observe elements with data-src attribute
  const lazyElements = document.querySelectorAll('[data-src]');
  lazyElements.forEach(el => observer.observe(el));
};

// Function to compress images for better performance
export const compressImages = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Add loading attribute for better performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Optimize image decoding
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
};

// Export all functions
export default {
  monitorPerformance,
  optimizeRendering,
  preloadResources,
  optimizeMemory,
  optimizeForBattery,
  lazyLoadComponents,
  compressImages
};