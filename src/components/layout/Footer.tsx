'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { Mail, Phone, MapPin } from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const logo = footerRef.current.querySelector('img');
    const contactRows = Array.from(footerRef.current.querySelectorAll('.contact-info-row')) as HTMLElement[];
    const copyright = footerRef.current.querySelector('.mt-8');
    const elems = [logo, ...contactRows, copyright].filter(Boolean) as HTMLElement[];
    gsap.from(elems, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  
  return (
    <footer ref={footerRef} className="bg-white py-8 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-4">
            <Image src="/bhvlogo.jpg" alt="BHV GLOBAL" width={120} height={40} className="object-contain" />
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <div className="flex items-center space-x-2 contact-info-row">
              <Mail size={16} className="text-[#0B3C5D]" />
              <span className="text-gray-700">info@bhvglobal.com</span>
            </div>
            <div className="flex items-center space-x-2 contact-info-row">
               <a href="tel:+19549097920" className="flex items-center space-x-2">
                 <Phone size={16} className="text-[#0B3C5D]" />
                 <span className="text-gray-700">+1 (954) 909-7920</span>
               </a>
             </div>
            <div className="flex items-center space-x-2 contact-info-row">
               <a href="https://www.google.com/maps/search/?api=1&query=1065+SW+8th+St+1826+Miami+FL+33130+United+States" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                 <MapPin size={16} className="text-[#0B3C5D]" />
                 <span className="text-gray-700">1065 SW 8th St 1826, Miami FL 33130, United States</span>
               </a>
             </div>
          </div>
          
          {/* Social Media - Optional */}
          <div className="flex space-x-4 mb-6">
            {/* Add social media icons if needed */}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-800 text-sm">
            {`© ${new Date().getFullYear()} BHV Global. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
