'use client';

import React from 'react';

interface MissionSectionProps {
  t: (key: string) => string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ t }) => {
  return (
    <section id="mission" className="py-16 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
              {t('missionTitle')}
            </h2>
            
            <div className="space-y-6" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-lg">
                {t('missionText')}
              </p>
              
              <h3 className="text-2xl md:text-3xl font-semibold mt-12 mb-6" style={{ color: 'var(--text-primary)' }}>
                {t('missionPage.ourValuesTitle')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {['premiumQuality', 'globalReach', 'customerFocus', 'industryExpertise'].map((value) => (
                  <div key={value} className="p-6 rounded-lg transition-shadow duration-300 hover:shadow-xl" style={{ backgroundColor: 'var(--secondary)' }}>
                    <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {t(`missionPage.values.${value}.title`)}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {t(`missionPage.values.${value}.description`)}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {t('missionPage.joinUs.title')}
                </h3>
                <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  {t('missionPage.joinUs.description')}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block text-white py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--text-on-accent)' }}
                >
                  {t('missionPage.joinUs.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
