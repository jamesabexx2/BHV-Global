'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white py-8 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-4">
            <Image src="/bhvlogo.jpg" alt="BHV GLOBAL" width={120} height={40} className="object-contain" />
          </div>
          
          {/* Contact */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail size={16} className="text-[#0B3C5D]" />
            <span className="text-gray-700">info@bhvglobal.com</span>
          </div>
          
          {/* Social Media - Optional */}
          <div className="flex space-x-4 mb-6">
            {/* Add social media icons if needed */}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-800 text-sm">
            BHV GLOBAL &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
