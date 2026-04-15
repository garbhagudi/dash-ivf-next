import { useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  GARBHAGUDI_YOUTUBE_CHANNEL,
  testimonialVideosByLanguage,
} from 'data/garbhagudiTestimonialVideos';
import { FcGoogle } from 'react-icons/fc';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdOutlineRateReview } from 'react-icons/md';
import { SiYoutube } from 'react-icons/si';
import { Star } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const LiteYouTubeEmbed = dynamic(
  () => import('react-lite-youtube-embed'),
  {
    ssr: false,
    loading: () => (
      <div
        className='flex aspect-video items-center justify-center rounded-xl bg-brandPink5/50 text-sm font-medium text-brandPurpleDark'
        aria-hidden
      >
        Loading player…
      </div>
    ),
  },
);

const stories = [
  {
    id: 1,
    name: 'Anjali S.',
    language: 'en',
    rating: 5,
    short:
      'Clear medical explanations, kind nursing team, and follow-ups that actually happened.',
    full: 'GarbhaGudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work.',
  },
  {
    id: 2,
    name: 'Kavitha G.',
    language: 'en',
    rating: 5,
    short:
      'Felt supported through every scan and decision—not rushed, not confused.',
    full: 'Doctors are very supportive… explained all medical details… staff took good responsibility. We got positive results from IVF.',
  },
  {
    id: 3,
    name: 'Patient story (Kannada)',
    language: 'kn',
    rating: 5,
    short:
      'Placeholder: swap with a Kannada transcript or native-language quote from your CRM.',
    full: 'Add a strong Kannada testimonial here once approved by compliance.',
  },
  {
    id: 4,
    name: 'Patient story (Hindi)',
    language: 'hi',
    rating: 5,
    short:
      'Placeholder: Hindi video testimonial landing here improves trust for north-India traffic.',
    full: 'Embed approved Hindi patient story copy or transcript.',
  },
  {
    id: 5,
    name: 'Sharifa B.',
    language: 'en',
    rating: 5,
    short:
      'Doctors listened properly and explained what happened and what to do next.',
    full: 'Doctor gave us sufficient time to listen and explain in details… You people are doing a very good job.',
  },
  {
    id: 6,
    name: 'Sonal T.',
    language: 'en',
    rating: 5,
    short:
      'Coordinated reminders and a team that felt on our side from day one.',
    full: 'We got positive results in the first visit itself… Front desk team will follow up with reminders… overall 10/10.',
  },
];

