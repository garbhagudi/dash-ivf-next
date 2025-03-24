import dynamic from 'next/dynamic';
import { useState } from 'react';
const AccordionLayout = dynamic(() => import('components/FaqLayout'), {
  ssr: false,
});
const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  return (
    <div className='bg-fuchsia-50'>
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
    Question: 'How much does IVF treatment cost in Bangalore?',
    Answer:
      'The cost of IVF treatment in Bangalore may vary depending on individual circumstances and treatment requirements. At Garbhagudi IVF Centre, we offer various IVF packages starting from INR 90,000.',
  },
  {
    id: 2,
    Question: 'Which IVF clinic has the highest success rate in Bangalore?',
    Answer:
      "Garbhagudi IVF Centre has a high success rate, with many of our patients achieving successful pregnancies. However, it's important to note that success rates can vary depending on individual factors.",
  },
  {
    id: 3,
    Question: 'Does GarbhaGudi Hospital provide fertility treatment?',
    Answer:
      'Yes, Garbhagudi IVF Centre is part of Garbha Gudi Hospital, which offers a wide range of fertility treatments.',
  },
  {
    id: 4,
    Question: 'Why choose GarbhaGudi Hospital to get IVF treatment?',
    Answer:
      'Garbhagudi IVF Centre offers advanced infertility treatments using state-of-the-art technology and experienced doctors. Our team of experts provides personalized care to each patient and strives to achieve the best possible outcomes.',
  },
  {
    id: 5,
    Question: 'Who is the best infertility doctor in Bangalore?',
    Answer:
      'At Garbhagudi IVF Centre, we have a team of highly experienced infertility specialists who are dedicated to providing the best possible care to our patients. We do not single out any one doctor as the "best" as all of our doctors are highly skilled and experienced in their fields.',
  },
  {
    id: 6,
    Question: 'Is IVF 100% accurate?',
    Answer:
      "IVF is a highly accurate and effective fertility treatment, but it's important to note that success rates can vary depending on individual factors.",
  },
  {
    id: 7,
    Question: 'Does insurance cover IVF cost in India?',
    Answer:
      "In India, insurance coverage for IVF treatment can vary depending on the policy and insurance provider. It's best to check with your insurance provider to see if IVF treatment is covered under your policy. At Garbhagudi IVF Centre, we also offer various financing options to help make IVF treatment more affordable and accessible for our patients.",
  },
];
