'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const BrandShowcase = () => {
  const { t } = useLanguage();
  
  const sectors = [
    { name: 'Technology', image: 'https://picsum.photos/id/0/300/200' },
    { name: 'Healthcare', image: 'https://picsum.photos/id/1/300/200' },
    { name: 'Automotive', image: 'https://picsum.photos/id/2/300/200' },
    { name: 'Consumer Goods', image: 'https://picsum.photos/id/3/300/200' },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            {t('brandsTitle')}
          </h2>
          <p className="text-lg text-[#666666]">
            {t('brandsSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={sector.image}
                  alt={sector.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{sector.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
