import { memo } from 'react';
import HeroGeometric from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import WorkTimeline from '@/components/organisms/Work';
import Contact from '@/components/organisms/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroGeometric />
      <About />
      <WorkTimeline />
      <Contact />
    </div>
  );
};

export default memo(Home);