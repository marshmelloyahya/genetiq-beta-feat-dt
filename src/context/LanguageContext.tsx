import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n/i18n';
import { changeLanguage as i18nChangeLanguage } from '../i18n/i18n';

type LanguageType = 'en' | 'fr';

interface LanguageContextProps {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageType) || 'en';
  });

  useEffect(() => {
    // Set initial language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      // If no saved language, use the current i18n language or default to 'en'
      const currentLang = i18n.language.substring(0, 2) === 'fr' ? 'fr' : 'en';
      setLanguage(currentLang as LanguageType);
    }

    // Listen for language changes from i18n
    const handleLanguageChanged = (lng: string) => {
      const currentLang = lng.substring(0, 2) === 'fr' ? 'fr' : 'en';
      setLanguage(currentLang as LanguageType);
      document.documentElement.lang = currentLang;
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const handleChangeLanguage = (lang: LanguageType) => {
    // Use the exported changeLanguage function which handles localStorage
    i18nChangeLanguage(lang).then(() => {
      setLanguage(lang);
    });
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage: handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};