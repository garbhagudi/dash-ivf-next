import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { treatmentOptionsData } from 'sections/home/treatment';

export default function LandingNextServicesCompact() {
  return (
    <section
      className='relative bg-gradient-to-b from-white via-brandPink5/20 to-white py-14 sm:py-16 lg:py-20'
      id='services'
      aria-labelledby='services-heading'
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandPink4/60 to-transparent' />

      <div className='container relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-brandPink'>
            Clinical programmes
          </p>
          <h2
            id='services-heading'
            className='mt-2 font-heading text-2xl font-bold text-brandDark sm:text-3xl lg:text-4xl'
          >
            Treatments we are known for
          </h2>
          <div className='mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brandPink to-brandPurple' />
          <p className='mt-5 text-pretty text-sm leading-relaxed text-brandDark/75 sm:text-base'>
            The same options as our main site—explore what fits your journey,
            then{' '}
            <a
              href='#consultation'
              className='font-semibold text-brandPink underline decoration-brandPink/40 underline-offset-2 hover:text-brandPink2'
            >
              book a consultation
            </a>{' '}
            below.
          </p>
        </div>

        <ul className='mt-12 grid grid-cols-2 gap-x-3 gap-y-14 px-0.5 sm:gap-x-4 sm:gap-y-16 sm:px-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
          {treatmentOptionsData.map((item) => (
            <li key={item.id} className='h-full min-h-0 list-none'>
              <article className='group/card relative flex h-full flex-col overflow-visible rounded-2xl border-2 border-brandPink4/70 bg-white pb-0 shadow-sm shadow-brandPurple/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandPink hover:bg-gradient-to-b hover:from-pink-50/90 hover:to-white hover:shadow-xl hover:shadow-brandPink/20 focus-within:border-brandPink focus-within:ring-2 focus-within:ring-brandPink/30 focus-within:ring-offset-2'>
                <div className='flex flex-1 flex-col items-center px-2 pt-2 sm:px-3'>
                  <div className='-mt-9 flex items-center justify-center sm:-mt-11'>
                    <div className='rounded-2xl bg-gradient-to-br from-white via-brandPink5/80 to-purple-100/60 p-2.5 shadow-md ring-2 ring-white transition duration-300 group-hover/card:scale-105 group-hover/card:shadow-lg group-hover/card:ring-brandPink4/50 sm:p-3'>
                      <Image
                        src={item.image}
                        alt=''
                        width={80}
                        height={80}
                        className='h-16 w-16 object-contain drop-shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]'
                      />
                    </div>
                  </div>

                  <div className='flex min-h-0 flex-1 flex-col items-center py-3 sm:py-4'>
                    <h3 className='text-center font-heading text-sm font-bold leading-snug text-brandPurpleDark transition-colors duration-200 group-hover/card:text-brandPink sm:text-base md:text-lg'>
                      {item.treatent}
                    </h3>
                    <p className='mt-2 flex-1 text-center text-[11px] leading-relaxed text-brandliteGray sm:text-xs md:text-sm'>
                      {item.desc}
                    </p>
                  </div>
                </div>

                <Link
                  href={item.link}
                  className='group/cta mt-auto flex w-full items-center justify-center gap-2 rounded-b-[0.9rem] border-t-2 border-brandPink4/50 bg-brandPink4 py-3 text-sm font-bold text-white transition duration-200 hover:border-brandPink hover:bg-brandPink hover:shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark active:scale-[0.99]'
                >
                  <span>Learn more</span>
                  <HiArrowRight
                    className='h-4 w-4 shrink-0 transition-transform duration-200 group-hover/cta:translate-x-1'
                    aria-hidden
                  />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <p className='mt-14 text-center text-sm text-brandPurpleDark'>
          Ready to talk through what applies to you?{' '}
          <a
            href='#consultation'
            className='font-bold text-brandPink underline decoration-brandPink decoration-2 underline-offset-4 hover:text-brandPink2'
          >
            Use the consultation form below
          </a>
          .
        </p>
      </div>
    </section>
  );
}
