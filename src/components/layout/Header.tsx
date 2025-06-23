'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

// Componente para enlaces de escritorio
const NavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <Link 
    href={href} 
    className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300"
    onClick={onClick}
  >
    {text}
  </Link>
);

// Componente para enlaces móviles
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <Link 
    href={href} 
    className="text-white text-xl py-3 px-4 rounded-md hover:bg-white/20 transition-colors duration-200 block"
    onClick={onClick}
  >
    {text}
  </Link>
);


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Estilos para la transición del menú móvil
  const mobileMenuClasses = `
    md:hidden fixed inset-0 bg-[#092e47] z-40 pt-24 px-4 transition-all duration-300 ease-in-out transform
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  const headerClasses = `
    w-full fixed top-0 left-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-[#092e47] shadow-lg' : 'bg-transparent'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
          {/* Logo */}
                    <div className="w-[140px] h-[45px] relative">
            <Link href="/">
              <div className="w-full h-full flex items-center">
                <Image 
                  src="/bhvlogo-horizontal.jpg" 
                  alt="BHV GLOBAL" 
                  fill
                  className="object-contain" 
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation links - Desktop */}
                    <nav className="hidden md:flex items-center h-full">
                        <NavLink href="/" text={t('navHome') || 'Home'} onClick={closeMenu} />
            <NavLink href="/mission" text={t('mission') || 'Mission'} onClick={closeMenu} />
            <NavLink href="/ungating" text={t('ungating') || 'Ungating'} onClick={closeMenu} />
            <NavLink href="/contact" text={t('contactUs') || 'Contact Us'} onClick={closeMenu} />
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/20 focus:outline-none"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu */}
          <div className={mobileMenuClasses}>
            <nav className="flex flex-col space-y-4 py-4">
              <MobileNavLink href="/" text={t('navHome')} onClick={closeMenu} />
              <MobileNavLink href="/mission" text={t('mission')} onClick={closeMenu} />
              <MobileNavLink href="/ungating" text={t('ungating')} onClick={closeMenu} />
              <MobileNavLink href="/contact" text={t('contactUs')} onClick={closeMenu} />
            </nav>
          </div>
          
          {/* Language selector */}
                    <div className="hidden md:flex items-center">
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
