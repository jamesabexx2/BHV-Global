'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#F5F5F5] py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">BHV Global</h3>
            <p className="text-[#666666] mb-4">{t('footerText')}</p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#666666] hover:text-[#4169E1] transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-[#666666] hover:text-[#4169E1] transition-colors">
                  {t('mission')}
                </Link>
              </li>
              <li>
                <Link href="/alliances" className="text-[#666666] hover:text-[#4169E1] transition-colors">
                  {t('alliances')}
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-[#666666] hover:text-[#4169E1] transition-colors">
                  {t('brands')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#666666] hover:text-[#4169E1] transition-colors">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-[#4169E1]" />
                <span className="text-[#666666]">123 Global Avenue, Suite 500</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#4169E1]" />
                <span className="text-[#666666]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#4169E1]" />
                <span className="text-[#666666]">contact@bhvglobal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-[#666666]">
            &copy; {new Date().getFullYear()} BHV Global. {t('footerRights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
