import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { Github } from 'lucide-react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import type { AboutProps } from '@/utils/types';

/**
 * Responsive About section component for personal information and skills.
 * @param {AboutProps} props - Component props.
 */
const About = ({
  title = 'About Me',
  description = 'I’m a passionate web developer and Python enthusiast with a knack for building responsive, user-friendly applications and efficient backend solutions.',
  skills = ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'FastAPI'],
  githubUrl = 'https://github.com',
}: Partial<AboutProps>) => {
  const validatedProps: AboutProps = {
    title,
    description,
    skills,
    githubUrl,
  };

  const memoizedSkills = useMemo(() => validatedProps.skills, [validatedProps.skills]);

  return (
    <section
      className={`min-h-[calc(100vh-4rem)] w-full flex items-center justify-center section-gradient ${containerPadding} py-8 sm:py-12 lg:py-16`}
      role="region"
      aria-labelledby="about-title"
    >
      <motion.div
        className="text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h2" id="about-title" className="mb-4 sm:mb-6">
          {validatedProps.title}
        </Typography>
        <motion.div variants={itemVariants}>
          <Typography variant="p" className="max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {validatedProps.description}
          </Typography>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-1 sm:gap-2 lg:gap-3" variants={itemVariants}>
          {memoizedSkills.length > 0 ? (
            memoizedSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gray-100 text-accent text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {skill}
              </span>
            ))
          ) : (
            <Typography variant="span" className="text-accent">
              No skills listed
            </Typography>
          )}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            href={validatedProps.githubUrl}
            variant="primary"
            size="md"
            ariaLabel="Visit my GitHub profile"
            className="group w-full sm:w-auto"
          >
            <span className="flex items-center gap-1 sm:gap-2 lg:gap-3">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              View GitHub
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(About);