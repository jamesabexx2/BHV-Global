'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// Componente para enlaces de escritorio
const NavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <a
    href={href}
    className="font-medium text-white hover:bg-white/20 px-5 py-3 h-full flex items-center transition-all duration-300"
    onClick={(e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: href, ease: 'power2.inOut' });
      onClick();
    }}
  >
    {text}
  </a>
);

// Componente para enlaces móviles
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <a
    href={href}
    className="text-white text-xl py-3 px-4 rounded-md hover:bg-white/20 transition-colors duration-200 block"
    onClick={(e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: href, ease: 'power2.inOut' });
      onClick();
    }}
  >
    {text}
  </a>
);



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
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
            <a href="#home" onClick={(e) => { e.preventDefault(); gsap.to(window, { duration: 1, scrollTo: '#home', ease: 'power2.inOut' }); closeMenu(); }}> 
              <div className="w-full h-full flex items-center">
                <Image 
                  src="/bhvlogo-horizontal.jpg" 
                  alt="BHV GLOBAL" 
                  fill
                  className="object-contain" 
                />
              </div>
            </a>
          </div>
          
          {/* Navigation links - Desktop */}
                    <nav className="hidden md:flex items-center h-full">
                        <NavLink href="#home" text={t('navHome') || 'Home'} onClick={closeMenu} />
            <NavLink href="#mission" text={t('mission') || 'Mission'} onClick={closeMenu} />
            <NavLink href="#brands" text={t('brands') || 'Brands'} onClick={closeMenu} />
            <NavLink href="#ungating" text={t('ungating') || 'Ungating'} onClick={closeMenu} />
            <NavLink href="#contact" text={t('contactUs') || 'Contact Us'} onClick={closeMenu} />
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
              <MobileNavLink href="#home" text={t('navHome')} onClick={closeMenu} />
              <MobileNavLink href="#mission" text={t('mission')} onClick={closeMenu} />
              <MobileNavLink href="#brands" text={t('brands')} onClick={closeMenu} />
              <MobileNavLink href="#ungating" text={t('ungating')} onClick={closeMenu} />
              <MobileNavLink href="#contact" text={t('contactUs')} onClick={closeMenu} />
            </nav>
          </div>
          
          
      </div>
    </header>
  );
};

export default Header;
