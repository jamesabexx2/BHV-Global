import React from 'react';
import Image from 'next/image';

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[400px]">
  <Image
    src="/images/hero/our-mission.jpeg"
    alt="Our Mission"
    layout="fill"
    objectFit="cover"
    quality={100}
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
  <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Our Mission
      </h1>
      <p className="text-xl text-white">
        Empowering retailers with premium wholesale fashion
      </p>
    </div>
  </div>
</div>
      
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
