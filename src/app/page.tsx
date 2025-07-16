'use client';


import Hero from '@/components/layout/Hero';
import MissionSection from '@/components/sections/MissionSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import BrandsSection from '@/components/sections/BrandsSection';

import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Hero
        title="Your Trusted Partner for Global Product Distribution"
        subtitle="We specialize in connecting top-tier brands with a global market, ensuring quality and reliability every step of the way."
        showLogo={false}
      >
        <div className="mt-8">
          <a 
            href="#contact"
            className="inline-block text-white py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            Contact Us
          </a>
        </div>
      </Hero>

      <MissionSection />
      <WhatWeDoSection />
      <BrandsSection />
      
      <ContactSection />
    </div>
  );
}

