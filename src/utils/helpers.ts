import type { LucideIcon } from 'lucide-react';
import { Globe, Smartphone, Cpu, Database, Code, Palette } from 'lucide-react';
import { ProjectCategory } from './types';

export const getCategoryIcon = (category: ProjectCategory): LucideIcon => {
  switch (category) {
    case ProjectCategory.Web:
      return Globe;
    case ProjectCategory.Mobile:
      return Smartphone;
    case ProjectCategory.AI:
      return Cpu;
    case ProjectCategory.Data:
      return Database;
    case ProjectCategory.IoT:
      return Code;
    case ProjectCategory.Other:
      return Palette;
  }
};

export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const lockScroll = (): void => {
  const scrollY = window.scrollY;
  document.documentElement.classList.add('no-scroll');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
};

export const unlockScroll = (): void => {
  const scrollY = document.body.style.top;
  document.documentElement.classList.remove('no-scroll');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};