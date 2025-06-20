import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Book } from 'lucide-react';
import Button from '@/components/atoms/Button';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { isValidUrl } from '@/utils/helpers';
import { cardVariants } from '@/utils/animations';
import { projectCardStyles, cardStyles } from '@/utils/styles';
import { Project, Size, Variant, TypographyVariant } from '@/utils/types';
import clsx from 'clsx';

interface ProjectCardProps {
  project: Project;
  cardType: 'image' | 'content';
  className?: string;
}

// Enhanced with focus management and stricter URL validation
const ProjectCard = ({ project, cardType, className }: ProjectCardProps) => {
  const isImageCard = useMemo(() => cardType === 'image', [cardType]);

  if (!project) {
    console.warn('ProjectCard requires a valid project prop');
    return null;
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.04 }}
      className={clsx(projectCardStyles.base, cardStyles.base, className)}
      role="listitem"
      tabIndex={0}
      aria-labelledby={`project-card-${project.id}`}
      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.querySelector('a')?.click()} // Added for keyboard navigation
    >
      {isImageCard && project.image && (
        <Link to={project.projectPageUrl} aria-label={`View details of ${project.title}`}>
          <LazyImage
            src={project.image}
            alt={`${project.title} preview`}
            className={projectCardStyles.image}
            sizes="(max-width: 475px) 100vw, (max-width: 640px) 50vw, 33vw"
          />
        </Link>
      )}
      <div className={projectCardStyles.content}>
        <Typography
          variant={TypographyVariant.H3}
          id={`project-card-${project.id}`}
          className={projectCardStyles.title}
          role="heading"
          aria-level={3}
        >
          <Link to={project.projectPageUrl} className={projectCardStyles.titleLink}>
            {project.title}
          </Link>
        </Typography>
        <Typography variant={TypographyVariant.P} className={projectCardStyles.description}>
          {project.description}
        </Typography>
        <div className={projectCardStyles.techTags}>
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className={projectCardStyles.techTag} aria-label={`Technology: ${tech}`}>
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className={projectCardStyles.moreTag}>+{project.tech.length - 3}</span>
          )}
        </div>
        <div className={projectCardStyles.buttonContainer}>
          {isValidUrl(project.githubUrl) && (
            <Button
              href={project.githubUrl}
              variant={Variant.Outline}
              size={Size.Small}
              ariaLabel={`View ${project.title} code on GitHub`}
              className="flex-1 min-w-[100px]"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Github className="w-4 h-4" />}
            >
              Code
            </Button>
          )}
          {isValidUrl(project.mediumPostUrl) && (
            <Button
              href={project.mediumPostUrl}
              variant={Variant.Outline}
              size={Size.Small}
              ariaLabel={`Read Medium post about ${project.title}`}
              className="flex-1 min-w-[100px]"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Book className="w-4 h-4" />}
            >
              Post
            </Button>
          )}
          <Button
            to={project.projectPageUrl}
            variant={Variant.Primary}
            size={Size.Small}
            ariaLabel={`View details of ${project.title}`}
            className="flex-1 min-w-[100px]"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);