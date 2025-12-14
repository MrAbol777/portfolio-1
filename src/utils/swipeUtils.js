// Utility functions for swipe detection
export const initSwipeDetection = (element, callbacks) => {
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  const threshold = 150; // Minimum distance for swipe
  const restraint = 100; // Maximum perpendicular distance
  const allowedTime = 300; // Maximum time for swipe

  const touchStart = (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = new Date().getTime();
  };

  const touchEnd = (e) => {
    const touch = e.changedTouches[0];
    const distX = touch.clientX - startX;
    const distY = touch.clientY - startY;
    const elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        // Horizontal swipe
        if (distX > 0) {
          callbacks.onSwipeRight && callbacks.onSwipeRight();
        } else {
          callbacks.onSwipeLeft && callbacks.onSwipeLeft();
        }
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        // Vertical swipe
        if (distY > 0) {
          callbacks.onSwipeDown && callbacks.onSwipeDown();
        } else {
          callbacks.onSwipeUp && callbacks.onSwipeUp();
        }
      }
    }
  };

  element.addEventListener('touchstart', touchStart, { passive: true });
  element.addEventListener('touchend', touchEnd, { passive: true });

  // Return cleanup function
  return () => {
    element.removeEventListener('touchstart', touchStart);
    element.removeEventListener('touchend', touchEnd);
  };
};

// Enhanced mobile menu with swipe support
export const initMobileMenu = () => {
  const menuButton = document.querySelector('[aria-label="Toggle navigation menu"]');
  const closeButton = document.querySelector('[aria-label="Close menu"]');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (!menuButton || !closeButton || !mobileMenu) return;
  
  // Open menu with swipe from left edge
  const handleSwipeRight = () => {
    if (window.innerWidth < 768 && !document.querySelector('.mobile-menu.open')) {
      menuButton.click();
    }
  };
  
  // Close menu with swipe from right edge
  const handleSwipeLeft = () => {
    if (window.innerWidth < 768 && document.querySelector('.mobile-menu.open')) {
      closeButton.click();
    }
  };
  
  // Initialize swipe detection on document
  const cleanup = initSwipeDetection(document, {
    onSwipeRight: handleSwipeRight,
    onSwipeLeft: handleSwipeLeft
  });
  
  // Cleanup on unload
  window.addEventListener('beforeunload', cleanup);
};