import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import ProjectCard from '@/components/molecules/ProjectCard';
import Typography from '@/components/atoms/Typography';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import type { WorkProps } from '@/utils/types';

/**
 * Work section component for displaying projects.
 * @param {WorkProps} props - Component props.
 * @param {string} props.title - Section title.
 * @param {Project[]} props.projects - List of projects.
 */
const Work = ({ title = 'My Projects', projects = [] }: Partial<WorkProps>) => {
  const validatedProps: WorkProps = { title, projects };
  const memoizedProjects = useMemo(() => validatedProps.projects, [validatedProps.projects]);

  return (
    <section
      className={`min-h-[calc(100vh-4rem)] w-full flex items-center justify-center section-gradient ${containerPadding} py-8 sm:py-12`}
      role="region"
      aria-labelledby="work-title"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h2" className="mb-6 sm:mb-8 text-center" id="work-title">
          {validatedProps.title}
        </Typography>
        <motion.div className="grid gap-6 sm:gap-8 md:grid-cols-2" variants={itemVariants}>
          {memoizedProjects.length > 0 ? (
            memoizedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                tags={project.tags}
              />
            ))
          ) : (
            <Typography variant="p" className="text-center">
              No projects available
            </Typography>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Work);