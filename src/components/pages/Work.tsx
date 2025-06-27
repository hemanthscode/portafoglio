import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/utils/constants';
import { memo } from 'react';

const Work = () => (
  <section className="py-16 bg-background pt-20 pb-16" id="work">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
      >
        My Work
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(Work);