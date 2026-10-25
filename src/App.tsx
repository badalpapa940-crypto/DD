import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { MobileBar } from '@/components/MobileBar';
import { Home } from '@/pages/Home';
import { Inquiry } from '@/pages/Inquiry';
import { Privacy, Terms } from '@/pages/Legal';

/** Scrolls to top on route change, or to a hash section if present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Defer until after content renders.
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enquire" element={<Inquiry />} />
            <Route path="/enquiry" element={<Inquiry />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFab />
        <MobileBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
