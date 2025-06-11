import { motion } from 'framer-motion';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@/components/atoms/Typography';
import { Mail, FileText } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import type { ContactProps } from '@/utils/types';

/**
 * Responsive Contact section component for contact information and actions.
 * @param {ContactProps} props - Component props.
 */
const Contact = ({
  title = 'Get in Touch',
  description = 'Interested in working together? Send me a message or request my resume.',
  email = 'your.email@example.com',
}: Partial<ContactProps>) => {
  const validatedProps: ContactProps = { title, description, email };

  return (
    <section
      className={`min-h-[calc(100vh-4rem)] w-full flex items-center justify-center section-gradient ${containerPadding} py-8 sm:py-12 lg:py-16`}
      role="region"
      aria-labelledby="contact-title"
    >
      <motion.div
        className="text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h2" id="contact-title" className="mb-4 sm:mb-6">
          {validatedProps.title}
        </Typography>
        <motion.div variants={itemVariants}>
          <Typography variant="p" className="max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {validatedProps.description}
          </Typography>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-md mx-auto"
          variants={itemVariants}
        >
          <a
            href={`mailto:${validatedProps.email}`}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto min-h-[44px]"
            aria-label="Send me an email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" aria-hidden="true" />
            Send Email
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 border-2 border-accent text-text font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 w-full sm:w-auto min-h-[44px]"
            aria-label="Request my resume"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" aria-hidden="true" />
            Request Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Contact);