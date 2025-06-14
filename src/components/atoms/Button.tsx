import { motion } from 'framer-motion';
import { memo, type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { isValidUrl } from '@/utils/helpers';
import { buttonVariants } from '@/utils/animations';
import { buttonStyles } from '@/utils/styles';
import { Size, type ButtonProps, Variant } from '@/utils/types';
import type { MotionProps } from 'framer-motion';

const Button = ({
  children,
  href,
  to,
  variant = Variant.Primary,
  size = Size.Medium,
  className = '',
  ariaLabel,
  as: ComponentOverride,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseStyles = `${buttonStyles.base} transition-colors duration-200 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto`;
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm touch-action-manipulation',
    md: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base touch-action-manipulation',
    lg: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg touch-action-manipulation',
  };

  const Component = ComponentOverride
    ? motion<ComponentType<any>>(ComponentOverride as any)
    : to
    ? motion(Link)
    : href && isValidUrl(href)
    ? motion.a
    : motion.button;

  const props: MotionProps & {
    href?: string;
    to?: string;
    type?: 'button';
    onClick?: () => void;
    disabled?: boolean;
    className: string;
    'aria-label'?: string;
  } = {
    ...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}),
    ...(to ? { to } : {}),
    ...(!href && !to ? { type: 'button', onClick } : {}),
    disabled,
    className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`,
    'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
    variants: buttonVariants,
    whileHover: disabled ? undefined : 'hover',
    whileTap: disabled ? undefined : 'tap',
  };

  return <Component {...props}>{children}</Component>;
};

export default memo(Button);