import type { Variants } from "framer-motion";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const disableAnimations: Variants = {
  hover: { scale: 1, y: 0, transition: { duration: 0 } },
  tap: { scale: 1, transition: { duration: 0 } },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export const menuVariants: Variants = {
  closed: { opacity: 0, x: "-100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
};

export const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
  disabled: { opacity: 0.5 },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export const socialLinkVariants: Variants = {
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

export const heroCardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const badgeVariants: Variants = {
  hover: {
    backgroundColor: "rgba(229, 231, 235, 0.8)",
    transition: { duration: 0.2 },
  },
};

export const detailVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
};

if (prefersReducedMotion) {
  const variants: Variants[] = [
    buttonVariants,
    cardVariants,
    socialLinkVariants,
    heroCardVariants,
    detailVariants,
    menuVariants,
    badgeVariants,
  ];
  variants.forEach((variant) => Object.assign(variant, disableAnimations));
}
