'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-black">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-[#666666]">
            {t('contactSubtitle')}
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
