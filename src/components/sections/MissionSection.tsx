'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MissionSectionProps {
  t: (key: string) => string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elementsToAnimate = [
      section.querySelector('.mission-title'),
      section.querySelector('.mission-text'),
      section.querySelector('.values-title'),
      ...section.querySelectorAll('.value-card'),
      section.querySelector('.join-us-title'),
      section.querySelector('.join-us-description'),
      section.querySelector('.join-us-button'),
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
              {t('missionTitle')}
            </h2>
            
            <p className="mission-text text-lg mb-16" style={{ color: 'var(--text-secondary)' }}>
              {t('missionText')}
            </p>
            
            <h3 className="values-title text-2xl md:text-3xl font-semibold mt-12 mb-8" style={{ color: 'var(--text-primary)' }}>
              {t('missionPage.ourValuesTitle')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
              {['premiumQuality', 'globalReach', 'customerFocus', 'industryExpertise'].map((value) => (
                <div key={value} className="value-card p-6 rounded-lg transition-shadow duration-300 hover:shadow-xl" style={{ backgroundColor: 'var(--secondary)' }}>
                  <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {t(`missionPage.values.${value}.title`)}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t(`missionPage.values.${value}.description`)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-20">
              <h3 className="join-us-title text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('missionPage.joinUs.title')}
              </h3>
              <p className="join-us-description mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                {t('missionPage.joinUs.description')}
              </p>
              <a 
                href="#contact" 
                className="join-us-button inline-block text-white py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
              >
                {t('missionPage.joinUs.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
