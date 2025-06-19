import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/ProjectCard';
import Typography from '@/components/atoms/Typography';
import { containerVariants } from '@/utils/animations';
import { Helmet } from 'react-helmet-async';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const WorkPage = () => {
  const { work } = usePortfolioStore();

  return (
    <>
      <Helmet>
        <title>Work | Hemanth Sayimpu</title>
        <meta name="description" content="Explore Hemanth Sayimpu's projects, showcasing expertise in web development, AI, and backend services." />
        <meta name="keywords" content="projects, portfolio, developer, react, node.js, ai" />
      </Helmet>
      
      <motion.main
        className="min-h-screen bg-background py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.header className="text-center mb-16" variants={containerVariants}>
            <Typography variant={TypographyVariant.H1} className="text-4xl md:text-6xl font-bold mb-6">
              {work.title}
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {work.description}
            </Typography>
          </motion.header>

          {/* Projects Grid */}
          {work.projects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {work.projects.map((project) => (
                <ProjectCard key={project.id} project={project} cardType={'content'} />
              ))}
            </div>
          ) : (
            <Typography variant={TypographyVariant.P} className="text-center text-gray-500">
              No projects available.
            </Typography>
          )}

          {/* CTA Section */}
          <motion.section
            variants={containerVariants}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <Typography variant={TypographyVariant.H3} className="text-2xl md:text-3xl font-bold mb-4">
              Have a Project in Mind?
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-gray-600 mb-8 max-w-lg mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology.
            </Typography>
            <Button
              to="/contact"
              variant={Variant.Primary}
              size={Size.Medium}
              className="px-8 py-3"
              ariaLabel=""
            >
              Get In Touch
            </Button>
          </motion.section>

          {/* Footer Text */}
          {work.footerText && (
            <motion.footer variants={containerVariants} className="text-center mt-12">
              <Typography variant={TypographyVariant.P} className="text-gray-500">
                {work.footerText}
              </Typography>
            </motion.footer>
          )}
        </div>
      </motion.main>
    </>
  );
};

export default memo(WorkPage);