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
    <header className="w-full bg-[#092e47]">
      {/* Top banner */}
      <div className="w-full bg-[#0B3C5D] text-white py-2 px-4 text-center">
        <p className="text-sm md:text-base">
          {t('headerBannerText')}
        </p>
      </div>
      
      <div className="w-full">
        <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <div className="w-[150px] h-[50px] relative">
            <Link href="/">
              <div className="w-full h-full flex items-center">
                <Image 
                  src="/bhvlogo.jpg" 
                  alt="BHV GLOBAL" 
                  width={150} 
                  height={50} 
                  className="object-contain" 
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-1 h-full">
            <Link href="/" className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300">
              {t('navHome')}
            </Link>
            <Link href="/mission" className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300">
              {t('mission')}
            </Link>
            <Link href="/ungating" className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300">
              {t('ungating')}
            </Link>
            <Link href="/contact" className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300">
              {t('contactUs')}
            </Link>
          </nav>
          
          {/* Language selector */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 font-medium text-white hover:bg-white/20 px-4 py-2 rounded-md transition-all duration-300"
          >
            <Globe size={20} />
            <span>{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
