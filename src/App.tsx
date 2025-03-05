import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Companies } from './components/Companies';
import { Innovations } from './components/Innovations';
import { MediaSection } from './components/MediaSection';
import Team from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import Cookies from './pages/Cookies';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      let newPage = 'home';

      if (hash === 'terms') {
        newPage = 'terms';
      } else if (hash === 'privacy') {
        newPage = 'privacy';
      } else if (hash === 'cookies') {
        newPage = 'cookies';
      }

      setCurrentPage(newPage);
      // Ensure scroll to top happens after the DOM updates
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsAndConditions />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'cookies':
        return <Cookies />;
      default:
        return (
          <main className="min-h-screen">
            <Hero />
            <About />
            <Companies />
            <Innovations />
            <MediaSection />
            <Team />
            <Contact />
          </main>
        );
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className="relative">
        <Navbar />
        <ScrollToTop />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}

export default App;