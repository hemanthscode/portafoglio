import { useContext, memo } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full text-foreground hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {theme === 'light' ? (
        <Moon size={20} aria-hidden="true" />
      ) : (
        <Sun size={20} aria-hidden="true" />
      )}
    </motion.button>
  );
};

export default memo(ThemeToggle);