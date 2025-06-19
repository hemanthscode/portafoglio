import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import SocialLink from '@/components/molecules/SocialLink';
import Typography from '@/components/atoms/Typography';
import { Github, Linkedin } from 'lucide-react';
import { isValidUrl } from '@/utils/helpers';
import { containerVariants } from '@/utils/animations';
import { footerStyles } from '@/utils/styles';
import { TypographyVariant } from '@/utils/types';
import clsx from 'clsx';

/**
 * A footer component displaying social links and copyright information.
 * @returns A centered footer with animated social links.
 */
const Footer = () => {
  const { footer } = usePortfolioStore();

  return (
    <motion.footer
      className={clsx(footerStyles.base, 'w-full')}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className={footerStyles.container}>
        <motion.div
          className={footerStyles.socialLinks}
          variants={containerVariants}
          role="list"
          aria-label="Social links"
        >
          {isValidUrl(footer.githubUrl) && (
            <SocialLink
              href={footer.githubUrl}
              icon={Github}
              ariaLabel="Visit my GitHub profile"
            />
          )}
          {isValidUrl(footer.linkedinUrl) && (
            <SocialLink
              href={footer.linkedinUrl}
              icon={Linkedin}
              ariaLabel="Visit my LinkedIn profile"
            />
          )}
        </motion.div>
        <Typography
          variant={TypographyVariant.Span}
          className="text-xs xs:text-sm text-accent"
        >
          {footer.copyright}
        </Typography>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);