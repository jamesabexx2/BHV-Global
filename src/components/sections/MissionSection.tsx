'use client';

import React from 'react';

interface MissionSectionProps {
  t: (key: string) => string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ t }) => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('missionTitle')}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                {t('missionText')}
              </p>
              
              <h3 className="text-2xl font-semibold mt-10 mb-4">
                {t('missionPage.ourValuesTitle')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {['premiumQuality', 'globalReach', 'customerFocus', 'industryExpertise'].map((value) => (
                  <div key={value} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold mb-3 text-blue-800">
                      {t(`missionPage.values.${value}.title`)}
                    </h4>
                    <p className="text-gray-700">
                      {t(`missionPage.values.${value}.description`)}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {t('missionPage.joinUs.title')}
                </h3>
                <p className="text-blue-900 mb-6">
                  {t('missionPage.joinUs.description')}
                </p>
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
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
