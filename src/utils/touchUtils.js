// Utility functions for touch interactions
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Add touch-friendly hover effects
export const addTouchHoverEffects = () => {
  if (isTouchDevice()) {
    const hoverElements = document.querySelectorAll('[class*="hover:"]');
    
    hoverElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.classList.add('touch-active');
      });
      
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.classList.remove('touch-active');
        }, 300);
      });
    });
  }
};

// Prevent zoom on double tap
export const preventDoubleTapZoom = () => {
  let lastTouchEnd = 0;
  
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
};