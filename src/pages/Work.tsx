import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/ProjectCard';
import { containerVariants, cardVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { isValidUrl } from '@/utils/helpers';
import { Helmet } from 'react-helmet-async';
import { TypographyVariant, Variant, Size } from '@/utils/types';
import Typography from '@/components/atoms/Typography';

const WorkPage = () => {
  const { work } = usePortfolioStore();

  const featuredProjects = useMemo(
    () => work.projects.filter((p) => p.featured),
    [work.projects]
  );
  const regularProjects = useMemo(
    () => work.projects.filter((p) => !p.featured),
    [work.projects]
  );

  return (
    <>
      <Helmet>
        <title>Work | Hemanth Sayimpu</title>
        <meta
          name="description"
          content="Explore Hemanth Sayimpu's projects, showcasing expertise in web development, AI, IoT, and more."
        />
        <meta name="keywords" content="projects, portfolio, developer, react, typescript" />
        <meta property="og:title" content="Work | Hemanth Sayimpu" />
        <meta
          property="og:description"
          content="A curated selection of innovative projects by Hemanth Sayimpu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/work" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
        />
      </Helmet>
      <motion.div
        className={`min-h-screen bg-background py-8 ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="work-page-title"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            variants={containerVariants}
          >
            <Typography
              variant={TypographyVariant.H1}
              id="work-page-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text mb-4 sm:mb-6"
            >
              {work.title || 'My Projects'}
            </Typography>
            <Typography
              variant={TypographyVariant.P}
              className="text-base sm:text-lg lg:text-xl text-accent max-w-3xl mx-auto leading-relaxed"
            >
              {work.description || 'A showcase of innovative and impactful solutions.'}
            </Typography>
          </motion.div>

          {work.projects.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 auto-rows-auto"
              role="list"
            >
              {featuredProjects.slice(0, 2).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  cardType="image"
                  className="sm:col-span-2 lg:col-span-2 xl:col-span-3 lg:row-span-2"
                  role="listitem"
                />
              ))}
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  cardType="content"
                  className="sm:col-span-1 lg:col-span-2 xl:col-span-2"
                  role="listitem"
                />
              ))}
              {featuredProjects[2] && (
                <ProjectCard
                  key={featuredProjects[2].id}
                  project={featuredProjects[2]}
                  cardType="image"
                  className="sm:col-span-2 lg:col-span-4 xl:col-span-3 lg:row-span-1"
                  role="listitem"
                />
              )}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.04 }}
                className="sm:col-span-2 lg:col-span-2 xl:col-span-3 bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-text relative overflow-hidden border border-white/20 focus-visible:ring-2 focus-visible:ring-primary"
                role="complementary"
                tabIndex={0}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative z-10 h-full flex flex-col justify-center text-center">
                  <Typography
                    variant={TypographyVariant.H3}
                    className="text-xl sm:text-2xl mb-3 sm:mb-4"
                  >
                    Have a Project in Mind?
                  </Typography>
                  <Typography
                    variant={TypographyVariant.P}
                    className="text-sm sm:text-base text-accent mb-6 sm:mb-8"
                  >
                    Let’s collaborate to bring your ideas to life with cutting-edge technology.
                  </Typography>
                  <Button
                    to={isValidUrl('/contact') ? '/contact' : '#'}
                    variant={Variant.Primary}
                    size={Size.Medium}
                    className="mx-auto bg-primary text-white hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary"
                    ariaLabel="Get in touch"
                  >
                    Get In Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          ) : (
            <Typography
              variant={TypographyVariant.P}
              className="text-center text-accent"
              role="alert"
            >
              No projects available.
            </Typography>
          )}

          {work.footerText && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="text-center mt-12 sm:mt-16 lg:mt-20"
            >
              <Typography
                variant={TypographyVariant.P}
                className="text-sm sm:text-base text-accent"
              >
                {work.footerText}
              </Typography>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default memo(WorkPage);

/* Changes and Best Practices:
- Added Helmet for SEO meta tags.
- Used containerPadding, containerVariants, cardVariants, and isValidUrl from utils/.
- Accessibility: role="list", role="listitem", role="complementary", and focus-visible:ring.
- Performance: Memoized featuredProjects and regularProjects with useMemo.
- Security: Validated CTA link with isValidUrl.
- Testing: Test project card rendering, CTA navigation, and accessibility.
*/