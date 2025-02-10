import FormComponent from 'components/formComp';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='h-full w-full bg-[#005e7e] pb-2 lg:h-1/2 lg:w-1/2'>
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1735814525/Image_Artboard_copy_3_ic0le8.jpg'
          width={1920}
          height={1080}
          alt='book an appointment form'
          className='h-full w-full object-center'
          priority={true}
          quality={75}
          // loading='lazy'
        />
        <FormComponent title='Book Your Appointment' />
      </div>
    </div>
  );
};

export default IndexPage;
