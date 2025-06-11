import { motion } from 'framer-motion';
import { memo } from 'react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Github } from 'lucide-react';
import { cardVariants } from '@/utils/animations';
import type { ProjectCardProps } from '@/utils/types';

/**
 * Responsive project card component for displaying project details.
 * @param {ProjectCardProps} props - Component props.
 */
const ProjectCard = ({ title, description, githubUrl, tags }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-background p-4 sm:p-6 rounded-lg shadow-md h-full flex flex-col justify-between max-w-sm mx-auto lg:max-w-full"
      variants={cardVariants}
      whileHover="hover"
      role="article"
      aria-labelledby={`project-${title}`}
    >
      <div>
        <Typography variant="h3" className="mb-2 sm:mb-3" id={`project-${title}`}>
          {title}
        </Typography>
        <Typography variant="p" className="mb-3 sm:mb-4 line-clamp-3">
          {description}
        </Typography>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 text-accent text-xs sm:text-sm rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <Typography variant="span" className="text-accent">
              No tags
            </Typography>
          )}
        </div>
      </div>
      <Button
        href={githubUrl}
        variant="secondary"
        size="md"
        ariaLabel={`View ${title} on GitHub`}
        className="mt-auto w-full sm:w-auto"
      >
        <Icon icon={Github} className="mr-1 sm:mr-2" ariaHidden={false} />
        View on GitHub
      </Button>
    </motion.div>
  );
};

export default memo(ProjectCard);