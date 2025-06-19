import { memo, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { containerVariants, heroCardVariants, cardVariants, overlayVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { isValidUrl } from '@/utils/helpers';
import { Helmet } from 'react-helmet-async';
import { TypographyVariant, Variant, Size, type AboutCard } from '@/utils/types';

const AboutPage = () => {
  const { about } = usePortfolioStore();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getSizeClasses = useCallback((size: Size) => {
    switch (size) {
      case Size.Large:
        return 'md:col-span-2 md:row-span-2 min-h-[300px]';
      case Size.Medium:
        return 'md:col-span-2 min-h-[200px]';
      case Size.Small:
        return 'min-h-[150px]';
      default:
        return 'min-h-[150px]';
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Hemanth Sayimpu</title>
        <meta
          name="description"
          content="Learn more about Hemanth Sayimpu, a full-stack developer passionate about creating user-centric web applications."
        />
        <meta name="keywords" content="about, developer, full-stack, react, typescript" />
        <meta property="og:title" content="About | Hemanth Sayimpu" />
        <meta
          property="og:description"
          content="Discover the journey and skills of Hemanth Sayimpu in web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/about" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={`min-h-screen bg-background py-12 ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="about-page-title"
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={containerVariants}>
          <Typography
            variant={TypographyVariant.H1}
            id="about-page-title"
            className="text-3xl sm:text-4xl font-bold text-text mb-4"
          >
            {about.title || 'About Me'}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-base sm:text-xl text-accent max-w-2xl mx-auto"
          >
            {about.description || 'Discover my journey in crafting digital solutions.'}
          </Typography>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {about.cards?.length ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
              variants={containerVariants}
              role="list"
            >
              {about.cards.map((card: AboutCard, index: number) => (
                <motion.div
                  key={card.id}
                  variants={card.type === 'hero' ? heroCardVariants : cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className={`${getSizeClasses(card.size)} ${card.bgColor} rounded-3xl p-4 sm:p-6 cursor-pointer relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-primary outline-none`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  whileHover="hover"
                  whileTap="tap"
                  role="listitem"
                  aria-labelledby={`card-${card.id}`}
                  tabIndex={0}
                >
                  <div className={`h-full flex flex-col justify-between relative z-10`}>
                    {card.icon && (
                      <div className="mb-3 sm:mb-4">
                        <Icon
                          icon={card.icon}
                          className={`${card.textColor || 'text-white'} ${card.size === Size.Large ? 'w-8 h-8' : 'w-6 h-6'}`}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <Typography
                      variant={card.size === Size.Large ? TypographyVariant.H2 : TypographyVariant.H3}
                      className={`mb-2 sm:mb-3 ${card.size === Size.Large ? 'text-2xl sm:text-3xl md:text-4xl' : card.size === Size.Medium ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} ${card.textColor || 'text-white'}`}
                      id={`card-${card.id}`}
                    >
                      {card.title}
                    </Typography>
                    {card.subtitle && (
                      <Typography
                        variant={TypographyVariant.P}
                        className={`text-base sm:text-lg opacity-80 mb-3 sm:mb-4 ${card.textColor || 'text-white'}`}
                      >
                        {card.subtitle}
                      </Typography>
                    )}
                    <Typography
                      variant={TypographyVariant.P}
                      className={`${card.size === Size.Large ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} ${card.textColor || 'text-white'}`}
                    >
                      {card.content}
                    </Typography>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    variants={overlayVariants}
                    initial="hidden"
                    animate={activeCard === card.id ? 'visible' : 'hidden'}
                  />
                  {card.type === 'hero' && (
                    <div
                      className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                  {card.type === 'stat' && (
                    <div
                      className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <Typography
              variant={TypographyVariant.P}
              className="text-center text-accent"
              role="alert"
            >
              No cards available.
            </Typography>
          )}
        </div>

        {about.cta && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mt-16 sm:mt-20"
          >
            <Typography
              variant={TypographyVariant.H2}
              className="text-2xl sm:text-3xl font-bold text-text mb-4 sm:mb-6"
            >
              {about.cta.title || 'Ready to Collaborate?'}
            </Typography>
            <Typography
              variant={TypographyVariant.P}
              className="text-base sm:text-xl text-accent mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              {about.cta.description || 'Let’s build something amazing together.'}
            </Typography>
            <Button
              to={isValidUrl(about.cta.buttonLink) ? about.cta.buttonLink : '#'}
              variant={Variant.Primary}
              size={Size.Large}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-primary"
              ariaLabel={about.cta.buttonText || 'Get Started'}
              disabled={!isValidUrl(about.cta.buttonLink)}
            >
              {about.cta.buttonText || 'Get Started'}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default memo(AboutPage);