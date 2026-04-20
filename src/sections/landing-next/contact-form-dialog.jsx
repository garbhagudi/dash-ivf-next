'use client';

import LandingNextZohoFormEmbed from 'components/landing-next-zoho-form-embed';
import { landingNextZohoFormEmbedSrc } from 'data/landingNextZohoForm';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { HiX } from 'react-icons/hi';

export default function ContactFormDialog({ open, onClose }) {
  return (
    <Transition appear show={open} as='div'>
      <Dialog as='div' className='relative z-[100]' onClose={onClose}>
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
            className='fixed inset-0 bg-brandPurpleDark/55 backdrop-blur-[2px]'
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
            <DialogPanel className='flex max-h-[min(92vh,720px)] w-full flex-col overflow-hidden rounded-t-3xl border-2 border-brandPink4/70 bg-white shadow-2xl shadow-brandPurple/25 sm:max-h-[90vh] sm:rounded-3xl sm:border-brandPink4/50'>
              <div className='h-1.5 shrink-0 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />

              <div className='flex shrink-0 items-start justify-between gap-3 border-b border-brandPink5 bg-gradient-to-br from-pink-50 via-white to-purple-100/60 px-4 py-4 sm:px-6 sm:py-5'>
                <div className='min-w-0 flex-1 text-left'>
                  <p className='text-xs font-bold uppercase tracking-wider text-brandPink'>
                    GarbhaGudi IVF
                  </p>
                  <h2 className='mt-1 font-heading text-xl font-bold leading-snug text-brandPurpleDark sm:text-2xl'>
                    Contact us
                  </h2>
                  <p className='mt-2 text-sm leading-relaxed text-brandDark/80'>
                    Share your details and we will call you back shortly.
                  </p>
                </div>
                <button
                  type='button'
                  onClick={onClose}
                  className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brandPurpleDark text-brandPurpleDark transition hover:bg-brandPurpleDark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPink'
                  aria-label='Close contact form'
                >
                  <HiX className='h-5 w-5' />
                </button>
              </div>

              <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4 sm:py-4'>
                <LandingNextZohoFormEmbed
                  variant='dialog'
                  embedSrc={landingNextZohoFormEmbedSrc}
                  title='Contact us — GarbhaGudi IVF'
                  minHeightClass='min-h-[240px] sm:min-h-[260px]'
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
