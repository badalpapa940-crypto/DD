import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SITE } from '@/lib/site';

const FOOTER_NAV = [
  { label: 'Services', to: '/#services' },
  { label: 'Approach', to: '/#approach' },
  { label: 'Industries', to: '/#industries' },
  { label: 'About', to: '/#about' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Enquire', to: '/enquiry' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="container-q py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="[&_*]:!text-cream-50 [&_.text-navy-500]:!text-cream-300/70">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/80">
              Strategic finance and business advisory for ₹25–500Cr+ businesses.
              Connected expertise across capital, performance and operations —
              built to create durable enterprise value.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-300/60">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1 text-sm text-cream-200/85 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-300/60">
              Engagement Principle
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-cream-200/85">
              Start with the business challenge, establish the facts, and agree
              on a practical scope before proceeding.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-800 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-300/60">
            Important Information
          </h3>
          <p className="mt-4 max-w-4xl text-xs leading-relaxed text-cream-300/70">
            Examples and figures referenced on this website are illustrative and
            do not constitute guarantees of results. Advisory engagements are
            tailored to individual circumstances and outcomes depend on a range
            of factors specific to each business. IPO readiness is one possible
            objective; it is not a guarantee of listing eligibility, regulatory
            approval, fundraising success or transaction completion. Nothing on
            this website constitutes investment, legal or tax advice, or an
            offer to provide any service in a jurisdiction where QAP is not
            permitted to do so.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-cream-300/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Quantum Advisory Partners. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link to="/privacy" className="transition-colors hover:text-cream-100">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-cream-100">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
