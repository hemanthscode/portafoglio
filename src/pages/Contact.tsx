import { memo } from 'react';
import Contact from '@/components/organisms/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      <Contact />
    </div>
  );
};

export default memo(ContactPage);