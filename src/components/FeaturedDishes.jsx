import React from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';

const FeaturedDishes = () => {
  const images = getImageUrls();
  
  const dishes = [
    {
      id: 1,
      name: t('featuredDishes.lobsterThermidor.name'),
      description: t('featuredDishes.lobsterThermidor.description'),
      price: t('featuredDishes.lobsterThermidor.price'),
      image: images.dish1
    },
    {
      id: 2,
      name: t('featuredDishes.wagyuBeef.name'),
      description: t('featuredDishes.wagyuBeef.description'),
      price: t('featuredDishes.wagyuBeef.price'),
      image: images.dish2
    },
    {
      id: 3,
      name: t('featuredDishes.searedScallops.name'),
      description: t('featuredDishes.searedScallops.description'),
      price: t('featuredDishes.searedScallops.price'),
      image: images.dish3
    }
  ];

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full opacity-5 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full opacity-5 translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">{t('chefSpecialties')}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          {t('featuredDescription')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map(dish => (
            <div 
              key={dish.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl card-hover mobile-enhanced touch-target"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  ویژه
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-primary">{dish.name}</h3>
                  <span className="text-lg font-semibold text-accent">{dish.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <button className="btn-primary w-full py-3 rounded-lg mobile-enhanced touch-target">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;