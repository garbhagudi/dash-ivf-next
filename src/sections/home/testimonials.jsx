import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineSwipeLeft, MdOutlineRateReview } from 'react-icons/md';
import { Navigation } from 'swiper/modules';
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
const Testimonial = () => {
  const swiperRef = useRef();
  return (
    <section className='overflow-hidden bg-gradient-to-tr from-brandPink3/70 via-brandPurple/50 to-purple-100 py-8'>
      <FcGoogle className='mx-auto h-14 w-14 text-center' />
      <div className='text-center font-sans font-semibold'>
        <MdOutlineRateReview className='mr-2 inline-block' />
        Reviews
      </div>

      <div className='flex items-center justify-center'>
        <div className='relative mx-auto flex max-w-7xl flex-row items-center justify-center'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute left-0 z-10 ml-4 hidden rounded-full bg-brandPink p-2 text-white md:block'
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
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className='flex flex-col justify-center'>
                  <blockquote className='mt-8'>
                    <div className='mx-auto h-80 max-w-sm px-1.5 text-center text-base font-medium tracking-tight text-gray-900 sm:max-w-md md:max-w-3xl md:text-lg lg:h-52 lg:leading-[1.8rem]'>
                      <div className='flex items-center justify-center'>
                        &quot;{item?.review}&quot;
                      </div>
                    </div>
                  </blockquote>
                  <div className='mt-8'>
                    <div className='h-[2px] w-full rounded-lg bg-gradient-to-r from-brandPink via-brandPurple to-purple-800'></div>
                    <div className='flex items-center justify-center gap-3 pt-4'>
                      <div className='mt-3 text-center md:ml-4 md:mt-0 md:flex md:items-center'>
                        <div className='font-heading font-semibold text-gray-900'>
                          {item?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef?.current?.slideNext()}
            className='absolute right-0 z-10 mr-4 hidden rounded-full bg-brandPink p-2 text-white md:block'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
      <div className='mx-auto max-w-6xl py-1 pt-4 text-center font-dm text-sm underline lg:text-right'>
        Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
      </div>
    </section>
  );
};

export default Testimonial;

const data = [
  {
    id: 1,
    name: 'Anjali Shivarkar',
    // logo: generateDiceBear(Math.random()),
    review:
      'Garbhagudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work. Very well-maintained center. Staffs are well trained and they are very supportive throughout the treatment journey with constant follow-up calls. highly recommended. Keep up the same spirit.',
  },
  {
    id: 2,
    name: 'Kavitha G',
    // logo: generateDiceBear(Math.random()),
    review:
      'I am very happy that I visited garbhagudi hospital, they provided the best treatment.. Doctors are very supportive in my treatment she explained all medical details, she is to friendly and took at most care and responsibility towards my pregnancy, all sister and staff took good responsibility and supported us very well we got positive results from IVF treatment and waiting for a lifetime gift that we received from Garbhagudi team .... We wholeheartedly are very thankful to Dr Asha mam, Dr. Anitha mam and the entire team of GARBHAGUDI 🙏❤️',
  },
  {
    id: 3,
    name: 'Anjali Khadtare',
    // logo: generateDiceBear(Math.random()),
    review:
      'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
  },
  {
    id: 4,
    name: 'Afreen Khan',
    // logo: generateDiceBear(Math.random()),
    review:
      "When I googled about the best Hospital, I got to see many and later reading the reviews and many comments, I chose the best one of all. I have no words to feel how good and talented the Doctor is. And you also the staff, all are very friendly and yes they also help you to understand all the problems you are going through. Overall I'm happy that I selected this place for our treatment and yes I'm happy with the result.",
  },
  {
    id: 5,
    name: 'Sharifa Begum',
    // logo: generateDiceBear(Math.random()),
    review:
      'Received great response from all the staff members, Doctor give us sufficient time to listen and explain in details of what had happened and what need to do... Overall it was a good experience to visit GarbaGudi.. You people are doing a very good job by creating happiness and igniting light in the dark life... of a couple.. I wish u all the best .. Thank you ...',
  },
  {
    id: 6,
    name: 'Sonal Thorat',
    // logo: generateDiceBear(Math.random()),
    review:
      'I cannot express how much thankful I am to the entire team of Garbhagudi hospital. We got positive results in the first visit itself. Front desk staff nurses and doctors all are very cooperative. I request to visit this branch once if you are struggling with infertility issues. And one of the best things is the front desk team will follow up with you give reminders for all visits and scans.. overall 10/10 !!!',
  },
];
