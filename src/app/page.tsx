'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[350px]">
        <Image
          src="/images/hero/home.jpg"
          alt="BHV Global Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('headerBannerText')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              {t('home.hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              {t('home.whatWeDo.title')}
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                {t('home.whatWeDo.p1')}
              </p>
              <p>
                {t('home.whatWeDo.p2')}
              </p>
              <p className="font-medium">
                {t('home.whatWeDo.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              {t('home.brands.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.brands.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-[300px] w-full">
                <Image 
                  src="/images/brands/brands1.jpg" 
                  alt="Premium footwear brands" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 hover:opacity-95"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('home.brands.item1.title')}</h3>
                <p className="text-gray-600">{t('home.brands.item1.description')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-[300px] w-full">
                <Image 
                  src="/images/brands/brands2.jpg" 
                  alt="Fashion and accessories brands" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 hover:opacity-95"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('home.brands.item2.title')}</h3>
                <p className="text-gray-600">{t('home.brands.item2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#0B3C5D] text-white py-3 px-8 rounded-md hover:bg-[#0A2F47] transition-colors text-lg font-medium"
          >
            {t('home.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
