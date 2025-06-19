import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import type { LazyImageProps } from '@/utils/types';

/**
 * A lazy-loaded image component with placeholder and error handling.
 * @param props - Image properties including source, alt text, and sizes.
 * @returns A motion-enabled image with fade-in animation and fallback placeholder.
 */
const LazyImage = ({
  src,
  alt,
  className,
  sizes = '100vw',
  placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={className} role="img" aria-label={alt}>
      {(!isLoaded || hasError) && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"
          style={{ backgroundImage: `url(${placeholder})` }}
          aria-hidden="true"
        />
      )}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
          sizes={sizes}
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