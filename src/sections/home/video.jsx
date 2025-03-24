import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { MdOutlineSwipeLeft } from 'react-icons/md';
import Carousel from 'nuka-carousel';

const Video = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div className='bg-brandPurple'>
      <div className='mx-auto max-w-7xl py-8'>
        <h3 className='flex items-center justify-center text-center font-heading text-2xl font-extrabold text-white lg:text-4xl'>
          Most Trusted IVF Clinic in Bangalore
        </h3>
        <div className='mx-auto flex max-w-7xl flex-row items-center justify-center px-3 sm:px-0'>
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplayInterval={5000}
            className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl'
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 lg:flex dark:bg-brandPurple'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 lg:flex dark:bg-brandPurple'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {testimonials?.map((item) => {
              return (
                <div
                  className='mx-auto mt-8 aspect-video w-screen max-w-xs overflow-hidden rounded-lg border border-transparent sm:max-w-sm sm:px-0 md:max-w-md lg:max-w-3xl'
                  key={item?.id}
                >
                  <LiteYouTubeEmbed
                    id={item?.videoId}
                    title='Garbhagudi IVF Center Youtube video'
                    poster='maxresdefault'
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className='mx-auto max-w-6xl py-1 pt-4 text-center text-sm underline lg:text-right'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </div>
    </div>
  );
};

export default Video;

const testimonials = [
  {
    id: 1,
    videoId: 'cPPnXU9fB_0',
  },
  {
    id: 2,
    videoId: 'UjZ7APf5EbE',
  },
  {
    id: 3,
    videoId: 'I2KHjfiVKn0',
  },
  {
    id: 4,
    videoId: 'tXsmr-fnuV4',
  },
];
