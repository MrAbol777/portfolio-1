// Utility functions for mobile optimization
export const optimizeForMobile = () => {
  // Check if device is mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Add mobile-specific optimizations
    document.body.classList.add('mobile-device');
    
    // Reduce animation intensity on mobile
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
      document.body.classList.add('reduce-motion');
    }
    
    // Add viewport meta tag if not present
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(viewportMeta);
    }
    
    // Optimize font loading for mobile
    const fontLinks = document.querySelectorAll('link[rel="stylesheet"]');
    fontLinks.forEach(link => {
      if (link.href.includes('fonts.googleapis.com')) {
        link.setAttribute('media', '(min-width: 768px)');
      }
    });
  }
};

// Function to handle mobile-specific touch events
export const handleMobileTouchEvents = () => {
  // Prevent elastic scrolling on iOS
  let startY = 0;
  
  document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
  }, { passive: false });
  
  document.addEventListener('touchmove', (e) => {
    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    const deltaY = e.touches[0].pageY - startY;
    
    // Allow scrolling when needed
    if (element.scrollHeight > element.clientHeight) {
      if ((deltaY > 0 && scrollTop === 0) || 
          (deltaY < 0 && scrollTop + clientHeight >= scrollHeight)) {
        // At scroll boundaries, prevent pull-to-refresh but allow scroll
        if (element === document.body || element === document.documentElement) {
          e.preventDefault();
        }
      }
    }
  }, { passive: false });
};

// Function to optimize images for mobile
export const optimizeImagesForMobile = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Use lower quality images for mobile
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const mobileSrc = img.getAttribute('data-mobile-src');
      if (mobileSrc) {
        img.src = mobileSrc;
      }
    });
    
    // Lazy load images with intersection observer
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.classList.remove('lazy');
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
};

// Function to handle mobile orientation changes
export const handleOrientationChange = () => {
  const handleResize = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    document.body.classList.toggle('landscape', isLandscape);
    document.body.classList.toggle('portrait', !isLandscape);
  };
  
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial check
};

// Export all functions
export default {
  optimizeForMobile,
  handleMobileTouchEvents,
  optimizeImagesForMobile,
  handleOrientationChange
};