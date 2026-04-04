import Image from 'components/image';
import { doctors } from 'components/doctors';
import {
  getLandingDoctorExperienceYears,
  getLandingDoctorMeta,
} from 'data/landingNextDoctorMeta';
import dynamic from 'next/dynamic';
import { useMemo, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const ContentModal = dynamic(() => import('components/contentModal'), {
  ssr: false,
});

/** Same controls as patient stories in `social-proof.jsx`. */
const navBtnClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/80 bg-brandPink text-white shadow-lg transition hover:border-white hover:bg-brandPink2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:opacity-40 sm:h-11 sm:w-11';

const swiperBreakpoints = {
  0: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
  },
};

export default function LandingNextDoctorsGrid() {
  const swiperRef = useRef(null);

  const list = useMemo(() => {
    return doctors
      .filter((d) => d?.name)
      .sort((a, b) => {
        const yb = getLandingDoctorExperienceYears(b.name);
        const ya = getLandingDoctorExperienceYears(a.name);
        if (yb !== ya) return yb - ya;
        return a.name.trim().localeCompare(b.name.trim());
      });
  }, []);

  return (
    <section
      className='bg-gradient-to-br from-pink-300 to-purple-100 py-12 sm:py-16'
      id='specialists'
    >
      <div className='mx-auto max-w-7xl px-3 pb-4 sm:px-6'>
        <div className='pb-10 text-center sm:pb-12'>
          <h2 className='font-heading text-2xl font-bold text-brandDark sm:text-3xl lg:text-4xl'>
            Meet your fertility specialists
          </h2>
          <p className='mx-auto mt-4 max-w-prose text-sm text-brandDark/90 md:text-base'>
            Clear credentials, centres, and languages—so choosing who to see feels
            easier.
          </p>
        </div>

        <div className='relative min-w-0 lg:px-12'>
          <button
            type='button'
            aria-label='Previous specialists'
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${navBtnClass} pointer-events-auto absolute left-2 top-1/2 z-20 -translate-y-1/2 sm:left-3 lg:left-0 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2`}
          >
            <HiChevronLeft className='text-2xl' />
          </button>

          <Swiper
            modules={[Autoplay, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={swiperBreakpoints}
            rewind
            autoplay={{
              delay: 4800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className='doctors-landing-swiper relative z-0 !pb-12 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:bg-brandPink4/60 [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-brandPink [&_.swiper-slide]:h-auto'
          >
            {list.map((doc) => {
              const meta = getLandingDoctorMeta(doc.name);
              return (
                <SwiperSlide key={doc.name} className='!h-auto'>
                  <article className='isolate flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-white/80 bg-white/95 shadow-xl shadow-brandPurple/10 transition hover:shadow-2xl md:backdrop-blur-sm'>
                    <div className='flex flex-col items-center px-5 pb-4 pt-8 text-center sm:flex-row sm:items-start sm:text-left'>
                      <div className='relative mx-auto h-28 w-28 shrink-0 sm:mx-0'>
                        <div
                          aria-hidden
                          className='pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-brandPink3/85 to-purple-500/45 ring-2 ring-brandPink4/40'
                        />
                        <div className='relative z-[1] h-full w-full overflow-hidden rounded-full ring-2 ring-white'>
                          <Image
                            src={doc.image.url}
                            alt={doc.imageAlt || doc.name}
                            width={112}
                            height={112}
                            className='h-full w-full object-cover shadow-lg'
                          />
                        </div>
                      </div>
                      <div className='mt-4 min-w-0 max-w-full flex-1 sm:ml-5 sm:mt-0'>
                        <h3 className='break-words font-heading text-lg font-bold text-brandDark'>
                          {doc.name.trim()}
                        </h3>
                        <p className='mt-1 break-words text-xs font-medium text-brandPurpleDark'>
                          {doc.qualification}
                        </p>
                        <p className='mt-0.5 break-words text-sm font-semibold text-brandPink'>
                          {doc.designation}
                        </p>
                      </div>
                    </div>
                    <div className='space-y-3 border-t border-brandPink5 bg-gradient-to-b from-brandPink5/40 to-white px-5 py-4 text-sm'>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-wide text-brandPurpleDark'>
                          Experience
                        </p>
                        <p className='mt-0.5 font-medium text-brandDark'>
                          {meta.experience}
                        </p>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-wide text-brandPurpleDark'>
                          Centres
                        </p>
                        <p className='mt-0.5 font-medium text-brandDark'>
                          {meta.locations.join(' · ')}
                        </p>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-wide text-brandPurpleDark'>
                          Languages
                        </p>
                        <p className='mt-0.5 font-medium text-brandDark'>
                          {meta.languages.join(' · ')}
                        </p>
                      </div>
                    </div>
                    <div className='mt-auto border-t border-brandPink5/80 bg-gradient-to-b from-white to-brandPink5/20 p-4 text-center'>
                      <ContentModal
                        title='View full profile'
                        classname='inline-flex w-full max-w-[220px] items-center justify-center gap-2 rounded-xl border-2 border-brandPurpleDark bg-white px-4 py-2.5 text-center text-sm font-bold text-brandPurpleDark shadow-sm transition hover:border-brandPink hover:bg-brandPink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPink sm:w-auto sm:max-w-none'
                        content={doc?.bio?.raw?.children}
                        heading={doc.name.trim()}
                      />
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            type='button'
            aria-label='Next specialists'
            onClick={() => swiperRef.current?.slideNext()}
            className={`${navBtnClass} pointer-events-auto absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-3 lg:right-0 lg:z-10 lg:-translate-y-1/2 lg:translate-x-1/2`}
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>

        <p className='mt-10 text-center text-sm font-medium text-brandPurpleDark'>
          Next step:{' '}
          <a
            href='#consultation'
            className='font-bold text-brandPink underline decoration-brandPink decoration-2 underline-offset-4'
          >
            Tell us your preferred location
          </a>{' '}
          and we will guide you to the right doctor.
        </p>
      </div>
    </section>
  );
}
