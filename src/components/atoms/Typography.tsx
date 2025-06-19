import { memo } from 'react';
import { typographyStyles } from '@/utils/styles';
import { TypographyVariant, type TypographyProps } from '@/utils/types';

const Typography = ({
  children,
  variant = TypographyVariant.P,
  className = '',
  id,
  role,
  textColor, // New prop to allow parent-defined text color
}: TypographyProps & { textColor?: string }) => {
  const { component: Component, className: baseStyles } = typographyStyles[variant];

  // Remove text-text or text-accent from baseStyles if textColor is provided
  const filteredBaseStyles = textColor
    ? baseStyles.replace(/(text-text|text-accent)/g, '').trim()
    : baseStyles;

  return (
    <Component id={id} className={`${filteredBaseStyles} ${textColor || ''} ${className}`} role={role}>
      {children}
    </Component>
  );
};

export default memo(Typography);