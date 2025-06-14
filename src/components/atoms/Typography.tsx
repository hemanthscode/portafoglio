import { memo } from 'react';
import type { TypographyProps } from '@/utils/types';
import { TypographyVariant } from '@/utils/types';

const variantMap: Record<TypographyVariant, string> = {
  h1: 'h1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'h2 text-3xl sm:text-4xl font-bold tracking-tight',
  h3: 'h3 text-2xl sm:text-3xl font-semibold tracking-tight',
  p: 'p text-base sm:text-lg leading-relaxed',
  span: 'span text-base',
};

const Typography = ({
  children,
  variant = TypographyVariant.P,
  className = '',
  id,
}: TypographyProps) => {
  const Component = variantMap[variant].split(' ')[0] as keyof JSX.IntrinsicElements;
  const styles = variantMap[variant].replace(Component, '').trim();

  return (
    <Component id={id} className={`${styles} text-text ${className}`}>
      {children}
    </Component>
  );
};

export default memo(Typography);