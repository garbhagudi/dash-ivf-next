import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';
import FormComponent from './formComp';

export default function Popup({ title, btnClassName }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal} className={btnClassName}>
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={'div'}>
        <Dialog
          as='div'
          className='fixed inset-0 z-[9999]'
          onClose={closeModal}
        >
          <TransitionChild
            as={'div'}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-80'></div>
          </TransitionChild>

          <div className='fixed inset-0 flex items-center justify-center'>
            <div className='mx-auto flex max-w-lg items-start justify-start text-center'>
              <TransitionChild
                as={'div'}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='flex w-full max-w-lg transform flex-col items-start justify-start overflow-hidden rounded-lg bg-[#005e7e] pb-8 shadow-lg transition-all'>
                  <Image
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1735814525/Image_Artboard_copy_3_ic0le8.webp'
                    width={512}
                    height={180}
                    alt='book an appointment form'
                    className='h-full w-full object-center'
                    quality={75}
                    loading='lazy'
                  />

                  <FormComponent title='Book Your Appointment' />
                  <div
                    onClick={closeModal}
                    className='absolute right-3 top-3 cursor-pointer'
                  >
                    <HiX className='block h-6 w-6 text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100' />
                  </div>
                </Dialog.Panel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
