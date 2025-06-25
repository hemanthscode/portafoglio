import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A modern e-commerce platform with advanced filtering and search.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://project-one.example.com',
  },
  {
    title: 'Project Two',
    description: 'A real-time chat application with end-to-end encryption.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/yourusername/project-two',
    live: 'https://project-two.example.com',
  },
  {
    title: 'Project Three',
    description: 'A dashboard for visualizing complex datasets.',
    image: 'https://via.placeholder.com/600x400',
    github: 'https://github.com/yourusername/project-three',
    live: 'https://project-three.example.com',
  },
];

const Work = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground"
        >
          My Work
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;