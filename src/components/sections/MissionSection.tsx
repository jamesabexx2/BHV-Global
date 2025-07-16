'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elementsToAnimate = [
      section.querySelector('.mission-title'),
      section.querySelector('.mission-text'),
    ].filter(el => el !== null);

    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section 
      id="mission" 
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-xl mx-auto text-center">
            <h2 className="mission-title text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Mission
            </h2>
            <p className="mission-text text-lg" style={{ color: 'var(--text-secondary)' }}>
              At BHV Global, integrity is our signature. We are committed to cultivating trust through uncompromising honesty, refined communication, and a steadfast dedication to our partners. For us, excellence is measured not only in the products we deliver, but in the enduring relationships we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
