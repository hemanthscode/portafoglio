import { motion } from 'framer-motion';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { isValidUrl } from '@/utils/helpers';
import { buttonVariants } from '@/utils/animations';
import type { ButtonProps } from '@/utils/types';

/**
 * Reusable button component with responsive variants, sizes, and accessibility.
 * @param {ButtonProps} props - Component props.
 */
const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  as: ComponentOverride,
  to,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    md: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
    lg: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
  };

  const Component = ComponentOverride
    ? motion.create(ComponentOverride)
    : to
    ? motion.create(Link)
    : href && isValidUrl(href)
    ? motion.create('a')
    : motion.create('button');

  const props = href
    ? { href, target: '_blank', rel: 'noopener noreferrer', role: 'link' }
    : to
    ? { to }
    : { type: 'button' as const, onClick };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      aria-label={ariaLabel}
      variants={buttonVariants}
      whileHover={disabled ? undefined : 'hover'}
      whileTap={disabled ? undefined : 'tap'}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

export default memo(Button);