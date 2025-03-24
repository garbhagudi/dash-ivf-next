import React, { useState } from 'react';
import Image from 'next/image';

const Treatment = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className='scroll-m-16 scroll-smooth' id='know-more'>
      <div className='relative bg-white py-5 dark:bg-gray-800'>
        <div className='container relative m-auto px-3 md:px-12 lg:px-6'>
          <h3 className='mx-auto text-left font-heading text-4xl font-black lg:text-5xl'>
            Step by Step IVF Process
          </h3>{' '}
          <div className='mx-auto flex-wrap text-gray-800 md:flex dark:text-gray-200'>
            <div className='grid grid-cols-1 lg:grid-cols-5'>
              <div className='relative order-2 col-span-3 mt-8 lg:order-1'>
                <p>
                  GarbhaGudi IVF Center in Bangalore combines advanced
                  technology with a skilled team of doctors and embryologists to
                  offer tailored IVF treatments, helping couples overcome
                  infertility and achieve their dream of parenthood. Embarking
                  on your first in vitro fertilization (IVF) cycle can be both
                  exciting and overwhelming. Understanding each step of the
                  process can help ease your anxieties and prepare you for the
                  journey ahead. We’ll break down the entire IVF process,
                  providing a detailed overview of what to expect during each
                  stage for clear understanding.
                </p>

                {/* See More/See Less Toggle Section */}
                <ul className='mt-2 flex list-decimal flex-col gap-1.5 px-2.5'>
                  {/* Show top 3 list items by default */}
                  <li className='text-lg font-bold'>
                    Initial Consultation and Testing
                    <br />
                    <div className='text-base font-semibold'>
                      The Initial Consultation
                    </div>
                    <div className='text-sm font-normal'>
                      The IVF journey begins with a comprehensive consultation
                      with a fertility specialist. During this appointment, the
                      doctor will:
                    </div>
                    <ul className='list-disc px-5 text-sm font-normal'>
                      <li>
                        Review your medical history and any previous fertility
                        treatments.
                      </li>
                      <li>
                        Perform a physical examination and ultrasound to
                        evaluate reproductive health.
                      </li>
                      <li>
                        Discuss potential causes of infertility and determine if
                        IVF is the right option for you.
                      </li>
                    </ul>
                  </li>

                  <li className='text-lg font-bold'>
                    Preparing for Your IVF Cycle
                    <br />
                    <div className='text-base font-semibold'>
                      Birth Control or Hormonal Regulation
                    </div>
                    <div className='text-sm font-normal'>
                      Many IVF cycles start with birth control pills or hormonal
                      medications to regulate your menstrual cycle. This step
                      ensures your ovaries respond predictably to stimulation
                      medications.
                    </div>
                  </li>

                  <li className='text-lg font-bold'>
                    Ovarian Stimulation
                    <br />
                    <div className='text-base font-semibold'>
                      Ovarian Stimulation
                    </div>
                    <div className='text-sm font-normal'>
                      The next phase involves stimulating the ovaries to produce
                      multiple eggs. This is achieved through daily injections
                      of fertility medications such as:
                    </div>
                    <ul className='list-disc px-5 text-sm font-normal'>
                      <li>
                        <span className='text-base font-semibold'>
                          Gonadotropins:
                        </span>{' '}
                        To stimulate egg production.
                      </li>
                      <li>
                        <span className='text-base font-semibold'>
                          GnRH Agonists or Antagonists:
                        </span>{' '}
                        To prevent premature ovulation.
                      </li>
                    </ul>
                  </li>

                  {/* Conditional rendering for the remaining list items */}
                  {showMore && (
                    <>
                      <li className='text-lg font-bold'>
                        Egg Retrieval
                        <br />
                        <div className='text-base font-semibold'>
                          The Procedure
                        </div>
                        <div className='text-sm font-normal'>
                          Egg retrieval is a minimally invasive procedure
                          performed under sedation. Using an ultrasound-guided
                          needle, the doctor retrieves eggs from the follicles
                          in the ovaries.
                        </div>
                      </li>

                      <li className='text-lg font-bold'>
                        Fertilization and Embryo Development
                        <br />
                        <div className='text-base font-semibold'>
                          Fertilization Process
                        </div>
                        <div className='text-sm font-normal'>
                          Once the eggs are retrieved, they are combined with
                          sperm in the laboratory. Two main methods of
                          fertilization are used:
                        </div>
                      </li>

                      <li className='text-lg font-bold'>
                        Embryo Transfer
                        <br />
                        <div className='text-base font-semibold'>
                          Timing of Transfer
                        </div>
                        <div className='text-sm font-normal'>
                          Embryo transfer typically occurs 3-5 days after egg
                          retrieval.
                        </div>
                      </li>

                      <li className='text-lg font-bold'>
                        The Two-Week Wait
                        <br />
                        <div className='text-base font-semibold'>
                          What Happens During This Period?
                        </div>
                        <div className='text-sm font-normal'>
                          After the embryo transfer, you’ll enter the two-week
                          wait before taking a pregnancy test.
                        </div>
                      </li>

                      <li className='text-lg font-bold'>
                        Pregnancy Test and Next Steps
                        <br />
                        <div className='text-base font-semibold'>
                          Taking the Test
                        </div>
                        <div className='text-sm font-normal'>
                          Approximately two weeks after the embryo transfer, a
                          blood test will measure HCG levels to confirm
                          pregnancy.
                        </div>
                      </li>
                    </>
                  )}
                </ul>

                {/* See More/See Less Button */}
                <div className='mt-4'>
                  <button
                    onClick={handleToggle}
                    className='text-primary-600 dark:text-primary-400 text-base font-semibold hover:underline'
                  >
                    {showMore ? 'See Less' : 'See More'}
                  </button>
                </div>
              </div>

              <div className='order-1 col-span-2 mx-auto mt-4 max-w-[50rem] md:max-w-full lg:order-2 lg:p-4'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722510346/Misc/PNG_25_yoa08y_1_cr2fpg.webp'
                  className='relative w-full bg-white/10 dark:brightness-75 dark:invert'
                  alt='Process of IVF Treatment in Bangalore'
                  loading='lazy'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
