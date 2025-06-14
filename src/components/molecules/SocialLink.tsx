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
      className={`inline-flex items-center ${linkStyles}`}
    >
      <Icon icon={icon} className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
};

export default memo(SocialLink);