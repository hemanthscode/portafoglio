import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { Github, ArrowRight, Code2 } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { heroStyles } from '@/utils/styles';
import { isValidUrl } from '@/utils/helpers';
import { TypographyVariant, Variant, Size } from '@/utils/types';
import clsx from 'clsx';

/**
 * A hero section component with a geometric layout and animated elements.
 * @returns A responsive hero section with text, buttons, and an optional image.
 */
const HeroGeometric = () => {
  const { hero } = usePortfolioStore();
  const nameParts = useMemo(() => hero.name.split(' '), [hero.name]);

  return (
    <motion.section
      className={clsx(heroStyles.base, 'min-h-[calc(100vh-4rem)] w-full flex items-center justify-center')}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className={heroStyles.container}>
        <motion.div
          className={heroStyles.textContainer}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className={heroStyles.decorative}>
              <div className={heroStyles.iconWrapper}>
                <Icon
                  icon={Code2}
                  className={heroStyles.icon}
                  aria-hidden="true"
                />
              </div>
              <div className={heroStyles.gradientLine} aria-hidden="true" />
              <Typography
                variant={TypographyVariant.Span}
                className={heroStyles.label}
              >
                Developer & Explorer
              </Typography>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant={TypographyVariant.H1}
              id="hero-title"
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
              role="heading"
              aria-level={1}
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
              className="mb-3 xs:mb-4 sm:mb-6 max-w-md xs:max-w-lg sm:max-w-xl text-xl xs:text-2xl sm:text-3xl"
              role="heading"
              aria-level={2}
            >
              {hero.headline}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant={TypographyVariant.P}
              className="mb-3 xs:mb-4 sm:mb-6 max-w-md xs:max-w-lg sm:max-w-xl text-sm xs:text-base sm:text-lg"
            >
              {hero.subheadline}
            </Typography>
          </motion.div>
          <motion.div
            className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4"
            variants={itemVariants}
            role="group"
            aria-label="Hero actions"
          >
            <Button
              to={hero.ctaLink}
              variant={Variant.Primary}
              size={Size.Large}
              ariaLabel={hero.ctaText}
              className="w-full xs:w-auto px-5 xs:px-6 sm:px-8"
              disabled={!isValidUrl(hero.ctaLink)}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {hero.ctaText}
            </Button>
            {isValidUrl(hero.githubUrl) && (
              <Button
                href={hero.githubUrl}
                variant={Variant.Outline}
                size={Size.Large}
                ariaLabel="Visit my GitHub profile"
                className="w-full xs:w-auto px-5 xs:px-6 sm:px-8"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-5 h-5" />}
              >
                GitHub
              </Button>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:block relative"
          variants={containerVariants}
          role="img"
          aria-label="Hero illustration"
        >
          <LazyImage
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNuamN6Y2dkYjZkNDdib3VmaGkxdmU0bjNtdnVrbjNqb3VpcGU5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xLqq4wir07TFss/giphy.gif"
            alt="Hero illustration"
            className="w-full h-64 xs:h-72 sm:h-80 lg:h-96 rounded-2xl object-cover"
            sizes="(max-width: 1024px) 0, 50vw"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(HeroGeometric);