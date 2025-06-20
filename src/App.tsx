// src/App.tsx
import { memo, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { usePortfolioStore } from '@/utils/config';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const WorkPage = lazy(() => import('@/pages/Work'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Component to handle initial redirect
const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('redirect');

    // Handle legacy redirects (e.g., ?redirect=/portfolio/about)
    if (redirectPath) {
      // Remove the '/portfolio' prefix and navigate to the clean path
      const cleanPath = redirectPath.replace(/^\/portfolio/, '') || '/';
      navigate(cleanPath, { replace: true });
    }
  }, [navigate, location.search]);

  return null;
};

const App = () => {
  const { hero } = usePortfolioStore();

  return (
    <HelmetProvider>
      <BrowserRouter
        basename="/portfolio"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar brandName="Hemanth" />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner className="flex justify-center items-center h-screen" />}>
              <RedirectHandler />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default memo(App);