'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full h-[400px] bg-gray-800 flex items-center justify-center">
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
