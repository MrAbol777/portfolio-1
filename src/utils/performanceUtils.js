// Utility functions for performance optimization
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(image => {
    imageObserver.observe(image);
  });
};

// Optimize animations for better performance
export const optimizeAnimations = () => {
  // Use requestAnimationFrame for smooth animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const animate = () => {
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }
    });
    
    requestAnimationFrame(animate);
  };
  
  // Only run animation loop if there are elements to animate
  if (animatedElements.length > 0) {
    requestAnimationFrame(animate);
  }
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};