import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

export default function LandingNextConsultationBlock() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section
      className='relative scroll-mt-24 bg-[linear-gradient(180deg,#005e7e_0%,#004a63_50%,#612a7b_100%)] py-14 text-white sm:scroll-mt-28 sm:py-16'
      id='consultation'
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(234,75,106,0.15)_0%,_transparent_55%)]' />
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='font-heading text-2xl font-bold sm:text-3xl lg:text-4xl'>
            Book your consultation
          </h2>
          <div className='mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brandYellow via-white to-brandPink' />
          <p className='mt-4 text-sm leading-relaxed text-white/90 sm:text-base'>
            One clear action: share a few details and we will coordinate a call.
            Offers can be discussed after you are comfortable with the clinical
            fit—not in the first screen.
          </p>
        </div>
        <div className='mx-auto mt-10 max-w-md rounded-2xl border-2 border-white/25 bg-white px-6 py-8 shadow-2xl shadow-black/25 sm:px-8 sm:py-9'>
          {isClient ? (
            <FormComponent variant='card' isTag={false} />
          ) : null}
        </div>
        <p className='mx-auto mt-8 max-w-xl text-center text-sm text-white/80'>
          Prefer calling?{' '}
          <a
            href='tel:+919108910832'
            className='font-bold text-brandYellow underline decoration-white/40 underline-offset-4 hover:text-white'
          >
            +91 9108 9108 32
          </a>
        </p>
      </div>
    </section>
  );
}
