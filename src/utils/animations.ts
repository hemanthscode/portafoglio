import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const menuVariants: Variants = {
  closed: { opacity: 0, x: '-100%' },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

export const buttonVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const cardVariants: Variants = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

export const socialLinkVariants: Variants = {
  hover: { scale: 1.2 },
  tap: { scale: 0.9 },
};