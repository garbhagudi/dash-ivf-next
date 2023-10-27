import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const VideoOne = () => {
  return (
    <div className='mx-auto max-w-7xl '>
      <div className='px-3 pb-10 lg:pb-24'>
        <div className='rounded-2xl  overflow-hidden'>
          <LiteYouTubeEmbed id='OQEFbV9AB5w' poster='maxresdefault' />
        </div>
      </div>
    </div>
  );
};

export default VideoOne;
