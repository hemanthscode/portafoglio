import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import SocialLink from '@/components/molecules/SocialLink';
import Typography from '@/components/atoms/Typography';
import { Github, Linkedin } from 'lucide-react';
import { isValidUrl } from '@/utils/helpers';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant } from '@/utils/types';

const Footer = () => {
  const { footer } = usePortfolioStore();

  return (
    <motion.footer
      className={`w-full bg-background py-4 sm:py-6 lg:py-8 ${containerPadding}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-2 sm:mb-4"
          variants={containerVariants}
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
        <Typography variant={TypographyVariant.Span} className="text-xs sm:text-sm lg:text-base">
          {footer.copyright}
        </Typography>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);

/* Changes and Best Practices:
- Sourced data from usePortfolioStore and used isValidUrl for link validation.
- Used containerPadding, containerVariants from utils/.
- Accessibility: role="contentinfo" and aria-label.
- Performance: Memoized component and conditional rendering for social links.
- Testing: Test social link rendering, URL validation, and accessibility.
- Security: Safe external links with isValidUrl.
*/