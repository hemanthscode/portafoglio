import { memo } from 'react';
import type { IconProps } from '@/utils/types';

// Enhanced with stricter prop types and default aria-hidden
const Icon = ({ icon: IconComponent, className, ariaHidden = true, ariaLabel }: IconProps) => {
  if (!IconComponent) {
    console.warn('Icon component requires a valid Lucide icon');
    return null;
  }

  return (
    <IconComponent
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaHidden ? undefined : 'img'}
      focusable={false}
    />
  );
};

export default memo(Icon);