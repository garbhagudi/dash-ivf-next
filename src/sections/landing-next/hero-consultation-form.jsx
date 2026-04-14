'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

export default function LandingNextHeroConsultationForm() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div className='rounded-lg border border-stone-200 bg-stone-50/60 px-3 py-3 sm:px-3.5 sm:py-3'>
      {isClient ? (
        <FormComponent variant='card' isTag={false} compact />
      ) : (
        <div
          className='h-36 max-w-full animate-pulse rounded-md bg-stone-100'
          aria-hidden
        />
      )}
    </div>
  );
}
