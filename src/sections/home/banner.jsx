import Carousel from 'components/Carousel';
import dynamic from 'next/dynamic';
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

const Banner = () => {
  return (
    <div>
      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <Carousel images={bannerData} interval={4000} />
          <div className='absolute -bottom-6 flex w-full justify-center p-1 font-semibold text-white md:hidden'>
            <h1 className='w-full rounded-md bg-gg-500 p-1 text-center text-[13px] shadow-sm'>
              Best IVF & Fertility Clinic - Affordable IVF Treatment
            </h1>
          </div>
        </div>
        <div
          className='flex h-fit justify-start bg-[#005e7e] py-10 md:h-full md:min-h-[500px] md:justify-center md:py-0'
          id='leadForm'
        >
          <div className='flex h-full w-full items-center justify-center'>
            <FormComponent
              title='Book Free Fertility Consultation Today'
              isTag={false}
            />
          </div>
        </div>
        <div className='absolute -bottom-5 hidden w-full justify-center px-5 font-semibold text-white md:flex'>
          <h1 className='w-full rounded-md bg-gg-500 p-2 text-center text-base shadow-sm'>
            Best IVF & Fertility Clinic - Affordable IVF Treatment
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const bannerData = [
  {
    url: 'https://www.garbhagudi.com/',
    id: '1',
    title: 'Web_Banner_1',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101158/1-02_yyxrvi.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101172/1-01_c6w9x7.webp',
    },
  },
  {
    url: 'https://www.garbhagudi.com/locations/davanagere',
    id: '2',
    title: 'Web_Banner_2',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177332/Davanagere-02_uh5oex.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177331/Davanagere-01_wo0zex.webp',
    },
  },
  {
    url: 'https://www.garbhagudi.com/locations/hosur',
    id: '3',
    title: 'Web_Banner_3',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177306/01-02_s8m5oa.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177306/01-01_aqmkjp.webp',
    },
  },
];
