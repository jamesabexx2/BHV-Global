'use client';

import React from 'react';
import HeroSection from '@/components/features/HeroSection';
import MissionSection from '@/components/features/MissionSection';
import InternationalSection from '@/components/features/InternationalSection';
import BrandShowcase from '@/components/features/BrandShowcase';
import ContactSection from '@/components/features/ContactSection';

const HomeClient = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <InternationalSection />
      <BrandShowcase />
      <ContactSection />
    </div>
  );
};

export default HomeClient;
