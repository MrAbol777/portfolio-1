import React from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';

const Hero = () => {
  const images = getImageUrls();
  
  return (
    <section id="home" className="pt-20 pb-16 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 61, 44, 0.85), rgba(26, 61, 44, 0.9)), url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent opacity-10 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#menu" 
            className="btn-primary bg-accent hover:bg-opacity-90 text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mobile-enhanced touch-target"
          >
            {t('viewMenu')}
          </a>
          <a 
            href="#contact" 
            className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mobile-enhanced touch-target"
          >
            {t('reserveTable')}
          </a>
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;