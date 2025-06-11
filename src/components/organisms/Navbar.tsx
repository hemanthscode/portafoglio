import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Icon from '../atoms/Icon';
import { navItems } from '../../utils/config';
import { containerPadding, linkStyles } from '../../utils/styles';
import { menuVariants, itemVariants } from '../../utils/animations';
import { lockScroll, unlockScroll, scrollToTop } from '../../utils/helpers';
import type { NavbarProps } from '../../utils/types';

const Navbar = ({ brandName = 'Your Name', logo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') scrollToTop();
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      menuRef.current?.focus();
    } else {
      unlockScroll();
      toggleButtonRef.current?.focus();
    }
    return unlockScroll;
  }, [isOpen]);

  return (
    <>
      <nav
        className={`bg-white shadow-lg sticky top-0 z-50 ${containerPadding}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {pathname === '/' ? (
              <motion.button
                ref={toggleButtonRef}
                onClick={handleLogoClick}
                onKeyDown={handleMenuKeyDown}
                className={`text-xl font-bold ${linkStyles}`}
                aria-label="Scroll to top of home page"
                type="button"
                whileTap={{ scale: 0.95 }}
              >
                {logo || brandName}
              </motion.button>
            ) : (
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className={`text-xl font-bold ${linkStyles}`}
                  aria-label={`${brandName} logo, navigate to home`}
                >
                  {logo || brandName}
                </Link>
              </motion.div>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.href}
                  className={`text-sm font-bold ${linkStyles}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              onKeyDown={handleMenuKeyDown}
              className="text-gray-700 hover:text-gray-900 p-2" // Removed focus:outline-none and focus:ring-2
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon={isOpen ? X : Menu} className="h-8 w-8" ariaHidden={false} />
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden flex flex-col justify-center items-center min-h-screen"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            role="dialog"
            aria-label="Mobile navigation"
            tabIndex={-1}
          >
            <div className="flex flex-col items-center gap-6 pt-16">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    to={item.href}
                    className={`text-xl font-bold ${linkStyles}`}
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;