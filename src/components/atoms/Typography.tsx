import { memo } from 'react';
import { typographyStyles } from '@/utils/styles';
import { TypographyVariant, type TypographyProps } from '@/utils/types';
import clsx from 'clsx';

/**
 * A typography component for consistent text styling across the application.
 * @param props - Typography properties including variant and accessibility attributes.
 * @returns A semantic HTML element with Tailwind-based styling.
 */
const Typography = ({ children, variant = TypographyVariant.P, className, id, role }: TypographyProps) => {
  const { component: Component, className: baseStyles } = typographyStyles[variant];

  return (
    <Component id={id} className={clsx(baseStyles, className)} role={role}>
      {children}
    </Component>
  );
};

export default memo(Typography);