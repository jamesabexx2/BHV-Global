import React from 'react';
import Image from 'next/image';

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Your Success Is Our Passion
          </h1>
        </div>
      </section>
      
      {/* Mission content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At BHV GLOBAL, we connect the world's most sought-after fashion brands with businesses that sell.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our mission is to provide seamless, reliable wholesale solutions — built on trust, efficiency, and deep industry insight.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                From logistics to sourcing, we do it all with style, purpose, and a relentless commitment to your growth.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Headquartered in the U.S., we serve clients across North America and select international markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
