import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  return (
    <div className="bg-background">
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Hi, I&apos;m <span className="text-primary">Hemanth</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-md mx-auto lg:mx-0 lg:max-w-xl leading-relaxed"
            >
              A passionate frontend developer crafting modern, accessible, and high-performance web applications with React, TypeScript, and Tailwind CSS.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
            >
              <Link
                to="work"
                className="group btn-primary px-6 py-3 text-sm md:text-base font-semibold rounded-lg hover:scale-105 transition-transform"
                aria-label="View Hemanth's projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="contact"
                className="btn-secondary px-6 py-3 text-sm md:text-base font-semibold rounded-lg hover:scale-105 transition-transform"
                aria-label="Contact Hemanth"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:flex flex-col items-center space-y-4"
          >
            <div className="relative">
              <div className="w-72 h-72 flex items-center justify-center">
                {/* Morphing shapes */}
                <motion.div
                  animate={{
                    borderRadius: ['50%', '25%', '50%', '40%', '50%'],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-64 h-64 border-2 border-primary/20"
                />
                <motion.div
                  animate={{
                    borderRadius: ['40%', '50%', '30%', '50%'],
                    rotate: [0, -120, -240, -360],
                    scale: [1, 0.8, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-44 h-44 border-2 border-primary/30"
                />
                {/* Pulsing center */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center relative z-10"
                >
                  <Target className="w-10 h-10 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;