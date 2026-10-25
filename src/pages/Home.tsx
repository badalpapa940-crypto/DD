import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  TrendingUp,
  Eye,
  Target,
  Gauge,
  ChevronDown,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { useReveal } from '@/lib/useReveal';
import { scrollToSection } from '@/lib/scroll';
import { whatsappLink, SITE } from '@/lib/site';
import {
  SERVICES,
  INDUSTRIES,
  APPROACH_STEPS,
  FAQS,
} from '@/lib/content';

export function Home() {
  return (
    <main>
      <Hero />
      <FactsStrip />
      <WhyQAP />
      <ValueFramework />
      <Services />
      <Approach />
      <Industries />
      <InstitutionalReadiness />
      <Founder />
      <Faq />
      <EnquirySection />
    </main>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy-200/50 bg-cream-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-gold-100/50 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="container-q relative grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
        <div className="animate-fade-up">
          <p className="eyebrow">Strategic Finance · Performance · Value Creation</p>
          <h1 className="heading-serif mt-5 text-4xl leading-[1.05] text-navy-950 sm:text-5xl lg:text-[58px]">
            Build a better business.
            <br />
            <span className="text-navy-600">Build a more valuable business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            QAP helps businesses identify opportunities, improve financial
            performance, strengthen capital decisions and build the operating
            discipline needed for sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/enquiry" className="btn-primary">
              Discuss Your Business
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={() => scrollToSection('services')} className="btn-secondary">
              Explore Services
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-500">
            {['Financial clarity', 'Measurable priorities', 'Execution-focused advice'].map(
              (t, i) => (
                <li key={t} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-navy-300" />}
                  <Check className="h-4 w-4 text-gold-500" />
                  {t}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '180ms' }}>
          <ValueBridge />
        </div>
      </div>
    </section>
  );
}

/** Static "value bridge" — EBITDA → Cash → Capital → Enterprise Value. */
function ValueBridge() {
  const steps = [
    { label: 'EBITDA', sub: 'Operating earnings', icon: TrendingUp },
    { label: 'Cash', sub: 'Conversion & liquidity', icon: Gauge },
    { label: 'Capital', sub: 'Structure & cost', icon: ShieldCheck },
    { label: 'Enterprise Value', sub: 'Durable worth', icon: Target },
  ];
  return (
    <div className="relative rounded-2xl border border-navy-200/60 bg-cream-100/70 p-6 shadow-sm backdrop-blur sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <p className="eyebrow">The Value Bridge</p>
        <span className="text-[11px] font-medium text-navy-400">Illustrative</span>
      </div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-navy-200/60 bg-navy-200/60 sm:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.label} className="relative bg-cream-50 p-5">
            <s.icon className="h-5 w-5 text-gold-500" />
            <p className="mt-3 font-serif text-base font-medium text-navy-900">{s.label}</p>
            <p className="mt-1 text-xs leading-snug text-navy-500">{s.sub}</p>
            <span className="absolute right-3 top-3 text-[10px] font-semibold text-navy-300">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-navy-500">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-navy-300 to-navy-300" />
        <ArrowRight className="h-3.5 w-3.5 text-navy-400" />
        <span className="h-px flex-1 bg-gradient-to-r from-navy-300 via-navy-300 to-transparent" />
      </div>
      <p className="mt-3 text-center text-xs text-navy-400">
        Insight at each link is what compounds value.
      </p>
    </div>
  );
}

/* ---------- Facts strip ---------- */

