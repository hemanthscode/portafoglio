import { motion } from 'framer-motion';
import { memo } from 'react';
import SocialLink from '@/components/molecules/SocialLink';
import Typography from '@/components/atoms/Typography';
import { Github, Linkedin } from 'lucide-react';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import type { FooterProps } from '@/utils/types';

/**
 * Responsive Footer component for social links and copyright.
 * @param {FooterProps} props - Component props.
 */
const Footer = ({
  githubUrl = 'https://github.com',
  linkedinUrl = 'https://linkedin.com',
  copyright = `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
}: Partial<FooterProps>) => {
  const validatedProps: FooterProps = { githubUrl, linkedinUrl, copyright };

  return (
    <footer
      className={`w-full bg-background py-4 sm:py-6 lg:py-8 ${containerPadding}`}
      role="contentinfo"
      aria-label="Footer"
    >
      <motion.div
        className="text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-2 sm:mb-4">
          <SocialLink
            href={validatedProps.githubUrl}
            icon={Github}
            ariaLabel="Visit my GitHub profile"
          />
          <SocialLink
            href={validatedProps.linkedinUrl}
            icon={Linkedin}
            ariaLabel="Visit my LinkedIn profile"
          />
        </div>
        <Typography variant="span" className="text-xs sm:text-sm lg:text-base">
          {validatedProps.copyright}
        </Typography>
      </motion.div>
    </footer>
  );
};

export default memo(Footer);