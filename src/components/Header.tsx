import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { scrollToSection } from '@/lib/scroll';

const NAV = [
  { label: 'Services', id: 'services' },
  { label: 'Approach', id: 'approach' },
  { label: 'Industries', id: 'industries' },
  { label: 'About', id: 'about' },
  { label: 'FAQ', id: 'faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      // Navigate home first, then scroll after render.
      window.location.assign(`/#${id}`);
      return;
    }
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-navy-200/60 bg-cream-50/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-cream-50/0'
        }`}
      >
        <div className="container-q flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative text-sm font-medium text-navy-700 transition-colors hover:text-navy-950"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/enquiry" className="btn-primary">
              Discuss Your Business
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-900 transition-colors hover:bg-navy-900 hover:text-cream-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream-50 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-navy-200/60 px-6">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-900"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 py-6">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-navy-300" />
              </button>
            ))}
            <Link
              to="/enquiry"
              className="btn-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Discuss Your Business
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
