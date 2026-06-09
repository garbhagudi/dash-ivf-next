import { useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const videos = [
  {
    id: '3GlrFGWR9P8',
    thumbnail: 'https://i.ytimg.com/vi/3GlrFGWR9P8/maxresdefault.jpg',
    title: 'GarbhaGudi IVF Introduction',
    tag: 'Our Story',
    heading: "Why GarbhaGudi is India's Most Trusted IVF Centre",
  },
  {
    id: '7Gm_FVT7wRI',
    thumbnail: 'https://i.ytimg.com/vi/7Gm_FVT7wRI/maxresdefault.jpg',
    title: 'IVF Treatment Process Explained',
    tag: 'Patient Education',
    heading: 'Understanding the IVF Process — Step by Step',
  },
  {
    id: 'kzaFGqt5yLg',
    thumbnail: 'https://i.ytimg.com/vi/kzaFGqt5yLg/maxresdefault.jpg',
    title: 'IVF Success Story',
    tag: 'Success Stories',
    heading: 'Real Families, Real Journeys — IVF Success Stories',
  },
];

function VideoCard({ video }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div className="video-card">
      {unavailable ? (
        <div className="video-unavailable">
          <span>🎬</span>
          <p>Video temporarily unavailable</p>
        </div>
      ) : (
        <LiteYouTubeEmbed
          id={video.id}
          title={video.title}
          thumbnail={video.thumbnail}
          thumbnailQuality="maxresdefault"
          onError={() => setUnavailable(true)}
        />
      )}
      <div className="video-info">
        <span className="video-tag">{video.tag}</span>
        <h3>{video.heading}</h3>
      </div>
    </div>
  );
}

export default function ThankYouVideos() {
  return (
    <section className="section">
      <div className="section-label">Learn &amp; Explore</div>
      <div className="section-title">Stories &amp; <span>Insights</span> from GarbhaGudi</div>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
