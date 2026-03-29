export interface PricingPlan {
  name: string;
  summary: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonHref: string;
  featured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free Consultation',
    summary: 'Ideal for initial case reviews and basic guidance.',
    price: 0,
    features: [
      '15-minute call or in-person meeting',
      'General legal advice on your matter',
      'Assessment of your case strength',
      'No hidden fees or commitments',
    ],
    buttonText: 'Schedule Free Consultation',
    buttonHref: '/contact',
  },
  {
    name: 'Premium Consultation',
    summary: 'Designed for clients who need detailed, case-specific guidance.',
    price: 299,
    features: [
      '60-minute private consultation with senior attorney',
      'Comprehensive legal strategy outline',
      'Document review and analysis',
      'Priority scheduling availability',
      'Follow-up email summary with action items',
    ],
    buttonText: 'Book Premium Consultation',
    buttonHref: '/consultation',
    featured: true,
  },
];
