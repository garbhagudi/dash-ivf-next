import React from 'react';

const LaparoHystero = () => {
  return (
    <div
      className='relative scroll-m-28 bg-white'
      id='hysteroscopy-and-laparoscopy'
    >
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover lg:absolute lg:h-full'
            src='https://res.cloudinary.com/garbhagudi/image/upload/v1665994576/garbhagudi-ivf/New%20Website/image-2-compressed_b1xroe.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
        <div className='lg:col-start-2 lg:pl-8'>
          <div className='mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg'>
            <h2 className='font-semibold uppercase leading-6 tracking-wide text-indigo-600'>
              Female Infertility
            </h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              Laparoscopy and Hysteroscopy
            </h3>
            <p className='prose mt-8 text-gray-500'>
              Laparoscopy and hysteroscopy are procedures that are advised
              during infertility therapy. These treatments allow the doctor to
              examine the tissues and organs within the pelvis and perform
              remedial operations. Laparoscopy is used to examine and access the
              uterus, ovaries, fallopian tubes, and other organs within the
              pelvis. Hysteroscopy is used to examine the uterine cavity,
              diagnose abnormalities, and undertake remedial operations. These
              operations are best performed immediately after menstruation when
              the view is clear.
            </p>
            <div className='prose prose-indigo mt-5 text-gray-500'>
              <p>
                If you have pelvic discomfort or a history of pelvic illness,
                the doctor may consider a laparoscopy. It aids in the diagnosis
                and treatment of uterine fibroids, blocked tubes, endometriosis,
                ectopic pregnancies, ovarian cysts, adhesions, and other
                structural disorders. Following the initial fertility
                examination, a laparoscopy may be advised. The surgery is often
                performed under general anaesthesia.
              </p>
              <p>
                Hysteroscopy is commonly used to diagnose infertility,
                miscarriage, and irregular uterine bleeding. Other imaging
                procedures, such as ultrasonography, are frequently performed
                before it. A hysteroscopy can aid in the detection of uterine
                abnormalities such as fibroids, polyps, scarring, and congenital
                deformities. During hysteroscopy, surgery may be performed to
                repair specific problems. You may be requested to take specific
                drugs prior to surgery to prepare the uterus. The operation is
                conducted as an outpatient and does not need any incisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaparoHystero;
