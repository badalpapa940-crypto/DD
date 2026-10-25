import { Link } from 'react-router-dom';

/** Infinity-loop wordmark for QAP — text-based with a navy infinity mark. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Quantum Advisory Partners — home"
    >
      <span className="relative flex h-7 w-9 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 36 24" className="h-5 w-7" fill="none">
          <path
            d="M9 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Zm0 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6"
            transform="translate(0 -6)"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-navy-700 transition-colors duration-300 group-hover:text-gold-500"
          />
          <path
            d="M27 12c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6"
            transform="translate(0 6)"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-gold-500 transition-colors duration-300 group-hover:text-navy-700"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[15px] font-semibold tracking-tight text-navy-900">
          QUANTUM
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-navy-500">
          Advisory Partners
        </span>
      </span>
    </Link>
  );
}
