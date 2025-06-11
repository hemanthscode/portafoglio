import { memo } from 'react';
import type { IconProps } from '@/utils/types';

/**
 * Reusable icon component for rendering Lucide icons with responsive sizing.
 * @param {IconProps} props - Component props.
 */
const Icon = ({ icon: IconComponent, className = '', ariaHidden = true }: IconProps) => {
  if (!IconComponent) return null;
  return <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${className}`} aria-hidden={ariaHidden} />;
};

export default memo(Icon);