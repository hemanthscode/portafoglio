import type { LucideIcon } from 'lucide-react';
import type { ReactNode, ComponentType, ReactElement } from 'react';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
}

export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  P = 'p',
  Span = 'span',
}

export enum CardType {
  Hero = 'hero',
  Story = 'story',
  Skill = 'skill',
  Image = 'image',
  Passion = 'passion',
  Stat = 'stat',
  Philosophy = 'philosophy',
  Hobby = 'hobby',
  Adventure = 'adventure',
}

export enum ProjectCategory {
  Web = 'web',
  Mobile = 'mobile',
  AI = 'ai',
  Data = 'data',
  IoT = 'iot',
  Other = 'other',
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel: string;
  as?: ComponentType<React.HTMLProps<HTMLElement>>;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  target?: string;
  rel?: string;
  icon?: ReactNode;
}

export interface IconProps {
  icon: LucideIcon;
  className?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
}

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
  id?: string;
  role?: string;
}

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  placeholder?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  mediumPostUrl: string;
  projectPageUrl: string;
  category: ProjectCategory;
  details: {
    overview: string;
    challenges: string[];
    solutions: string[];
    impact: string;
  };
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
  cardType?: 'image' | 'content';
  role?: string;
}

export interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
  className?: string;
}

export interface AboutCard {
  id: number;
  type: CardType;
  title: string;
  subtitle?: string;
  content: string;
  bgColor: string;
  textColor: string;
  size: Size;
  icon?: LucideIcon;
}

export interface AboutProps {
  title: string;
  description: string;
  skills?: string[];
  githubUrl?: string;
  cards?: AboutCard[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface ContactProps {
  title: string;
  description: string;
  email: string;
  githubUrl?: string;
}

export interface FooterProps {
  githubUrl: string;
  linkedinUrl: string;
  copyright: string;
}

export interface HeroProps {
  name: string;
  headline: string;
  subheadline: string;
  githubUrl: string;
  ctaText: string;
  logo: ReactElement;
  ctaLink: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandName?: string;
  logo?: ReactElement;
}

export interface WorkProps {
  title: string;
  description?: string;
  projects: Project[];
  footerText?: string;
}