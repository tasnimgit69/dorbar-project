export interface CaseStudyDetail {
  title: string;
  slug: string;
  subtitle: string;
  practiceArea: string;
  clientType: string;
  duration: string;
  leadAttorney: string;
  heroImage: string;
  mainImage: string;
  summary: string;
  image: string;
  situation: string;
  challenges?: string[];
  approach: {
    title: string;
    description: string;
  }[];
  outcomes: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    company?: string;
  };
  takeaways: {
    title: string;
    description: string;
  }[];
  teamHeading: string;
  teamAttorneys: {
    name: string;
    role: string;
    description: string;
    image: string;
  }[];
}

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    title: 'International Patent Portfolio Protection',
    slug: 'international-patent-portfolio-protection',
    subtitle: 'A complex corporate dispute resolved through strategic negotiation and legal precision.',
    practiceArea: 'Intellectual Property',
    clientType: 'Private Corporation',
    duration: '6 Months',
    leadAttorney: 'John D. Myers',
    heroImage: '/images/services/case-study-main-image-1.webp',
    mainImage: '/images/services/case-study-details-image.webp',
    summary: 'Safeguarded innovative technology through strategic patent filings across multiple jurisdictions for emerging tech company.',
    image: '/images/services/case-study-image-1.webp',
    situation:
      'Our client, a mid-sized technology corporation with annual revenues exceeding $50 million, faced a complex contractual dispute involving multiple stakeholders and potential litigation risks that threatened both their financial stability and market reputation.\n\nThe primary challenge was minimizing legal exposure while preserving critical commercial relationships with key partners and suppliers. The dispute involved intricate intellectual property considerations, cross-border jurisdictional issues, and time-sensitive competitive pressures.\n\nWith millions at stake and the company\'s growth trajectory in jeopardy, our client needed sophisticated legal counsel capable of navigating both the technical complexities and delicate business dynamics of the situation.',
    approach: [
      {
        title: 'Comprehensive Legal Assessment',
        description:
          'We began with an exhaustive analysis of all contractual documentation, corporate communications, and relevant legal precedents. Our team conducted detailed interviews with key stakeholders, reviewed financial records, and mapped the complex network of business relationships to identify vulnerabilities and strategic opportunities.',
      },
      {
        title: 'Negotiation & Mediation Strategy',
        description:
          'Rather than pursuing costly litigation, we developed a sophisticated negotiation framework that aligned legal strategy with business objectives. Through carefully orchestrated mediation sessions, we facilitated productive dialogue between parties while maintaining firm protection of our client\'s interests and leveraging key pressure points.',
      },
      {
        title: 'Settlement Execution & Implementation',
        description:
          'We negotiated comprehensive settlement terms that exceeded our client\'s expectations, including favorable payment structures, intellectual property protections, and non-disclosure provisions. Our team oversaw meticulous documentation and ensured smooth implementation, providing ongoing counsel to prevent future disputes.',
      },
    ],
    outcomes: [
      { value: '$5M', label: 'Million Dollar Settlement Negotiated' },
      { value: '$6M', label: 'Months to Resolution' },
      { value: '05', label: 'Litigation Required' },
    ],
    testimonial: {
      quote:
        'The team demonstrated exceptional skill and professionalism throughout the entire process. Their strategic approach not only resolved our dispute efficiently but preserved critical business relationships. We achieved results that exceeded our expectations.',
      author: 'Chief Legal Officer',
      company: 'Technology Corporation (Confidential)',
    },
    takeaways: [
      {
        title: 'Strategic Negotiation Prevented Costly Litigation',
        description: 'By pursuing mediation over litigation, we saved our client substantial years of uncertainty while achieving a superior outcome.',
      },
      {
        title: 'Maintained Confidentiality Throughout Process',
        description: 'Careful management of information flow protected our client\'s reputation market disruption during sensitive negotiations.',
      },
      {
        title: 'Delivered Measurable Results Within Timeline',
        description: 'We resolved the dispute in six months, allowing our client to refocus on growth initiatives without prolonged distraction.',
      },
      {
        title: 'Preserved Critical Business Relationships',
        description: 'Our diplomatic approach maintained constructive relationships with key partners, enabling continued collaboration post-settlement.',
      },
    ],
    teamHeading: 'Led By Our Corporate Law Experts',
    teamAttorneys: [
      {
        name: 'Richard Dorbar',
        role: 'Managing Partner',
        description: 'Specializing in corporate law and M&A transactions with over 25 years of experience guiding businesses through complex legal matters.',
        image: '/images/attorneys/attorney-item-image-2.webp',
      },
      {
        name: 'David Chen',
        role: 'Senior Partner',
        description: 'Compassionate advocate with extensive experience in divorce, custody, and family matters, committed to protecting your family\'s interests.',
        image: '/images/attorneys/attorney-item-image-1.webp',
      },
      {
        name: 'Sarah Thompson',
        role: 'Partner',
        description: 'Renowned litigator with a track record of successful outcomes in complex commercial disputes and business litigation.',
        image: '/images/attorneys/attorney-item-image-3.webp',
      },
    ],
  },
  {
    title: '$8.5M Breach of Contract Victory',
    slug: '8-5m-breach-of-contract-victory',
    subtitle: 'A complex corporate dispute resolved through strategic negotiation and legal precision.',
    practiceArea: 'Civil Litigation',
    clientType: 'Private Corporation',
    duration: '6 Months',
    leadAttorney: 'John D. Myers',
    heroImage: '/images/services/case-study-main-image-2.webp',
    mainImage: '/images/services/case-study-details-image.webp',
    summary: 'Secured substantial verdict for client in commercial dispute, recovering damages and establishing important legal precedent.',
    image: '/images/services/case-study-image-2.webp',
    situation:
      'Our client, a mid-sized technology corporation with annual revenues exceeding $50 million, faced a complex contractual dispute involving multiple stakeholders and potential litigation risks that threatened both their financial stability and market reputation.\n\nThe primary challenge was minimizing legal exposure while preserving critical commercial relationships with key partners and suppliers. The dispute involved intricate intellectual property considerations, cross-border jurisdictional issues, and time-sensitive competitive pressures.\n\nWith millions at stake and the company\'s growth trajectory in jeopardy, our client needed sophisticated legal counsel capable of navigating both the technical complexities and delicate business dynamics of the situation.',
    approach: [
      {
        title: 'Comprehensive Legal Assessment',
        description:
          'We began with an exhaustive analysis of all contractual documentation, corporate communications, and relevant legal precedents. Our team conducted detailed interviews with key stakeholders, reviewed financial records, and mapped the complex network of business relationships to identify vulnerabilities and strategic opportunities.',
      },
      {
        title: 'Negotiation & Mediation Strategy',
        description:
          'Rather than pursuing costly litigation, we developed a sophisticated negotiation framework that aligned legal strategy with business objectives. Through carefully orchestrated mediation sessions, we facilitated productive dialogue between parties while maintaining firm protection of our client\'s interests and leveraging key pressure points.',
      },
      {
        title: 'Settlement Execution & Implementation',
        description:
          'We negotiated comprehensive settlement terms that exceeded our client\'s expectations, including favorable payment structures, intellectual property protections, and non-disclosure provisions. Our team oversaw meticulous documentation and ensured smooth implementation, providing ongoing counsel to prevent future disputes.',
      },
    ],
    outcomes: [
      { value: '$5M', label: 'Million Dollar Settlement Negotiated' },
      { value: '$6M', label: 'Months to Resolution' },
      { value: '05', label: 'Litigation Required' },
    ],
    testimonial: {
      quote:
        'The team demonstrated exceptional skill and professionalism throughout the entire process. Their strategic approach not only resolved our dispute efficiently but preserved critical business relationships. We achieved results that exceeded our expectations.',
      author: 'Chief Legal Officer',
      company: 'Technology Corporation (Confidential)',
    },
    takeaways: [
      {
        title: 'Strategic Negotiation Prevented Costly Litigation',
        description: 'By pursuing mediation over litigation, we saved our client substantial years of uncertainty while achieving a superior outcome.',
      },
      {
        title: 'Maintained Confidentiality Throughout Process',
        description: 'Careful management of information flow protected our client\'s reputation market disruption during sensitive negotiations.',
      },
      {
        title: 'Delivered Measurable Results Within Timeline',
        description: 'We resolved the dispute in six months, allowing our client to refocus on growth initiatives without prolonged distraction.',
      },
      {
        title: 'Preserved Critical Business Relationships',
        description: 'Our diplomatic approach maintained constructive relationships with key partners, enabling continued collaboration post-settlement.',
      },
    ],
    teamHeading: 'Led By Our Civil Litigation Experts',
    teamAttorneys: [
      {
        name: 'Richard Dorbar',
        role: 'Managing Partner',
        description: 'Specializing in corporate law and M&A transactions with over 25 years of experience guiding businesses through complex legal matters.',
        image: '/images/attorneys/attorney-item-image-2.webp',
      },
      {
        name: 'David Chen',
        role: 'Senior Partner',
        description: 'Compassionate advocate with extensive experience in divorce, custody, and family matters, committed to protecting your family\'s interests.',
        image: '/images/attorneys/attorney-item-image-1.webp',
      },
      {
        name: 'Sarah Thompson',
        role: 'Partner',
        description: 'Renowned litigator with a track record of successful outcomes in complex commercial disputes and business litigation.',
        image: '/images/attorneys/attorney-item-image-3.webp',
      },
    ],
  },
  {
    title: '$15M Corporate Acquisition Deal',
    slug: '15m-corporate-acquisition-deal',
    subtitle: 'A complex corporate dispute resolved through strategic negotiation and legal precision.',
    practiceArea: 'Corporate Law',
    clientType: 'Private Corporation',
    duration: '6 Months',
    leadAttorney: 'John D. Myers',
    heroImage: '/images/services/case-study-main-image-3.webp',
    mainImage: '/images/services/case-study-details-image.webp',
    summary: 'Successfully negotiated and closed a complex cross-border acquisition for a technology firm, protecting intellectual property and maximizing shareholder value.',
    image: '/images/services/case-study-image-3.webp',
    situation:
      'Our client, a mid-sized technology corporation with annual revenues exceeding $50 million, faced a complex contractual dispute involving multiple stakeholders and potential litigation risks that threatened both their financial stability and market reputation.\n\nThe primary challenge was minimizing legal exposure while preserving critical commercial relationships with key partners and suppliers. The dispute involved intricate intellectual property considerations, cross-border jurisdictional issues, and time-sensitive competitive pressures.\n\nWith millions at stake and the company\'s growth trajectory in jeopardy, our client needed sophisticated legal counsel capable of navigating both the technical complexities and delicate business dynamics of the situation.',
    approach: [
      {
        title: 'Comprehensive Legal Assessment',
        description:
          'We began with an exhaustive analysis of all contractual documentation, corporate communications, and relevant legal precedents. Our team conducted detailed interviews with key stakeholders, reviewed financial records, and mapped the complex network of business relationships to identify vulnerabilities and strategic opportunities.',
      },
      {
        title: 'Negotiation & Mediation Strategy',
        description:
          'Rather than pursuing costly litigation, we developed a sophisticated negotiation framework that aligned legal strategy with business objectives. Through carefully orchestrated mediation sessions, we facilitated productive dialogue between parties while maintaining firm protection of our client\'s interests and leveraging key pressure points.',
      },
      {
        title: 'Settlement Execution & Implementation',
        description:
          'We negotiated comprehensive settlement terms that exceeded our client\'s expectations, including favorable payment structures, intellectual property protections, and non-disclosure provisions. Our team oversaw meticulous documentation and ensured smooth implementation, providing ongoing counsel to prevent future disputes.',
      },
    ],
    outcomes: [
      { value: '$5M', label: 'Million Dollar Settlement Negotiated' },
      { value: '$6M', label: 'Months to Resolution' },
      { value: '05', label: 'Litigation Required' },
    ],
    testimonial: {
      quote:
        'The team demonstrated exceptional skill and professionalism throughout the entire process. Their strategic approach not only resolved our dispute efficiently but preserved critical business relationships. We achieved results that exceeded our expectations.',
      author: 'Chief Legal Officer',
      company: 'Technology Corporation (Confidential)',
    },
    takeaways: [
      {
        title: 'Strategic Negotiation Prevented Costly Litigation',
        description: 'By pursuing mediation over litigation, we saved our client substantial years of uncertainty while achieving a superior outcome.',
      },
      {
        title: 'Maintained Confidentiality Throughout Process',
        description: 'Careful management of information flow protected our client\'s reputation market disruption during sensitive negotiations.',
      },
      {
        title: 'Delivered Measurable Results Within Timeline',
        description: 'We resolved the dispute in six months, allowing our client to refocus on growth initiatives without prolonged distraction.',
      },
      {
        title: 'Preserved Critical Business Relationships',
        description: 'Our diplomatic approach maintained constructive relationships with key partners, enabling continued collaboration post-settlement.',
      },
    ],
    teamHeading: 'Led By Our Corporate Law Experts',
    teamAttorneys: [
      {
        name: 'Richard Dorbar',
        role: 'Managing Partner',
        description: 'Specializing in corporate law and M&A transactions with over 25 years of experience guiding businesses through complex legal matters.',
        image: '/images/attorneys/attorney-item-image-2.webp',
      },
      {
        name: 'David Chen',
        role: 'Senior Partner',
        description: 'Compassionate advocate with extensive experience in divorce, custody, and family matters, committed to protecting your family\'s interests.',
        image: '/images/attorneys/attorney-item-image-1.webp',
      },
      {
        name: 'Sarah Thompson',
        role: 'Partner',
        description: 'Renowned litigator with a track record of successful outcomes in complex commercial disputes and business litigation.',
        image: '/images/attorneys/attorney-item-image-3.webp',
      },
    ],
  },
];
