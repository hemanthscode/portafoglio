import { memo, useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import { Menu, X } from "lucide-react";
import { usePortfolioStore } from "@/utils/config";
import { menuVariants, containerVariants } from "@/utils/animations";
import { lockScroll, unlockScroll, scrollToTop } from "@/utils/helpers";
import { navbarStyles } from "@/utils/styles";
import { TypographyVariant, NavbarProps } from "@/utils/types";
import clsx from "clsx";

// Enhanced with memoized nav items and double-render prevention
const Navbar = ({ logo, brandName = "Hemanth Sayimpu" }: NavbarProps) => {
  const { navItems } = usePortfolioStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      navigate("/");
      scrollToTop();
      closeMenu();
    },
    [navigate, closeMenu],
  );

  const handleNavClick = useCallback(() => {
    closeMenu();
    scrollToTop();
  }, [closeMenu]);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      firstLinkRef.current?.focus();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeMenu();
    };
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleFocusTrap);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleFocusTrap);
    };
  }, [isOpen, closeMenu]);

  const normalizedPathname = pathname
    .replace(/^\/portfolio/, "")
    .replace(/^\/+|\/+$/g, "");

  const NavLink = memo(
    ({
      item,
      isMobile = false,
    }: {
      item: { label: string; href: string };
      isMobile?: boolean;
    }) => {
      const normalizedHref = item.href
        .replace(/^\/portfolio/, "")
        .replace(/^\/+|\/+$/g, "");
      const isActive = normalizedPathname === normalizedHref;
      const classes = clsx(
        navbarStyles.link,
        isActive ? "text-primary" : "text-gray-700",
        isMobile && navbarStyles.mobileLink,
      );

      return (
        <motion.div
          whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Link
            to={item.href}
            className={classes}
            onClick={isMobile ? handleNavClick : undefined}
            aria-label={`Navigate to ${item.label}`}
            aria-current={isActive ? "page" : undefined}
            ref={
              isMobile && item.href === navItems[0]?.href
                ? firstLinkRef
                : undefined
            }
          >
            {item.label}
          </Link>
          {!isMobile && isActive && (
            <motion.div
              className={navbarStyles.activeIndicator}
              layoutId="activeIndicator"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      );
    },
  );

  const memoizedNavItems = useMemo(() => navItems, [navItems]);

  return (
    <>
      <motion.nav
        className={navbarStyles.base}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={navbarStyles.container}>
          <div className="flex-shrink-0">
            {logo ? (
              <motion.div
                onClick={handleLogoClick}
                onKeyDown={(e) => e.key === "Enter" && handleLogoClick(e)}
                className="cursor-pointer"
                whileTap={{ scale: 0.95 }}
                role="button"
                aria-label="Navigate to homepage"
                tabIndex={0}
              >
                {logo}
              </motion.div>
            ) : (
              <motion.button
                onClick={handleLogoClick}
                onKeyDown={(e) => e.key === "Enter" && handleLogoClick(e)}
                className={navbarStyles.logo}
                whileTap={{ scale: 0.95 }}
                aria-label="Navigate to homepage"
              >
                <Typography variant={TypographyVariant.Span}>
                  {brandName}
                </Typography>
              </motion.button>
            )}
          </div>
          <div className={navbarStyles.desktopMenu}>
            {memoizedNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={navbarStyles.menuButton}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Icon
              icon={isOpen ? X : Menu}
              className={navbarStyles.menuIcon}
              aria-hidden="true"
            />
          </motion.button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className={navbarStyles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            role="dialog"
            aria-label="Mobile navigation menu"
            tabIndex={-1}
          >
            <div className="flex flex-col items-center gap-8 xs:gap-10">
              {memoizedNavItems.map((item, index) => (
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
