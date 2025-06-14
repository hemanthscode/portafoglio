import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Menu, X } from 'lucide-react';
import { usePortfolioStore } from '@/utils/config';
import { menuVariants, itemVariants } from '@/utils/animations';
import { lockScroll, unlockScroll, scrollToTop } from '@/utils/helpers';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant } from '@/utils/types';

interface NavbarProps {
  brandName?: string;
  logo?: React.ReactNode; // Align with updated types
}

const Navbar = ({ logo, brandName }: NavbarProps) => {
  const { navItems } = usePortfolioStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  }, [toggleMenu]);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {
      e.preventDefault();
      navigate('/');
      scrollToTop();
    },
    [navigate],
  );

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

  // Normalize pathname for active link highlighting
  const normalizedPathname = pathname.replace(/^\/portfolio/, '');

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white shadow-md ${containerPadding}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {logo ? (
              <motion.div
                onClick={handleLogoClick}
                className="cursor-pointer"
                whileTap={{ scale: 0.95 }}
                role="button"
                aria-label="Navigate to home page and scroll to top"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/');
                    scrollToTop();
                  }
                }}
              >
                {logo}
              </motion.div>
            ) : (
              <motion.button
                onClick={handleLogoClick}
                onKeyDown={handleMenuKeyDown}
                className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
                aria-label="Navigate to home page and scroll to top"
                whileTap={{ scale: 0.95 }}
              >
                <Typography variant={TypographyVariant.Span}>
                  {brandName || 'Hemanth'}
                </Typography>
              </motion.button>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = normalizedPathname === item.href.replace(/^\/portfolio/, '');
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 0}}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href.replace(/^\/portfolio/, '')}
                    className={`text-sm font-semibold} transition-colors} ${
                      isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="md:hidden">
            <motion.button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              onKeyDown={handleMenuKeyDown}
              className="p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
            >
              <Icon
                icon={isOpen ? X : Menu}
                className="h-8 w-8"
                aria-hidden="true"
              />
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
              {navItems.map((item) => {
                const isActive = normalizedPathname === item.href.replace(/^\/portfolio/, '');
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      to={item.href.replace(/^\/portfolio/, '')}
                      className={`text-xl font-bold transition-colors} ${
                        isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-label={`Navigate to ${item.label}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);