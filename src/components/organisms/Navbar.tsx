import { memo, useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Menu, X } from 'lucide-react';
import { usePortfolioStore } from '@/utils/config';
import { menuVariants, containerVariants } from '@/utils/animations';
import { lockScroll, unlockScroll, scrollToTop } from '@/utils/helpers';
import { containerPadding, linkStyles } from '@/utils/styles';
import { TypographyVariant, type NavbarProps } from '@/utils/types';

const Navbar = ({ logo, brandName = 'Hemanth' }: NavbarProps) => {
  const { navItems } = usePortfolioStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    navigate('/');
    scrollToTop();
    closeMenu();
  }, [navigate]);

  const handleNavClick = useCallback(() => {
    closeMenu();
    setTimeout(scrollToTop, 100); // Simple delay to ensure navigation completes
  }, []);

  // Handle scroll lock/unlock
  useEffect(() => {
    if (isOpen) {
      lockScroll();
      menuRef.current?.focus();
    } else {
      unlockScroll();
    }
    return unlockScroll;
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const normalizedPathname = pathname.replace(/^\/portfolio/, '');

  const LogoComponent = logo ? (
    <motion.div
      onClick={handleLogoClick}
      className="cursor-pointer"
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label="Navigate to home page"
      tabIndex={0}
    >
      {logo}
    </motion.div>
  ) : (
    <motion.button
      onClick={handleLogoClick}
      className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      <Typography variant={TypographyVariant.Span}>{brandName}</Typography>
    </motion.button>
  );

  const NavLink = memo(({ item, isMobile = false }: { item: { label: string; href: string }; isMobile?: boolean }) => {
    const isActive = normalizedPathname === item.href.replace(/^\/portfolio/, '');
    const classes = `${linkStyles} font-semibold ${isActive ? 'text-primary' : 'text-gray-700'} ${isMobile ? 'text-xl' : 'text-sm'}`;

    return (
      <motion.div
        whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <Link
          to={item.href.replace(/^\/portfolio/, '')}
          className={classes}
          onClick={isMobile ? handleNavClick : undefined}
          aria-label={`Navigate to ${item.label}`}
        >
          {item.label}
        </Link>
        {!isMobile && isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
            layoutId="activeIndicator"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
          />
        )}
      </motion.div>
    );
  });

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm ${containerPadding}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl flex justify-between items-center h-16">
          <div className="flex-shrink-0">{LogoComponent}</div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg"
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={isOpen ? X : Menu} className="h-8 w-8" />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center items-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            tabIndex={-1}
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink item={item} isMobile />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);