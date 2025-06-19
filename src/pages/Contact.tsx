import { memo } from 'react';
import { motion } from 'framer-motion';
import Contact from '@/components/organisms/Contact';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Hemanth Sayimpu</title>
        <meta
          name="description"
          content="Get in touch with Hemanth Sayimpu to collaborate on your next project."
        />
        <meta name="keywords" content="contact, developer, portfolio" />
        <meta property="og:title" content="Contact | Hemanth Sayimpu" />
        <meta
          property="og:description"
          content="Reach out to Hemanth Sayimpu for project discussions or opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/contact" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={`flex flex-col w-full min-h-[calc(100vh-4rem)] bg-background py-8 ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="contact-page-title"
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default memo(ContactPage);

/* Changes and Best Practices:
- Added Helmet for SEO meta tags.
- Used containerPadding and containerVariants from utils/.
- Accessibility: role="main" and aria-labelledby.
- Performance: Memoized component for minimal re-renders.
- Testing: Test Contact organism rendering and animations.
*/