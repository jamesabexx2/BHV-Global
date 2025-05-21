'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="w-full bg-[#4169E1] text-white py-2 px-4 text-center">
        <p className="text-sm md:text-base">
          {t('heroSubtitle')}
        </p>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="w-[150px] h-[50px] relative">
          <Link href="/">
            <div className="w-full h-full flex items-center">
              <span className="text-xl font-bold">BHV Global</span>
            </div>
          </Link>
        </div>
        
        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black hover:text-[#4169E1] transition-colors">
            {t('home')}
          </Link>
          <Link href="/mission" className="text-black hover:text-[#4169E1] transition-colors">
            {t('mission')}
          </Link>
          <Link href="/alliances" className="text-black hover:text-[#4169E1] transition-colors">
            {t('alliances')}
          </Link>
          <Link href="/brands" className="text-black hover:text-[#4169E1] transition-colors">
            {t('brands')}
          </Link>
          <Link href="/contact" className="text-black hover:text-[#4169E1] transition-colors">
            {t('contactUs')}
          </Link>
        </nav>
        
        {/* Language selector */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-1 text-black hover:text-[#4169E1] transition-colors"
        >
          <Globe size={20} />
          <span>{language === 'en' ? 'ES' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
