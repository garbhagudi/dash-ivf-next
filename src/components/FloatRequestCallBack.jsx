import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import FormComponent from 'components/formComp';

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
        <p className='text-sm font-bold'>Book Consultation</p>
      </div>

      <Transition appear show={isOpen} as='div'>
        <Dialog as='div' className='relative z-[100]' onClose={closeModal}>
          <TransitionChild
            as='div'
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='bg-brandPurpleDark/55 fixed inset-0 backdrop-blur-[2px]'
              aria-hidden
            />
          </TransitionChild>

          <div className='fixed inset-0 z-[100] flex items-end justify-center overflow-hidden sm:items-center sm:p-4 sm:py-8'>
            <TransitionChild
              as='div'
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              className='flex w-full max-w-full justify-center sm:max-w-md'
            >
              <DialogPanel className='flex max-h-[min(90vh,900px)] w-full flex-col overflow-hidden rounded-t-3xl border-2 border-brandPink4/70 bg-white shadow-2xl shadow-brandPurple/25 sm:max-h-[85vh] sm:rounded-3xl sm:border-brandPink4/50'>
                <div className='h-1.5 shrink-0 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />

                <div className='flex shrink-0 items-start justify-between gap-3 border-b border-brandPink5 bg-gradient-to-br from-pink-50 via-white to-purple-100/60 px-4 py-4 sm:px-6 sm:py-5'>
                  <div className='min-w-0 flex-1 text-left'>
                    <p className='text-xs font-bold uppercase tracking-wider text-brandPink'>
                      GarbhaGudi specialist
                    </p>
                    <h2 className='mt-1 font-heading text-xl font-bold leading-snug text-brandPurpleDark sm:text-2xl'>
                      Book Your Free Consultation
                    </h2>
                  </div>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brandPurpleDark text-brandPurpleDark transition hover:bg-brandPurpleDark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPink'
                    aria-label='Close'
                  >
                    <HiX className='h-5 w-5' />
                  </button>
                </div>

                <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6'>
                  <FormComponent
                    variant='card'
                    isTag={false}
                    submitLabel='Book Consultation'
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
