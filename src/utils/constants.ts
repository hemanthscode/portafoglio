import { NavItem, SocialLink, Project } from '@/types';

export const navItems: NavItem[] = [
  { name: 'about', path: '/about', title: 'About' },
  { name: 'work', path: '/work', title: 'Work' },
  { name: 'contact', path: '/contact', title: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'github',
    href: 'https://github.com/hemanth-kumar',
    title: 'GitHub Profile',
    label: 'Visit GitHub profile',
    icon: 'github',
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/hemanth_kumar',
    title: 'Twitter Profile',
    label: 'Visit Twitter profile',
    icon: 'twitter',
  },
  {
    name: 'email',
    href: 'mailto:hemanth.kumar@example.com',
    title: 'Send Email',
    label: 'Send an email',
    icon: 'mail',
  },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering and search capabilities.',
    image: 'https://i.pinimg.com/736x/44/63/9c/44639cacc0d8c28a3cc4545448977d46.jpg',
    github: 'https://github.com/hemanth-kumar/ecommerce',
    live: 'https://ecommerce.hemanth.dev',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with end-to-end encryption.',
    image: 'https://i.pinimg.com/736x/1c/e4/dc/1ce4dcaf1decc268b3c306ab845f6df5.jpg',
    github: 'https://github.com/hemanth-kumar/chat-app',
    live: 'https://chat.hemanth.dev',
  },
  {
    title: 'Data Dashboard',
    description: 'A dashboard for visualizing complex datasets with interactive charts.',
    image: 'https://i.pinimg.com/736x/8d/36/10/8d3610af570c7016c645396132addd59.jpg',
    github: 'https://github.com/hemanth-kumar/dashboard',
    live: 'https://dashboard.hemanth.dev',
  },
];

export const skills: string[] = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'GraphQL',
  'Next.js',
  'Vite',
  'Framer Motion',
];