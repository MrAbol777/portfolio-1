import React from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';

const Gallery = () => {
  const images = getImageUrls();
  
  // Real images for the gallery
  const galleryImages = [
    { id: 1, src: images.gallery1, alt: `${t('ourRestaurant')} 1` },
    { id: 2, src: images.gallery2, alt: `${t('ourRestaurant')} 2` },
    { id: 3, src: images.gallery3, alt: `${t('ourRestaurant')} 3` },
    { id: 4, src: images.gallery4, alt: `${t('ourRestaurant')} 4` },
    { id: 5, src: images.gallery5, alt: `${t('ourRestaurant')} 5` },
    { id: 6, src: images.gallery6, alt: `${t('ourRestaurant')} 6` }
  ];

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full opacity-5 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full opacity-5 translate-y-32 translate-x-32"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">{t('ourRestaurant')}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          {t('galleryDescription')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item relative group overflow-hidden rounded-2xl mobile-enhanced touch-target"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;