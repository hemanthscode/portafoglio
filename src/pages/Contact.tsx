import { memo } from 'react';
import ContactSection from '@/components/organisms/Contact';
import { defaultContactProps } from '@/utils/config';
import type { ContactProps } from '@/utils/types';

/**
 * Responsive Contact page component rendering the Contact section.
 * @param {ContactProps} props - Component props.
 */
const Contact = (props: ContactProps) => {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      <ContactSection {...defaultContactProps} {...props} />
    </div>
  );
};

export default memo(Contact);