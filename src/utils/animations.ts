import type { Variants } from 'framer-motion';

// Core animation variants for consistent transitions
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const menuVariants: Variants = {
  closed: { opacity: 0, x: '-100%' },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
  disabled: { opacity: 0.5 },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
};

export const socialLinkVariants: Variants = {
  hover: {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 }, // Fixed tap scale to be less aggressive
};

export const heroCardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const badgeVariants: Variants = {
  hover: {
    backgroundColor: '#E5E7EB',
    transition: { duration: 0.2 },
  },
};

export const detailVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

// Respect prefers-reduced-motion for accessibility
if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const variants = [buttonVariants, cardVariants, socialLinkVariants, heroCardVariants, detailVariants];
  variants.forEach((variant) => {
    Object.keys(variant).forEach((key) => {
      if (key === 'hover' || key === 'tap') {
        variant[key] = { scale: 1, y: 0, transition: { duration: 0 } };
      }
    });
  });
}

/* Changes and Best Practices:
- Fixed socialLinkVariants tap scale to 0.95 for consistency with other components.
- Simplified prefers-reduced-motion logic by looping over variants array.
- Ensured all variants are typed with Variants from framer-motion.
- Accessibility: Respects prefers-reduced-motion to disable animations for users who prefer minimal motion.
- Performance: Lightweight variants with optimized transition durations.
- Testing: Verify each variant’s transition properties and prefers-reduced-motion behavior.
*/