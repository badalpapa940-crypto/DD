export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  details: string[];
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'capital-structure',
    number: '01',
    title: 'Capital Structure & Debt Advisory',
    tagline: 'Right capital, right cost, right structure.',
    details: [
      'Review of existing debt mix, cost of capital and covenants across lenders.',
      'Optimisation of capital structure to align with growth stage and cash generation.',
      'Negotiation support with banks, NBFCs and alternate credit providers.',
      'Fundraising advisory — term loans, working capital limits, structured debt and equity transitions.',
    ],
    outcomes: [
      'Lower blended cost of capital',
      'Improved liquidity headroom',
      'Covenant-aligned borrowing base',
    ],
  },
  {
    id: 'fractional-cfo',
    number: '02',
    title: 'Fractional CFO & Governance',
    tagline: 'Senior finance leadership, without the full-time overhead.',
    details: [
      'Ownership of financial planning, budgeting and management reporting (MIS).',
      'Board and investor reporting — periodic packs that drive decisions, not noise.',
      'Internal controls, policy frameworks and delegation of authority design.',
      'Coordination with auditors, tax advisors and legal counsel.',
    ],
    outcomes: [
      'Decision-grade MIS on a monthly cadence',
      'Cleaner audits, fewer surprises',
      'Governance ready for institutional capital',
    ],
  },
  {
    id: 'operations-supply-chain',
    number: '03',
    title: 'Operations & Supply Chain Value Creation',
    tagline: 'Margin lives in the operating detail.',
    details: [
      'Working capital diagnostics — inventory, receivables and payables cycle.',
      'Cost-to-serve analysis and SKU / channel profitability.',
      'Procurement and vendor consolidation programmes.',
      'Production planning and bottleneck analysis for manufacturing clients.',
    ],
    outcomes: [
      'Released working capital',
      'Improved gross margins',
      'Shorter cash conversion cycle',
    ],
  },
  {
    id: 'govt-incentives',
    number: '04',
    title: 'Government Incentives & Policy Monetization',
    tagline: 'Turn eligible schemes into realised benefits.',
    details: [
      'Identification of central and state incentives applicable to your sector and location.',
      'PLI, capital subsidy, interest subvention and export incentive assessments.',
      'Application and documentation support with the relevant authorities.',
      'Ongoing compliance and claim tracking through to disbursal.',
    ],
    outcomes: [
      'Non-dilutive capital inflows',
      'Reduced effective project cost',
      'Predictable benefit calendar',
    ],
  },
  {
    id: 'signature-suite',
    number: '05',
    title: 'Signature Advisory Suite',
    tagline: 'An integrated engagement across finance, operations and capital.',
    details: [
      'A combined programme for businesses preparing for a transaction, fundraising or institutional transition.',
      'Sequences capital structure, CFO-grade reporting, operational value creation and incentive monetization.',
      'Single point of accountability across workstreams.',
      'Milestone-based engagement with clear exit readiness criteria.',
    ],
    outcomes: [
      'A coherent value-creation narrative',
      'Institutional-grade finance function',
      'A documented readiness roadmap',
    ],
  },
];

export const INDUSTRIES: { name: string; line: string }[] = [
  { name: 'Manufacturing', line: 'Cost structures, working capital cycles and capacity-led growth decisions.' },
  { name: 'Energy & Infrastructure', line: 'Long-cycle capital, project finance and policy-linked revenue streams.' },
  { name: 'Real Estate', line: 'Project-level economics, inventory velocity and structured funding.' },
  { name: 'Healthcare', line: 'Unit economics, payor mix and capital deployment across facilities.' },
  { name: 'Technology', line: 'Burn discipline, unit economics and the transition path to operating leverage.' },
  { name: 'Retail & Consumer', line: 'Store-level profitability, channel mix and working capital intensity.' },
  { name: 'Logistics', line: 'Asset utilisation, cost per unit and fleet / warehouse economics.' },
  { name: 'Financial Services', line: 'Capital adequacy, risk-adjusted returns and regulatory reporting discipline.' },
];

export const APPROACH_STEPS: { title: string; line: string }[] = [
  { title: 'Diagnose', line: 'Map the financial and operational picture as it actually is today.' },
  { title: 'Quantify', line: 'Size the opportunities and the gaps in cash, margin and capital.' },
  { title: 'Prioritise', line: 'Rank interventions by value at stake and effort to deliver.' },
  { title: 'Advise', line: 'Translate the analysis into a clear set of decisions and recommendations.' },
  { title: 'Execute', line: 'Work alongside the team to implement — not just hand over a deck.' },
  { title: 'Measure', line: 'Track the outcomes against the baseline and recalibrate as you go.' },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What size of business does QAP work with?',
    a: 'QAP works with businesses in the ₹25–500Cr+ revenue range. This is the segment where growth exposes gaps in cash planning, profitability, financing and MIS — and where structured advisory has the highest leverage.',
  },
  {
    q: 'Is QAP a consulting firm or a CFO services firm?',
    a: 'Both, deliberately. Connected expertise — strategy, capital and hands-on finance execution — is the point. We are not a slide-deck firm, and we are not a bookkeeping firm. We sit between the two.',
  },
  {
    q: 'Do you work outside India?',
    a: 'QAP is an India-based firm and works primarily with Indian businesses. We do engage on India-linked work for overseas parents or investors on a case-by-case basis.',
  },
  {
    q: 'How is an engagement structured?',
    a: 'We start with the business challenge, establish the facts, and agree on a practical scope before proceeding. Engagements are typically milestone-based with a defined set of deliverables and an exit or transition point.',
  },
  {
    q: 'Do you help with fundraising?',
    a: 'Yes. Capital structure and debt advisory is a core workstream, including term loans, working capital limits, structured debt and the transition between debt and equity. We are not an investment bank and do not underwrite or place equity.',
  },
  {
    q: 'What does "IPO readiness" actually mean?',
    a: 'It means building the financial reporting, performance visibility and governance discipline that an institutional transaction — not only an IPO — would require. It is one possible objective, not a guarantee of listing eligibility, approval, fundraising or transaction success.',
  },
  {
    q: 'How do we start?',
    a: 'The simplest path is the Enquiry page — tell us about your business and the challenge. Alternatively, use the WhatsApp button or the contact form and we will arrange a first conversation.',
  },
  {
    q: 'Is the information we share confidential?',
    a: 'Yes. We treat all engagement discussions as confidential and will agree a formal scope and confidentiality framework before any detailed information is exchanged.',
  },
];

export const INDUSTRIES_LIST = INDUSTRIES;
export const REVENUE_BANDS = [
  '₹25–100 Cr',
  '₹100–250 Cr',
  '₹250–500 Cr',
  '₹500 Cr+',
];
export const TIMELINES = [
  'Immediate (next 30 days)',
  'Near-term (1–3 months)',
  'This quarter (3–6 months)',
  'Exploratory (6+ months)',
];
