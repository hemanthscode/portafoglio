import { motion } from 'framer-motion';
import { memo } from 'react';
import Icon from '@/components/atoms/Icon';
import { isValidUrl } from '@/utils/helpers';
import { socialLinkVariants } from '@/utils/animations';
import type { SocialLinkProps } from '@/utils/types';

/**
 * Responsive social link component for rendering social media icons with links.
 * @param {SocialLinkProps} props - Component props.
 */
const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => {
  if (!isValidUrl(href)) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-primary transition-colors duration-200 p-1 sm:p-2"
      aria-label={ariaLabel}
      variants={socialLinkVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <Icon icon={icon} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" ariaHidden={false} />
    </motion.a>
  );
};

export default memo(SocialLink);