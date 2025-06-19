import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/atoms/Icon';
import { socialLinkVariants } from '@/utils/animations';
import { socialLinkStyles } from '@/utils/styles';
import {type SocialLinkProps } from '@/utils/types';
import clsx from 'clsx';


/**
 * A social link component for rendering external links with icons and animations.
 * @param props - Social link properties including href, icon, and ARIA attributes.
 * @returns A motion-enabled link with accessible icon and hover effects.
 */
const SocialLink = ({ href, icon, ariaLabel, className = '' }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      variants={socialLinkVariants}
      whileHover="hover"
      whileTap="tap"
      className={clsx(socialLinkStyles.base, className)}
    >
      <Icon icon={icon} className={socialLinkStyles.icon} aria-hidden="true" />
    </motion.a>
  );
};

export default memo(SocialLink);