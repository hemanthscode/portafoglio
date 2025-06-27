import { motion } from 'framer-motion';
import { skills } from '@/utils/constants';
import { memo } from 'react';

const About = () => (
  <section className="py-16 bg-background" id="about">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed mb-12"
      >
        I&apos;m Hemanth, a frontend developer with over 10 years of experience building scalable, accessible web applications. I specialize in React, TypeScript, and modern CSS frameworks.
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="bg-muted rounded-lg p-4 text-center text-sm font-medium text-foreground hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            tabIndex={0}
            role="listitem"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(About);