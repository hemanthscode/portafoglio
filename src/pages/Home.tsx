import { memo } from 'react';
import { motion } from 'framer-motion';
import HeroGeometric from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import WorkTimeline from '@/components/organisms/Work';
import Contact from '@/components/organisms/Contact';
import { containerVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hemanth Sayimpu | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Hemanth Sayimpu, a full-stack developer crafting seamless digital experiences with React, TypeScript, and modern technologies."
        />
        <meta name="keywords" content="portfolio, developer, react, typescript, full-stack" />
        <meta name="author" content="Hemanth Sayimpu" />
        <meta property="og:title" content="Hemanth Sayimpu | Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Hemanth Sayimpu, showcasing innovative web projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={`flex flex-col w-full bg-background ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-label="Home page"
      >
        <HeroGeometric />
        <About />
        <WorkTimeline />
        <Contact />
      </motion.div>
    </>
  );
};

export default memo(Home);

/* Changes and Best Practices:
- Added Helmet for SEO meta tags and Open Graph data.
- Used containerPadding and containerVariants from utils/.
- Accessibility: role="main" and aria-label for screen readers.
- Performance: Memoized component to prevent re-renders.
- Testing: Test organism rendering, SEO tags, and animations.
- Deployment: Optimized for Vercel with static meta tags.
*/