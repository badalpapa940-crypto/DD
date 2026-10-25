export const SITE = {
  name: 'Quantum Advisory Partners',
  shortName: 'QAP',
  email: 'contact@quantumadvisorypartners.in',
  whatsappNumber: '919000000000', // placeholder — replace with real QAP number
  founder: {
    name: 'Alok Verma',
    title: 'Founder and Principal',
  },
} as const;

export const WHATSAPP_BASE_URL = 'https://wa.me';

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `${WHATSAPP_BASE_URL}/${SITE.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
