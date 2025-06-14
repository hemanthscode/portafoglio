import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import SocialLink from '@/components/molecules/SocialLink';
import Typography from '@/components/atoms/Typography';
import { Github, Linkedin } from 'lucide-react';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant } from '@/utils/types';

const Footer = () => {
  const { footer } = usePortfolioStore();

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
            href={footer.githubUrl}
            icon={Github}
            ariaLabel="Visit my GitHub profile"
          />
          <SocialLink
            href={footer.linkedinUrl}
            icon={Linkedin}
            ariaLabel="Visit my LinkedIn profile"
          />
        </div>
        <Typography
          variant={TypographyVariant.Span}
          className="text-xs sm:text-sm lg:text-base"
        >
          {footer.copyright}
        </Typography>
      </motion.div>
    </footer>
  );
};

export default memo(Footer);