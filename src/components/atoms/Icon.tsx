import { memo } from 'react';
import type { IconProps } from '@/utils/types';

const Icon = ({ icon: IconComponent, className = '', ariaHidden = true }: IconProps) => {
  return (
    <IconComponent
      className={`text-current ${className}`}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : 'img'}
    />
  );
};

export default memo(Icon);