import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

/** Floating WhatsApp button — sits above the mobile bottom bar. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(
        "Hello QAP, I'd like to discuss my business."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with QAP on WhatsApp"
      className="group fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/40 sm:bottom-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-cream-50 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
