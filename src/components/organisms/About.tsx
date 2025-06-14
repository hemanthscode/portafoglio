import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { ArrowRight, Code } from 'lucide-react';
import { cardVariants, containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { CardType, TypographyVariant, Variant, Size } from '@/utils/types';

const About = () => {
  const { about } = usePortfolioStore();

  // Filter tech and career-related cards
  const heroCard = about.cards?.find(card => card.type === CardType.Hero);
  const storyCards = about.cards?.filter(card => 
    card.type === CardType.Story && ['The Spark', 'Team Player'].includes(card.title)
  ) || [];
  const skillCards = about.cards?.filter(card => card.type === CardType.Skill) || [];

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
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          variants={cardVariants}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-medium mb-4">
            <Icon icon={Code} className="w-5 h-5 mr-2" aria-hidden="true" />
            <Typography variant={TypographyVariant.Span}>
              {about.title || 'My Tech Journey'}
            </Typography>
          </div>
          <Typography
            variant={TypographyVariant.H2}
            id="about-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text"
          >
            Engineering Digital
            <span className="text-primary"> Solutions</span>
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-accent mt-2 max-w-2xl mx-auto text-base sm:text-lg"
          >
            {about.description || 'Building cutting-edge web applications with expertise and innovation.'}
          </Typography>
        </motion.div>

        {/* Stacked Cards */}
        <div className="space-y-6">
          {/* Hero Card */}
          {heroCard && (
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md"
              variants={cardVariants}
              role="article"
              aria-labelledby={`hero-${heroCard.id}`}
            >
              <Icon
                icon={heroCard.icon || Code}
                className="w-8 h-8 text-primary mb-4"
                aria-hidden="true"
              />
              <Typography
                variant={TypographyVariant.H3}
                className="text-xl sm:text-2xl font-bold text-text"
                id={`hero-${heroCard.id}`}
              >
                {heroCard.title || 'Hemanth Sayimpu'}
              </Typography>
              <Typography
                variant={TypographyVariant.P}
                className="text-sm sm:text-base text-accent mb-4"
              >
                {heroCard.subtitle || 'Full-Stack Developer'}
              </Typography>
              <Typography
                variant={TypographyVariant.P}
                className="text-base sm:text-lg text-gray-700"
              >
                {heroCard.content || 'Specializing in scalable, user-focused web solutions.'}
              </Typography>
            </motion.div>
          )}

          {/* Skills Grid */}
          {skillCards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCards.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                  variants={cardVariants}
                  role="article"
                  aria-labelledby={`skill-${skill.id}`}
                >
                  <Icon
                    icon={skill.icon || Code}
                    className="w-6 h-6 text-primary mb-3"
                    aria-hidden="true"
                  />
                  <Typography
                    variant={TypographyVariant.H3}
                    className="text-base sm:text-lg font-semibold"
                    id={`skill-${skill.id}`}
                  >
                    {skill.title || 'Skill'}
                  </Typography>
                  <Typography
                    variant={TypographyVariant.P}
                    className="text-sm text-accent"
                  >
                    {skill.content || 'Mastering modern technologies.'}
                  </Typography>
                </motion.div>
              ))}
            </div>
          )}

          {/* Story Cards */}
          {storyCards.map((story) => (
            <motion.div
              key={story.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md"
              variants={cardVariants}
              role="article"
              aria-labelledby={`story-${story.id}`}
            >
              <div className="flex items-start space-x-4">
                <Icon
                  icon={story.icon || Code}
                  className="w-6 h-6 text-yellow-600 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <Typography
                    variant={TypographyVariant.H3}
                    className="text-base sm:text-lg font-semibold"
                    id={`story-${story.id}`}
                  >
                    {story.title || 'The Spark'}
                  </Typography>
                  <Typography
                    variant={TypographyVariant.P}
                    className="text-sm sm:text-base text-gray-700"
                  >
                    {story.content || 'A tech journey sparked by curiosity.'}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          variants={cardVariants}
        >
          <Button
            to={about.cta?.buttonLink || '/contact'}
            variant={Variant.Primary}
            size={Size.Large}
            ariaLabel="Connect with me"
            className="w-full sm:w-auto px-6 sm:px-8 py-3"
          >
            {about.cta?.buttonText || 'Let’s Connect'}
            <Icon icon={ArrowRight} className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(About);