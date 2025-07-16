'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShippingFast, FaBoxes, FaSearchDollar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoSection = () => {
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
      title: 'Wholesale Distribution',
      description: 'We provide a wide range of high-demand products at competitive wholesale prices, ensuring your inventory is always stocked with the best.',
      icon: <FaBoxes className="w-12 h-12 mx-auto text-accent" />,
    },
    {
      title: 'Product Sourcing',
      description: 'Leveraging our extensive network, we find and procure specific products tailored to your market needs, no matter how niche.',
      icon: <FaSearchDollar className="w-12 h-12 mx-auto text-accent" />,
    },
    {
      title: 'Logistics & Fulfillment',
      description: 'Our end-to-end logistics solutions handle everything from warehousing to shipping, ensuring timely and efficient delivery to your customers.',
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
          What We Do
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 my-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          We are dedicated to providing a seamless and efficient experience, helping your business thrive in a competitive global market.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
