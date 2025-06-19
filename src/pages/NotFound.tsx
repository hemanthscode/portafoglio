import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import { containerVariants } from '@/utils/animations';
import { TypographyVariant, Variant, Size } from '@/utils/types';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="main"
      aria-labelledby="not-found-title"
    >
      <Helmet>
        <title>404 - Page Not Found | Hemanth Sayimpu</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the homepage to explore Hemanth Sayimpu's portfolio." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Typography
        variant={TypographyVariant.H1}
        id="not-found-title"
        className="text-4xl sm:text-5xl font-bold text-text mb-4"
        role="heading"
        aria-level={1}
      >
        404 - Page Not Found
      </Typography>
      <Typography variant={TypographyVariant.P} className="text-lg text-accent mb-8 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        to="/"
        variant={Variant.Primary}
        size={Size.Medium}
        ariaLabel="Return to homepage"
        className="px-6 py-3"
      >
        Back to Home
      </Button>
    </motion.div>
  );
};

export default memo(NotFound);