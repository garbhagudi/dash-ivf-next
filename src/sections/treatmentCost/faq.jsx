import React from 'react';
import AccordionLayout from 'components/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  return (
    <div className='bg-fuchsia-50 px-1'>
      <h2 className='lg:pt:16 pt-10 text-center font-heading text-3xl font-bold lg:text-4xl'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
          {data?.map((items) => (
            <AccordionLayout
              title={items?.Question}
              key={items?.id}
              index={items?.id}
              activeIndex={activeIndex1}
              setActiveIndex={setActiveIndex1}
            >
              {items?.Answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    Question: 'Is this package available in all your centres?',
    Answer: 'Yes, this package is available at all our 7 centres.',
  },
  {
    id: 2,
    Question: 'Can we get all the tests done on the same day?',
    Answer:
      'All the above tests can be done as an out-patient on the same day.',
  },
  {
    id: 3,
    Question: 'What should I carry with me when visiting for the first time?',
    Answer:
      'You need to carry ID Proof and a Passport-size photograph of you and your partner. Also, if you have undergone checkups anytime in the past, do carry reports with you, if available.',
  },
  {
    id: 4,
    Question: 'Which IVF clinic has the highest success rate in Bangalore?',
    Answer: `GarbhaGudi IVF Centre has a high success rate, with many of our patients achieving successful pregnancies. However, it's important to note that success rates can vary depending on individual factors.`,
  },
  {
    id: 5,
    Question: 'How long does it take for an IVF treatment?',
    Answer:
      'The overall duration of IVF Treatment is 3-4 months. During your visit, you will consult with the doctor, and after the consultation, the doctor will ask you to undergo checkups. Based on the reports, the doctors will tell you when you need to visit next (generally between 1-3 months). ',
  },
];
