'use client';

import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// Desktop NavLink Component
const NavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void; }) => (
  <a
    href={href}
    className="font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-secondary text-[var(--text-primary)]"
    onClick={(e) => {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: href, ease: 'power2.inOut' });
      onClick();
    }}
  >
    {text}
  </a>
);

// Mobile NavLink Component
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <a
    href={href}
    className="text-xl py-3 px-4 rounded-md hover:bg-white/20 transition-colors duration-200 block text-[var(--text-on-accent)]"
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
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, { y: -100, opacity: 0, duration: 0.6, ease: 'power3.out' });
    }
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
    ${isScrolled ? 'shadow-md' : ''}
  `;

  return (
    <header ref={headerRef} className={headerClasses} style={{ background: isScrolled ? 'var(--background)' : 'transparent' }}>
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
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="#home" text="Home" onClick={closeMenu} />
            <NavLink href="#mission" text="Mission" onClick={closeMenu} />
            <NavLink href="#brands" text="Brands" onClick={closeMenu} />
            <NavLink href="#contact" text="Contact Us" onClick={closeMenu} />
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none hover:bg-secondary text-[var(--text-primary)]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu */}
          <div className={mobileMenuClasses}>
            <nav className="flex flex-col space-y-4 py-4">
              <MobileNavLink href="#home" text="Home" onClick={closeMenu} />
              <MobileNavLink href="#mission" text="Mission" onClick={closeMenu} />
              <MobileNavLink href="#brands" text="Brands" onClick={closeMenu} />
              <MobileNavLink href="#contact" text="Contact Us" onClick={closeMenu} />
            </nav>
          </div>
          
          
      </div>
    </header>
  );
};

export default Header;
