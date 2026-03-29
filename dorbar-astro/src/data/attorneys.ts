export interface Attorney {
  name: string;
  role: string;
  specialties: string[];
  image: string;
  quote?: string;
  bio?: string;
  social: {
    linkedin: string;
    email: string;
  };
}

export const attorneys: Attorney[] = [
  {
    name: 'Richard Dorbar',
    role: 'Managing Partner',
    specialties: ['Corporate Law', 'Mergers & Acquisitions', 'Securities'],
    image: '/images/attorneys/attorney-item-image-2.webp',
    quote: "Our duty is not only to win cases but to protect our clients' dignity, future, and fundamental rights.",
    bio: 'With over 25 years of experience in corporate law and mergers & acquisitions, Richard has successfully guided Fortune 500 companies through complex transactions exceeding $10 billion. Her approach combines strategic insight with meticulous attention to detail, earning her recognition as one of the nation\'s leading corporate attorneys.',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Sarah Thompson',
    role: 'Partner',
    specialties: ['Family Law', 'Estate Planning', 'Mediation'],
    image: '/images/attorneys/attorney-item-image-3.webp',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Emily Watson',
    role: 'Associate Partner',
    specialties: ['Intellectual Property', 'Technology Law', 'Licensing'],
    image: '/images/attorneys/attorney-item-image-5.webp',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Partner',
    specialties: ['Criminal Defense', 'White Collar Crime', 'Appeals'],
    image: '/images/attorneys/attorney-item-image-6.webp',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'David Chen',
    role: 'Senior Partner',
    specialties: ['Litigation', 'Commercial Disputes', 'Contract Law'],
    image: '/images/attorneys/attorney-item-image-4.webp',
    bio: 'David leads our litigation practice with over 20 years of courtroom experience. A Harvard Law graduate, he has secured favorable outcomes in high-stakes commercial disputes and has been recognized by Chambers USA as a leading litigator for five consecutive years.',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'James Morrison',
    role: 'Associate Partner',
    specialties: ['Real Estate', 'Land Use', 'Construction Law'],
    image: '/images/attorneys/attorney-item-image-1.webp',
    social: { linkedin: '#', email: '#' },
  },
];

export const featuredAttorney = attorneys[0];
