'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const AlliancesPage = () => {
  const { t } = useLanguage();
  
  const partners = [
    {
      name: 'Global Logistics Partners',
      image: 'https://picsum.photos/id/1025/800/600',
      description: 'Strategic logistics partner providing worldwide shipping and transportation services.'
    },
    {
      name: 'Tech Distribution Network',
      image: 'https://picsum.photos/id/1050/800/600',
      description: 'Technology distribution network specializing in hardware and software solutions.'
    },
    {
      name: 'Healthcare Supply Chain',
      image: 'https://picsum.photos/id/1060/800/600',
      description: 'Healthcare supply chain partner ensuring timely delivery of medical products.'
    },
    {
      name: 'Consumer Goods Alliance',
      image: 'https://picsum.photos/id/1080/800/600',
      description: 'Consumer goods distribution alliance with extensive retail network coverage.'
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1048/1600/900)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {t('alliances')}
          </h1>
        </div>
      </section>
      
      {/* Alliances intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              At BHV Global, we believe in the power of strategic partnerships. 
              We work with leading companies across various industries to provide 
              comprehensive distribution solutions that meet the diverse needs of our clients.
            </p>
          </div>
          
          {/* Partners grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative h-[200px] w-[300px] flex-shrink-0">
                  <Image 
                    src={partner.image}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">{partner.name}</h3>
                  <p className="text-[#666666]">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become a partner section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Become a Partner
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Interested in partnering with BHV Global? We're always looking for strategic 
              partnerships that can enhance our distribution capabilities and create mutual value.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#4169E1] text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlliancesPage;
