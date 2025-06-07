'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const missionImage = '/images/hero/our-mission.jpeg';

const MissionClientView = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[350px]">
        <Image
          src={missionImage}
          alt="Our Mission"
          fill
          style={{
            objectFit: 'cover',
          }}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose lg:prose-xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                {t('missionPage.ourMission')}
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  {t('missionPage.missionStatement')}
                </p>
                
                <h3 className="text-2xl font-semibold mt-10 mb-4">
                  {t('missionPage.ourValues')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {['innovation', 'excellence', 'integrity', 'collaboration'].map((value) => (
                    <div key={value} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-3 text-blue-800">
                        {t(`missionPage.values.${value}.title`)}
                      </h4>
                      <p className="text-gray-700">
                        {t(`missionPage.values.${value}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {t('missionPage.joinUs.title')}
                  </h3>
                  <p className="text-blue-900 mb-6">
                    {t('missionPage.joinUs.description')}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    {t('missionPage.joinUs.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionClientView;
