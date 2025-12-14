// Utility functions for generating placeholder images
export const getPlaceholderImage = (width = 400, height = 300, text = '') => {
  // Using a service that provides restaurant-themed placeholders
  return `https://placehold.co/${width}x${height}/1a3d2c/d4a373?text=${encodeURIComponent(text)}`;
};

import { getLocalImages } from './localImages';

// Utility functions for getting local images
export const getImageUrls = () => {
  // Return local images instead of placeholders
  return getLocalImages();
};
