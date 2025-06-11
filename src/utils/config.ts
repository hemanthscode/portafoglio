import type { AboutProps, ContactProps, FooterProps, HeroProps, NavItem, WorkProps } from './types';

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const theme = {
  colors: {
    primary: '#1E3A8A',
    'primary-dark': '#1E3A8A',
    secondary: '#F59E0B',
    'secondary-dark': '#D97706',
    accent: '#6B7280',
    background: '#F9FAFB',
    text: '#111827',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
  },
};

export const defaultHeroProps: HeroProps = {
name: 'Hemanth',
headline: 'Shaping the Modern Web',
subheadline: 'Harnessing design, code, and a bit of AI to create human-friendly experiences.',
githubUrl: 'https://github.com/hemanthscode',
ctaText: 'Let’s Chat',
ctaLink: '/contact',
};

export const defaultAboutProps: AboutProps = {
title: 'About Me',
description: 'As a dedicated learner, I thrive on turning ideas into functional web applications. I’m excited to join a collaborative environment where I can grow as a developer, contribute to impactful projects, and refine my skills in frontend and backend development.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'MongoDB'],
githubUrl: 'https://github.com/hemanthscode',
};

export const defaultContactProps: ContactProps = {
  title: 'Get in Touch',
  description: 'Interested in working together? Send me a message or request my resume.',
  email: 'hemanths7.dev@gmail.com',
};

export const defaultWorkProps: WorkProps = {
  title: 'My Projects',
  projects: [
    {
      title: 'React Portfolio',
      description: 'A responsive portfolio built with React, TypeScript, and Tailwind CSS.',
      githubUrl: 'https://github.com/hemanthscode/react-portfolio',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Python API',
      description: 'A RESTful API built with FastAPI and Python.',
      githubUrl: 'https://github.com/hemanthscode/python-api',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
    },
  ],
};

export const defaultFooterProps: FooterProps = {
  githubUrl: 'https://github.com/hemanthscode',
  linkedinUrl: 'https://www.linkedin.com/in/hemanthcodes/',
  copyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
};