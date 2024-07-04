const people = [
  {
    name: 'Dr Asha S Vijay',
    role: 'Founder & Medical Director',
    imageUrl: 'https://media.graphassets.com/AKVhJHLwRmCJOyzS53Ri',
    bio: 'Dr Asha S Vijay is a well-known fertility specialist and leading name in the field of fertility and reproductive treatment. She is a specialist in the field...',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Vijay Kumar Shehsadri',
    role: 'Founder & CEO',
    imageUrl: 'https://media.graphassets.com/KEZntaT5RyimC9BHvR2g',
    bio: 'Mr Vijay Kumar is an Electrical Engineer and a serial entrepreneur. He has successfully started and built multiple engineering companies…',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Hari Srinivasan',
    role: 'Co-Founder & Director',
    imageUrl: 'https://media.graphassets.com/2HK2dzgNQQuyM39BnF5Q',
    bio: 'Mr Hari is a Medical Electronics engineer by education and an entrepreneur by passion. GarbhaGudi is his fourth stint as an entrepreneur. Prior to this, he has been…',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Pushpalatha M.S',
    role: 'Co-Founder & Director of Operations',
    imageUrl: 'https://media.graphassets.com/QbUzLaphQMGJ6wp4GuR9',
    bio: 'Mrs Pushpalatha M S has completed her masters in Power Electronics and is on the leadership team of multiple organizations. She completed her engineering…',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Management() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
              Management Team
            </h2>
          </div>
          <div className='lg:col-span-2'>
            <div className='space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'>
              {people.map((person) => (
                <div key={person.name}>
                  <div className='text-center md:space-y-4'>
                    <div className='aspect-square'>
                      <img
                        className='object-fit mx-auto h-96 w-96 rounded-3xl shadow-2xl'
                        src={person.imageUrl}
                        alt=''
                      />
                    </div>
                    <div className='text-lg font-medium'>
                      <h3 className='font-heading text-xl font-bold'>
                        {person.name}
                      </h3>
                      <p className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                        {person.role}
                      </p>
                    </div>
                    <div className='text-lg'>
                      <p className='text-gray-500'>{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
