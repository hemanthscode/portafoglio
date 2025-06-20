import { memo, useState } from "react";
import { motion } from "framer-motion";
import type { LazyImageProps } from "@/utils/types";

// Enhanced with error boundary and better placeholder handling
const LazyImage = ({
  src,
  alt,
  className,
  sizes = "100vw",
  placeholder = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!src || !alt) {
    console.warn("LazyImage requires src and alt props");
    return null;
  }

  return (
    <div className={className} role="img" aria-label={alt}>
      {(!isLoaded || hasError) && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
          }}
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
          decoding="async" // Added for performance
        />
      )}
    </div>
  );
};

export default memo(LazyImage);
