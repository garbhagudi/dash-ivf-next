import dynamic from 'next/dynamic';
import { useState } from 'react';
import { faqData } from 'data/faqData';

const AccordionLayout = dynamic(() => import('components/FaqLayout'), {
  ssr: false,
});

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  return (
    <div className='bg-fuchsia-50'>
      <h2 className='pt-10 text-center font-heading text-2xl font-bold text-brandDark sm:text-3xl lg:pt-16'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
          {faqData.map((items) => (
            <AccordionLayout
              title={items.Question}
              key={items.id}
              index={items.id}
              activeIndex={activeIndex1}
              setActiveIndex={setActiveIndex1}
            >
              {items.Answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
