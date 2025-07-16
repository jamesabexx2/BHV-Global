'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/layout/Hero';
import MissionSection from '@/components/sections/MissionSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import BrandsSection from '@/components/sections/BrandsSection';

import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div id="home" className="min-h-screen">
      <Hero
        title={t('home.hero.subtitle')}
        subtitle={t('home.hero.description')}
        showLogo={false}
      >
        <div className="mt-8">
          <a 
            href="#contact"
            className="inline-block text-white py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            {t('home.cta.button')}
          </a>
        </div>
      </Hero>

      <MissionSection t={t} />
      <WhatWeDoSection t={t} />
      <BrandsSection />
      
      <ContactSection t={t} />
    </div>
  );
}