function FactsStrip() {
  const facts = [
    { value: '₹25–500Cr+', label: 'Target segment' },
    { value: '12+ Years', label: 'Professional experience' },
    { value: 'Finance + Ops', label: 'Connected perspective' },
    { value: 'Be IPO Ready', label: 'Institutional readiness' },
  ];
  return (
    <section className="border-b border-navy-200/50 bg-cream-100/60">
      <div className="container-q grid grid-cols-2 divide-navy-200/60 sm:divide-x">
        {facts.map((f) => (
          <div key={f.label} className="px-2 py-8 text-center sm:px-8">
            <p className="heading-serif text-2xl text-navy-900 sm:text-3xl">{f.value}</p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-navy-500">
              {f.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Why QAP ---------- */

function WhyQAP() {
  const items = [
    {
      icon: Eye,
      title: 'See the full picture',
      line: 'Finance and operations read together, not in separate reports nobody acts on.',
    },
    {
      icon: Target,
      title: 'Focus on what matters',
      line: 'Priorities ranked by value at stake, not by whichever fire is loudest today.',
    },
    {
      icon: Gauge,
      title: 'Measure progress',
      line: 'A baseline, a cadence, and a handful of numbers that actually move the business.',
    },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="container-q grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Why QAP</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Better decisions start with better financial visibility.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-600">
            Growth exposes gaps — in cash planning, profitability, financing,
            MIS and operational control. Solving each in isolation leaves value
            unrealised. The leverage is in connecting them.
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-navy-200/60 bg-navy-200/60 sm:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="bg-cream-50 p-6">
              <it.icon className="h-6 w-6 text-gold-500" />
              <h3 className="mt-4 font-serif text-lg text-navy-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{it.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Value Framework ---------- */

function ValueFramework() {
  const cols = [
    { label: 'EBITDA', line: 'Where margin is made and lost.' },
    { label: 'Cash', line: 'What actually converts and when.' },
    { label: 'Capital', line: 'The structure that funds growth.' },
    { label: 'Enterprise Value', line: 'The worth the market recognises.' },
  ];
  const flow = ['Identify', 'Quantify', 'Act & Measure'];
  return (
    <section className="border-y border-navy-200/50 bg-cream-100/50 py-20 lg:py-28">
      <div className="container-q">
        <Reveal>
          <p className="eyebrow">QAP Value Framework</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Turn insight into action.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-200/60 bg-navy-200/60 sm:grid-cols-2 lg:grid-cols-4">
            {cols.map((c, i) => (
              <div key={c.label} className="bg-cream-50 p-7">
                <span className="text-xs font-semibold text-navy-300">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl text-navy-900">{c.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{c.line}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-4">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-navy-200 bg-cream-50 px-5 py-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-cream-50">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-navy-800">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-gold-500 sm:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

function Services() {
  const [openId, setOpenId] = useState<string | null>('capital-structure');
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-q">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Connected expertise. Practical priorities.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-navy-200/60 border-y border-navy-200/60">
          {SERVICES.map((s) => {
            const open = openId === s.id;
            return (
              <div key={s.id} className="group">
                <button
                  onClick={() => setOpenId(open ? null : s.id)}
                  className="flex w-full items-center gap-6 py-6 text-left transition-colors hover:bg-cream-100/50"
                  aria-expanded={open}
                >
                  <span className="font-serif text-sm font-semibold text-gold-600 sm:text-base">
                    {s.number}
                  </span>
                  <span className="flex flex-1 flex-col gap-0.5">
                    <span className="font-serif text-xl text-navy-900 sm:text-2xl">
                      {s.title}
                    </span>
                    <span className="text-sm text-navy-500">{s.tagline}</span>
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-all duration-300 ${
                      open ? 'rotate-180 bg-navy-900 text-cream-50' : 'group-hover:border-navy-400'
                    }`}
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-8 pl-0 sm:pl-[3.25rem] lg:grid-cols-[1.4fr_1fr]">
                      <ul className="space-y-2.5">
                        {s.details.map((d) => (
                          <li key={d} className="flex gap-3 text-sm leading-relaxed text-navy-700">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-xl bg-cream-100 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                          Typical outcomes
                        </p>
                        <ul className="mt-3 space-y-2">
                          {s.outcomes.map((o) => (
                            <li key={o} className="flex items-center gap-2 text-sm text-navy-800">
                              <ArrowUpRight className="h-3.5 w-3.5 text-gold-600" />
                              {o}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={`/enquire?service=${encodeURIComponent(s.title)}`}
                          className="btn-gold mt-5 w-full"
                        >
                          Enquire about this service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Approach ---------- */

function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 border-y border-navy-200/50 bg-cream-100/50 py-20 lg:py-28">
      <div className="container-q">
        <Reveal>
          <p className="eyebrow">Approach</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            From numbers to decisions.
            <br />
            From decisions to action.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-200/60 bg-navy-200/60 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} className="relative bg-cream-50 p-7">
              <span className="font-serif text-3xl font-semibold text-navy-200">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-serif text-xl text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */

function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-q">
        <Reveal>
          <p className="eyebrow">Industries</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Different industries. Connected financial questions.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-px sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={(i % 2) * 60}
              className="flex items-start justify-between gap-6 border-b border-navy-200/50 py-5"
            >
              <div>
                <h3 className="font-serif text-lg text-navy-900">{ind.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{ind.line}</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-navy-300" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Institutional Readiness (navy section) ---------- */

function InstitutionalReadiness() {
  const checklist = [
    'Financial reporting and planning maturity',
    'Performance visibility and business drivers',
    'Governance and control gap assessment',
    'Readiness roadmap and specialist coordination',
  ];
  return (
    <section className="bg-navy-950 py-20 text-cream-100 lg:py-28">
      <div className="container-q grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-gold-400">Institutional Readiness</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-cream-50 sm:text-4xl">
            Don't wait for the IPO.
            <br />
            Build the company before it.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-200/80">
            Institutional capital — whether an IPO, a private placement or a
            strategic transaction — rewards businesses that already operate
            like institutions. We help you get there deliberately.
          </p>
          <p className="mt-6 max-w-lg rounded-xl border border-navy-700 bg-navy-900/60 p-4 text-xs leading-relaxed text-cream-300/70">
            Note: IPO readiness is one possible objective, not a guarantee of
            listing eligibility, approval, fundraising or transaction success.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-navy-700/60 rounded-2xl border border-navy-700/60 bg-navy-900/40">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-4 p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-cream-100">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-q grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-navy-200/60 bg-gradient-to-br from-navy-100 to-cream-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-7xl font-semibold text-navy-300">AV</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/70 to-transparent p-5">
              <p className="font-serif text-lg text-cream-50">{SITE.founder.name}</p>
              <p className="text-xs text-cream-200/80">{SITE.founder.title}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Founder</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            {SITE.founder.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-navy-500">{SITE.founder.title}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700">
            <p>
              Alok Verma founded Quantum Advisory Partners after more than a
              decade working across corporate finance, capital structure and
              operational turnaround for mid-market Indian businesses.
            </p>
            <p>
              His career has spanned lending, advisory and hands-on finance
              leadership — the perspective that comes from sitting on both
              sides of the capital table, and from being accountable for the
              numbers inside the business, not just reviewing them from outside.
            </p>
            <p>
              QAP is built on a simple conviction: durable enterprise value is
              created when financial insight and operating discipline are
              connected — and when advice is measured by what actually changes,
              not by the elegance of the analysis.
            </p>
          </div>
          <Link to="/enquiry" className="btn-primary mt-8">
            Arrange a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 border-t border-navy-200/50 bg-cream-100/50 py-20 lg:py-28">
      <div className="container-q grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-navy-600">
            Still unsure whether QAP is the right fit? The enquiry page is the
            quickest way to tell us about your business.
          </p>
          <Link to="/enquiry" className="btn-secondary mt-6">
            Go to enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="divide-y divide-navy-200/60 border-y border-navy-200/60">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base text-navy-900 sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-navy-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold-600' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-navy-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Enquiry section + contact details ---------- */

function EnquirySection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="enquiry" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-q grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="heading-serif mt-4 text-3xl leading-tight text-navy-950 sm:text-4xl">
            Tell us about your business.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-600">
            Send a short note and we'll be in touch. For a structured enquiry
            that helps us prepare, use the detailed enquiry page.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-navy-800 hover:text-navy-950">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-navy-700">
                <ArrowRight className="h-4 w-4" />
              </span>
              {SITE.email}
            </a>
            <a
              href={whatsappLink("Hello QAP, I'd like to discuss my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-navy-800 hover:text-navy-950"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1f8a4c]">
                <ArrowRight className="h-4 w-4" />
              </span>
              Message us on WhatsApp
            </a>
            <Link to="/enquiry" className="flex items-center gap-3 text-navy-800 hover:text-navy-950">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <ArrowRight className="h-4 w-4" />
              </span>
              Start a detailed enquiry
            </Link>
          </div>
        </Reveal>

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="rounded-2xl border border-navy-200/60 bg-cream-50 p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl text-navy-900">Contact form</h3>
            <p className="mt-1 text-sm text-navy-500">A quick note — we'll take it from here.</p>
            <div className="mt-6">
              <ContactForm source="home_contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
