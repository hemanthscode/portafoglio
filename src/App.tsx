import { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add HelmetProvider
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import ProjectDetail from '@/pages/ProjectDetail';
import { usePortfolioStore } from '@/utils/config';

const App = () => {
  const { hero } = usePortfolioStore();

  return (
    <HelmetProvider> {/* Wrap app with HelmetProvider */}
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar logo={hero.logo} brandName="Hemanth" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default memo(App);

/* Changes and Best Practices:
- Added HelmetProvider to fix react-helmet-async context error.
- Maintained memoization for performance.
- Accessibility: Ensured semantic structure with flex-col.
- Testing: Verify Helmet meta tags render correctly.
- Deployment: Compatible with GitHub Pages.
*/
