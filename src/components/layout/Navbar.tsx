import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { navItems } from '@/utils/constants';
import { debounce } from '@/utils/helpers';
import type { NavItem } from '@/types';

const menuVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } },
};

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = debounce(() => {
    setIsOpen((prev) => {
      if (!prev) {
        setTimeout(() => firstLinkRef.current?.focus(), 100);
      }
      return !prev;
    });
  }, 150);

  const closeMenu = useCallback((path?: string) => {
    setIsOpen(false);
    if (path) {
      setTimeout(() => navigate(path), 300);
    }
    toggleRef.current?.focus();
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
    closeMenu();
  }, [location.pathname, navigate, closeMenu]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current?.contains(e.target as Node) ||
        toggleRef.current?.contains(e.target as Node)
      )
        return;
      closeMenu();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="text-xl font-semibold text-foreground hover:text-primary rounded"
            aria-label="Scroll to top of Hemanth's Portfolio Home"
          >
            Hemanth
          </button>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item: NavItem) => (
              <NavLink
                key={item.name}
                to={item.path}
                title={item.title}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md  ${
                    isActive
                      ? 'bg-primary text-background'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
          <button
            ref={toggleRef}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted hover:text-primary "
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-background border-t border-border"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col items-center py-6 space-y-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              {navItems.map((item: NavItem, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  title={item.title}
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={({ isActive }) =>
                    `block w-full text-center px-6 py-3 text-lg font-medium  ${
                      isActive ? 'text-primary' : 'text-foreground hover:bg-muted hover:text-primary'
                    }`
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu(item.path);
                  }}
                >
                  {item.title}
                </NavLink>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;