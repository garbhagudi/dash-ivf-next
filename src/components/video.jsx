import React from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const WatchVideo = ({ videoID }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal}>
          Watch Video
        </button>
      </div>

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

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={'div'}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-center font-heading text-2xl font-bold leading-6 text-gray-900'
                  >
                    Paripoorna Launch
                  </DialogTitle>

                  <div>
                    <div className='mt-8 overflow-hidden rounded-xl border-2 border-brandPink'>
                      <LiteYouTubeEmbed
                        id={videoID}
                        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                        poster='maxresdefault'
                      />
                    </div>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WatchVideo;
