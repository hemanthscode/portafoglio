import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main
            className="flex-1 pt-20 pb-16 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8"
            id="main-content"
            role="main"
            aria-live="polite"
          >
            {children}
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default MainLayout;