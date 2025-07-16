'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elementsToAnimate = [
      section.querySelector('.contact-title'),
      section.querySelector('.contact-description'),
      ...Array.from(section.querySelectorAll('form > div')),
    ].filter(Boolean);

    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="contact-title text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Get in Touch
          </h2>
          <p className="contact-description text-lg mt-4" style={{ color: 'var(--text-secondary)' }}>
            Have a question or want to work together? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--background)' }}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-300"
                  style={{ backgroundColor: 'var(--background-alt)', color: 'var(--text-primary)' }}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-300"
                  style={{ backgroundColor: 'var(--background-alt)', color: 'var(--text-primary)' }}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-300"
                style={{ backgroundColor: 'var(--background-alt)', color: 'var(--text-primary)' }}
                placeholder="What can we help you with?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-300"
                style={{ backgroundColor: 'var(--background-alt)', color: 'var(--text-primary)' }}
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block text-white py-3 px-10 rounded-lg text-lg font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
