import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { usePortfolioStore } from '@/utils/config';
import { containerVariants, heroCardVariants, cardVariants, overlayVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const AboutPage = () => {
  const { about } = usePortfolioStore();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getSizeClasses = (size: Size) => {
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
  };

  return (
    <motion.div
      className={`min-h-screen bg-white py-12 ${containerPadding}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="main"
      aria-labelledby="about-page-title"
    >
      <motion.div className="text-center mb-16" variants={containerVariants}>
        <Typography
          variant={TypographyVariant.H1}
          id="about-page-title"
          className="mb-4"
        >
          {about.title}
        </Typography>
        <Typography
          variant={TypographyVariant.P}
          className="text-xl max-w-2xl mx-auto"
        >
          {about.description}
        </Typography>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
          variants={containerVariants}
        >
          {about.cards?.map((card, index) => (
            <motion.div
              key={card.id}
              variants={card.type === 'hero' ? heroCardVariants : cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className={`${getSizeClasses(card.size)} ${card.bgColor} rounded-3xl p-6 cursor-pointer relative overflow-hidden group`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover="hover"
              whileTap="tap"
              role="article"
              aria-labelledby={`card-${card.id}`}
            >
              <div className={`${card.textColor} h-full flex flex-col justify-between relative z-10`}>
                {card.icon && (
                  <div className="mb-4">
                    <Icon
                      icon={card.icon}
                      className={card.size === Size.Large ? 'w-8 h-8' : 'w-6 h-6'}
                      aria-hidden="true"
                    />
                  </div>
                )}
                <Typography
                  variant={card.size === Size.Large ? TypographyVariant.H2 : TypographyVariant.H3}
                  className={`mb-3 ${card.size === Size.Large ? 'text-3xl md:text-4xl' : card.size === Size.Medium ? 'text-xl' : 'text-lg'}`}
                  id={`card-${card.id}`}
                >
                  {card.title}
                </Typography>
                {card.subtitle && (
                  <Typography
                    variant={TypographyVariant.P}
                    className="text-lg opacity-80 mb-4"
                  >
                    {card.subtitle}
                  </Typography>
                )}
                <Typography
                  variant={TypographyVariant.P}
                  className={card.size === Size.Large ? 'text-lg' : 'text-base'}
                >
                  {card.content}
                </Typography>
                {card.type === 'image' && (
                  <div className="absolute inset-0 bg-gray-200 rounded-3xl flex items-center justify-center">
                    <Typography
                      variant={TypographyVariant.P}
                      className="text-gray-400 text-lg"
                    >
                      {card.content}
                    </Typography>
                  </div>
                )}
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
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mt-20"
      >
        <Typography variant={TypographyVariant.H2} className="mb-6">
          {about.cta?.title}
        </Typography>
        <Typography
          variant={TypographyVariant.P}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          {about.cta?.description}
        </Typography>
        <Button
          to={about.cta?.buttonLink}
          variant={Variant.Primary}
          size={Size.Large}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl transition-shadow duration-300"
          ariaLabel={about.cta?.buttonText}
        >
          {about.cta?.buttonText}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default memo(AboutPage);