import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/atoms/Icon';
import { socialLinkVariants } from '@/utils/animations';
import { linkStyles } from '@/utils/styles';
import type { SocialLinkProps } from '@/utils/types';

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      variants={socialLinkVariants}
      whileHover="hover"
      whileTap="tap"
      className={`${linkStyles} inline-flex items-center p-2 rounded-full hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary`}
    >
      <Icon icon={icon} className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
};

export default memo(SocialLink);

/* Changes and Best Practices:
- Used linkStyles, socialLinkVariants, and SocialLinkProps from utils/.
- Accessibility: aria-label and focus-visible:ring for keyboard navigation.
- Performance: Memoized component for minimal re-renders.
- Security: target="_blank" with rel="noopener noreferrer".
- Testing: Test hover/tap animations, link navigation, and accessibility.
*/