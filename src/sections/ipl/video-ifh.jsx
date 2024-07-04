import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const VideoTwo = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='px-3 py-12'>
        <h3 className='font-heading text-2xl font-bold sm:text-center sm:text-3xl'>
          IVF From Home...
          <br /> Is it really Possible?
        </h3>
        <div className='mt-6 overflow-hidden rounded-2xl'>
          <LiteYouTubeEmbed id='q-NWGcN89as' poster='maxresdefault' />
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
