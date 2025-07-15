'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/layout/Hero';
import MissionSection from '@/components/sections/MissionSection';
import BrandsSection from '@/components/sections/BrandsSection';
import UngatingSection from '@/components/sections/UngatingSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div id="home" className="min-h-screen">
      <Hero
        title="Global Brand Solutions"
        subtitle="Your Partner in Brand Success"
        backgroundImage="/images/hero/home.jpg"
        showLogo={false}
      >
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-sm">
          {t('home.hero.description')}
        </p>
        <div className="mt-6 sm:mt-8">
          <a 
            href="#contact"
            className="inline-block bg-[#0B3C5D] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:bg-[#0A2F47] transition-all duration-300 transform hover:scale-105 text-base sm:text-lg font-medium shadow-lg"
          >
            {t('home.cta.button')}
          </a>
        </div>
      </Hero>

      <MissionSection t={t} />
      <BrandsSection />
      <UngatingSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}

