import { memo } from 'react';
import type { IconProps } from '@/utils/types';

/**
 * A reusable icon component for rendering Lucide icons with accessibility support.
 * @param props - Icon properties including the icon component and ARIA attributes.
 * @returns An accessible icon with customizable styling.
 */
const Icon = ({ icon: IconComponent, className, ariaHidden = true, ariaLabel }: IconProps) => {
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