function initialsFromName(name) {
  const parts = name.replace(/[()]/g, ' ').split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function StarRow({ count = 5 }) {
  return (
    <div
      className='flex justify-center gap-0.5 sm:justify-start'
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, i) => (
        <Star
          key={i}
          className='h-4 w-4 fill-brandYellow text-brandYellow drop-shadow-sm'
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewAvatar({ name }) {
  const initials = initialsFromName(name);
  return (
    <div
      className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brandPink to-brandPurpleDark text-sm font-bold text-white shadow-md ring-2 ring-white'
      aria-hidden
    >
      {initials}
    </div>
  );
}

const navBtnClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/80 bg-brandPink text-white shadow-lg transition hover:border-white hover:bg-brandPink2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:opacity-40 sm:h-11 sm:w-11';

const videoTabLanguages = [
  { id: 'all', label: 'All' },
  ...testimonialVideosByLanguage.map((v) => ({
    id: v.lang,
    label: v.label,
  })),
];

export default function LandingNextSocialProof() {
  const [videoLang, setVideoLang] = useState('all');
  const swiperRef = useRef();

  const filteredVideos = useMemo(() => {
    if (videoLang === 'all') return testimonialVideosByLanguage;
    return testimonialVideosByLanguage.filter((v) => v.lang === videoLang);
  }, [videoLang]);

  return (
    <section
      className='relative overflow-hidden bg-gradient-to-tr from-brandPink3/70 via-brandPurple/50 to-purple-100 py-14 sm:py-16 lg:py-20'
      aria-labelledby='stories-heading'
    >
      <div
        className='pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-brandPink/15 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-purple-400/20 blur-3xl'
        aria-hidden
      />

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
          <div className='flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md ring-1 ring-brandPink4/40'>
            <FcGoogle className='h-8 w-8 shrink-0' aria-hidden />
            <span className='text-xs font-semibold text-brandDark/80'>
              Reviews from Google
            </span>
          </div>
          <div className='mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brandPink'>
            <MdOutlineRateReview className='h-5 w-5' aria-hidden />
            <span>Patient stories</span>
          </div>
          <h2
            id='stories-heading'
            className='mt-2 font-heading text-2xl font-bold text-brandDark sm:text-3xl lg:text-4xl'
          >
            Stories from families like yours
          </h2>
          <div className='mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brandPink to-brandPurpleDark' />
          <p className='mt-4 text-pretty text-sm leading-relaxed text-brandDark/80 sm:text-base'>
            Real words from patients—plus space below for{' '}
            <span className='font-semibold text-brandPurpleDark'>
              multilingual video
            </span>{' '}
            when your team adds approved embeds.
          </p>
        </div>

        <div className='relative mx-auto mt-12 max-w-3xl lg:max-w-4xl'>
          <div className='relative min-w-0 lg:px-12'>
              <button
                type='button'
                onClick={() => swiperRef.current?.slidePrev()}
                className={`${navBtnClass} pointer-events-auto absolute left-2 top-1/2 z-20 -translate-y-1/2 sm:left-3 lg:left-0 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2`}
                aria-label='Previous review'
              >
                <HiChevronLeft className='text-2xl' />
              </button>

              <Swiper
                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop={stories.length > 1}
                key='all-stories'
                pagination={{
                  clickable: true,
                  dynamicBullets: stories.length > 3,
                }}
                className='reviews-swiper relative z-0 !pb-12 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:bg-brandPink4/60 [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-brandPink'
              >
                {stories.map((item) => (
                  <SwiperSlide key={item.id}>
                    <blockquote className='mx-auto max-w-2xl rounded-2xl border-2 border-white/90 bg-white/95 p-6 text-center shadow-xl shadow-brandPurple/10 ring-1 ring-brandPink4/30 sm:p-8 sm:text-left lg:p-10'>
                      <div className='flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8'>
                        <ReviewAvatar name={item.name} />
                        <div className='min-w-0 flex-1 sm:text-left'>
                          <StarRow count={item.rating ?? 5} />
                          <p className='mt-4 font-heading text-lg font-bold leading-snug tracking-tight text-brandDark sm:text-xl'>
                            &ldquo;{item.short}&rdquo;
                          </p>
                          <div className='mx-auto mt-5 h-1 max-w-[200px] rounded-full bg-gradient-to-r from-brandPink via-brandPurple to-purple-800 sm:mx-0' />
                          <p className='mt-5 text-sm leading-relaxed text-brandDark/75 md:text-base'>
                            {item.full}
                          </p>
                          <footer className='mt-6 flex flex-col items-center gap-3 border-t border-brandPink5 pt-5 sm:flex-row sm:items-center sm:justify-between'>
                            <div>
                              <cite className='not-italic font-heading text-base font-bold text-brandPink'>
                                — {item.name}
                              </cite>
                              <p className='mt-0.5 text-xs font-medium text-brandPurpleDark'>
                                GarbhaGudi patient · Google review
                              </p>
                            </div>
                            <div className='flex items-center gap-1.5 rounded-full bg-brandPink5/80 px-3 py-1 text-xs font-semibold text-brandPurpleDark'>
                              <FcGoogle className='h-4 w-4' aria-hidden />
                              Google review
                            </div>
                          </footer>
                        </div>
                      </div>
                    </blockquote>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type='button'
                onClick={() => swiperRef.current?.slideNext()}
                className={`${navBtnClass} pointer-events-auto absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-3 lg:right-0 lg:z-10 lg:-translate-y-1/2 lg:translate-x-1/2`}
                aria-label='Next review'
              >
                <HiChevronRight className='text-2xl' />
              </button>
            </div>
        </div>

        <div className='mx-auto mt-16 w-full max-w-6xl border-t border-brandPink4/40 pt-14'>
          <h3 className='text-center font-heading text-xl font-bold text-brandDark sm:text-2xl'>
            Video testimonials (by language)
          </h3>
          <p className='mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-brandDark/80'>
            Real patient stories from{' '}
            <span className='font-semibold text-brandPurpleDark'>
              GarbhaGudi IVF Centre on YouTube
            </span>
            . Use the tabs to focus on one language, or All to browse every
            clip below.
          </p>
          <div className='relative -mx-4 mt-8 sm:mx-0'>
            <div
              className='flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] sm:snap-none sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:px-0 sm:pb-0'
              role='tablist'
              aria-label='Filter video testimonials by language'
            >
              {videoTabLanguages.map((l) => (
                <button
                  key={l.id}
                  type='button'
                  role='tab'
                  aria-selected={videoLang === l.id}
                  onClick={() => setVideoLang(l.id)}
                  className={`shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
                    videoLang === l.id
                      ? 'bg-brandPink text-white shadow-md ring-2 ring-brandPurpleDark/25'
                      : 'bg-white/95 text-brandDark ring-1 ring-brandPink4/60 hover:bg-pink-50 hover:ring-brandPink'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6'>
            {filteredVideos.map((v) => (
              <figure
                key={v.lang}
                className='flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-brandPink4/60 bg-white shadow-lg shadow-brandPurple/10 ring-1 ring-white/80 transition hover:border-brandPink hover:shadow-xl'
              >
                <div
                  className='relative w-full min-w-0 shrink-0 overflow-hidden bg-black [&_.lty-playbtn]:!border-[#ea4b6a] [&_.lty-playbtn]:!bg-brandPink/95 [&_.yt-lite]:m-0 [&_.yt-lite]:!max-w-none [&_.yt-lite]:w-full'
                >
                  <span className='absolute left-3 top-3 z-[2] rounded-full bg-brandPink px-3 py-1 text-xs font-bold text-white shadow-md ring-2 ring-white/90'>
                    {v.label}
                  </span>
                  <LiteYouTubeEmbed
                    id={v.videoId}
                    title={v.title}
                    poster='maxresdefault'
                    containerElement='div'
                    wrapperClass='yt-lite w-full max-w-none'
                    params='modestbranding=1'
                  />
                </div>
                <figcaption className='flex min-h-[4.25rem] flex-1 items-center justify-center border-t border-brandPink5 bg-white px-3 py-3 text-center text-xs font-medium leading-snug text-brandPurpleDark sm:min-h-[4.5rem] sm:text-sm'>
                  <span className='line-clamp-3' title={v.title}>
                    {v.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className='mt-8 text-center'>
            <a
              href={GARBHAGUDI_YOUTUBE_CHANNEL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 font-bold text-brandPink underline decoration-brandPink decoration-2 underline-offset-4 transition hover:text-brandPink2'
            >
              <SiYoutube className='h-5 w-5 text-red-600' aria-hidden />
              Watch more on the GarbhaGudi YouTube channel
            </a>
          </p>
        </div>

        <p className='mt-12 text-center text-sm font-medium text-brandDark'>
          Loved what you read?{' '}
          <a
            href='#consultation'
            className='font-bold text-brandPink underline decoration-brandPink decoration-2 underline-offset-4 hover:text-brandPink2'
          >
            Book a consultation
          </a>{' '}
          to speak with the team.
        </p>
      </div>
    </section>
  );
}
