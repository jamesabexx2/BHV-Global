'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DynamicLangUpdater = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null; // This component does not render anything visible
};

export default DynamicLangUpdater;
