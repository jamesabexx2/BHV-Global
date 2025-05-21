'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/features/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1071/1600/900)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {t('contactTitle')}
          </h1>
        </div>
      </section>
      
      {/* Contact info and form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-[#4169E1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                    <p className="text-[#666666]">
                      123 Global Avenue, Suite 500<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-[#4169E1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-[#666666]">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-[#4169E1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-[#666666]">
                      contact@bhvglobal.com<br />
                      info@bhvglobal.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-[#4169E1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-[#666666]">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                {t('contactSubtitle')}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Our Locations
          </h2>
          <div className="relative h-[400px] w-full bg-gray-200 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[#666666]">Map placeholder - would integrate Google Maps or similar here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
