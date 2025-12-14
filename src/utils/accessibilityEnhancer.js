// Utility functions for accessibility enhancements
export const enhanceAccessibility = () => {
  // Add skip to content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'رفتن به محتوای اصلی';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add landmark roles
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('id', 'main-content');
    main.setAttribute('role', 'main');
  }
  
  // Add language attribute
  document.documentElement.setAttribute('lang', 'fa');
  
  // Improve focus management
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  focusableElements.forEach(element => {
    // Ensure all interactive elements have proper focus indicators
    if (!element.hasAttribute('tabindex') && element.tagName !== 'BUTTON') {
      element.setAttribute('tabindex', '0');
    }
  });
};

// Function to handle high contrast mode - REMOVED as per user request

// Function to handle screen reader announcements
export const announceToScreenReader = (message) => {
  // Create announcement element if it doesn't exist
  let announcer = document.getElementById('screen-reader-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.setAttribute('id', 'screen-reader-announcer');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }
  
  // Set the message
  announcer.textContent = message;
};

// Function to handle keyboard navigation improvements
export const improveKeyboardNavigation = () => {
  // Handle ESC key for modals/menus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open menus or modals
      const openMenus = document.querySelectorAll('.mobile-menu.open');
      openMenus.forEach(menu => {
        menu.classList.remove('open');
        // Focus back to menu button
        const menuButton = document.querySelector('[aria-label="Toggle navigation menu"]');
        if (menuButton) menuButton.focus();
      });
    }
  });
  
  // Handle tab navigation for modal trapping
  const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  };
  
  // Apply focus trapping to mobile menu
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    trapFocus(mobileMenu);
  }
};

// Function to add ARIA labels to images
export const addImageLabels = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // If image doesn't have alt text, add descriptive alt text
    if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
      // Try to infer from filename or surrounding text
      const src = img.src;
      const fileName = src.split('/').pop().split('.')[0];
      img.setAttribute('alt', `تصویر ${fileName}`);
    }
    
    // Add role if missing
    if (!img.hasAttribute('role')) {
      img.setAttribute('role', 'img');
    }
  });
};

// Function to improve form accessibility
export const improveFormAccessibility = () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    // Associate labels with inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.id;
      if (id) {
        const label = form.querySelector(`label[for="${id}"]`);
        if (label) {
          // Ensure proper labeling
          if (!input.hasAttribute('aria-labelledby')) {
            input.setAttribute('aria-labelledby', id);
          }
        }
      }
      
      // Add required attribute if needed
      if (input.hasAttribute('required') && !input.hasAttribute('aria-required')) {
        input.setAttribute('aria-required', 'true');
      }
    });
  });
};

// Function to add landmarks for screen readers
export const addLandmarks = () => {
  // Add landmarks to main sections
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  
  if (header && !header.hasAttribute('role')) {
    header.setAttribute('role', 'banner');
  }
  
  if (nav && !nav.hasAttribute('role')) {
    nav.setAttribute('role', 'navigation');
  }
  
  if (main && !main.hasAttribute('role')) {
    main.setAttribute('role', 'main');
  }
  
  if (footer && !footer.hasAttribute('role')) {
    footer.setAttribute('role', 'contentinfo');
  }
};

// Export all functions
export default {
  enhanceAccessibility,
  // handleHighContrastMode removed as per user request
  announceToScreenReader,
  improveKeyboardNavigation,
  addImageLabels,
  improveFormAccessibility,
  addLandmarks
};