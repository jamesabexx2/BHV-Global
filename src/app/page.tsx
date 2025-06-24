'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import BrandShowcase from '@/components/features/BrandShowcase';
import Hero from '@/components/layout/Hero';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero
        title="Global Brand Solutions"
        subtitle="Your Partner in Brand Success"
        backgroundImage="/images/hero/home.jpg"
        showLogo={true}
      >
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-sm">
          {t('home.hero.description')}
        </p>
        <div className="mt-8">
          <a 
            href="/contact" 
            className="inline-block bg-[#0B3C5D] text-white py-3 px-8 rounded-md hover:bg-[#0A2F47] transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
          >
            {t('home.cta.button')}
          </a>
        </div>
      </Hero>
      
      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-black text-center">
              {t('home.whatWeDo.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#0B3C5D] text-5xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Brand Development</h3>
                <p className="text-gray-600 text-center">
                  We help brands establish and grow their presence in global markets with strategic positioning.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#0B3C5D] text-5xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Market Optimization</h3>
                <p className="text-gray-600 text-center">
                  We optimize your brand&apos;s market performance through data-driven strategies and insights.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="text-[#0B3C5D] text-5xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Partnership Solutions</h3>
                <p className="text-gray-600 text-center">
                  We create strategic partnerships that enhance your brand&apos;s reach and market penetration.
                </p>
              </div>
            </div>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-4xl mx-auto">
              <p className="font-medium text-center">
                Our comprehensive approach ensures that your brand achieves maximum visibility and performance in today&apos;s competitive global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Showcase Section */}
      <BrandShowcase />
      
      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B3C5D] to-[#072A41] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            {t('home.finalCta.title')}
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            {t('home.finalCta.subtitle')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#0B3C5D] py-4 px-10 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg"
          >
            {t('home.finalCta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
