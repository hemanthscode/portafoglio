import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { isValidUrl } from '@/utils/helpers';
import { buttonVariants } from '@/utils/animations';
import { buttonStyles } from '@/utils/styles';
import { Size, Variant, type ButtonProps } from '@/utils/types';

// Enhanced with stricter prop validation and role for custom components
const Button = ({
  children,
  href,
  to,
  variant = Variant.Primary,
  size = Size.Medium,
  className,
  ariaLabel,
  as: ComponentOverride,
  disabled = false,
  loading = false,
  onClick,
  target,
  rel,
  icon,
}: ButtonProps) => {
  // Ensure children is defined to prevent empty buttons
  if (!children) {
    console.warn('Button component requires children');
    return null;
  }

  const classes = clsx(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    className,
  );

  const commonProps = {
    className: classes,
    'aria-label': ariaLabel,
    'aria-disabled': disabled || loading,
    variants: buttonVariants,
    whileHover: disabled || loading ? undefined : 'hover',
    whileTap: disabled || loading ? undefined : 'tap',
    role: ComponentOverride ? 'button' : undefined, // Added for custom components
  };

  const renderContent = () => (
    <>
      {loading && (
        <span
          className={clsx(
            'mr-2 animate-spin inline-block border-2 border-current border-t-transparent rounded-full',
            buttonStyles.spinnerSizes[size],
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (ComponentOverride) {
    const MotionComponent = motion(ComponentOverride);
    return <MotionComponent {...commonProps} onClick={onClick}>{renderContent()}</MotionComponent>;
  }

  if (to && isValidUrl(to)) {
    const MotionLink = motion(Link);
    return (
      <MotionLink {...commonProps} to={to}>
        {renderContent()}
      </MotionLink>
    );
  }

  if (href && isValidUrl(href)) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <motion.a
        {...commonProps}
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={isExternal ? rel || 'noopener noreferrer' : rel}
        onClick={onClick}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...commonProps}
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </motion.button>
  );
};

export default memo(Button);