import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineSwipeLeft, MdOutlineRateReview } from 'react-icons/md';
import Image from 'next/image';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const generateDiceBear = (seed) =>
  `https://api.dicebear.com/6.x/thumbs/svg?seed=${seed}`;

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
    <section className='bg-gradient-to-tr from-brandPink3/70 via-brandPurple/50 to-purple-100 overflow-hidden py-8'>
      <FcGoogle className='h-14 w-14 text-center mx-auto' />
      <div className='font-sans font-semibold text-center'>
        <MdOutlineRateReview className='inline-block mr-2' />
        Reviews
      </div>

      <div className='flex items-center justify-center'>
        <div className='relative max-w-7xl mx-auto flex flex-row items-center justify-center'>
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
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='flex justify-center flex-col'>
                  <blockquote className='mt-8'>
                    <div className='max-w-sm sm:max-w-md md:max-w-3xl h-80 lg:h-52 px-1.5 mx-auto text-center text-base md:text-lg tracking-tight lg:leading-[1.8rem] font-medium text-gray-900 font-content'>
                      <div className='flex items-center justify-center'>
                        &quot;{item.review}&quot;
                      </div>
                    </div>
                  </blockquote>
                  <div className='mt-8'>
                    <div className='h-[2px] w-full rounded-lg bg-gradient-to-r from-brandPink via-brandPurple to-purple-800'></div>
                    <div className='flex pt-4 items-center justify-center gap-3'>
                      <div className='md:flex-shrink-0'>
                        <Image
                          className='mx-auto h-14 w-14 rounded-lg'
                          src={item.logo}
                          alt={item.name}
                          width={56}
                          height={56}
                          loading='lazy'
                          suppressHydrationWarning={true}
                        />
                      </div>
                      <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                        <div className='font-heading font-semibold text-gray-900 '>
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4 hidden md:block'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
      <div className='text-center lg:text-right pt-4 font-dm py-1 max-w-6xl mx-auto underline text-sm'>
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
    logo: generateDiceBear(Math.random()),
    review:
      'Garbhagudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work. Very well-maintained center. Staffs are well trained and they are very supportive throughout the treatment journey with constant follow-up calls. highly recommended. Keep up the same spirit.',
  },
  {
    id: 2,
    name: 'Kavitha G',
    logo: generateDiceBear(Math.random()),
    review:
      'I am very happy that I visited garbhagudi hospital, they provided the best treatment.. Doctors are very supportive in my treatment she explained all medical details, she is to friendly and took at most care and responsibility towards my pregnancy, all sister and staff took good responsibility and supported us very well we got positive results from IVF treatment and waiting for a lifetime gift that we received from Garbhagudi team .... We wholeheartedly are very thankful to Dr Asha mam, Dr. Anitha mam and the entire team of GARBHAGUDI 🙏❤️',
  },
  {
    id: 3,
    name: 'Anjali Khadtare',
    logo: generateDiceBear(Math.random()),
    review:
      'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
  },
  {
    id: 4,
    name: 'Afreen Khan',
    logo: generateDiceBear(Math.random()),
    review:
      "When I googled about the best Hospital, I got to see many and later reading the reviews and many comments, I chose the best one of all. I have no words to feel how good and talented the Doctor is. And you also the staff, all are very friendly and yes they also help you to understand all the problems you are going through. Overall I'm happy that I selected this place for our treatment and yes I'm happy with the result.",
  },
  {
    id: 5,
    name: 'Sharifa Begum',
    logo: generateDiceBear(Math.random()),
    review:
      'Received great response from all the staff members, Doctor give us sufficient time to listen and explain in details of what had happened and what need to do... Overall it was a good experience to visit GarbaGudi.. You people are doing a very good job by creating happiness and igniting light in the dark life... of a couple.. I wish u all the best .. Thank you ...',
  },
  {
    id: 6,
    name: 'Sonal Thorat',
    logo: generateDiceBear(Math.random()),
    review:
      'I cannot express how much thankful I am to the entire team of Garbhagudi hospital. We got positive results in the first visit itself. Front desk staff nurses and doctors all are very cooperative. I request to visit this branch once if you are struggling with infertility issues. And one of the best things is the front desk team will follow up with you give reminders for all visits and scans.. overall 10/10 !!!',
  },
  {
    id: 7,
    name: 'Padmapriya Ganapathy Raman',
    logo: generateDiceBear(Math.random()),
    review:
      'Thanks to GarbhaGudi for their constant support for the past 6-7 months. The moment we reached the place to get treated, we felt positive vibes. The staff were welcoming with their warm wishes and smile, nurses explained each and every detail post every consultation. I used to receive calls before every appointment which was very much helpful in remembering the visits. I would strongly recommend GarbhaGudi Electronic City for experiencing fertility treatment in a very positive and convincing way. Continue this great job.',
  },
  {
    id: 8,
    name: 'Sameekshya Pattnaik',
    logo: generateDiceBear(Math.random()),
    review:
      'I am very happy to visit Garbha Gudi. I would say that they do miracles here. After trying for more than a year and tired of visiting doctors and clinics, I got to know about this place. The doctors and staff are really good, they understand the mental trauma of a couple and they give real mental support to go through all of these. I got my positive pregnancy with their treatment. They have transparency of what treatment they are giving and why. I am forever grateful to Garbhagudi and the staff. I would suggest all the couples who are trying to conceive must visit here once. Thank you Garbha Gudi for giving me the gift of life.',
  },
  {
    id: 9,
    name: 'Manikandan Hariharan',
    logo: generateDiceBear(Math.random()),
    review:
      "Extremely happy today. My wife is 90 days pregnant. The timely follow-ups with the treatment made by the doctor and her team is highly appreciated, without which the end result might not have been possible. Also, the hospital won't levy unnecessary treatment costs or treatments. Every procedure had its own cause and a good outcome. I strongly recommend this Garbhagudi Marathahalli branch for those who are dealing with infertility issues.",
  },
  {
    id: 10,
    name: 'Prathap Kumar',
    logo: generateDiceBear(Math.random()),
    review:
      'I would really recommend Garbhagudi IVF for people who want to have a baby. It was really an amazing experience having babies. Yes, it was hard initially but it brought so much happiness after we had our babies. Thank you very much Garbhagudi IVF and thanks to the team & staff. Brilliant guidance. Amazing team. No words to describe... Thank you so much Team Garbhagudi IVF.',
  },
];
