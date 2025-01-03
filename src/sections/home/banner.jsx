import Image from 'next/image';
import Form from 'components/form';
import Link from 'next/link';
import ContactForm from 'components/ContactForm';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0'>
          <div className='items-left flex h-full flex-col justify-center bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='px-2 pb-4 text-center font-heading text-2xl font-extrabold'>
              <h1 className='uppercase text-[#e92e64]'>
                Leading IVF & Fertility Clinic in Bangalore: Expert Care &
                Advanced Treatments
              </h1>
            </div>
            <div className='font-content flex flex-col items-center px-4 py-2 pb-4 text-center text-xl font-normal'>
              <p>
                Offer of the Month:{' '}
                <strong className='text-brandPurpleDark'>
                  Exclusive Package at ₹ 1111
                </strong>
              </p>
              <ul className='mt-2 flex flex-col items-start space-y-1'>
                <li>1. Free consultation</li>
                <li>2. AFC Scan</li>
                <li>3. Ultrasound Scan</li>
                <li>4. Semen Analysis</li>
              </ul>
              <p className='mt-2'>Offer Validity: 31st January 2025</p>
            </div>
            <Link
              href='tel:+919108910832'
              className='mx-auto w-fit rounded-lg bg-brandPink px-5 py-1.5 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark'
            >
              Call us for Appointment
            </Link>
          </div>
          <div className='font-content mt-3 hidden text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>

        <div className='order-1 flex items-center justify-center overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1735718686/01_Jan_25_-_Offer_-_Ads_-_LP_-updated_bknoyy.jpg'
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='h-full w-full object-center'
            priority={true}
            quality={75}
            loading='eager'
          />
        </div>

        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            {/* {Form ? <Form /> : <p>Loading...</p>} */}
            <ContactForm title='Book Your Appointment' />
          </div>
        </div>
      </div>

      <div className='max-w-8xl mx-auto sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          <div>
            Call {''}
            <a
              href='tel:+919108910832'
              className='block text-brandPink sm:inline-block'
            >
              +91 9108 9108 32
            </a>
          </div>
          <div> to book your free consultation today!</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
