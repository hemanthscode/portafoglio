import { memo } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      aria-live="polite"
      aria-busy="true"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="h-12 w-12 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full"
        role="status"
        aria-label="Loading content"
      />
    </div>
  );
};

export default memo(LoadingSpinner);