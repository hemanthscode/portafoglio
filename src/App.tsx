import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Home from '@/pages/Home';
import { defaultAboutProps, defaultContactProps, defaultFooterProps, defaultWorkProps } from '@/utils/config';
import { containerPadding } from '@/utils/styles';
import { scrollToTop } from '@/utils/helpers';
import LogoImage from '/together.svg';

// Lazy-loaded pages
const About = lazy(() => import('@/pages/About'));
const Work = lazy(() => import('@/pages/Work'));
const Contact = lazy(() => import('@/pages/Contact'));

/**
 * Main application component with routing and layout.
 */
const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar logo={<img src={LogoImage} alt="Portfolio Logo" className="h-8 sm:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]" loading="lazy" />} />
      <main className={`flex-grow ${containerPadding}`}>
        <Suspense
          fallback={
            <div className="text-center py-12 text-text text-lg">
              <span className="animate-pulse">Loading...</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About {...defaultAboutProps} />} />
            <Route path="/work" element={<Work {...defaultWorkProps} />} />
            <Route path="/contact" element={<Contact {...defaultContactProps} />} />
            <Route
              path="*"
              element={<div className="text-center py-12 text-text text-lg">404 - Page Not Found</div>}
            />
          </Routes>
        </Suspense>
      </main>
      <Footer {...defaultFooterProps} />
    </div>
  );
};

export default App;