import { useState } from 'react';
import { Clapperboard, Youtube } from 'lucide-react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const videos = [
  {
    id: 'Kbjz_vYlijA',
    title: 'GarbhaGudi IVF Introduction',
    tag: 'Our Story',
    heading: "Why GarbhaGudi is India's Most Trusted IVF Centre",
  },
  {
    id: 'FUjol4w5uEo',
    title: 'IVF Treatment Process Explained',
    tag: 'Patient Education',
    heading: 'Understanding the IVF Process — Step by Step',
  },
  {
    id: 'LeZbAzvIGr8',
    title: 'IVF Success Story',
    tag: 'Success Stories',
    heading:
      'This is a Good Testimonial of GGJN, 15 Years of No baby and got Success',
  },
];

function VideoCard({ video }) {
  const [unavailable, setUnavailable] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className='video-card'>
      {unavailable ? (
        <div className='video-unavailable'>
          <Clapperboard size={40} strokeWidth={1.5} color='#7a5c52' />
          <p>Video temporarily unavailable</p>
        </div>
      ) : (
        <LiteYouTubeEmbed
          id={video.id}
          title={video.title}
          thumbnail={thumbnail}
          thumbnailQuality='maxresdefault'
          onError={() => setUnavailable(true)}
        />
      )}
      <div className='video-info'>
        <span className='video-tag'>{video.tag}</span>
        <h3>{video.heading}</h3>
      </div>
    </div>
  );
}

export default function ThankYouVideos() {
  return (
    <section className='section'>
      <div className='section-label'>Learn &amp; Explore</div>
      <div className='section-title'>
        Stories &amp; <span>Insights</span> from GarbhaGudi
      </div>
      <div className='video-grid'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className='video-cta'>
        <a
          className='btn-more-videos'
          href='https://www.youtube.com/c/GarbhaGudiIVFCentre'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Youtube size={20} />
          Explore More on YouTube
        </a>
      </div>
    </section>
  );
}
