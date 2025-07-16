'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UngatingSectionProps {
  t: (key: string) => string;
}

const UngatingSection: React.FC<UngatingSectionProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const title = section.querySelector('h2');
    const description = section.querySelector('p.text-gray-700');
    const cards = section.querySelectorAll('.ungating-card');
    const ctaBox = section.querySelector('.ungating-cta');
    const button = section.querySelector('.ungating-button');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
    if (title) tl.from(title, { opacity: 0, y: 50, duration: 0.6, ease: 'power3.out' });
    if (description) tl.from(description, { opacity: 0, y: 50, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    if (cards.length) tl.from(cards, { opacity: 0, y: 50, duration: 0.5, stagger: 0.2, ease: 'power3.out' }, '-=0.4');
    if (ctaBox) tl.from(ctaBox, { opacity: 0, y: 50, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.03, duration: 0.3 }));
      card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1, duration: 0.3 }));
    });
    if (button) {
      button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.02, duration: 0.2 }));
      button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.2 }));
    }
  }, []);

  return (
    <section id="ungating" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t('ungatingPage.section1.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            {t('ungatingPage.section1.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg ungating-card">
              <h3 className="text-xl font-semibold mb-4">
                {t('ungatingPage.benefits.title')}
              </h3>
              <ul className="space-y-3">
                {['benefit1', 'benefit2', 'benefit3'].map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`ungatingPage.benefits.${benefit}`)}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg ungating-card">
              <h3 className="text-xl font-semibold mb-4">
                {t('ungatingPage.howItWorks.title')}
              </h3>
              <ol className="space-y-3 list-decimal list-inside">
                {['step1', 'step2', 'step3'].map((step) => (
                  <li key={step} className="text-gray-700">
                    <span className="text-gray-900 font-medium">
                      {t(`ungatingPage.howItWorks.${step}`)}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center ungating-cta">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              {t('ungatingPage.cta.title')}
            </h3>
            <p className="text-blue-700 mb-6">
              {t('ungatingPage.cta.description')}
            </p>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors ungating-button">
              {t('ungatingPage.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UngatingSection;
