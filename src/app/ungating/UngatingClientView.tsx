'use client';

import React from 'react';
import Image from 'next/image';
import Hero from '@/components/layout/Hero';
import { useLanguage } from '@/contexts/LanguageContext';

const ungateImage = '/images/hero/ungating.jpeg';

const UngatingClientView = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Hero
        title={t('ungatingPage.title')}
        subtitle={t('ungatingPage.heroSubtitle')}
        backgroundImage={ungateImage}
        showLogo={true}
      />

      {/* Content section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {t('ungatingPage.section1.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              {t('ungatingPage.section1.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {t('ungatingPage.benefits.title')}
                </h3>
                <ul className="space-y-3">
                  {['benefit1', 'benefit2', 'benefit3'].map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t(`ungatingPage.benefits.${benefit}`)}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {t('ungatingPage.howItWorks.title')}
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  {['step1', 'step2', 'step3'].map((step) => (
                    <li key={step} className="text-gray-700">
                      <span className="text-gray-900 font-medium">
                        {t(`ungatingPage.howItWorks.${step}`)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {t('ungatingPage.cta.title')}
              </h3>
              <p className="text-blue-700 mb-6">
                {t('ungatingPage.cta.description')}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                {t('ungatingPage.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UngatingClientView;
