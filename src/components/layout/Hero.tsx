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
    <section className="relative w-full min-h-[500px] md:min-h-[550px] flex flex-col justify-center">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 z-10"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-20 flex flex-col items-center justify-center">
        {showLogo && (
          <div className="mb-6 bg-white/90 p-3 rounded-lg shadow-md">
            <Image 
              src="/bhvlogo.jpg" 
              alt="BHV Global Logo" 
              width={150} 
              height={70} 
              className="object-contain"
            />
          </div>
        )}
        
        <div className="text-center mt-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg px-2">
            {title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6 drop-shadow-md px-2">
            {subtitle}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
