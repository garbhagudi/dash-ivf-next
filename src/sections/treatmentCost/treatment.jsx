import Image from 'next/image';
import React from 'react';

const treatment = () => {
  return (
    <div className='scroll-m-16 scroll-smooth' id='know-more'>
      <div className='relative bg-white dark:bg-gray-800'>
        <div className='container relative m-auto px-3 md:px-12 lg:px-6'>
          <h3 className='mx-auto text-left font-heading text-4xl font-black lg:text-5xl'>
            What is IVF and how does it work ?
          </h3>{' '}
          <div className='mx-auto flex-wrap text-gray-800 md:flex dark:text-gray-200'>
            <div className='grid grid-cols-1 items-center lg:grid-cols-2'>
              <div className='font-content relative mx-auto ml-0 mt-8 space-y-8 text-left md:mt-16 md:max-w-lg lg:max-w-2xl'>
                <p className=''>
                  GarbhaGudi IVF Center offers state-of-the-art facilities and a
                  team of experienced doctors and embryologists who work
                  together to provide personalized care and support to couples
                  undergoing IVF in Bangalore. With the help of IVF, couples
                  struggling with infertility can have a chance to conceive and
                  start a family.
                  <br />
                  <br />
                  To conceive. IVF or In Vitro Fertilization is one of the more
                  widely known types of Assisted Reproductive Techniques (ART).
                  It involves retrieving eggs from the woman&apos;s ovaries and
                  fertilizing them with sperm in a laboratory dish. The
                  resulting embryos are then transferred back into the
                  woman&apos;s uterus in the hope of achieving a successful
                  pregnancy. GarbhaGudi IVF Center offers state-of-the-art
                  facilities and a team of experienced doctors and embryologists
                  who work together to provide personalized care and support to
                  couples undergoing IVF in Bangalore. With the help of IVF,
                  couples struggling with infertility can have a chance to
                  conceive and start a family.
                </p>
                <p>
                  IVF treatment in Bangalore is a multi-step process that
                  involves several stages, including ovarian stimulation, egg
                  retrieval, fertilization, embryo culture, and embryo transfer.
                  Our team of experienced fertility specialists carefully
                  monitors the process, and work closely with patients to
                  customize a treatment plan that meets their unique needs and
                  maximizes their chances of success.
                </p>
                <p>
                  One full IVF cycle takes about three weeks but sometimes the
                  procedure is split into parts, to manage certain challenges in
                  the couples. This may delay the process. IVF can be done using
                  the woman&apos;s eggs and the male partner&apos;s sperm or it
                  may involve sperm, eggs, or embryos from anonymous donors.
                </p>
                <p>
                  It is important to note that not all IVF cycles result in
                  pregnancy, and it may be necessary to try multiple cycles
                  before achieving a successful pregnancy. The success rate of
                  IVF depends on a variety of factors, including the
                  person&apos;s age, the cause of infertility, and the quality
                  of the eggs and sperm.
                </p>
              </div>
              <div className='-right-0 mx-auto mt-4 max-w-[50rem] lg:p-4'>
                <div className='relative w-full'>
                  <Image
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722510346/Misc/PNG_25_yoa08y_1_cr2fpg.png'
                    className='relative w-full bg-white/10 dark:brightness-75 dark:invert'
                    alt='Process of IVF Treatment in Bangalore'
                    loading='lazy'
                    width={500}
                    height={500}
                  />
                  ;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default treatment;
