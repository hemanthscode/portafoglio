import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { memo } from 'react';

const ProjectCard = ({ title, description, image, github, live }: Project) => {
  return (
    <motion.article
      whileHover={{ y: -5, boxShadow: 'var(--shadows-lg)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-background border border-border rounded-lg overflow-hidden flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      tabIndex={0}
      role="article"
    >
      <div className="p-4">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground flex-grow">{description}</p>
        <nav className="mt-4 flex gap-4" aria-label={`Links for ${title}`}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${title} on GitHub`}
            aria-label={`View ${title} on GitHub`}
            className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${title} live demo`}
            aria-label={`View ${title} live demo`}
            className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </motion.article>
  );
};

export default memo(ProjectCard);