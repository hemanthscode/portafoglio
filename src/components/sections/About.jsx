import { motion } from 'framer-motion';

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Next.js'];

const About = () => {
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
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed"
        >
          I'm a frontend developer with over 10 years of experience building scalable, accessible web applications. I specialize in React, JavaScript, and modern CSS frameworks, with a passion for creating delightful user experiences.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
              className="bg-muted rounded-lg p-4 sm:p-5 text-center text-sm sm:text-base font-medium text-foreground shadow-sm hover:bg-muted/80 transition-colors duration-200"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;