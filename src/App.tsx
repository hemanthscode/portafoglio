import { memo, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Navbar brandName={'Hemanth'} />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner className="flex justify-center items-center h-screen" />}>
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