import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { getCategoryIcon } from '@/utils/helpers';
import { cardVariants, containerVariants, overlayVariants } from '@/utils/animations';
import { cardStyles } from '@/utils/styles';
import type { AboutCard, Project } from '@/utils/types';
import { TypographyVariant, Size } from '@/utils/types';

interface CardGridProps<T> {
  items: T[];
  type: 'project' | 'about';
  getSizeClasses?: (size: Size) => string;
}

const CardGrid = <T extends AboutCard | Project>({
  items,
  type,
  getSizeClasses,
}: CardGridProps<T>) => {
  return (
    <motion.div
      className={`grid grid-cols-1 ${
        type === 'about'
          ? 'md:grid-cols-4'
          : 'sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'
      } gap-4 lg:gap-6 auto-rows-auto`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`${cardStyles.base} ${
            type === 'about' && getSizeClasses
              ? getSizeClasses((item as AboutCard).size)
              : ''
          }`}
          role="article"
          aria-labelledby={`card-${item.id}`}
        >
          {type === 'project' ? (
            <div className="relative h-full flex flex-col p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-2 mb-3 px-2.5 py-1 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
                <Icon
                  icon={getCategoryIcon((item as Project).category)}
                  className="w-4 h-4"
                />
                <Typography
                  variant={TypographyVariant.Span}
                  className="text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  {(item as Project).category}
                </Typography>
              </div>
              <Typography
                variant={TypographyVariant.H3}
                id={`card-${item.id}`}
                className="mb-2"
              >
                {(item as Project).title}
              </Typography>
              <Typography variant={TypographyVariant.P} className="flex-grow">
                {(item as Project).description}
              </Typography>
            </div>
          ) : (
            <div
              className={`${
                (item as AboutCard).textColor
              } h-full flex flex-col justify-between relative z-10 p-6`}
            >
              {(item as AboutCard).icon && (
                <Icon
                  icon={(item as AboutCard).icon!}
                  className={
                    (item as AboutCard).size === Size.Large ? 'w-8 h-8' : 'w-6 h-6'
                  }
                />
              )}
              <Typography
                variant={(item as AboutCard).size === Size.Large ? TypographyVariant.H2 : TypographyVariant.H3}
                id={`card-${item.id}`}
                className="mb-2"
              >
                {(item as AboutCard).title}
              </Typography>
              <Typography variant={TypographyVariant.P}>
                {(item as AboutCard).content}
              </Typography>
            </div>
          )}
          <motion.div
            className={cardStyles.gradient}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(CardGrid);