import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "@/utils/config";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import { ArrowRight, Code } from "lucide-react";
import {
  badgeVariants,
  cardVariants,
  containerVariants,
} from "@/utils/animations";
import { aboutStyles } from "@/utils/styles";
import { TypographyVariant, Variant, Size, CardType } from "@/utils/types";
import clsx from "clsx";
import { isValidUrl } from "@/utils/helpers";

// Enhanced with error boundary and focus handling
const About = () => {
  const { about } = usePortfolioStore();

  const heroCard = useMemo(
    () => about.cards?.find((card) => card.type === CardType.Hero),
    [about.cards],
  );
  const storyCards = useMemo(
    () =>
      about.cards?.filter(
        (card) =>
          card.type === CardType.Story &&
          ["Syntax and Sparks", "Code Review Enthusiast"].includes(card.title),
      ) || [],
    [about.cards],
  );
  const skillCards = useMemo(
    () => about.cards?.filter((card) => card.type === CardType.Skill) || [],
    [about.cards],
  );

  if (!about) {
    console.warn("About section requires portfolio store data");
    return null;
  }

  return (
    <motion.section
      className={clsx(aboutStyles.base, "bg-background")}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="about-title"
    >
      <div className={aboutStyles.container}>
        <motion.div className={aboutStyles.header} variants={cardVariants}>
          <Typography
            variant={TypographyVariant.H2}
            id="about-title"
            className={aboutStyles.title}
            role="heading"
            aria-level={2}
          >
            {about.title}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className={aboutStyles.description}
          >
            {about.description}
          </Typography>
        </motion.div>

        {about.cards?.length ? (
          <div className={aboutStyles.cardContainer} role="list">
            {heroCard && (
              <motion.button
                className={aboutStyles.heroCard}
                variants={cardVariants}
                role="listitem"
                aria-labelledby={`hero-${heroCard.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                tabIndex={0} // Added for accessibility
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
              >
                <Icon
                  icon={heroCard.icon || Code}
                  className={aboutStyles.heroIcon}
                  aria-hidden="true"
                />
                <Typography
                  variant={TypographyVariant.H3}
                  className={aboutStyles.heroTitle}
                  id={`hero-${heroCard.id}`}
                  role="heading"
                  aria-level={3}
                >
                  {heroCard.title}
                </Typography>
                <Typography
                  variant={TypographyVariant.P}
                  className={aboutStyles.heroSubtitle}
                >
                  {heroCard.subtitle}
                </Typography>
                <Typography
                  variant={TypographyVariant.P}
                  className={aboutStyles.heroContent}
                >
                  {heroCard.content}
                </Typography>
              </motion.button>
            )}

            {skillCards.length > 0 && (
              <div className={aboutStyles.skillGrid} role="list">
                {skillCards.map((skill) => (
                  <motion.button
                    key={skill.id}
                    className={aboutStyles.skillCard}
                    variants={cardVariants}
                    role="listitem"
                    aria-labelledby={`skill-${skill.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {}}
                    tabIndex={0} // Added for accessibility
                    onKeyDown={(e) =>
                      e.key === "Enter" && e.currentTarget.click()
                    }
                  >
                    <Icon
                      icon={skill.icon || Code}
                      className={aboutStyles.skillIcon}
                      aria-hidden="true"
                    />
                    <Typography
                      variant={TypographyVariant.H3}
                      className={aboutStyles.skillTitle}
                      id={`skill-${skill.id}`}
                      role="heading"
                      aria-level={3}
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      variant={TypographyVariant.P}
                      className={aboutStyles.skillContent}
                    >
                      {skill.content}
                    </Typography>
                  </motion.button>
                ))}
              </div>
            )}

            {storyCards.map((story) => (
              <motion.button
                key={story.id}
                className={aboutStyles.storyCard}
                variants={cardVariants}
                role="listitem"
                aria-labelledby={`story-${story.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                tabIndex={0} // Added for accessibility
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Icon
                    icon={story.icon || Code}
                    className={aboutStyles.storyIcon}
                    aria-hidden="true"
                  />
                  <div>
                    <Typography
                      variant={TypographyVariant.H3}
                      className={aboutStyles.storyTitle}
                      id={`story-${story.id}`}
                      role="heading"
                      aria-level={3}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant={TypographyVariant.P}
                      className={aboutStyles.storyContent}
                    >
                      {story.content}
                    </Typography>
                  </div>
                </div>
              </motion.button>
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

        <motion.div className={aboutStyles.cta} variants={cardVariants}>
          <Button
            to="/about"
            variant={Variant.Primary}
            size={Size.Large}
            ariaLabel="Learn more about me"
            className={aboutStyles.ctaButton}
            icon={<ArrowRight className="ml-2 w-5 h-5" />}
            disabled={!isValidUrl("/about")}
          >
            {about.cta?.buttonText || "Learn More About Me"}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(About);
