import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showLogo?: boolean;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, backgroundImage, showLogo = false, children }: HeroProps) => {
  return (
    <section className="relative w-full h-[400px]">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-6 drop-shadow-md">
            {subtitle}
          </h2>
          {children}
        </div>
        {showLogo && (
            <div className="mb-6">
              <Image 
                src="/bhvlogo.jpg" 
                alt="BHV Global Logo" 
                width={180} 
                height={80} 
                className="mx-auto object-contain"
              />
            </div>
          )}
      </div>
    </section>
  );
};

export default Hero;
