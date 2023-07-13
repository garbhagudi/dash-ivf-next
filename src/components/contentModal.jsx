import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function ContentModal({ title, content, classname, heading }) {
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
        <button type='button' onClick={openModal} className={classname}>
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

          <div className='fixed inset-0 overflow-scroll'>
            <div className='flex max-w-lg lg:max-w-5xl mx-auto lg:min-h-[60vh] items-center justify-center text-center mt-14'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full px-3 lg:px-6 -mt-5 transform rounded cursor-pointer overflow-hidden bg-gray-50 opacity-95 align-middle shadow-xl transition-all'>
                  <div
                    className='my-4 flex sm:hidden items-center justify-center cursor-pointer px-3 py-1 bg-brandPink2 mx-auto w-20 text-white font-semibold rounded-lg'
                    onClick={closeModal}
                  >
                    Close
                  </div>
                  <h1 className='text-xl font-heading text-center pt-6 pb-2 underline text-brandPurpleDark uppercase'>
                    {heading}
                  </h1>
                  <RichText content={content} />
                  <div
                    className='hidden my-4 items-center sm:block justify-center cursor-pointer px-3 py-1 bg-brandPink2 mx-auto w-20 text-white font-semibold rounded-lg'
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
