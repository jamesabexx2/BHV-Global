'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShippingFast, FaBoxes, FaSearchDollar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface WhatWeDoSectionProps {
  t: (key: string) => string;
}

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const title = section.querySelector('h2');
    const serviceCards = section.querySelectorAll('.service-card');
    const closingText = section.querySelector('p.text-lg');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    if (title) {
      tl.from(title, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (serviceCards.length > 0) {
      tl.from(serviceCards, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
      }, '-=0.3');
    }

    if (closingText) {
      tl.from(closingText, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3');
    }

  }, []);

  const services = [
    {
      key: 'wholesale',
      icon: <FaBoxes className="w-12 h-12 mx-auto text-accent" />,
    },
    {
      key: 'sourcing',
      icon: <FaSearchDollar className="w-12 h-12 mx-auto text-accent" />,
    },
    {
      key: 'fulfillment',
      icon: <FaShippingFast className="w-12 h-12 mx-auto text-accent" />,
    },
  ];

  return (
    <section
      id="what-we-do"
      className="py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          {t('home.whatWeDo.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 my-12">
          {services.map((service) => (
            <div
              key={service.key}
              className="service-card p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-secondary">
                {t(`home.whatWeDo.services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`home.whatWeDo.services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          {t('home.whatWeDo.closing')}
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
