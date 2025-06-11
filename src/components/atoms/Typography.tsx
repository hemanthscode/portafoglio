import { memo } from 'react';
import type { TypographyProps } from '@/utils/types';

/**
 * Reusable typography component with responsive font sizes and accessibility.
 * @param {TypographyProps} props - Component props.
 */
const Typography = ({ children, variant = 'p', className = '', id }: TypographyProps) => {
  const Tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : variant === 'span' ? 'span' : 'p';
  const baseStyles = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text tracking-tight',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text',
    h3: 'text-lg sm:text-xl md:text-2xl font-semibold text-text',
    p: 'text-sm sm:text-base md:text-lg text-accent leading-relaxed',
    span: 'text-xs sm:text-sm md:text-base text-accent',
  };

  return (
    <Tag className={`${baseStyles[variant]} ${className}`} id={id}>
      {children}
    </Tag>
  );
};

export default memo(Typography);