import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Form from './form';

export default function MyModal({ title }) {
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
        <button
          type='button'
          onClick={openModal}
          className='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
        >
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          </Transition.Child>

          <div className='fixed inset-0 overscroll-y-contain'>
            <div className='mx-auto flex min-h-full max-w-lg items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='-mt-5 w-full max-w-lg transform cursor-pointer overflow-hidden rounded bg-purple-100 align-middle opacity-95 shadow-xl transition-all'>
                  <div
                    className='mx-auto my-4 flex w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPink2 px-3 py-1 font-semibold text-white sm:hidden'
                    onClick={closeModal}
                  >
                    Close
                  </div>
                  <Form />
                  <div
                    className='mx-auto my-4 hidden w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPink2 px-3 py-1 font-semibold text-white sm:block'
                    onClick={closeModal}
                  >
                    Close
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
