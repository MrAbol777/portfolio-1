import React, { useState } from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const images = getImageUrls();
  
  const menuItems = [
    {
      id: 1,
      name: t('menuItems.trufflePasta.name'),
      description: t('menuItems.trufflePasta.description'),
      price: t('menuItems.trufflePasta.price'),
      category: 'mains',
      image: images.menu1,
      featured: true
    },
    {
      id: 2,
      name: t('menuItems.grilledSalmon.name'),
      description: t('menuItems.grilledSalmon.description'),
      price: t('menuItems.grilledSalmon.price'),
      category: 'mains'
    },
    {
      id: 3,
      name: t('menuItems.caesarSalad.name'),
      description: t('menuItems.caesarSalad.description'),
      price: t('menuItems.caesarSalad.price'),
      category: 'starters',
      image: images.menu2,
      featured: true
    },
    {
      id: 4,
      name: t('menuItems.chocolateSouffle.name'),
      description: t('menuItems.chocolateSouffle.description'),
      price: t('menuItems.chocolateSouffle.price'),
      category: 'desserts'
    },
    {
      id: 5,
      name: t('menuItems.beefTartare.name'),
      description: t('menuItems.beefTartare.description'),
      price: t('menuItems.beefTartare.price'),
      category: 'starters'
    },
    {
      id: 6,
      name: t('menuItems.lobsterBisque.name'),
      description: t('menuItems.lobsterBisque.description'),
      price: t('menuItems.lobsterBisque.price'),
      category: 'starters',
      image: images.menu3,
      featured: true
    },
    {
      id: 7,
      name: t('menuItems.ribeyeSteak.name'),
      description: t('menuItems.ribeyeSteak.description'),
      price: t('menuItems.ribeyeSteak.price'),
      category: 'mains'
    },
    {
      id: 8,
      name: t('menuItems.tiramisu.name'),
      description: t('menuItems.tiramisu.description'),
      price: t('menuItems.tiramisu.price'),
      category: 'desserts'
    }
  ];
  
  const categories = [
    { id: 'all', name: t('allItems') },
    { id: 'starters', name: t('starters') },
    { id: 'mains', name: t('mainCourses') },
    { id: 'desserts', name: t('desserts') }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full opacity-5 -translate-y-32 -translate-x-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-5 translate-y-32 translate-x-32"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">{t('ourMenu')}</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 mobile-enhanced touch-target ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="flex justify-between items-start pb-6 border-b border-gray-200 card-hover bg-white p-6 rounded-xl shadow-md mobile-enhanced touch-target"
            >
              {item.featured && item.image ? (
                <div className="flex gap-4 w-full">
                  <div className="relative overflow-hidden rounded-lg w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                  </div>
                  <div className="text-lg font-semibold text-accent whitespace-nowrap">{item.price}</div>
                </div>
              ) : (
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                </div>
              )}
              {!item.featured && (
                <div className="text-lg font-semibold text-accent whitespace-nowrap mr-2">{item.price}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;