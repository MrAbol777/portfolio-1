// Utility functions for UI enhancements
export const enhanceUI = () => {
  // Add subtle hover effects to all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, .card-hover');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hover-enhanced');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hover-enhanced');
    });
  });
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple element
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      // Position ripple
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      // Add ripple to button
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

// Function to add micro-interactions
export const addMicroInteractions = () => {
  // Add feedback for form submissions
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', () => {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('submitting');
        submitButton.disabled = true;
        
        // Re-enable after submission
        setTimeout(() => {
          submitButton.classList.remove('submitting');
          submitButton.disabled = false;
        }, 2000);
      }
    });
  });
  
  // Add visual feedback for clicks
  document.addEventListener('click', (e) => {
    const target = e.target;
    
    // Add click effect to cards
    if (target.closest('.card-hover')) {
      const card = target.closest('.card-hover');
      card.classList.add('clicked');
      
      setTimeout(() => {
        card.classList.remove('clicked');
      }, 300);
    }
  });
};

// Function to enhance visual hierarchy
export const enhanceVisualHierarchy = () => {
  // Add depth to cards with box-shadow transitions
  const cards = document.querySelectorAll('.card-hover, .gallery-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
  
  // Enhance section titles with subtle animations
  const sectionTitles = document.querySelectorAll('.section-title');
  
  sectionTitles.forEach(title => {
    // Add observer for entrance animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enhanced');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(title);
  });
};

// Function to add loading states
export const addLoadingStates = () => {
  // Add loading spinner to buttons during async operations
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    // Store original content
    button.dataset.originalContent = button.innerHTML;
    
    // Add method to show loading state
    button.showLoading = function() {
      this.innerHTML = `
        <span class="loading-spinner"></span>
        در حال پردازش...
      `;
      this.disabled = true;
      this.classList.add('loading');
    };
    
    // Add method to hide loading state
    button.hideLoading = function() {
      this.innerHTML = this.dataset.originalContent;
      this.disabled = false;
      this.classList.remove('loading');
    };
  });
};

// Function to add skeleton loaders
export const addSkeletonLoaders = () => {
  // Create skeleton loader elements for dynamic content
  const createSkeleton = (width = '100%', height = '20px') => {
    const skeleton = document.createElement('div');
    skeleton.classList.add('skeleton-loader');
    skeleton.style.width = width;
    skeleton.style.height = height;
    return skeleton;
  };
  
  // Add skeleton loaders to gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    // Add skeleton loader as background
    item.style.position = 'relative';
    item.style.overflow = 'hidden';
    
    const skeleton = document.createElement('div');
    skeleton.classList.add('skeleton-bg');
    item.appendChild(skeleton);
  });
};

// Export all functions
export default {
  enhanceUI,
  addMicroInteractions,
  enhanceVisualHierarchy,
  addLoadingStates,
  addSkeletonLoaders
};