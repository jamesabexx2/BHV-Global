'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UngatingPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/hero/ungating.jpeg"
          alt="Ungating Services"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('ungatingPage.title')}
            </h1>
            <p className="text-xl text-white">
              {t('ungatingPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Ungating content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t('ungatingPage.p1')}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-16">
              {t('ungatingPage.heroSubtitle')}
            </p>
            
            {/* Subscription form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-black">{t('ungatingPage.formTitle')}</h3>
              <form className="space-y-6 max-w-md mx-auto">
                <div>
                  <input
                    type="text"
                    placeholder={t('ungatingPage.formFullNamePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={t('ungatingPage.formEmailPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0B3C5D] text-white py-3 px-4 rounded-md hover:bg-[#0A2F47] transition-colors font-medium"
                  >
                    {t('ungatingPage.formSubmitButton')}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  {t('ungatingPage.formContactDirectly')} <a href="mailto:info@bhvglobal.com" className="text-[#0B3C5D] font-medium hover:underline">info@bhvglobal.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
