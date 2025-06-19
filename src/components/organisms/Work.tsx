import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Typography from '@/components/atoms/Typography';
import ProjectCard from '@/components/molecules/ProjectCard';
import { containerVariants } from '@/utils/animations';
import { workTimelineStyles, cardStyles } from '@/utils/styles';
import { TypographyVariant } from '@/utils/types';
import clsx from 'clsx';

const WorkTimeline = () => {
  const { work } = usePortfolioStore();

  return (
    <motion.section
      className={clsx(workTimelineStyles.base, 'bg-background')}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="work-title"
    >
      <div className={workTimelineStyles.container}>
        <motion.div className={workTimelineStyles.header} variants={containerVariants}>
          <Typography
            variant={TypographyVariant.H2}
            id="work-title"
            className={workTimelineStyles.title}
            role="heading"
            aria-level={2}
          >
            {work.title}
          </Typography>
          <Typography variant={TypographyVariant.P} className={workTimelineStyles.description}>
            {work.description}
          </Typography>
        </motion.div>

        <div className="relative" role="list">
          <div className={clsx(workTimelineStyles.timelineLine, 'z-0')} aria-hidden="true" />
          {work.projects.length > 0 ? (
            work.projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={clsx(
                  workTimelineStyles.projectContainer,
                  index % 2 === 0 ? 'xs:justify-end' : 'xs:justify-start',
                  'relative z-10'
                )}
                variants={containerVariants}
                role="listitem"
              >
                <div
                  className={clsx(
                    workTimelineStyles.projectCard,
                    index % 2 === 0 ? 'xs:pr-8' : 'xs:pl-8',
                    'relative'
                  )}
                >
                  <ProjectCard
                    project={project}
                    cardType="content"
                    className={cardStyles.base}
                  />
                </div>
                <div
                  className={clsx(
                    workTimelineStyles.timelineDot,
                    'z-20',
                    index === 0 ? 'top-6' : 'top-0'
                  )}
                  aria-hidden="true"
                />
              </motion.div>
            ))
          ) : (
            <Typography
              variant={TypographyVariant.P}
              className="text-accent text-center text-sm xs:text-base"
              role="alert"
            >
              No projects available.
            </Typography>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(WorkTimeline);