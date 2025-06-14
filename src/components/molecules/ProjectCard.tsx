import { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import LazyImage from '@/components/atoms/LazyImage';
import Typography from '@/components/atoms/Typography';
import { getCategoryIcon } from '@/utils/helpers';
import { cardVariants, badgeVariants } from '@/utils/animations';
import { cardStyles } from '@/utils/styles';
import type { ProjectCardProps } from '@/utils/types';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const ProjectCard = ({ project, className = '', cardType = 'image' }: ProjectCardProps & { cardType?: 'image' | 'content' }) => {
  const { title, description, tech, image, githubUrl, live, category, featured } = project;

  if (cardType === 'image') {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
        className={`${cardStyles.base} flex flex-col h-full bg-white rounded-2xl overflow-hidden ${className}`}
        aria-labelledby={`project-${project.id}`}
      >
        <div className="relative flex-shrink-0">
          <LazyImage
            src={image}
            alt={`${title} project screenshot`}
            className="aspect-[4/3] w-full object-cover rounded-t-2xl"
          />
          {featured && (
            <motion.div
              variants={badgeVariants}
              className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-full"
            >
              Featured
            </motion.div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon={getCategoryIcon(category)} className="w-5 h-5 text-accent" />
            <Typography variant={TypographyVariant.Span} className="text-sm font-medium text-accent uppercase">
              {category}
            </Typography>
          </div>
          <Typography variant={TypographyVariant.H3} id={`project-${project.id}`} className="mb-2 text-text">
            {title}
          </Typography>
          <Typography variant={TypographyVariant.P} className="mb-4 text-accent flex-grow">
            {description}
          </Typography>
          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <Button
                href={githubUrl}
                variant={Variant.Outline}
                size={Size.Small}
                ariaLabel={`View ${title} on GitHub`}
                className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
              >
                GitHub
              </Button>
            )}
            {live !== '#' && (
              <Button
                href={live}
                variant={Variant.Primary}
                size={Size.Small}
                ariaLabel={`View live demo of ${title}`}
                className="bg-primary text-white hover:bg-primary-dark"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
      className={`${cardStyles.base} flex flex-col h-full bg-white rounded-2xl p-6 ${className}`}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon icon={getCategoryIcon(category)} className="w-5 h-5 text-accent" />
        <Typography variant={TypographyVariant.Span} className="text-sm font-medium text-accent uppercase">
          {category}
        </Typography>
      </div>
      <Typography variant={TypographyVariant.H2} id={`project-${project.id}`} className="mb-3 text-text">
        {title}
      </Typography>
      <Typography variant={TypographyVariant.P} className="mb-4 text-accent text-lg flex-grow">
        {description}
      </Typography>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 text-text text-sm font-medium rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <Button
            href={githubUrl}
            variant={Variant.Outline}
            size={Size.Small}
            ariaLabel={`View ${title} on GitHub`}
            className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
          >
            GitHub
          </Button>
        )}
        {live !== '#' && (
          <Button
            href={live}
            variant={Variant.Primary}
            size={Size.Small}
            ariaLabel={`View live demo of ${title}`}
            className="bg-primary text-white hover:bg-primary-dark"
          >
            Live Demo
          </Button>
        )}
      </div>
    </motion.article>
  );
};

export default memo(ProjectCard);