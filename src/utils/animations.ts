import type { Variants } from 'framer-motion';

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
  tap: { scale: 0.9 },
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

// Apply prefers-reduced-motion for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  Object.keys(buttonVariants).forEach((key) => {
    buttonVariants[key] = { scale: 1, transition: { duration: 0 } };
  });
  Object.keys(cardVariants).forEach((key) => {
    if (key === 'hover' || key === 'tap') {
      cardVariants[key] = { scale: 1, y: 0, transition: { duration: 0 } };
    }
  });
  Object.keys(socialLinkVariants).forEach((key) => {
    socialLinkVariants[key] = { scale: 1, transition: { duration: 0 } };
  });
  Object.keys(heroCardVariants).forEach((key) => {
    if (key === 'hover' || key === 'tap') {
      heroCardVariants[key] = { scale: 1, y: 0, transition: { duration: 0 } };
    }
  });
}