import React, { useRef } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { MdOutlineSwipeLeft } from 'react-icons/md';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1601: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
};

const Video = ({ testimonials }) => {
  const swiperRef = useRef();
  return (
    <div className='bg-gradient-to-br from-brandPink5 to-brandPurple2'>
      <div className='max-w-7xl mx-auto py-8'>
        <h2 className='text-2xl lg:text-4xl text-center font-extrabold text-brandDark font-heading flex items-center justify-center'>
          Testimonials from our happy couples
        </h2>
        <div className='px-3 sm:px-0 relative max-w-7xl mx-auto flex flex-row items-center justify-center'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='bg-brandPink text-white rounded-full z-10 p-2 absolute left-0 ml-4 hidden md:block'
          >
            <HiChevronLeft className='text-2xl' />
          </button>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={breakpoints}
            className='max-w-6xl'
            loop={true}
            pagination={true}
          >
            {testimonials?.items?.map((item) => {
              const { id, snippet = {} } = item;
              return (
                <SwiperSlide key={id}>
                  <div
                    className='md:w-10/12 mx-auto aspect-video mt-8 overflow-hidden border border-transparent rounded-lg sm:px-0'
                    key={item.id}
                  >
                    <LiteYouTubeEmbed
                      id={snippet.resourceId.videoId}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4 hidden md:block'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
        <div className='text-center lg:text-right pt-4 font-dm py-1 max-w-6xl mx-auto underline text-sm'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </div>
    </div>
  );
};

export default Video;
