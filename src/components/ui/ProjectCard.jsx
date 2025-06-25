import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, github, live }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
      className="bg-background border border-border rounded-lg overflow-hidden"
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-48 sm:h-56 object-cover"
        loading="lazy"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">{description}</p>
        <div className="mt-4 flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="text-muted-foreground hover:text-primary active:text-primary/80 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live demo`}
            className="text-muted-foreground hover:text-primary active:text-primary/80 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;