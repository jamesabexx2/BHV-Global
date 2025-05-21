'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1076/1600/900)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
