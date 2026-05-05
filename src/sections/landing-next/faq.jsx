import dynamic from 'next/dynamic';
import { useState } from 'react';
import { faqData } from 'data/faqData';

const AccordionLayout = dynamic(() => import('components/FaqLayout'), {
  ssr: false,
});

export default function LandingNextFaq() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      className='relative border-t border-brandPink4/30 bg-gradient-to-b from-white via-brandPink5/25 to-purple-100/50 py-14 sm:py-16 lg:py-20'
      id='faq'
      aria-labelledby='faq-heading'
    >
      <div className='mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-4xl'>
        <p className='text-xs font-bold uppercase tracking-[0.2em] text-brandPink'>
          Helpful answers
        </p>
        <h2
          id='faq-heading'
          className='mt-2 font-heading text-2xl font-bold text-brandDark sm:text-3xl lg:text-4xl'
        >
          Frequently asked questions
        </h2>
        <div className='mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brandPink to-brandPurple' />
        <p className='mt-4 text-pretty text-sm leading-relaxed text-brandDark/80 sm:text-base'>
          Straight answers about IVF and GarbhaGudi. Need something personal?{' '}
          <a
            href='#consultation'
            className='font-semibold text-brandPink underline decoration-brandPink/40 underline-offset-2 hover:text-brandPink2'
          >
            Book a free consultation
          </a>
          .
        </p>
      </div>

      <div className='mx-auto mt-10 max-w-3xl px-3 sm:px-6 lg:max-w-4xl'>
        <div className='flex flex-col justify-center rounded-2xl border border-brandPink4/40 bg-white/90 p-3 shadow-lg shadow-brandPurple/5 sm:p-4 md:bg-white/80 md:p-6 md:backdrop-blur-sm'>
          {faqData.map((items) => (
            <AccordionLayout
              title={items.Question}
              key={items.id}
              index={items.id}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              {items.Answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </section>
  );
}
