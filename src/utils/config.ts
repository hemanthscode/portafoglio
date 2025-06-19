import { create } from 'zustand';
import type { AboutProps, ContactProps, FooterProps, HeroProps, NavItem, WorkProps } from './types';
import { Code, Cpu, Globe, Book, Zap, Users, Wrench, Brush, Clock, Lightbulb } from 'lucide-react';
import { CardType, ProjectCategory, Size } from './types';
import React from 'react';

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
    subheadline:
      'Building intuitive, scalable web applications with modern technologies and a passion for innovation.',
    githubUrl: 'https://github.com/hemanthscode',
    ctaText: 'Explore My Work',
    logo: React.createElement('img', { src: "/together.svg", alt: "Portfolio Logo", className: "h-10 w-auto" }),
    ctaLink: '/work',
  },
  about: {
    title: 'About Me',
    description:
      'I’m a full-stack developer passionate about creating user-centric web applications. My journey blends creativity, technical expertise, and a drive to solve real-world problems through code.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'FastAPI', 'MongoDB'],
    githubUrl: 'https://github.com/hemanthscode',
    cards: [
      {
        id: 1,
        type: CardType.Hero,
        title: 'Hemanth Sayimpu',
        subtitle: 'Full-Stack Developer',
        content:
          'Every project is a chance to grow—as a developer, communicator, and problem solver. I approach challenges with curiosity, delivering thoughtful, lasting solutions.',
        bgColor: 'bg-gradient-to-br from-primary to-primary-dark',
        textColor: 'text-white',
        size: Size.Large,
        icon: Code,
      },
      {
        id: 2,
        type: CardType.Story,
        title: 'Turning Point',
        content:
          'It began with a broken login page, leading to late nights exploring DOM and JS quirks. That moment ignited my passion for coding.',
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
          'Crafting smooth, responsive interfaces with React and Tailwind, prioritizing simplicity, usability, and speed across devices.',
        bgColor: 'bg-blue-50',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Globe,
      },
      {
        id: 4,
        type: CardType.Skill,
        title: 'Backend Proficiency',
        content:
          'Building secure, reliable APIs with Node.js and FastAPI, using MongoDB for flexible data management.',
        bgColor: 'bg-green-50',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Cpu,
      },
      {
        id: 5,
        type: CardType.Stat,
        title: '100+ hrs',
        content: 'Pair Programming',
        bgColor: 'bg-orange-100',
        textColor: 'text-gray-900',
        size: Size.Medium,
        icon: Users,
      },
      {
        id: 6,
        type: CardType.Passion,
        title: 'The Tinker Spirit',
        content:
          'I love debugging—whether it’s a UI glitch or an API issue. Each puzzle drives me to find the cleanest fix.',
        bgColor: 'bg-rose-50',
        textColor: 'text-gray-900',
        size: Size.Large,
        icon: Wrench,
      },
      {
        id: 7,
        type: CardType.Adventure,
        title: 'Minimalism in Code',
        content:
          'I strive for clean, minimal code, like a well-composed photo. Simplicity breeds clarity in my work.',
        bgColor: 'bg-slate-100',
        textColor: 'text-gray-900',
        size: Size.Large,
        icon: Brush,
      },
      {
        id: 8,
        type: CardType.Story,
        title: 'Hackathon Fuel',
        content:
          'The thrill of a 24-hour build teaches you to learn fast, think faster, and still write decent code by 4 AM.',
        bgColor: 'bg-pink-50',
        textColor: 'text-gray-900',
        size: Size.Medium,
        icon: Clock,
      },
      {
        id: 9,
        type: CardType.Stat,
        title: '5+',
        content: 'Projects Completed',
        bgColor: 'bg-orange-100',
        textColor: 'text-gray-900',
        size: Size.Small,
        icon: Book,
      },
      {
        id: 10,
        type: CardType.Adventure,
        title: 'Side Projects = Joy',
        content:
          'My best ideas come from building for fun—like a budgeting app to explore local storage and animations.',
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
    description:
      'A curated selection of projects showcasing expertise in modern web development and innovative technologies.',
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description:
          'A full-stack e-commerce solution with real-time analytics and secure payment processing.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/ecommerce-platform',
        live: 'https://ecommerce-demo.hemanth.codes',
        category: ProjectCategory.Web,
        featured: true,
        details: {
          overview:
            'A scalable platform for small to medium businesses, featuring product management, authentication, and payments.',
          challenges: [
            'Optimizing large product catalogs',
            'Secure payment processing',
            'Real-time analytics',
          ],
          solutions: [
            'MongoDB for efficient querying',
            'Stripe for secure payments',
            'React Query for real-time updates',
          ],
          impact: 'Improved retention by 30% and reduced checkout time by 20%.',
        },
        projectPageUrl: '/work/1',
        mediumPostUrl: 'https://medium.com/@hemanthscode/ecommerce-platform-case-study',
      },
      {
        id: 2,
        title: 'AI Chat Assistant',
        description: 'An intelligent chatbot with NLP for customer support automation.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        image:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/ai-chat-assistant',
        live: 'https://ai-chat.hemanth.codes',
        category: ProjectCategory.AI,
        featured: true,
        details: {
          overview: 'A chatbot using NLP, integrated with React and FastAPI.',
          challenges: ['Accurate NLP model', 'Low-latency responses', 'Multilingual queries'],
          solutions: ['TensorFlow for training', 'FastAPI optimization', 'Caching frequent queries'],
          impact: 'Reduced support workload by 40% and improved response time by 50%.',
        },
        projectPageUrl: '/work/2',
        mediumPostUrl: 'https://medium.com/@hemanthscode/ai-chat-assistant-project-deep-dive',
      },
      {
        id: 3,
        title: 'Mobile Banking App',
        description: 'A secure mobile banking app with biometric authentication.',
        tech: ['React Native', 'Firebase', 'Node.js'],
        image:
          'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/mobile-banking-app',
        live: 'https://mobilebanking-demo.hemanth.codes',
        category: ProjectCategory.Mobile,
        featured: false,
        details: {
          overview: 'A cross-platform app with secure authentication and transaction tracking.',
          challenges: ['Cross-platform compatibility', 'Secure authentication', 'Offline support'],
          solutions: ['React Native', 'Firebase Authentication', 'Local caching'],
          impact: '95% user satisfaction and 10,000+ active users.',
        },
        projectPageUrl: '/work/3',
        mediumPostUrl: 'https://medium.com/@hemanthscode/mobile-banking-app-case-study',
      },
      {
        id: 4,
        title: 'Data Visualization Dashboard',
        description: 'An interactive dashboard for real-time data analysis.',
        tech: ['D3.js', 'React', 'Python', 'PostgreSQL'],
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/data-viz-dashboard',
        live: 'https://dataviz.hemanth.codes',
        category: ProjectCategory.Data,
        featured: false,
        details: {
          overview: 'A dashboard with interactive charts and filters for complex datasets.',
          challenges: ['Large datasets', 'Responsive design', 'Real-time updates'],
          solutions: ['D3.js visualizations', 'PostgreSQL optimization', 'WebSocket updates'],
          impact: 'Enabled data-driven decisions for 50+ enterprise clients.',
        },
        projectPageUrl: '/work/4',
        mediumPostUrl: 'https://medium.com/@hemanthscode/data-viz-dashboard-showcase',
      },
      {
        id: 5,
        title: 'Portfolio Website',
        description: 'A responsive portfolio showcasing projects with animations.',
        tech: ['React', 'Framer Motion', 'Tailwind CSS'],
        image:
          'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/portfolio-website',
        live: 'https://hemanth.codes',
        category: ProjectCategory.Web,
        featured: false,
        details: {
          overview: 'A portfolio highlighting skills and projects, focusing on performance.',
          challenges: ['Optimizing load times', 'Accessibility', 'Smooth animations'],
          solutions: ['React lazy loading', 'WCAG 2.1 compliance', 'Framer Motion'],
          impact: 'Showcased work to 1,000+ visitors with 90%+ Lighthouse score.',
        },
        projectPageUrl: '/work/5',
        mediumPostUrl: 'https://medium.com/@hemanthscode/portfolio-website-build-journey',
      },
      {
        id: 6,
        title: 'IoT Monitoring System',
        description: 'A real-time system for monitoring IoT devices.',
        tech: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
        githubUrl: 'https://github.com/hemanthscode/iot-monitoring-system',
        live: 'https://iot-monitoring.hemanth.codes',
        category: ProjectCategory.IoT,
        featured: true,
        details: {
          overview: 'A system for real-time IoT device monitoring with a user-friendly dashboard.',
          challenges: ['Real-time data streams', 'Scalability', 'Intuitive UI'],
          solutions: ['MQTT communication', 'InfluxDB for time-series', 'Tailwind CSS UI'],
          impact: 'Monitored 500+ devices with 99.9% uptime.',
        },
        projectPageUrl: '/work/6',
        mediumPostUrl: 'https://medium.com/@hemanthscode/iot-monitoring-system-overview',
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