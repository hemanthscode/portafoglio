import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { Github, ArrowRight, Code2 } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { defaultHeroProps } from '@/utils/config';
import type { HeroProps } from '@/utils/types';

/**
 * Responsive Hero section component with animated geometric patterns.
 * @param {HeroProps} props - Component props.
 */
const HeroGeometric = ({
  name = defaultHeroProps.name,
  headline = defaultHeroProps.headline,
  subheadline = defaultHeroProps.subheadline,
  githubUrl = defaultHeroProps.githubUrl,
  ctaText = defaultHeroProps.ctaText,
  ctaLink = defaultHeroProps.ctaLink,
  logo,
}: Partial<HeroProps>) => {
  const validatedProps: HeroProps = { name, headline, subheadline, githubUrl, ctaText, ctaLink, logo };
  const nameParts = useMemo(() => validatedProps.name.split(' '), [validatedProps.name]);

  return (
    <section
      className={`min-h-[calc(100vh-4rem)] w-full flex items-center justify-center hero-bg ${containerPadding} py-8 sm:py-12 lg:py-16`}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {logo && (
            <motion.div variants={itemVariants} className="mb-2 sm:mb-4">
              <div className="w-20 h-auto sm:w-24 lg:w-32">{logo}</div>
            </motion.div>
          )}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
                </div>
                <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-primary to-transparent"></div>
              </div>
              <Typography variant="span" className="text-xs sm:text-sm lg:text-base font-semibold text-primary uppercase tracking-widest">
                Developer &  Explorer
              </Typography>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter"
            >
              {nameParts.map((part, index) => (
                <span key={index} className="block">
                  {part}
                  {index === 0 && <span className="text-primary">.dev</span>}
                </span>
              ))}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" className="mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-xl">
              {validatedProps.headline}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="p" className="mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-xl">
              {validatedProps.subheadline}
            </Typography>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row gap-2 sm:gap-4" variants={itemVariants}>
            <Button
              to={validatedProps.ctaLink}
              variant="primary"
              size="lg"
              ariaLabel={validatedProps.ctaText}
              className="w-full sm:w-auto"
            >
              {validatedProps.ctaText}
              <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Button>
            <Button
              href={validatedProps.githubUrl}
              variant="outline"
              size="lg"
              ariaLabel="Visit my GitHub profile"
              className="w-full sm:w-auto"
            >
              <Github className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              GitHub
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:block relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-2xl" aria-hidden="true"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroGeometric);