import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Companies } from './components/Companies';
import { Innovations } from './components/Innovations';
// import { WhyChooseUs } from './components/WhyChooseUs';
// import { Partnership } from './components/Partnership';
import { Testimonials } from './components/Testimonials';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Handle navigation based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'terms') setCurrentPage('terms');
      else if (hash === 'privacy') setCurrentPage('privacy');
      else if (hash === 'cookies') setCurrentPage('cookies');
      else setCurrentPage('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      clearTimeout(timer);
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
            {/* <WhyChooseUs /> */}
            {/* <Partnership /> */}
            <Testimonials />
            <Team />
            <Contact />
          </main>
        );
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
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