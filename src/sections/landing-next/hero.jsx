import dynamic from 'next/dynamic';
import { HiArrowRight } from 'react-icons/hi';
import { GARBHAGUDI_YOUTUBE_CHANNEL } from 'data/garbhagudiTestimonialVideos';
import {
  landingNextHeroYoutubeTitle,
  landingNextHeroYoutubeVideoId,
} from 'data/landingNextHeroVideo';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), {
  ssr: false,
  loading: () => (
    <div
      className='aspect-video w-full rounded-xl bg-brandPink5/50'
      aria-hidden
    />
  ),
});

export default function LandingNextHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-pink-300 to-purple-100'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent' />

      <div className='relative mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-9 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 lg:py-10'>
        <div>
          <h1 className='font-heading text-2xl font-bold leading-snug text-brandDark sm:text-3xl lg:text-[1.95rem] lg:leading-tight'>
            From Infertility Struggles to Successful Pregnancy
          </h1>
          <div className='mt-3 h-0.5 w-14 rounded-full bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />
          <h2 className='mt-3 max-w-xl text-sm leading-relaxed text-brandDark/90 sm:text-[0.95rem]'>
            Evidence-based treatment, transparent guidance, and an experienced team
            focused on your fertility journey.
          </h2>

          <div className='mt-5'>
            <a
              href='#consultation'
              className='inline-flex items-center justify-center gap-1.5 rounded-lg bg-brandPink px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brandPink2 sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark'
            >
              Book a consultation now
              <HiArrowRight className='h-3.5 w-3.5 sm:h-4 sm:w-4' aria-hidden />
            </a>
          </div>
        </div>

        <div className='mx-auto mt-8 w-full max-w-lg lg:mt-0 lg:max-w-none'>
          <figure className='overflow-hidden rounded-xl border border-brandPink4/60 bg-black ring-1 ring-brandPink5/40'>
            <LiteYouTubeEmbed
              id={landingNextHeroYoutubeVideoId}
              title={landingNextHeroYoutubeTitle}
              poster='maxresdefault'
              params='rel=0'
              wrapperClass='yt-lite w-full [&_.lty-playbtn]:!border-[#ea4b6a] [&_.lty-playbtn]:!bg-brandPink/95 [&_iframe]:rounded-none'
            />
          </figure>
          <p className='mt-3 text-center text-[11px] text-brandDark/70 sm:text-left'>
            <a
              href={GARBHAGUDI_YOUTUBE_CHANNEL}
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-brandPink underline underline-offset-2 hover:text-brandPink2'
            >
              More videos on our YouTube channel
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
