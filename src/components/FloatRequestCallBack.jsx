import { CloseButton, Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import LandingNextZohoHtmlForm from 'components/landing-next-zoho-html-form';

export default function FloatRequestCallBack() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        onClick={openModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openModal();
        }}
        className='fixed -left-14 top-1/2 z-40 -translate-y-1/2 rotate-90 cursor-pointer rounded-t-md bg-brandPink px-4 py-1.5 text-white shadow-md transition hover:bg-brandPink2'
      >
        <p className='text-sm font-bold'>Book Appointment</p>
      </div>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-[100] focus:outline-none'
        onClose={closeModal}
      >
        <div
          className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
          onClick={closeModal}
          aria-hidden
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-3 py-4'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] flex max-h-[calc(100dvh-2rem)] w-full max-w-md flex-col overflow-hidden rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='relative h-32 w-full shrink-0'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv'
                  alt='formBanner'
                  className='h-full w-full rounded-t-md'
                />
                <CloseButton className='absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-brandPink'>
                  <IoIosCloseCircleOutline fontSize={24} />
                </CloseButton>
              </div>
              <div className='min-h-0 flex-1 overflow-y-auto px-0'>
                <div className='flex justify-center'>
                  <div className='mx-5 my-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm'>
                    Book your Consultation
                  </div>
                </div>
                <LandingNextZohoHtmlForm
                  variant='banner'
                  plainFields
                  showTitle={false}
                  showConsent
                  submitLabel='Get a call back'
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
