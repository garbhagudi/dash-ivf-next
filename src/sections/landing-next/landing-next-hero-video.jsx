'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  landingNextHeroYoutubePosterSrc,
  landingNextHeroYoutubeTitle,
  landingNextHeroYoutubeVideoId,
} from 'data/landingNextHeroVideo';

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), {
  ssr: false,
  loading: () => <div className='aspect-video w-full bg-black' aria-hidden />,
});

const posterSrc = landingNextHeroYoutubePosterSrc();

export default function LandingNextHeroVideo() {
  const [play, setPlay] = useState(false);

  if (!play) {
    return (
      <button
        type='button'
        onClick={() => setPlay(true)}
        className='group relative block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPink'
        aria-label={`Play video: ${landingNextHeroYoutubeTitle}`}
      >
        <span className='relative block aspect-video w-full bg-black'>
          <img
            src={posterSrc}
            alt={landingNextHeroYoutubeTitle}
            width={480}
            height={360}
            decoding='async'
            fetchPriority='high'
            sizes='(max-width: 1023px) 100vw, 50vw'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <span
            className='absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30'
            aria-hidden
          >
            <span className='flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white/95 bg-brandPink/95 shadow-lg transition group-hover:scale-105 sm:h-16 sm:w-16'>
              <svg
                viewBox='0 0 24 24'
                width={28}
                height={28}
                className='ml-0.5 shrink-0 text-white'
                fill='currentColor'
                aria-hidden
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </span>
          </span>
        </span>
      </button>
    );
  }

  return (
    <LiteYouTubeEmbed
      id={landingNextHeroYoutubeVideoId}
      title={landingNextHeroYoutubeTitle}
      poster='hqdefault'
      params='rel=0'
      alwaysLoadIframe
      autoplay
      muted
      wrapperClass='yt-lite w-full [&_.lty-playbtn]:!hidden [&_iframe]:rounded-none'
    />
  );
}
