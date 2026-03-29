export interface Award {
  organization: string;
  recognition: string;
}

export const awards: Award[] = [
  { organization: 'American Bar Association', recognition: 'Member Since 1998' },
  { organization: 'The Legal 500', recognition: 'Top Tier 2024' },
  { organization: 'Avvo Rated', recognition: '10.0 Superb Rating' },
  { organization: 'State Bar Association', recognition: 'Licensed & Accredited' },
  { organization: 'Super Lawyers', recognition: '5 Attorneys Selected' },
  { organization: 'Chambers USA', recognition: 'Band 1 Recognition' },
];

export const awardStats = {
  totalAwardsReceived: '25+',
  totalAssociations: '10+',
};
