import Link from 'next/link';
import Image from 'components/image';
import { doctors } from 'components/doctors';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import ContentModal from 'components/contentModal';

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1601: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

export default function TeamSection() {
  const swiperRef = useRef();
  return (
    <div className='bg-gradient-to-br from-pink-300 to-purple-100 py-6'>
      <div className='mx-auto px-3 max-w-7xl pb-12'>
        <div className='text-center pb-12 '>
          <h1 className='text-3xl sm:text-4xl font-heading font-bold mb-4'>
            Meet our Experts
          </h1>
          <p className='max-w-prose mx-auto'>
            Our team of fertility specialists have been known for their
            extensive clinical experience and research contributions, as well as
            for their success in treating the most challenging fertility cases.
          </p>
        </div>

        <div className='mx-auto flex flex-row items-center justify-center max-w-7xl '>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='bg-brandPink text-white rounded-full z-10 p-2 left-0 lg:left-10 absolute ml-4 '
          >
            <HiChevronLeft className='text-2xl' />
          </button>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={breakpoints}
            className=''
            loop={true}
            pagination={true}
            autoplay
          >
            {doctors.map((item) => {
              return (
                <SwiperSlide key={item.name}>
                  <div className='mb-2 transition-all duration-500 rounded-xl '>
                    <div className='relative h-52 w-52 mx-auto'>
                      <div className='h-full w-full absolute rounded-full overflow-hidden bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                      <Image
                        className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent overflow-hidden'
                        src={item?.image.url}
                        alt={item?.imageAlt || item?.name}
                        width={220}
                        height={220}
                        loading='lazy'
                      />
                    </div>
                    <div className='space-y-4 mt-4 flex items-center text-center justify-center flex-col'>
                      <div className='space-y-1 text-lg font-medium leading-6 h-24'>
                        <h3 className='text-brandDark font-content'>
                          {item?.name}
                        </h3>
                        <p className='text-xs text-brandPurpleDark font-content'>
                          {item?.qualification}
                        </p>
                        <p className='pb-2 text-sm text-brandPink font-content'>
                          {item?.designation}
                        </p>
                      </div>
                      <ContentModal
                        title={'Read More'}
                        classname={
                          'font-content text-brandPink text-base px-3 py-1.5 rounded-lg font-medium hover:text-brandPurpleDark border-2 border-brandPurpleDark hover:border-brandPurpleDark transition-all duration-300 ease-linear'
                        }
                        content={item.bio.raw.children}
                        heading={item.name}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-brandPink text-white rounded-full p-2 z-10 right-0 lg:right-10 absolute mr-4'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
}
