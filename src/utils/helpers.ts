import type { LucideIcon } from 'lucide-react';
import { Globe, Smartphone, Cpu, Database, Code, Palette } from 'lucide-react';
import { ProjectCategory } from './types';

export const getCategoryIcon = (category: ProjectCategory): LucideIcon => {
  const iconMap: Record<ProjectCategory, LucideIcon> = {
    [ProjectCategory.Web]: Globe,
    [ProjectCategory.Mobile]: Smartphone,
    [ProjectCategory.AI]: Cpu,
    [ProjectCategory.Data]: Database,
    [ProjectCategory.IoT]: Code,
    [ProjectCategory.Other]: Palette,
  };
  return iconMap[category] ?? Code;
};

export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  if (url.startsWith('/') || /^[\w-]+$/i.test(url)) return true;
  if (url.startsWith('mailto:') || url.startsWith('tel:')) return true;
  try {
    new URL(url, 'https://hemanthscode.github.io');
    return true;
  } catch {
    return false;
  }
};

export const getBaseUrl = (path: string): string => {
  return `/portfolio${path.startsWith('/') ? path : `/${path}`}`;
};

export const lockScroll = (): void => {
  document.body.style.overflow = 'hidden';
  document.body.style.touchAction = 'none';
};

export const unlockScroll = (): void => {
  document.body.style.overflow = '';
  document.body.style.touchAction = '';
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const normalizePath = (path: string): string => {
  return path.replace(/^\/portfolio/, '');
};

export const formatString = (str: string): string => {
  return str.trim().replace(/\s+/g, ' ');
};

export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};