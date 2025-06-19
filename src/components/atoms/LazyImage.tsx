import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import type { LazyImageProps } from '@/utils/types';

const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`} role="img" aria-label={alt}>
      {(!isLoaded || hasError) && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"
          aria-hidden="true"
        />
      )}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded && !hasError ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default memo(LazyImage);

/* Changes and Best Practices:
- Used LazyImageProps from types.ts.
- Optimized for LCP with lazy loading and responsive sizes.
- Accessibility: role="img" and aria-label for screen readers.
- Performance: Memoized and uses Framer Motion for smooth fade-in.
- Testing: Test loading/error states and animation transitions.
*/