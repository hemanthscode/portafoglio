import type { LucideIcon } from 'lucide-react';
import type { ReactNode, ComponentType } from 'react';

export interface Theme {
  colors: {
    primary: string;
    'primary-dark': string;
    secondary: string;
    'secondary-dark': string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    fontFamily: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
    };
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
  as?: ComponentType<any>;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface IconProps {
  icon: LucideIcon;
  className?: string;
  ariaHidden?: boolean;
}

export interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  id?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
}

export interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export interface AboutProps {
  title: string;
  description: string;
  skills: string[];
  githubUrl: string;
}

export interface ContactProps {
  title: string;
  description: string;
  email: string;
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
  ctaLink: string;
  logo?: ReactNode; // Added logo prop
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandName?: string;
  logo?: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
}

export interface WorkProps {
  title: string;
  projects: Project[];
}