import { memo, type ComponentType } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';
import { isValidUrl } from '@/utils/helpers';
import { buttonVariants } from '@/utils/animations';
import { buttonStyles } from '@/utils/styles';
import { Size, Variant, type ButtonProps } from '@/utils/types';

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
  loading = false,
  onClick,
  target,
  rel,
  icon,
}: ButtonProps) => {
  const combinedStyles = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ].filter(Boolean).join(' ');

  const Component = ComponentOverride
    ? motion<ComponentType<any>>(ComponentOverride as any)
    : to
    ? motion(Link)
    : href && isValidUrl(href)
    ? motion.a
    : motion.button;

  const motionProps: MotionProps & {
    href?: string;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    className: string;
    'aria-label'?: string;
    'aria-disabled'?: boolean;
    target?: string;
    rel?: string;
  } = {
    ...(href && isValidUrl(href) ? { href, target: target || '_blank', rel: rel || 'noopener noreferrer' } : {}),
    ...(to ? { to } : {}),
    ...(!href && !to ? { type: 'button', onClick } : {}),
    disabled: disabled || loading,
    className: combinedStyles,
    'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
    'aria-disabled': disabled || loading,
    variants: buttonVariants,
    whileHover: disabled || loading ? undefined : 'hover',
    whileTap: disabled || loading ? undefined : 'tap',
  };

  return (
    <Component {...motionProps}>
      {loading && (
        <span className="mr-2 animate-spin" aria-hidden="true">
          ⌀
        </span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
};

export default memo(Button);

/* Changes and Best Practices:
- Ensured buttonStyles and buttonVariants are sourced from utils/.
- Used isValidUrl from helpers.ts for href validation.
- Accessibility: aria-label fallback and aria-disabled for disabled/loading states.
- Performance: Memoized component to prevent unnecessary re-renders.
- Responsiveness: touch-action-manipulation in buttonStyles.sizes ensures mobile performance.
- Testing: Test click handlers, disabled/loading states, and accessibility.
*/