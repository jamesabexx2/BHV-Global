import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  showLogo?: boolean;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, showLogo = false, children }: HeroProps) => {
  return (
    <section className="w-full py-20 md:py-28" style={{ backgroundColor: 'var(--secondary)' }}>


      
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
