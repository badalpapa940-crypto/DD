import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/site';

function LegalLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <main className="bg-cream-50">
      <section className="border-b border-navy-200/50 bg-gradient-to-b from-cream-100 to-cream-50 py-14 lg:py-20">
        <div className="container-q">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="heading-serif mt-4 text-4xl text-navy-950 sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-600">{intro}</p>
          </Reveal>
        </div>
      </section>
      <section className="py-14 lg:py-20">
        <div className="container-q max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 40}>
                <h2 className="font-serif text-xl text-navy-900">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-xs text-navy-400">
            Questions about this policy? Email {SITE.email}.
          </p>
        </div>
      </section>
    </main>
  );
}

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How Quantum Advisory Partners handles the information you share with us through this website."
      sections={[
        {
          heading: 'Information we collect',
          body: 'We collect the information you voluntarily provide through our contact and enquiry forms — such as your name, email, phone number, company, and details about your business or enquiry. We do not use third-party tracking cookies for advertising on this site.',
        },
        {
          heading: 'How we use your information',
          body: 'Your information is used solely to respond to your enquiry, assess whether we can help, and arrange any subsequent conversation or engagement. We do not sell or share your information with third parties for marketing purposes.',
        },
        {
          heading: 'Confidentiality',
          body: 'Information shared through enquiry forms is treated as confidential. Before any detailed or sensitive business information is exchanged, we will agree a formal scope and confidentiality framework.',
        },
        {
          heading: 'Data retention',
          body: 'Enquiry records are retained only as long as necessary to respond to your enquiry and for a reasonable period thereafter, after which they are removed or anonymised.',
        },
        {
          heading: 'Your rights',
          body: 'You may request access to, correction of, or deletion of the personal information you have shared with us by emailing contact@quantumadvisorypartners.in.',
        },
      ]}
    />
  );
}

export function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro="The terms that govern your use of this website and any enquiry you submit to Quantum Advisory Partners."
      sections={[
        {
          heading: 'No advice offered',
          body: 'Information on this website is general in nature and is provided for informational purposes only. It does not constitute investment, legal, tax or accounting advice, and should not be relied upon as such. An advisory engagement is formed only after a scope is mutually agreed in writing.',
        },
        {
          heading: 'Illustrative content',
          body: 'Examples, figures and references on this website are illustrative and do not constitute guarantees of results. Outcomes depend on factors specific to each business and engagement.',
        },
        {
          heading: 'IPO readiness',
          body: 'References to institutional or IPO readiness describe a possible objective. They are not a guarantee of listing eligibility, regulatory approval, fundraising success or transaction completion.',
        },
        {
          heading: 'Engagement principle',
          body: 'QAP operates on a defined principle: start with the business challenge, establish the facts, and agree on a practical scope before proceeding. No engagement is formed by submitting an enquiry or contact form alone.',
        },
        {
          heading: 'Acceptance',
          body: 'By using this website and submitting forms, you acknowledge the terms above. If you do not agree, please do not submit information through the site.',
        },
      ]}
    />
  );
}
