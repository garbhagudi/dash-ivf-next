import LandingNextZohoHtmlForm from 'components/landing-next-zoho-html-form';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='h-full w-full bg-[#005e7e] pb-2 lg:h-1/2 lg:w-1/2'>
        <Image
          src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwech0uo07pntrjoqe6y'
          width={1920}
          height={1080}
          alt='book an appointment form'
          className='h-full w-full object-center'
          quality={75}
          loading='lazy'
        />
        <LandingNextZohoHtmlForm
          variant='banner'
          title='Book Your Appointment'
          submitLabel='Submit'
        />
      </div>
    </div>
  );
};

export default IndexPage;
