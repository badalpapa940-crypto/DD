import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

/** Sticky bottom action bar for mobile — WhatsApp + Enquire. */
export function MobileBar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Don't show the floating bar on the enquiry page itself.
  if (location.pathname === '/enquiry') return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-navy-200 bg-cream-50/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={whatsappLink("Hello QAP, I'd like to discuss my business.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#1f8a4c]"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <span className="my-2.5 w-px bg-navy-200" />
      <Link
        to="/enquiry"
        className="flex flex-1 items-center justify-center gap-2 bg-navy-900 py-3.5 text-sm font-semibold text-cream-50"
      >
        Enquire
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
