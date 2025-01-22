import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { TreatmentHeader } from 'components/header/headerData';
import Image from 'next/image';

const Treatments = () => {
  return (
    <div>
      <div>
        <h3 className='py-10 text-center font-heading text-3xl font-bold text-gray-800 lg:py-16 lg:text-4xl dark:text-gray-200'>
          Treatment Options
        </h3>
        <div className='mx-auto max-w-3xl px-2'>
          <TabGroup>
            <TabList className='bg-gg-500 dark:bg-gg-400 flex flex-nowrap rounded-lg transition-all duration-300 ease-linear dark:border dark:border-gray-600'>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                Female Infertility
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                Male Infertility
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                Advanced Options
              </Tab>
            </TabList>
            <TabPanels className='my-10 px-2 text-black transition-all duration-500 ease-out'>
              <TabPanel>
                <div className='grid grid-cols-2 gap-1 text-center md:grid-cols-3 md:gap-2'>
                  {TreatmentHeader.female.map((items) => (
                    // <Link href={items.link} key={items.id} className='group'>
                    <div
                      key={items.id}
                      className='hover:bg-gg-500 flex rounded-lg border px-2 py-2 transition-all duration-300 ease-linear hover:border-transparent md:px-3 md:py-3 lg:px-4 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                    >
                      <div className='w-1/3'>
                        <Image
                          className='h-10 w-10 rounded-lg object-cover transition-all duration-300 ease-linear group-hover:grayscale-0 md:h-12 md:w-12 dark:grayscale'
                          src={items.icon}
                          alt={items.name}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className='ml-4 flex w-2/3 flex-col justify-center text-left'>
                        <p className='font-content text-sm font-semibold md:text-base'>
                          {items.name}
                        </p>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-2 gap-2 text-center md:grid-cols-3'>
                  {TreatmentHeader.male.map((items) => (
                    // <Link href={items.link} key={items.id} className='group'>
                    <div
                      key={items.id}
                      className='hover:bg-gg-500 flex cursor-pointer rounded-lg border px-2 py-2 transition-all duration-300 ease-linear hover:border-transparent md:px-3 md:py-3 lg:px-4 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                    >
                      <div className='w-1/3'>
                        <Image
                          className='h-10 w-10 rounded-lg object-cover transition-all duration-300 ease-linear group-hover:grayscale-0 md:h-12 md:w-12 dark:grayscale'
                          src={items.icon}
                          alt={items.name}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className='ml-4 flex w-2/3 flex-col justify-center text-left'>
                        <p className='font-content text-sm font-semibold md:text-base'>
                          {items.name}
                        </p>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-2 gap-2 text-center md:grid-cols-3'>
                  {TreatmentHeader.advanced.map((items) => (
                    // <Link href={items.link} key={items.id} className='group'>
                    <div
                      key={items.id}
                      className='hover:bg-gg-500 flex cursor-pointer rounded-lg border px-2 py-2 transition-all duration-300 ease-linear hover:border-transparent md:px-3 md:py-3 lg:px-4 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                    >
                      <div className='w-1/3'>
                        <Image
                          className='h-10 w-10 rounded-lg object-cover transition-all duration-300 ease-linear group-hover:grayscale-0 md:h-12 md:w-12 dark:grayscale'
                          src={items.icon}
                          alt={items.name}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className='ml-4 flex w-2/3 flex-col justify-center text-left'>
                        <p className='font-content text-sm font-semibold md:text-base'>
                          {items.name}
                        </p>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
