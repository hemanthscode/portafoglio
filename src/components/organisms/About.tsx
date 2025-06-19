import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { cardVariants, containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { ArrowRight, Code } from 'lucide-react';
import { TypographyVariant, Variant, Size, CardType } from '@/utils/types';

const About = () => {
  const { about } = usePortfolioStore();

  const heroCard = useMemo(
    () => about.cards?.find((card) => card.type === CardType.Hero),
    [about.cards]
  );
  const storyCards = useMemo(
    () =>
      about.cards?.filter(
        (card) => card.type === CardType.Story && ['The Spark', 'Team Synergy'].includes(card.title)
      ) || [],
    [about.cards]
  );
  const skillCards = useMemo(
    () => about.cards?.filter((card) => card.type === CardType.Skill) || [],
    [about.cards]
  );

  return (
    <motion.section
      className={`py-12 sm:py-16 lg:py-20 bg-background ${containerPadding}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-10 sm:mb-12" variants={cardVariants}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-medium mb-4">
            <Icon icon={Code} className="w-5 h-5 mr-2" aria-hidden="true" />
            <Typography variant={TypographyVariant.Span}>
              {about.title}
            </Typography>
          </div>
          <Typography
            variant={TypographyVariant.H2}
            id="about-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
          >
            Engineering Digital <span className="text-primary">Solutions</span>
          </Typography>
          <Typography variant={TypographyVariant.P} className="text-accent mt-2 max-w-2xl mx-auto">
            {about.description}
          </Typography>
        </motion.div>

        {about.cards?.length ? (
          <div className="space-y-6" role="list">
            {heroCard && (
              <motion.div
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-md focus-visible:ring-2 focus-visible:ring-primary"
                variants={cardVariants}
                role="listitem"
                aria-labelledby={`hero-${heroCard.id}`}
                tabIndex={0}
              >
                <Icon
                  icon={heroCard.icon || Code}
                  className="w-6 sm:w-8 h-6 sm:h-8 text-primary mb-3 sm:mb-4"
                  aria-hidden="true"
                />
                <Typography
                  variant={TypographyVariant.H3}
                  className="text-lg sm:text-xl lg:text-2xl font-bold"
                  id={`hero-${heroCard.id}`}
                >
                  {heroCard.title}
                </Typography>
                <Typography variant={TypographyVariant.P} className="text-accent mb-3 sm:mb-4">
                  {heroCard.subtitle}
                </Typography>
                <Typography variant={TypographyVariant.P} className="text-gray-700">
                  {heroCard.content}
                </Typography>
              </motion.div>
            )}

            {skillCards.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {skillCards.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 focus-visible:ring-2 focus-visible:ring-primary"
                    variants={cardVariants}
                    role="listitem"
                    aria-labelledby={`skill-${skill.id}`}
                    tabIndex={0}
                  >
                    <Icon
                      icon={skill.icon || Code}
                      className="w-5 sm:w-6 h-5 sm:h-6 text-primary mb-2 sm:mb-3"
                      aria-hidden="true"
                    />
                    <Typography
                      variant={TypographyVariant.H3}
                      className="text-base sm:text-lg font-semibold"
                      id={`skill-${skill.id}`}
                    >
                      {skill.title}
                    </Typography>
                    <Typography variant={TypographyVariant.P} className="text-accent">
                      {skill.content}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            )}

            {storyCards.map((story) => (
              <motion.div
                key={story.id}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-md focus-visible:ring-2 focus-visible:ring-primary"
                variants={cardVariants}
                role="listitem"
                aria-labelledby={`story-${story.id}`}
                tabIndex={0}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Icon
                    icon={story.icon || Code}
                    className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <Typography
                      variant={TypographyVariant.H3}
                      className="text-base sm:text-lg font-semibold"
                      id={`story-${story.id}`}
                    >
                      {story.title}
                    </Typography>
                    <Typography variant={TypographyVariant.P} className="text-gray-700">
                      {story.content}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <Typography
            variant={TypographyVariant.P}
            className="text-center text-accent"
            role="alert"
          >
            No content available.
          </Typography>
        )}

        <motion.div className="text-center mt-10 sm:mt-12" variants={cardVariants}>
          <Button
            to="/about"
            variant={Variant.Primary}
            size={Size.Large}
            ariaLabel="Learn more about me"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 focus-visible:ring-2 focus-visible:ring-primary"
          >
            {about.cta?.buttonText || 'Learn More About Me'}
            <Icon icon={ArrowRight} className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(About);

/* Changes and Best Practices:
- Sourced data from usePortfolioStore in config.ts.
- Used containerPadding, containerVariants, cardVariants from utils/.
- Removed hardcoded text, using about.title and about.description.
- Accessibility: role="region", role="list", and focus-visible:ring.
- Performance: Memoized component and filtered cards with useMemo.
- Testing: Test card filtering, animations, and accessibility.
*/