/** Enrichment for landing-next doctor cards (experience, centres, languages). */
export const landingNextDoctorMeta = {
  'Dr Asha S Vijay': {
    experience: '20+ years in OB-GYN & fertility',
    locations: ['Hanumanthanagar', 'Jayanagar', 'Electronic City'],
    languages: ['English', 'Kannada', 'Hindi'],
  },
  'Dr Aparna N': {
    experience: '10+ years in fertility care',
    locations: ['Kalyan Nagar', 'Bangalore'],
    languages: ['English', 'Kannada', 'Hindi', 'Tamil', 'Malayalam', 'Telugu'],
  },
  'Dr Deepthi Venkatesh': {
    experience: '10+ years clinical fertility',
    locations: ['Nagarbhavi', 'Bangalore'],
    languages: ['English', 'Kannada', 'Hindi'],
  },
  'Dr Priyanka Rani': {
    experience: '10+ years in reproductive medicine',
    locations: ['Electronic City', 'Bangalore'],
    languages: ['Kannada', 'English', 'Hindi'],
  },
  'Dr Shweta Ashok Harnal': {
    experience: '10+ years in fertility treatment',
    locations: ['Jayanagar', 'Bangalore'],
    languages: ['Kannada', 'English', 'Hindi', 'Marathi', 'Assamese'],
  },
  'Dr. Anusha S. M': {
    experience: 'Experienced fertility specialist',
    locations: ['Yelahanka', 'Bangalore'],
    languages: ['Kannada', 'English', 'Hindi'],
  },
  'Dr. Harshitha P': {
    experience: 'Experienced fertility specialist',
    locations: ['New BEL Road', 'Bangalore'],
    languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
  },
  'Dr. Manasa K A': {
    experience: 'Experienced fertility specialist',
    locations: ['Davanagere', 'Karnataka'],
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
  },
  'Dr. P. V. Vasavi Devi': {
    experience: 'Experienced fertility specialist',
    locations: ['Marathahalli', 'Bangalore'],
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
  },
  'Dr. Poornima M S': {
    experience: 'Experienced fertility specialist',
    locations: ['Jayanagar', 'Bangalore'],
    languages: ['Kannada', 'English', 'Hindi', 'Tamil', 'Telugu'],
  },
  'Dr. Radha Puchalapalli': {
    experience: 'Experienced fertility specialist',
    locations: ['Hosur', 'Tamil Nadu'],
    languages: ['Tamil', 'Telugu', 'Kannada', 'English', 'Hindi'],
  },
  'Dr. S R Raajam Murali': {
    experience: '20+ years in fertility treatment',
    locations: ['Hanumanthnagar', 'Bangalore'],
    languages: ['English', 'Tamil', 'Kannada', 'Hindi'],
  },
  'Dr. Sahana K': {
    experience: 'Experienced fertility specialist',
    locations: ['Nagarbhavi', 'Bangalore'],
    languages: ['Kannada', 'English', 'Hindi', 'Tamil', 'Telugu', 'Marathi'],
  },
  'Dr. Varsha Patil': {
    experience: 'Experienced fertility specialist',
    locations: ['Electronic City', 'Bangalore'],
    languages: ['Kannada', 'English'],
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
