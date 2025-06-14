import { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import ProjectCard from '@/components/molecules/ProjectCard';
import { usePortfolioStore } from '@/utils/config';
import { containerVariants, cardVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const WorkPage = () => {
  const { work } = usePortfolioStore();
  const featuredProjects = work.projects.filter((p) => p.featured);
  const regularProjects = work.projects.filter((p) => !p.featured);

  return (
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
          className="text-center mb-12 lg:mb-16"
          variants={containerVariants}
        >
          <Typography
            variant={TypographyVariant.H1}
            id="work-page-title"
            className="mb-4 lg:mb-6 text-text text-4xl lg:text-5xl font-semibold"
          >
            {work.title}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-accent"
          >
            {work.description}
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 auto-rows-auto">
          {featuredProjects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardType="image"
              className="sm:col-span-2 lg:col-span-2 xl:col-span-3 lg:row-span-2"
            />
          ))}
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardType="content"
              className="sm:col-span-1 lg:col-span-2 xl:col-span-2"
            />
          ))}
          {featuredProjects[2] && (
            <ProjectCard
              project={featuredProjects[2]}
              cardType="image"
              className="sm:col-span-2 lg:col-span-4 xl:col-span-3 lg:row-span-1"
            />
          )}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04 }}
            className="sm:col-span-2 lg:col-span-2 xl:col-span-3 bg-white/20 backdrop-blur-md rounded-2xl p-8 text-text relative overflow-hidden border border-white/20"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="relative z-10 h-full flex flex-col justify-center text-center">
              <Typography
                variant={TypographyVariant.H3}
                className="mb-4 text-2xl"
              >
                Have a Project in Mind?
              </Typography>
              <Typography
                variant={TypographyVariant.P}
                className="mb-8 text-base text-accent"
              >
                Let’s collaborate and bring your ideas to life with cutting-edge technology and innovative design.
              </Typography>
              <Button
                to="/portfolio/contact"
                variant={Variant.Primary}
                size={Size.Medium}
                className="mx-auto bg-primary text-white hover:bg-primary-dark"
                ariaLabel="Get in touch"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <Typography
            variant={TypographyVariant.P}
            className="text-accent text-base"
          >
            {work.footerText}
          </Typography>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(WorkPage);