import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { getCategoryIcon, isValidUrl } from '@/utils/helpers';
import { cardVariants, badgeVariants } from '@/utils/animations';
import { cardStyles } from '@/utils/styles';
import { type ProjectCardProps, TypographyVariant, Variant, Size } from '@/utils/types';

const ProjectCard = ({
  project,
  cardType = 'content',
  className = '',
  role = 'listitem',
}: ProjectCardProps) => {
  const isImageCard = cardType === 'image';
  
  return (
    <motion.div
      className={`${cardStyles.base} overflow-hidden ${className} h-full flex flex-col`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      role={role}
      aria-labelledby={`project-${project.id}`}
    >
      {isImageCard && project.image && (
        <LazyImage
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      )}
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <motion.div
          className="flex items-center gap-2 mb-3 px-2.5 py-1 bg-gray-100 rounded-full w-fit"
          variants={badgeVariants}
          whileHover="hover"
        >
          <Icon icon={getCategoryIcon(project.category)} className="w-4 h-4 text-primary" aria-hidden="true" />
          <Typography
            variant={TypographyVariant.Span}
            className="text-xs font-medium text-gray-600 uppercase tracking-wider"
          >
            {project.category}
          </Typography>
        </motion.div>
        
        <Typography
          variant={TypographyVariant.H3}
          id={`project-${project.id}`}
          className="text-lg sm:text-xl font-bold text-text mb-2 line-clamp-2"
        >
          {project.title}
        </Typography>
        
        <Typography
          variant={TypographyVariant.P}
          className="text-sm sm:text-base text-accent mb-4 flex-grow line-clamp-3"
        >
          {project.description}
        </Typography>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>
        
        <div className={`flex gap-2 mt-auto ${
          isImageCard 
            ? 'flex-col sm:flex-row' 
            : 'flex-col min-[400px]:flex-row sm:flex-col lg:flex-row'
        }`}>
          {isValidUrl(project.projectPageUrl) && (
            <Button
              to={project.projectPageUrl}
              variant={Variant.Primary}
              size={Size.Small}
              ariaLabel={`View details of ${project.title}`}
              className="flex-1 min-h-[40px]"
            >
              <ExternalLink className="w-4 h-4 mr-1.5" />
              <span className="hidden xs:inline">Project Details</span>
              <span className="xs:hidden">Details</span>
            </Button>
          )}
          
          {isValidUrl(project.mediumPostUrl) && (
            <Button
              href={project.mediumPostUrl}
              variant={Variant.Secondary}
              size={Size.Small}
              ariaLabel={`Read the full story of ${project.title} on Medium`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[40px]"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              <span className="hidden xs:inline">Read Article</span>
              <span className="xs:hidden">Article</span>
            </Button>
          )}
          
          {isValidUrl(project.githubUrl) && (
            <Button
              href={project.githubUrl}
              variant={Variant.Outline}
              size={Size.Small}
              ariaLabel={`View ${project.title} code on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[40px]"
            >
              <Github className="w-4 h-4 mr-1.5" />
              <span className="hidden xs:inline">View Code</span>
              <span className="xs:hidden">Code</span>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);