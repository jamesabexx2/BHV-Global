'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  title: string;
  subtitle: string;
  showLogo?: boolean;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, showLogo = false, children }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const titleEl = section.querySelector('h1');
    const subtitleEl = section.querySelector('h2');
    const btnEl = section.querySelector('a');
    const elems = [titleEl, subtitleEl, btnEl].filter(Boolean) as HTMLElement[];
    gsap.from(elems, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28" style={{ backgroundColor: 'var(--secondary)' }}>


      
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
