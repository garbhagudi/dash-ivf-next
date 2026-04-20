import LandingNextZohoFormEmbed from 'components/landing-next-zoho-form-embed';
import { landingNextZohoFormEmbedSrc } from 'data/landingNextZohoForm';

export default function LandingNextConsultationFormSection() {
  return (
    <section
      className='relative scroll-mt-24 border-y border-brandPink4/30 bg-gradient-to-b from-white via-brandPink5/25 to-purple-100/50 py-12 text-brandDark sm:scroll-mt-28 sm:py-14 lg:py-16'
      id='consultation'
      aria-labelledby='landing-consultation-heading'
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandPink4/60 to-transparent' />

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-brandPink'>
            GarbhaGudi IVF
          </p>
          <h2
            id='landing-consultation-heading'
            className='mt-2 font-heading text-2xl font-bold text-brandPurpleDark sm:text-3xl'
          >
            Book your consultation
          </h2>
          <div className='mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brandPink to-brandPurple' />
          <p className='mt-4 text-sm leading-relaxed text-brandDark/80 sm:text-base'>
            One clear action: share a few details and we will coordinate a call. Offers
            can be discussed after you are comfortable with the clinical fit—not in the
            first screen.
          </p>
        </div>

        <div
          id='consultation-form'
          className='mx-auto mt-8 max-w-md scroll-mt-28 rounded-2xl border border-brandPink4/50 bg-white px-2 py-3 sm:mt-10 sm:px-4 sm:py-4 md:max-w-4xl lg:max-w-5xl'
        >
          <LandingNextZohoFormEmbed
            embedSrc={landingNextZohoFormEmbedSrc}
            title='Book a consultation — GarbhaGudi IVF'
            minHeightClass='min-h-[260px] sm:min-h-[280px]'
          />
        </div>

        <p className='mx-auto mt-8 max-w-xl text-center text-sm text-brandPurpleDark'>
          Prefer calling?{' '}
          <a
            href='tel:+919108910832'
            className='font-bold text-brandPink underline decoration-brandPink/40 underline-offset-2 hover:text-brandPink2'
          >
            +91 9108 9108 32
          </a>
        </p>
      </div>
    </section>
  );
}
