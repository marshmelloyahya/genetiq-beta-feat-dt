
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n/i18n';

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
    // Set initial language
    i18n.changeLanguage(language);
    
    // Listen for language changes from other components
    const handleLanguageChanged = () => {
      const currentLang = i18n.language.startsWith('en') ? 'en' : 'fr';
      setLanguage(currentLang as LanguageType);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const handleChangeLanguage = (lang: LanguageType) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new Event('languageChanged'));
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