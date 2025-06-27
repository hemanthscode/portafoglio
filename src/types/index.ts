export interface NavItem {
  name: string;
  path: string;
  title: string;
}

export interface SocialLink {
  name: string;
  href: string;
  title: string;
  label: string;
  icon: 'github' | 'twitter' | 'mail';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}