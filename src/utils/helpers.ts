import type { LucideIcon } from 'lucide-react';
import { Globe, Smartphone, Cpu, Database, Code, Palette } from 'lucide-react';
import { ProjectCategory } from './types';

// Maps project categories to Lucide icons
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

// Validates URLs and relative paths
export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  if (url.startsWith('/') || /^[a-zA-Z0-9_-]+$/.test(url)) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Locks body scroll for modals or mobile menus
export const lockScroll = (): void => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
};

// Unlocks body scroll
export const unlockScroll = (): void => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

// Scrolls to the top of the page
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Debounce utility for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};