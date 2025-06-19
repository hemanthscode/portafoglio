import { TypographyVariant, Variant, Size } from './types';

export const containerPadding = 'px-4 sm:px-6 lg:px-8';

export const linkStyles = 'text-text hover:text-primary transition-colors duration-200';

export const cardStyles = {
  base: 'bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300',
  gradient: 'bg-gradient-to-br from-white/20 to-transparent text-red-600',
  detail: 'bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8',
};

export const buttonStyles = {
  base: 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-action-manipulation',
  variants: {
    [Variant.Primary]: 'bg-primary text-white hover:bg-primary-dark',
    [Variant.Secondary]: 'bg-secondary text-white hover:bg-secondary-dark',
    [Variant.Outline]: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  },
  sizes: {
    [Size.Small]: 'px-3 py-1.5 text-sm',
    [Size.Medium]: 'px-4 py-2 text-base',
    [Size.Large]: 'px-6 py-3 text-lg',
  },
};

export const typographyStyles: Record<
  TypographyVariant,
  { component: keyof JSX.IntrinsicElements; className: string }
> = {
  [TypographyVariant.H1]: {
    component: 'h1',
    className: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text',
  },
  [TypographyVariant.H2]: {
    component: 'h2',
    className: 'text-3xl sm:text-4xl font-bold tracking-tight text-text',
  },
  [TypographyVariant.H3]: {
    component: 'h3',
    className: 'text-2xl sm:text-3xl font-semibold tracking-tight text-text',
  },
  [TypographyVariant.P]: {
    component: 'p',
    className: 'text-base sm:text-lg leading-relaxed text-accent',
  },
  [TypographyVariant.Span]: {
    component: 'span',
    className: 'text-base text-backround',
  },
};
