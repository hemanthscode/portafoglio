import { memo } from "react";
import { motion } from "framer-motion";
import HeroGeometric from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import WorkTimeline from "@/components/organisms/Work";
import Contact from "@/components/organisms/Contact";
import { containerVariants } from "@/utils/animations";
import { homeStyles } from "@/utils/styles";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";

/**
 * The home page component composing Hero, About, WorkTimeline, and Contact organisms.
 * @returns A full-width page with sequential sections and SEO meta tags.
 */
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hemanth Sayimpu | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Hemanth Sayimpu, a full-stack developer crafting seamless digital experiences with React, TypeScript, and modern technologies."
        />
        <meta
          name="keywords"
          content="portfolio, developer, react, typescript, full-stack"
        />
        <meta name="author" content="Hemanth Sayimpu" />
        <meta property="og:title" content="Hemanth Sayimpu | Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Hemanth Sayimpu, showcasing innovative web projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hemanthscode.github.io" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={clsx(homeStyles.base, "bg-background")}
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
