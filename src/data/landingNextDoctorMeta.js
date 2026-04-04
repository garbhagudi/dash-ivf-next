/** Enrichment for landing-next doctor cards (experience, centres, languages). */
export const landingNextDoctorMeta = {
  'Dr Asha S Vijay': {
    experience: '20+ years in OB-GYN & fertility',
    locations: ['Hanumanthanagar', 'Jayanagar', 'Electronic City'],
    languages: ['English', 'Kannada', 'Hindi'],
  },
  'Dr Priyanka Rani': {
    experience: '10+ years in reproductive medicine',
    locations: ['Hanumanthanagar', 'Multiple Bangalore centres'],
    languages: ['English', 'Hindi', 'Kannada'],
  },
  'Dr Aparna N': {
    experience: '10+ years in fertility care',
    locations: ['Jayanagar', 'Hanumanthanagar'],
    languages: ['English', 'Kannada', 'Tamil'],
  },
  'Dr Deepthi Venkatesh': {
    experience: '10+ years clinical fertility',
    locations: ['Electronic City', 'Bangalore'],
    languages: ['English', 'Kannada', 'Hindi'],
  },
  'Dr Shweta Ashok Harnal': {
    experience: '10+ years in gynaecology & IVF',
    locations: ['Nagarabhavi', 'Bangalore'],
    languages: ['English', 'Kannada', 'Hindi'],
  },
};

export function getLandingDoctorMeta(name) {
  const key = (name || '').trim();
  return (
    landingNextDoctorMeta[key] || {
      experience: 'Experienced fertility specialist',
      locations: ['Bangalore'],
      languages: ['English', 'Kannada', 'Hindi'],
    }
  );
}

/** Leading "N+ years" from card copy, for sorting (higher first). */
export function getLandingDoctorExperienceYears(name) {
  const { experience } = getLandingDoctorMeta(name);
  if (!experience || typeof experience !== 'string') return 0;
  const m = experience.match(/(\d+)\s*\+?\s*years?/i);
  return m ? parseInt(m[1], 10) : 0;
}
