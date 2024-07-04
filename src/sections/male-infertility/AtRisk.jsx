import React from 'react';
import Image from 'components/image';

const AtRisk = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='text-center font-heading text-2xl font-bold sm:text-4xl'>
          Who is at risk of male infertility?{' '}
        </div>
        <div className='py-2 text-center'>
          You are more likely to experience male infertility if you have:
        </div>
        <div className='mt-4'>
          <ul className='list-inside list-disc space-y-2'>
            <li>Previous prostate inflammation or genital infections</li>
            <li>Testicular injury or twisting (torsion) </li>
            <li>Puberty, either early or late</li>
            <li>High-temperature exposure of the genitals</li>
            <li>Hernia repair</li>
            <li>Testicles that haven&apos;t descended</li>
          </ul>
        </div>
        <div className='my-4'>
          You may also be at risk if you use certain prescription medications.
          Medicines for ulcers, psoriasis, depression and high blood pressure
          are among them.
        </div>
      </div>
    </div>
  );
};

export default AtRisk;
