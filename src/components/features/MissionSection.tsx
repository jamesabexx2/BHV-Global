'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            {t('missionTitle')}
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            {t('missionText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
