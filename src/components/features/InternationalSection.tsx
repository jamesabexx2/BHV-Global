'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LocationCard from './LocationCard';

const InternationalSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-black">
          {t('internationalTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* USA Office */}
          <LocationCard 
            title={t('usaOffice')}
            address="123 Business Avenue, New York, NY 10001, USA"
            phone="+1 (555) 123-4567"
            email="usa@bhvglobal.com"
          />
          
          {/* Mexico Office */}
          <LocationCard 
            title={t('mexicoOffice')}
            address="Av. Reforma 222, Col. Juárez, 06600, Ciudad de México, México"
            phone="+52 (55) 1234-5678"
            email="mexico@bhvglobal.com"
          />
          
          {/* Europe Office */}
          <LocationCard 
            title={t('europeOffice')}
            address="Hauptstraße 25, 10178 Berlin, Germany"
            phone="+49 (30) 1234-5678"
            email="europe@bhvglobal.com"
          />
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
