import { memo } from "react";
import Hero from "@/components/organisms/Hero";
import AboutSection from "@/components/organisms/About";
import WorkSection from "@/components/organisms/Work";
import ContactSection from "@/components/organisms/Contact";
import {
  defaultAboutProps,
  defaultContactProps,
  defaultHeroProps,
  defaultWorkProps,
} from "@/utils/config";

/**
 * Responsive Home page component combining Hero, About, Work, and Contact sections.
 */
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero {...defaultHeroProps} />
      <AboutSection {...defaultAboutProps} />
      <WorkSection {...defaultWorkProps} />
      <ContactSection {...defaultContactProps} />
    </div>
  );
};

export default memo(Home);
