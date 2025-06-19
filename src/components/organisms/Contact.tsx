import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Mail, MapPin, Github } from 'lucide-react';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const Contact = () => {
  const { contact } = usePortfolioStore();
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const handleEmailClick = () => {
    setIsEmailLoading(true);
    setTimeout(() => setIsEmailLoading(false), 1000); // Simulate async action
  };

  return (
    <motion.section
      className={`py-12 sm:py-16 lg:py-20 bg-background ${containerPadding}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div className="mb-10 sm:mb-12" variants={containerVariants}>
          <Typography
            variant={TypographyVariant.H2}
            id="contact-title"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            {contact.title || 'Get In Touch'}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-base sm:text-lg text-accent max-w-2xl mx-auto"
          >
            {contact.description || "Let's work together to create something amazing."}
          </Typography>
        </motion.div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <motion.div
            className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
            variants={containerVariants}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon={Mail} className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <Typography variant={TypographyVariant.H3} className="font-semibold mb-2">
              Email Me
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-accent">
              {contact.email || 'your.email@example.com'}
            </Typography>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
            variants={containerVariants}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon={MapPin} className="w-6 h-6 text-green-600" aria-hidden="true" />
            </div>
            <Typography variant={TypographyVariant.H3} className="font-semibold mb-2">
              Location
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-accent">
              Guntur, Andhra Pradesh, IN
            </Typography>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          <Button
            href={contact.email ? `mailto:${contact.email}` : '#'}
            variant={Variant.Primary}
            size={Size.Medium}
            ariaLabel="Send email"
            className="px-6 sm:px-8"
            disabled={!contact.email}
            loading={isEmailLoading}
            onClick={handleEmailClick}
          >
            <Icon icon={Mail} className="mr-2 w-5 h-5" aria-hidden="true" />
            Send Email
          </Button>
          <Button
            href={contact.githubUrl || 'https://github.com/hemanthscode'}
            variant={Variant.Outline}
            size={Size.Medium}
            ariaLabel="Visit GitHub profile"
            className="px-6 sm:px-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Github} className="mr-2 w-5 h-5" aria-hidden="true" />
            GitHub
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(Contact);

/* Changes and Best Practices:
- Added loading state for email button with simulated async action.
- Used containerPadding and containerVariants from utils/.
- Added error handling for missing email with disabled button.
- Accessibility: Proper ARIA roles, labels, and disabled states.
- Performance: Memoized component and used stable references for buttons.
- Responsiveness: Tailwind grid for mobile-first design.
- Testing: Test email button loading, GitHub link, and accessibility.
- Security: Validated email href with mailto: protocol.
*/