import { memo } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/organisms/Contact";
import { containerVariants } from "@/utils/animations";
import { contactPageStyles } from "@/utils/styles";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";

/**
 * The Contact page wrapping the Contact organism with SEO meta tags.
 * @returns A full-height page with centered contact content.
 */
const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Hemanth Sayimpu</title>
        <meta
          name="description"
          content="Get in touch with Hemanth Sayimpu to collaborate on your next project."
        />
        <meta name="keywords" content="contact, developer, portfolio" />
        <meta property="og:title" content="Contact | Hemanth Sayimpu" />
        <meta
          property="og:description"
          content="Reach out to Hemanth Sayimpu for project discussions or opportunities."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://hemanthscode.github.io/contact"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1516321310762-479437144403"
        />
      </Helmet>
      <motion.div
        className={clsx(contactPageStyles.base, "bg-background")}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="contact-page-title"
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default memo(ContactPage);
