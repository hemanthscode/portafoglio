import { memo } from 'react';
import type { IconProps } from '@/utils/types';

const Icon = ({ icon: IconComponent, className = '', ariaHidden = true }: IconProps) => {
  return (
    <IconComponent
      className={`text-current ${className}`}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : 'img'}
      focusable={false}
    />
  );
};

export default memo(Icon);

/* Changes and Best Practices:
- Used IconProps from types.ts for type safety.
- Maintained focusable={false} for decorative icons.
- Accessibility: Configurable aria-hidden for decorative vs. meaningful icons.
- Performance: Memoized to prevent re-renders unless props change.
- Testing: Verify className application and ARIA attributes.
*/