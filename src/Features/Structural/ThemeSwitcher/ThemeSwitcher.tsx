
import { FC } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.switcher}
      aria-label="Change theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;