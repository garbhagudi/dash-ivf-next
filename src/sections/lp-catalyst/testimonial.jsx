import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const VideoOne = () => {
  return (
    <div className='mx-auto max-w-7xl pt-6'>
      <h2 className='py-8 lg:py-10 text-3xl font-heading font-bold text-center'>
        Our Success Stories
      </h2>
      <div className='px-3 pb-10 lg:pb-24'>
        <div className='rounded-2xl  overflow-hidden'>
          <LiteYouTubeEmbed id='t-eM9soQJtM' poster='maxresdefault' />
        </div>
      </div>
    </div>
  );
};

export default VideoOne;
