import Popup from 'components/Popup';

function HeroHome() {
  return (
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div
        className='pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform'
        aria-hidden='true'
      ></div>

      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pb-12 pt-10'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <h1
              className='leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl'
              data-aos='zoom-y-out'
            >
              Welcome to{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                GarbhaGudi
              </span>
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='mb-8 text-xl text-gray-600'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                India&apos;s premiere infertilty treatment hospital chain laced
                with state of the art infrastructure determined to help couples
                in fulfilling their dream of parenthood
              </p>
              <div className='flex flex-col items-center justify-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0'>
                <div>
                  <Popup
                    title={'Book a Free Consultation'}
                    btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
                  />
                </div>
                <div>
                  <a
                    className='w-full rounded-lg bg-gray-900 px-5 py-4 font-semibold text-white hover:bg-gray-800'
                    href='#'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className='relative mb-8 flex justify-center'
              data-aos='zoom-y-out'
            >
              <div className='flex flex-col justify-center'>
                <img
                  className='mx-auto rounded-xl'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/q_auto:eco/v1643461022/Banner/About_us_xg1b1l.webp'
                  width='768'
                  // height="432"
                  alt='Hero'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
