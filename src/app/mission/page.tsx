'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MissionPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[350px]">
  <Image
    src="/images/hero/our-mission.jpeg"
    alt="Our Mission"
    layout="fill"
    objectFit="cover"
    quality={100}
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
  <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        {t('missionTitle')}
      </h1>
      <p className="text-xl text-white">
        {t('missionPage.heroSubtitle')}
      </p>
    </div>
  </div>
</div>
      
      {/* Mission content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t('missionPage.p1')}
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t('missionPage.p2')}
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t('missionPage.p3')}
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('missionPage.p4')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
