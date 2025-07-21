import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import Image from 'next/image';
import Popup from 'components/Popup';
import { HiX } from 'react-icons/hi';

export default function DetailsPopup({ title, btnClassName, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <button type='button' onClick={openModal} className={btnClassName}>
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-50' />
          </Transition.Child>

          <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-screen-lg transform overflow-auto rounded-lg bg-white px-6 py-6 shadow-xl transition-all md:px-20 md:py-10'>
                <div className='relative'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='relative mb-4 h-16 w-16 lg:h-32 lg:w-32'>
                      <Image
                        width={240}
                        height={240}
                        alt={data.name}
                        src={data.image.url}
                        className='mb-4 h-auto w-auto max-w-full rounded-full border-none bg-gray-300/30 align-middle shadow-xl dark:bg-gray-600'
                      />
                    </div>
                    <div className='text-center'>
                      <h1 className='mb-2 text-2xl font-semibold leading-normal text-gray-800 md:text-4xl dark:text-gray-200'>
                        {data.name}
                      </h1>
                      <div className='text-xl font-bold text-brandPink2 md:text-2xl'>
                        {data.qualification}
                      </div>
                      <div className='mb-2 text-gray-800 dark:text-gray-200'>
                        {data.designation}
                      </div>
                      {data?.medicalRegNo && (
                        <div className='mb-2 text-sm text-gray-800 md:text-base dark:text-gray-200'>
                          <strong>Medical Registration No:</strong>{' '}
                          <span className='font-bold underline'>
                            {data?.medicalRegNo}
                          </span>
                        </div>
                      )}
                      {data?.languages && (
                        <div className='mb-2 text-sm text-gray-800 md:text-base dark:text-gray-200'>
                          <strong>Languages Known:</strong>{' '}
                          <span className='font-bold underline'>
                            {data?.languages}
                          </span>
                        </div>
                      )}
                      <div className='lg:prose my-4 text-left text-sm text-gray-800 lg:h-full dark:text-gray-200'>
                        {data.content}
                      </div>
                      <div className='mt-4 flex flex-col items-center justify-center gap-4 md:flex-row'>
                        <button className='rounded-md bg-brandPink px-6 py-2 font-bold text-white hover:bg-brandPink3'>
                          <a href='tel:+919108910832' hrefLang='en-us'>
                            Give us a Call
                          </a>
                        </button>
                        <Popup
                          title={'Book now'}
                          btnClassName='rounded-md bg-brandPink px-6 py-2 font-semibold text-white focus:outline-none'
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={closeModal}
                    className='absolute right-0 top-2 cursor-pointer'
                  >
                    <HiX className='block h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100' />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
