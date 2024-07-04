import React from 'react';

const EmbryoTransfer = () => {
  return (
    <div className='scroll-m-28 overflow-hidden bg-white' id='embryo-transfer'>
      <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
        <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
          <div>
            <h2 className='scroll-m-28 text-base font-semibold uppercase tracking-wide text-indigo-600'>
              Female Infertility
            </h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              Embryo Transfer
            </h3>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:col-start-2 lg:row-start-1'>
            <svg
              className='absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
              />
            </svg>
            <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
              <figure>
                <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                  <img
                    className='rounded-lg object-cover object-center shadow-lg'
                    src='https://img.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230688.jpg?w=1060&t=st=1664183839~exp=1664184439~hmac=69911a287c8633b80e63f15f93caca136aae68de2be9b462640bbb3a53c12597'
                    alt='Whitney leaning against a railing on a downtown street'
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='mx-auto max-w-prose text-base lg:max-w-none'>
              <p className='prose text-gray-500'>
                Transferring a fertilized embryo to a woman&apos;s uterus is
                critical in the in vitro fertilization process. The final stage
                of in vitro fertilization (IVF) is embryo transfer.
              </p>
            </div>
            <div className='prose prose-indigo mx-auto mt-5 space-y-4 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
              <p>
                Fertility drugs are used during IVF to stimulate the ovaries
                into producing healthy eggs. These eggs are then extracted from
                a woman’s ovaries and fertilized in a laboratory. The embryos
                are transplanted to the woman&apos;s uterus once the fertilized
                eggs have multiplied. The embryo must next attach itself to the
                wall of the womb or uterus for a pregnancy to begin.
              </p>
              <p>
                The entire IVF cycle is dependent on the precise positioning of
                embryos around the center of the endometrial cavity - with the
                least stress and manipulation. The significance of the correct
                embryo transfer method in IVF success cannot be emphasized
              </p>
              <p>
                The most effective approach currently available is
                ultrasound-guided embryo transfer. In IVF, the woman is
                stimulated to create numerous eggs using injectable medicines.
                Eggs develop in the ovaries in follicles. The egg retrieval
                method takes eggs from the ovaries once the follicles have
                matured. We inject sperm into the eggs and examine them the next
                day for signs of fertilization. Several days later, an adequate
                number of embryos are delivered to the uterus with ultrasound
                guidance for optimal positioning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbryoTransfer;
