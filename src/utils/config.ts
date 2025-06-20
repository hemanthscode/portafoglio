import { create } from 'zustand';
import { Code, Cpu, Zap, Users, Wrench, Brush, Clock, Lightbulb, Book } from 'lucide-react';
import type { AboutProps, ContactProps, FooterProps, HeroProps, NavItem, WorkProps } from './types';
import { CardType, Size, ProjectCategory } from './types';
import React from 'react';
import Portfolio from '@/assets/Portfolio.png';

interface PortfolioState {
  hero: HeroProps;
  about: AboutProps;
  work: WorkProps;
  contact: ContactProps;
  footer: FooterProps;
  navItems: NavItem[];
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  hero: {
    name: 'Hemanth Sayimpu',
    headline: 'Crafting Seamless Digital Experiences',
    subheadline: 'Building intuitive, scalable web applications with modern technologies and a passion for innovation.',
    githubUrl: 'https://github.com/hemanthscode',
    ctaText: 'Explore My Work',
    logo: React.createElement('img', { src: '/together.svg', alt: 'Portfolio Logo', className: 'h-10 w-auto' }),
    ctaLink: '/work',
  },
  about: {
    title: 'About Me',
    description:
      'I’m a full-stack developer with a passion for creating user-centric web applications. My journey blends creativity, technical expertise, and a drive to solve real-world problems through code.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'FastAPI', 'MongoDB'],
    githubUrl: 'https://github.com/hemanthscode',
    cards: [
      {
        id: 1,
        type: CardType.Hero,
        title: 'Hemanth Sayimpu',
        subtitle: 'Full-Stack Developer & Python Enthusiast',
        content:
          'Every project is a new opportunity to grow — not just as a developer, but as a communicator, a listener, and a better problem solver. I approach challenges with curiosity and patience, always aiming to deliver thoughtful, meaningful solutions that last.',
        bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
        textColor: 'text-white',
        size: Size.Large,
        icon: Code,
      },
      {
        id: 2,
        type: CardType.Story,
        title: 'Syntax and Sparks',
        content:
          'A random elective introduced me to logic gates and algorithms. That quiet fascination with how everything connects—that was my entry into programming, and it hasn’t faded since.',
        bgColor: 'bg-yellow-50',
        textColor: 'text-gray-900',
        size: Size.Medium,
        icon: Zap,
      },
      {
        id: 3,
        type: CardType.Skill,
        title: 'Frontend Expertise',
        content:
          'I enjoy crafting smooth, responsive interfaces with React and Tailwind. My goal is to keep things simple, usable, and fast across devices.',
        bgColor: 'bg-blue-50',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Code,
      },
      {
        id: 4,
        type: CardType.Skill,
        title: 'Backend Proficiency',
        content:
          'With Node.js and FastAPI, I create APIs that are secure and reliable. MongoDB helps me keep things flexible and easy to work with.',
        bgColor: 'bg-green-50',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Cpu,
      },
      {
        id: 5,
        type: CardType.Stat,
        title: '60+',
        content: 'Git Commits  — many more to push',
        bgColor: 'bg-orange-100',
        textColor: 'text-gray-900',
        size: Size.Medium,
        icon: Users,
      },
      {
        id: 6,
        type: CardType.Passion,
        title: 'UI/UX Explorer',
        content: 'I spend hours studying beautiful interfaces, then try to recreate that magic in code. Design and development should dance together seamlessly.',
        bgColor: 'bg-rose-50',
        textColor: 'text-gray-900',
        size: Size.Large,
        icon: Wrench,
      },
      {
        id: 7,
        type: CardType.Adventure,
        title: 'Perpetual Learner',
        content: 'Tech moves fast, and I love keeping up. Whether it\'s a new framework or design pattern, learning keeps the work exciting.',
        bgColor: 'bg-slate-100',
        textColor: 'text-gray-900',
        size: Size.Large,
        icon: Brush,
      },
      {
        id: 8,
        type: CardType.Story,
        title: 'Code Review Enthusiast',
        content: 'I love the collaborative dance of code reviews. They\'re not about finding flaws—they\'re about sharing knowledge and building better software together.',
        bgColor: 'bg-pink-50',
        textColor: 'text-gray-900',
        size: Size.Medium,
        icon: Clock,
      },
      {
        id: 9,
        type: CardType.Stat,
        title: '3+',
        content: 'Projects Completed',
        bgColor: 'bg-orange-100',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Book,
      },
      {
        id: 10,
        type: CardType.Adventure,
        title: 'Built for Fun (and Growth)',
        content:
          'From productivity tools to UI experiments, I love building side projects that challenge my thinking and stretch what I know.',
        bgColor: 'bg-lime-50',
        textColor: 'text-gray-900',
        size: Size.Large,
        icon: Lightbulb,
      },
    ],
    cta: {
      title: 'Ready to Collaborate?',
      description: 'Let’s build something extraordinary together.',
      buttonText: 'Know More',
      buttonLink: '/about',
    },
  },
  work: {
    title: 'My Projects',
    description: 'A curated selection of projects showcasing my expertise in modern web development and innovative technologies.',
    projects: [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'A high-performance portfolio platform showcasing technical projects and professional capabilities with modern animations.',
        tech: ['React 18', 'Vite', 'Framer Motion', 'React Scroll', 'ESLint'],
        image: '../../public/Portfolio.png',
        githubUrl: 'https://github.com/hemanthscode/portfolio',
        mediumPostUrl: 'https://medium.com/@hemanthscode/portfolio-website-build-journey',
        projectPageUrl: '/project/1',
        category: ProjectCategory.Web,
        details: {
          overview: 'A high-performance portfolio platform engineered to showcase technical projects and professional capabilities with responsive design and fluid animations.',
          challenges: ['Optimizing build performance for 90% faster load times', 'Implementing fluid animations and micro-interactions', 'Creating intuitive navigation with comprehensive icon system', 'Maintaining code quality standards'],
          solutions: ['Architected responsive design using React 18 and Vite build optimization', 'Implemented fluid animations with Framer Motion library for enhanced user engagement', 'Integrated React Scroll for seamless navigation experience', 'Configured ESLint for code quality and development best practices'],
          impact: 'Achieved 90% faster load times with Vite optimization and enhanced user engagement through fluid animations and seamless UX.',
        },
      },
      {
        id: 2,
        title: 'UserVault – Authentication Microservice',
        description: 'Enterprise-grade authentication service providing secure user management for web applications with JWT and bcrypt security.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'REST API'],
        image: '../../public/UserVault.png',
        githubUrl: 'https://github.com/hemanthscode/user-vault',
        mediumPostUrl: 'https://medium.com/@hemanthscode/uservault-authentication-microservice',
        projectPageUrl: '/project/2',
        category: ProjectCategory.Other,
        details: {
          overview: 'Enterprise-grade authentication microservice designed to provide secure user management and scalable REST API authentication for web applications.',
          challenges: ['Implementing industry-standard security protocols', 'Creating middleware-based route protection system', 'Building modular architecture for easy integration', 'Developing comprehensive API documentation'],
          solutions: ['Implemented JWT token management with bcrypt password hashing and salt rounds', 'Created middleware-based route protection for secure access control', 'Built modular backend architecture supporting multiple frontend integrations', 'Developed comprehensive API documentation using Postman'],
          impact: 'Provides enterprise-grade security for web applications with scalable authentication service supporting multiple frontend integrations.',
        },
      },
      {
        id: 3,
        title: 'Eunoia: AI-Driven Mental Health Chatbot',
        description: 'AI-powered chatbot using SpaCy and Hugging Face for empathetic, context-aware mental health support responses.',
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'SpaCy', 'Hugging Face', 'OAuth2', 'AES-256'],
        image: '../../public/Eunoia.png',
        githubUrl: 'https://github.com/hemanthscode/eunoia',
        mediumPostUrl: 'https://medium.com/@hemanthscode/eunoia-ai-mental-health-chatbot',
        projectPageUrl: '/project/3',
        category: ProjectCategory.AI,
        details: {
          overview: 'An AI-powered mental health chatbot designed to provide empathetic, context-aware responses using advanced NLP technologies for mental health support.',
          challenges: ['Designing empathetic AI responses for mental health context', 'Building responsive interface for seamless user interactions', 'Implementing secure backend for sensitive user data', 'Ensuring data privacy with enterprise-grade encryption'],
          solutions: ['Utilized SpaCy and Hugging Face for context-aware AI responses', 'Built responsive interface with React.js and Tailwind CSS', 'Implemented secure backend with Node.js, Express.js, and MongoDB', 'Ensured data privacy with OAuth2 authentication and AES-256 encryption'],
          impact: 'Provides empathetic mental health support through AI-driven conversations while maintaining highest standards of data privacy and security.',
        },
      },
    ],
    footerText: 'Crafted with ❤️ using React, Tailwind CSS, and Framer Motion',
  },
  contact: {
    title: 'Get in Touch',
    description: 'Let’s collaborate on your next project. Reach out to discuss ideas or opportunities.',
    email: 'hemanths7.dev@gmail.com',
    githubUrl: 'https://github.com/hemanthscode',
  },
  footer: {
    githubUrl: 'https://github.com/hemanthscode',
    linkedinUrl: 'https://www.linkedin.com/in/hemanthcodes/',
    copyright: `© ${new Date().getFullYear()} Hemanth Sayimpu. All rights reserved.`,
  },
  navItems: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
}));