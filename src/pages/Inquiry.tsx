import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  MessageCircle,
  Mail,
  Building2,
  Phone,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SITE, whatsappLink } from '@/lib/site';
import { SERVICES, INDUSTRIES, REVENUE_BANDS, TIMELINES } from '@/lib/content';
import { Reveal } from '@/components/Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Inquiry() {
  const [params] = useSearchParams();
  const prefillService = params.get('service') || '';
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if (prefillService) setSelectedServices([prefillService]);
  }, [prefillService]);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);

    const full_name = String(data.get('full_name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const company = String(data.get('company') || '').trim();
    const designation = String(data.get('designation') || '').trim();
    const industry = String(data.get('industry') || '').trim();
    const revenue_band = String(data.get('revenue_band') || '').trim();
    const challenge = String(data.get('challenge') || '').trim();
    const timeline = String(data.get('timeline') || '').trim();
    const referred_by = String(data.get('referred_by') || '').trim();
    const consent = data.get('consent') === 'on';

    if (!full_name || !email || !phone || !company) {
      setStatus('error');
      setError('Please complete the required fields so we can get back to you.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setError('Please confirm consent to be contacted.');
      return;
    }

    const { error: insertError } = await supabase.from('inquiry_requests').insert({
      full_name,
      email,
      phone,
      company,
      designation: designation || null,
      industry: industry || null,
      revenue_band: revenue_band || null,
      services: selectedServices.join(', ') || null,
      challenge: challenge || null,
      timeline: timeline || null,
      referred_by: referred_by || null,
      consent,
    });

    if (insertError) {
      setStatus('error');
      setError('Something went wrong on our end. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    form.reset();
    setSelectedServices([]);
  };

  return (
    <main className="bg-cream-50">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-navy-200/50 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="pointer-events-none absolute -right-24 -top-16 h-[360px] w-[360px] rounded-full bg-gold-100/40 blur-3xl" />
        <div className="container-q relative py-14 lg:py-20">
          <Reveal>
            <p className="eyebrow">Advisory Enquiry</p>
            <h1 className="heading-serif mt-4 max-w-2xl text-4xl leading-[1.08] text-navy-950 sm:text-5xl">
              Tell us about your business and the challenge in front of you.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-600">
              The more context you share, the more prepared our first
              conversation will be. Everything here is confidential.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-q grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            {status === 'success' ? (
              <SuccessState />
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-navy-200/60 bg-cream-50 p-6 shadow-sm sm:p-8"
              >
                <h2 className="font-serif text-xl text-navy-900">Your details</h2>
                <p className="mt-1 text-sm text-navy-500">
                  Required fields are marked with <span className="text-gold-600">*</span>.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="full_name" required placeholder="Your name" />
                  <Field label="Designation" name="designation" placeholder="e.g. Director, CFO" />
                  <Field label="Email" name="email" type="email" required placeholder="you@company.in" />
                  <Field label="Phone" name="phone" type="tel" required placeholder="+91…" />
                  <Field label="Company" name="company" required placeholder="Company name" />
                  <SelectField label="Revenue band" name="revenue_band" options={REVENUE_BANDS} />
                </div>

                <h3 className="mt-8 font-serif text-lg text-navy-900">About your business</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Industry"
                    name="industry"
                    options={INDUSTRIES.map((i) => i.name)}
                    placeholderOption="Select an industry"
                  />
                  <SelectField
                    label="Desired timeline"
                    name="timeline"
                    options={TIMELINES}
                    placeholderOption="Select a timeline"
                  />
                </div>

                {/* Services of interest */}
                <div className="mt-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-navy-500">
                    Services of interest
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const active = selectedServices.includes(s.title);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                            active
                              ? 'border-navy-900 bg-navy-900 text-cream-50'
                              : 'border-navy-200 bg-cream-50 text-navy-700 hover:border-navy-500'
                          }`}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-navy-500">
                    Tell us about the challenge
                  </label>
                  <textarea
                    name="challenge"
                    rows={5}
                    placeholder="What are you working through right now? Cash, margin, capital, governance, a transaction — whatever is most relevant."
                    className="w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
                  />
                </div>

                <div className="mt-4">
                  <Field
                    label="How did you hear about QAP?"
                    name="referred_by"
                    placeholder="Optional"
                  />
                </div>

                <label className="mt-6 flex items-start gap-3 text-sm text-navy-700">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-navy-300 text-navy-900 focus:ring-gold-400"
                  />
                  <span>
                    I consent to QAP contacting me about this enquiry. We do not
                    share your information with third parties.
                  </span>
                </label>

                {status === 'error' && (
                  <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-6 w-full disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit enquiry
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-navy-400">
                  Prefer to talk first? Use the WhatsApp button or email us directly.
                </p>
              </form>
            )}
          </Reveal>

          {/* Side: contact details + reassurance */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-navy-200/60 bg-cream-100 p-6">
                <h3 className="font-serif text-lg text-navy-900">Other ways to reach us</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="group flex items-start gap-3 text-navy-800 hover:text-navy-950"
                    >
                      <Mail className="mt-0.5 h-4 w-4 text-gold-600" />
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-navy-400">Email</span>
                        {SITE.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink("Hello QAP, I'd like to discuss an advisory engagement.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 text-navy-800 hover:text-navy-950"
                    >
                      <MessageCircle className="mt-0.5 h-4 w-4 text-[#1f8a4c]" />
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-navy-400">WhatsApp</span>
                        Chat with the team directly
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-navy-800">
                    <Building2 className="mt-0.5 h-4 w-4 text-navy-500" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-navy-400">Practice</span>
                      India-based. Engagements nationwide.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-navy-200/60 bg-navy-950 p-6 text-cream-100">
                <h3 className="font-serif text-lg text-cream-50">What happens next</h3>
                <ol className="mt-4 space-y-3 text-sm text-cream-200/85">
                  {[
                    'We review your enquiry and the context you shared.',
                    'A first conversation — no obligation, no jargon.',
                    'If it fits, we agree a practical scope before any engagement begins.',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-400 text-xs font-semibold text-navy-950">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <p className="px-1 text-xs leading-relaxed text-navy-400">
                Information shared is treated as confidential. Submitting an
                enquiry does not constitute an engagement; that begins only once
                a scope is mutually agreed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-start gap-5 rounded-2xl border border-navy-200/60 bg-cream-50 p-8 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <div>
        <h2 className="font-serif text-2xl text-navy-900">Enquiry received — thank you.</h2>
        <p className="mt-3 text-base leading-relaxed text-navy-600">
          A member of the QAP team will review your details and be in touch
          shortly. If you'd like to move faster, the fastest route is WhatsApp.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={whatsappLink("Hello QAP, I've just submitted an enquiry and would like to talk.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Continue on WhatsApp
        </a>
        <a href="/" className="btn-secondary">
          Back to home
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-navy-500">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholderOption,
}: {
  label: string;
  name: string;
  options: string[];
  placeholderOption?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-navy-500">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
      >
        <option value="">{placeholderOption || 'Select…'}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
