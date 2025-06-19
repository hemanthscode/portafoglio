import type { LucideIcon } from 'lucide-react';
import { Globe, Smartphone, Cpu, Database, Code, Palette } from 'lucide-react';
import { ProjectCategory } from './types';

/**
 * Utility functions for the portfolio application.
 */

/**
 * Returns the appropriate Lucide icon for a project category.
 * @param category - The project category.
 * @returns The corresponding Lucide icon, with Code as fallback.
 */
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

/**
 * Validates if a string is a valid URL, including relative paths and slugs.
 * @param url - The string to validate, or undefined.
 * @returns True if the string is a valid URL, path, or slug; false otherwise.
 */
export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  if (url.startsWith('/') || /^[\w-]+$/i.test(url)) return true;
  try {
    new URL(url, 'https://hemanthscode.github.io');
    return true;
  } catch {
    return false;
  }
};

/**
 * Locks the document body scroll and disables touch actions for mobile.
 */
export const lockScroll = (): void => {
  document.body.style.overflow = 'hidden';
  document.body.style.touchAction = 'none';
};

/**
 * Unlocks the document body scroll and restores touch actions.
 */
export const unlockScroll = (): void => {
  document.body.style.overflow = '';
  document.body.style.touchAction = '';
};

/**
 * Scrolls the window to the top with smooth behavior.
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Normalizes a pathname by removing the portfolio base path.
 * @param path - The pathname to normalize.
 * @returns The normalized pathname without '/portfolio' prefix.
 */
export const normalizePath = (path: string): string => {
  return path.replace(/^\/portfolio/, '');
};

/**
 * Formats a string by trimming and normalizing whitespace.
 * @param str - The string to format.
 * @returns The formatted string with single spaces.
 */
export const formatString = (str: string): string => {
  return str.trim().replace(/\s+/g, ' ');
};