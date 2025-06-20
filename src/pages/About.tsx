import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "@/utils/config";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import {
  containerVariants,
  heroCardVariants,
  cardVariants,
  overlayVariants,
} from "@/utils/animations";
import { aboutPageStyles } from "@/utils/styles";
import { isValidUrl } from "@/utils/helpers";
import { Helmet } from "react-helmet-async";
import {
  TypographyVariant,
  Variant,
  Size,
  type AboutCard,
} from "@/utils/types";
import clsx from "clsx";

/**
 * The About page displaying a dynamic grid of cards with hover effects and a CTA.
 * @returns A responsive page with a grid layout, interactive cards, and SEO meta tags.
 */
const AboutPage = () => {
  const { about } = usePortfolioStore();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getSizeClasses = useCallback((size: Size) => {
    return clsx({
      "md:col-span-2 md:row-span-2 min-h-[300px] xs:min-h-[320px]":
        size === Size.Large,
      "md:col-span-2 min-h-[200px] xs:min-h-[220px]": size === Size.Medium,
      "min-h-[150px] xs:min-h-[170px]": size === Size.Small,
    });
  }, []);

  const getTypographyClasses = (size: Size) => {
    return {
      title: clsx({
        "text-2xl xs:text-3xl sm:text-4xl": size === Size.Large,
        "text-lg xs:text-xl sm:text-2xl": size === Size.Medium,
        "text-base xs:text-lg sm:text-xl": size === Size.Small,
      }),
      content: clsx({
        "text-sm xs:text-base sm:text-lg": size === Size.Large,
        "text-xs xs:text-sm sm:text-base":
          size === Size.Medium || size === Size.Small,
      }),
    };
  };

  return (
    <>
      <Helmet>
        <title>About | Hemanth Sayimpu</title>
        <meta
          name="description"
          content="Learn more about Hemanth Sayimpu, a full-stack developer passionate about creating user-centric web applications."
        />
        <meta
          name="keywords"
          content="about, developer, full-stack, react, typescript"
        />
        <meta property="og:title" content="About | Hemanth Sayimpu" />
        <meta
          property="og:description"
          content="Discover the journey and skills of Hemanth Sayimpu in web development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://hemanthscode.github.io/about"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={clsx(aboutPageStyles.base, "bg-background")}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="about-page-title"
      >
        <motion.div
          className={aboutPageStyles.header}
          variants={containerVariants}
        >
          <Typography
            variant={TypographyVariant.H1}
            id="about-page-title"
            className={aboutPageStyles.title}
            role="heading"
            aria-level={1}
          >
            {about.title}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className={aboutPageStyles.description}
          >
            {about.description}
          </Typography>
        </motion.div>

        <div className={aboutPageStyles.container}>
          {about.cards?.length ? (
            <motion.div
              className={aboutPageStyles.cardGrid}
              variants={containerVariants}
              role="list"
            >
              {about.cards.map((card: AboutCard, index: number) => {
                const typographyClasses = getTypographyClasses(card.size);
                return (
                  <motion.button
                    key={card.id}
                    variants={
                      card.type === "hero" ? heroCardVariants : cardVariants
                    }
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className={clsx(
                      aboutPageStyles.card,
                      getSizeClasses(card.size),
                      card.bgColor,
                      "relative overflow-hidden group",
                    )}
                    onMouseEnter={() => setActiveCard(card.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    whileHover="hover"
                    whileTap="tap"
                    role="listitem"
                    aria-labelledby={`card-${card.id}`}
                    onClick={() => {}}
                  >
                    <div className="h-full flex flex-col justify-between relative z-10">
                      {card.icon && (
                        <div className="mb-3 xs:mb-4">
                          <Icon
                            icon={card.icon}
                            className={clsx(
                              card.textColor || "text-white",
                              card.size === Size.Large
                                ? "w-8 h-8 xs:w-9 xs:h-9"
                                : "w-6 h-6 xs:w-7 xs:h-7",
                            )}
                            aria-hidden="true"
                          />
                        </div>
                      )}
                      <Typography
                        variant={
                          card.size === Size.Large
                            ? TypographyVariant.H2
                            : TypographyVariant.H3
                        }
                        className={clsx(
                          typographyClasses.title,
                          card.textColor || "text-white",
                          "mb-2 xs:mb-3",
                        )}
                        id={`card-${card.id}`}
                        role="heading"
                        aria-level={card.size === Size.Large ? 2 : 3}
                      >
                        {card.title}
                      </Typography>
                      {card.subtitle && (
                        <Typography
                          variant={TypographyVariant.P}
                          className={clsx(
                            "text-sm xs:text-base sm:text-lg opacity-80 mb-3 xs:mb-4",
                            card.textColor || "text-white",
                          )}
                        >
                          {card.subtitle}
                        </Typography>
                      )}
                      <Typography
                        variant={TypographyVariant.P}
                        className={clsx(
                          typographyClasses.content,
                          card.textColor || "text-white",
                        )}
                      >
                        {card.content}
                      </Typography>
                    </div>
                    <motion.div
                      className={aboutPageStyles.cardOverlay}
                      variants={overlayVariants}
                      initial="hidden"
                      animate={activeCard === card.id ? "visible" : "hidden"}
                    />
                    {card.type === "hero" && (
                      <div
                        className={aboutPageStyles.heroDecoration}
                        aria-hidden="true"
                      />
                    )}
                    {card.type === "stat" && (
                      <div
                        className={aboutPageStyles.statDecoration}
                        aria-hidden="true"
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <Typography
              variant={TypographyVariant.P}
              className="text-center text-accent text-sm xs:text-base"
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
            className={aboutPageStyles.cta}
          >
            <Typography
              variant={TypographyVariant.H2}
              className={aboutPageStyles.ctaTitle}
              role="heading"
              aria-level={2}
            >
              {about.cta.title}
            </Typography>
            <Typography
              variant={TypographyVariant.P}
              className={aboutPageStyles.ctaDescription}
            >
              {about.cta.description}
            </Typography>
            <Button
              to={about.cta.buttonLink}
              variant={Variant.Primary}
              size={Size.Large}
              ariaLabel={about.cta.buttonText}
              className={aboutPageStyles.ctaButton}
              disabled={!isValidUrl(about.cta.buttonLink)}
            >
              {about.cta.buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default memo(AboutPage);
