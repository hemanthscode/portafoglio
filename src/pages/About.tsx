import { memo } from 'react';
import AboutSection from '@/components/organisms/About';
import { defaultAboutProps } from '@/utils/config';
import type { AboutProps } from '@/utils/types';

/**
 * Responsive About page component rendering the About section.
 * @param {AboutProps} props - Component props.
 */
const About = (props: AboutProps) => {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      <AboutSection {...defaultAboutProps} {...props} />
    </div>
  );
};

export default memo(About);