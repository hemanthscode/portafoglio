import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Github as GithubIcon, ArrowRight, Code2 } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const HeroGeometric = () => {
  const { hero } = usePortfolioStore();
  const nameParts = useMemo(() => hero.name.split(' '), [hero.name]);

  return (
    <motion.section
      className={`min-h-[calc(100vh-4rem)] w-full flex items-center justify-center ${containerPadding} py-8 sm:py-12 lg:py-16`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <motion.div
          className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10"
          variants={containerVariants}
        >
          {hero.logo && (
            <motion.div variants={itemVariants} className="mb-2 sm:mb-4">
              <div className="w-20 h-auto sm:w-24 lg:w-32">{hero.logo}</div>
            </motion.div>
          )}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Icon
                    icon={Code2}
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-primary to-transparent" aria-hidden="true" />
              </div>
              <Typography
                variant={TypographyVariant.Span}
                className="text-xs sm:text-sm lg:text-base font-semibold text-primary uppercase tracking-widest"
              >
                Developer & Explorer
              </Typography>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant={TypographyVariant.H1}
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
            <Typography
              variant={TypographyVariant.H2}
              className="mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-xl"
            >
              {hero.headline}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant={TypographyVariant.P}
              className="mb-4 sm:mb-6 max-w-md sm:max-w-lg md:max-w-xl"
            >
              {hero.subheadline}
            </Typography>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
            variants={itemVariants}
          >
            <Button
              to={hero.ctaLink}
              variant={Variant.Primary}
              size={Size.Large}
              ariaLabel={hero.ctaText}
              className="w-full sm:w-auto"
            >
              {hero.ctaText}
              <Icon
                icon={ArrowRight}
                className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5"
                aria-hidden="true"
              />
            </Button>
            <Button
              href={hero.githubUrl}
              variant={Variant.Outline}
              size={Size.Large}
              ariaLabel="Visit my GitHub profile"
              className="w-full sm:w-auto"
            >
              <Icon
                icon={GithubIcon}
                className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"
                aria-hidden="true"
              />
              GitHub
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:block relative"
          variants={containerVariants}
        >
          <div
            className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-2xl"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(HeroGeometric);