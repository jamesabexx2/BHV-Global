'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const BrandsPage = () => {
  const { t } = useLanguage();
  
  const sectors = [
    {
      name: 'Technology',
      image: 'https://picsum.photos/id/0/800/600',
      description: 'Distribution of cutting-edge technology products including hardware, software, and electronic devices.',
      brands: ['TechPro', 'InnovateTech', 'DigitalSolutions', 'SmartTech']
    },
    {
      name: 'Healthcare',
      image: 'https://picsum.photos/id/1/800/600',
      description: 'Distribution of medical devices, pharmaceuticals, and healthcare products to hospitals and clinics worldwide.',
      brands: ['MediCare', 'HealthPlus', 'VitalMed', 'MedTech']
    },
    {
      name: 'Automotive',
      image: 'https://picsum.photos/id/2/800/600',
      description: 'Distribution of automotive parts, accessories, and maintenance products for various vehicle types.',
      brands: ['AutoParts', 'DriveWell', 'MotorTech', 'CarCare']
    },
    {
      name: 'Consumer Goods',
      image: 'https://picsum.photos/id/3/800/600',
      description: 'Distribution of everyday consumer products including home goods, personal care, and lifestyle products.',
      brands: ['HomeEssentials', 'LifeStyle', 'DailyGoods', 'ConsumerChoice']
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1059/1600/900)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {t('brandsTitle')}
          </h1>
        </div>
      </section>
      
      {/* Brands intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black">
              {t('brandsSubtitle')}
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              BHV Global partners with leading brands across various sectors to provide 
              comprehensive distribution solutions. Our extensive network and industry 
              expertise allow us to connect these brands with markets worldwide.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sectors and brands */}
      {sectors.map((sector, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image column - alternating left/right */}
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[400px] w-full">
                    <Image 
                      src={sector.image}
                      alt={sector.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-black">{sector.name}</h2>
                    <p className="text-lg text-[#666666] leading-relaxed mb-6">
                      {sector.description}
                    </p>
                    <h3 className="text-xl font-semibold mb-4 text-black">Featured Brands:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {sector.brands.map((brand, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-[#4169E1] rounded-full mr-2"></span>
                          <span className="text-[#666666]">{brand}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-black">{sector.name}</h2>
                    <p className="text-lg text-[#666666] leading-relaxed mb-6">
                      {sector.description}
                    </p>
                    <h3 className="text-xl font-semibold mb-4 text-black">Featured Brands:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {sector.brands.map((brand, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-[#4169E1] rounded-full mr-2"></span>
                          <span className="text-[#666666]">{brand}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[400px] w-full">
                    <Image 
                      src={sector.image}
                      alt={sector.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrandsPage;
