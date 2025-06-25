import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../sections/About';
import Work from '../sections/Work';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            Hi, I'm <span className="text-primary">Your Name</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A passionate frontend developer creating modern, accessible, and performant web applications.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/work"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-background bg-primary rounded-md hover:bg-primary/90 active:bg-primary/80 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-background active:bg-primary/80 transition-colors"
            >
              Contact Me
            </Link>
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