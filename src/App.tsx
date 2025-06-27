import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import MainLayout from './components/layout/MainLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { motion } from 'framer-motion';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Work = lazy(() => import('./components/pages/Work'));
const Contact = lazy(() => import('./components/pages/Contact'));

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const NotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center justify-center bg-background px-4"
  >
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">404 - Page Not Found</h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="btn-primary px-6 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Back to Home
      </a>
    </div>
  </motion.div>
);

export default App;