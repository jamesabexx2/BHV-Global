'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const MissionPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero section for mission page */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/366/1600/900)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {t('missionTitle')}
          </h1>
        </div>
      </section>
      
      {/* Mission content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                {t('missionTitle')}
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed mb-6">
                {t('missionText')}
              </p>
              <p className="text-lg text-[#666666] leading-relaxed">
                At BHV Global, we are committed to excellence in every aspect of our distribution services. 
                We leverage our global network and industry expertise to connect manufacturers with markets 
                worldwide, ensuring seamless logistics and strategic partnerships that drive growth and success.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://picsum.photos/id/1049/800/600"
                alt="Our Mission"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Excellence</h3>
              <p className="text-[#666666]">
                We strive for excellence in all our operations, from logistics to customer service, 
                ensuring the highest quality standards in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Innovation</h3>
              <p className="text-[#666666]">
                We embrace innovative solutions and technologies to optimize distribution processes 
                and deliver exceptional value to our partners and clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Integrity</h3>
              <p className="text-[#666666]">
                We conduct our business with the highest level of integrity, transparency, and ethical 
                standards, building trust with all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
