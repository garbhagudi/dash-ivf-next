import React from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import MyModal from './modal';

const DoctorLayout = ({
  name,
  index,
  imageComponent,
  activeIndex,
  docpic,
  setActiveIndex,
  bio,
}) => {
  let [isOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const handleSetIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className=''>
        <div
          onClick={() => handleSetIndex(index)}
          className='flex flex-col items-center justify-center rounded-lg border bg-slate-50 px-3 pt-4 transition duration-200 ease-in-out hover:shadow-2xl'
        >
          <div className=''>{imageComponent}</div>
        </div>
      </div>
      {activeIndex === index && (
        <Transition appear show={isOpen} as={'div'}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <TransitionChild
              as={'div'}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </TransitionChild>

            <div className='fixed inset-0 flex items-start justify-center overflow-y-auto'>
              <div className='mt-24 p-4 text-center'>
                <TransitionChild
                  as={'div'}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-7xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-center font-heading text-2xl font-bold leading-6 text-brandPink'
                    >
                      {name}
                    </Dialog.Title>
                    <img
                      src={docpic}
                      alt={name}
                      className='m-4 mx-auto h-44 w-44 rounded-full'
                    />
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{bio}</p>
                    </div>

                    <div className='mt-4 space-y-4 text-center'>
                      <MyModal title={'Book an Appointment'} />
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-600 hover:text-white'
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default DoctorLayout;
