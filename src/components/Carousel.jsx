import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='relative overflow-hidden'>
      <div
        className='carousel-inner'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.length > 0 ? (
          images.map((banner, index) => (
            <Link
              href={banner.url || '#'}
              target='_blank'
              rel='noreferrer'
              key={banner.id}
              className='w-full flex-shrink-0'
            >
              <Image
                src={`${banner.image.url1}`}
                alt={banner.title}
                width={900}
                height={471}
                priority={index === 0}
                fetchPriority='high'
                sizes='(max-width: 1200px) 66vw, 900px'
                className='hidden h-full w-full object-cover md:block'
              />
              <Image
                src={`${banner.image.url2.replace('/upload/', '/upload/f_auto,q_auto,w_412,h_535,c_fill/')}`}
                width={412}
                height={535}
                alt={banner.title}
                priority={index === 0}
                fetchPriority='high'
                sizes='(max-width: 768px) 100vw'
                className='h-[65vh] w-full object-fill md:hidden'
              />
            </Link>
          ))
        ) : (
          <div>No banners available</div>
        )}
      </div>
      <button
        className='absolute left-0 top-1/2 ml-1.5 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
        onClick={handlePrevClick}
      >
        <HiChevronLeft size={30} className='text-white' />
      </button>
      <button
        className='absolute right-0 top-1/2 mr-1.5 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
        onClick={handleNextClick}
      >
        <HiChevronRight size={30} className='text-white' />
      </button>
    </div>
  );
};

export default Carousel;
