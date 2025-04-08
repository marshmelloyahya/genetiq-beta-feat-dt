
import { FC } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: FC = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    console.log(`Switching language from ${language} to ${newLang}`);
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.switcher}
      aria-label="Change language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;