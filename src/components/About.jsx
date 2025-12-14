import React from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';

const About = () => {
  const images = getImageUrls();
  
  return (
    <section id="about" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-5 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full opacity-5 translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">{t('ourStory')}</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mobile-enhanced touch-target">
              <img 
                src={images.about} 
                alt={t('ourStory')} 
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t('aboutTitle')}</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {t('aboutText2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('aboutText3')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center mobile-enhanced touch-target">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-gray-600">سال تجربه</div>
              </div>
              <div className="text-center mobile-enhanced touch-target">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">غذای خاص</div>
              </div>
              <div className="text-center mobile-enhanced touch-target">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">رضایت مشتری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;