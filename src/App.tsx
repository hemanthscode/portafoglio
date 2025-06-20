import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

const Home = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const WorkPage = lazy(() => import('@/pages/Work'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner className="flex justify-center items-center h-screen" />}>
      {children}
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter
        basename="/portfolio/"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar brandName="Hemanth" />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <RouteErrorBoundary>
                    <Home />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/portfolio"
                element={<Navigate to="/portfolio/" replace />}
              />
              <Route
                path="/about"
                element={
                  <RouteErrorBoundary>
                    <AboutPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/work"
                element={
                  <RouteErrorBoundary>
                    <WorkPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/contact"
                element={
                  <RouteErrorBoundary>
                    <ContactPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/project/:id"
                element={
                  <RouteErrorBoundary>
                    <ProjectDetail />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="*"
                element={
                  <RouteErrorBoundary>
                    <NotFound />
                  </RouteErrorBoundary>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;