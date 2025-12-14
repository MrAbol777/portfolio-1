// Utility functions for accessibility
export const setFocusable = (element) => {
  if (element) {
    element.setAttribute('tabindex', '0');
  }
};

export const removeFocusable = (element) => {
  if (element) {
    element.removeAttribute('tabindex');
  }
};

export const focusElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.focus();
  }
};

export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement is read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const skipToContent = () => {
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.setAttribute('tabindex', '-1');
    mainContent.focus();
  }
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (e, callback) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

// High contrast mode toggle
export const toggleHighContrast = () => {
  document.body.classList.toggle('high-contrast');
};

// Large text toggle
export const toggleLargeText = () => {
  document.body.classList.toggle('large-text');
};