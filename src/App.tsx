import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Home from '@/pages/Home';
import { scrollToTop } from '@/utils/helpers';
import { containerPadding } from '@/utils/styles';
import LogoImage from '/together.svg';

const About = lazy(() => import('@/pages/About'));
const Work = lazy(() => import('@/pages/Work'));
const Contact = lazy(() => import('@/pages/Contact'));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navbar
        logo={
          <img
            src={LogoImage}
            alt="Portfolio Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]"
            loading="lazy"
          />
        }
      />
      <main className={`flex-grow ${containerPadding}`} role="main">
        <Suspense
          fallback={
            <div className="text-center py-12 text-text text-lg">
              <span className="animate-pulse">Loading...</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="text-center py-12 text-text text-lg">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;