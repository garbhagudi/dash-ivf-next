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
      <div className='mx-auto max-w-7xl px-3 pb-12'>
        <div className='pb-12 text-center'>
          <h1 className='mb-4 font-heading text-3xl font-bold sm:text-4xl'>
            Meet our Fertility Specialists
          </h1>
          <p className='mx-auto max-w-prose'>
            Our team of fertility specialists have been known for their
            extensive clinical experience and research contributions, as well as
            for their success in treating the most challenging fertility cases.
          </p>
        </div>

        <div className='mx-auto flex max-w-7xl flex-row items-center justify-center'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute left-0 z-10 ml-4 rounded-full bg-brandPink p-2 text-white lg:left-10'
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
                  <div className='mb-2 rounded-xl transition-all duration-500'>
                    <div className='relative mx-auto h-52 w-52'>
                      <div className='animate-rotate bg-[length: 400%] absolute h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                      <Image
                        className='overflow-hidden rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                        src={item?.image.url}
                        alt={item?.imageAlt || item?.name}
                        width={220}
                        height={220}
                        loading='lazy'
                        quality={10}
                      />
                    </div>
                    <div className='mt-4 flex flex-col items-center justify-center space-y-4 text-center'>
                      <div className='h-24 space-y-1 text-lg font-medium leading-6'>
                        <h3 className='font-content text-brandDark'>
                          {item?.name}
                        </h3>
                        <p className='font-content text-xs text-brandPurpleDark'>
                          {item?.qualification}
                        </p>
                        <p className='font-content pb-2 text-sm text-brandPink'>
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
            className='absolute right-0 z-10 mr-4 rounded-full bg-brandPink p-2 text-white lg:right-10'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
}
