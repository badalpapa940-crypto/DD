import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({
  source = 'home_contact',
  compact = false,
}: {
  source?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const company = String(data.get('company') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email) {
      setStatus('error');
      setError('Please share your name and email so we can get back to you.');
      return;
    }

    const { error: insertError } = await supabase.from('contact_messages').insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message: message || null,
      source,
    });

    if (insertError) {
      setStatus('error');
      setError('Something went wrong on our end. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-navy-200/60 bg-cream-100 p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl text-navy-900">Thank you — message received.</h3>
          <p className="mt-2 text-sm text-navy-600">
            A member of the QAP team will be in touch shortly. If you'd like to
            share more detail about your business, the enquiry page is the
            fastest route.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setStatus('idle')}
            className="btn-secondary"
          >
            Send another
          </button>
          <a href="/enquiry" className="btn-primary">
            Detailed enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.in" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" placeholder="+91…" />
        <Field label="Company" name="company" placeholder="Company name" />
      </div>
      {!compact && (
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-navy-500">
            How can we help?
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us briefly about your business and the challenge you're working through."
            className="w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
          />
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
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
