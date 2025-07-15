'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  t: (key: string) => string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--secondary)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>{t('contactPage.formHeading')}</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t('nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', outline: 'none', 'outlineOffset': '0', 'boxShadow': 'none', 'borderColor': 'transparent', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
                  placeholder={t('contactPage.formNamePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t('emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', outline: 'none', 'outlineOffset': '0', 'boxShadow': 'none', 'borderColor': 'transparent', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
                  placeholder={t('contactPage.formEmailPlaceholder')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t('contactPage.formSubjectLabel')}</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', outline: 'none', 'outlineOffset': '0', 'boxShadow': 'none', 'borderColor': 'transparent', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
                placeholder={t('contactPage.formSubjectPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t('messageLabel')}</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', outline: 'none', 'outlineOffset': '0', 'boxShadow': 'none', 'borderColor': 'transparent', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
                placeholder={t('contactPage.formMessagePlaceholder')}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block text-white py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
              >
                {t('contactPage.formSendButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
