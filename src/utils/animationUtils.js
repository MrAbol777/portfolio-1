// Utility functions for scroll animations
export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};

// Add animation classes to elements
export const addAnimationClasses = () => {
  // Add animation classes to sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('animate-on-scroll');
    section.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Add animation classes to cards
  const cards = document.querySelectorAll('.card-hover');
  cards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.05}s`;
  });
};