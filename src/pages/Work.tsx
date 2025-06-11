import { memo } from 'react';
import WorkSection from '@/components/organisms/Work';
import { defaultWorkProps } from '@/utils/config';
import type { WorkProps } from '@/utils/types';

/**
 * Responsive Work page component rendering the Work section.
 * @param {WorkProps} props - Component props.
 */
const Work = (props: WorkProps) => {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      <WorkSection {...defaultWorkProps} {...props} />
    </div>
  );
};

export default memo(Work);