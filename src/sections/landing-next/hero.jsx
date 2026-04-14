import { HiArrowRight } from 'react-icons/hi';
import LandingNextHeroConsultationForm from 'sections/landing-next/hero-consultation-form';

export default function LandingNextHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-pink-300 to-purple-100'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent' />

      <div className='relative mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-9 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 lg:py-10'>
        <div>

          <h1 className='mt-3 font-heading text-2xl font-bold leading-snug text-brandDark sm:mt-4 sm:text-3xl lg:text-[1.95rem] lg:leading-tight'>
            From Infertility Struggles to Successful Pregnancy
          </h1>
          <div className='mt-3 h-0.5 w-14 rounded-full bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />
          <h2 className='mt-3 max-w-xl text-sm leading-relaxed text-brandDark/90 sm:text-[0.95rem]'>
            Evidence-based treatment, transparent guidance, and an experienced team
            focused on your fertility journey.
          </h2>

          <div className='mt-5'>
            <a
              href='#hero-consultation'
              className='inline-flex items-center justify-center gap-1.5 rounded-lg bg-brandPink px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brandPink2 sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark'
            >
              Book a free fertility consultation
              <HiArrowRight className='h-3.5 w-3.5 sm:h-4 sm:w-4' aria-hidden />
            </a>
          </div>
        </div>

        <div
          id='hero-consultation'
          className='mx-auto mt-8 w-full max-w-[22rem] scroll-mt-20 sm:max-w-sm lg:mt-0 lg:max-w-none'
        >
          <div className='rounded-xl border border-brandPink4/60 bg-white px-4 py-4 sm:px-5 sm:py-4'>
            <div className='border-b border-brandPink5 pb-3 text-center sm:text-left'>
              <p className='text-[10px] font-bold uppercase tracking-wider text-brandPink sm:text-xs'>
                GarbhaGudi IVF
              </p>
              <h3 className='mt-0.5 font-heading text-base font-bold text-brandPurpleDark sm:text-lg'>
                Book your consultation
              </h3>
              <p className='mt-1.5 text-xs leading-snug text-brandDark/80 sm:text-sm'>
                Share a few details and we will coordinate a call. Offers after you are
                comfortable with clinical fit.
              </p>
            </div>

            <div className='mt-3'>
              <LandingNextHeroConsultationForm />
            </div>

            <p className='mt-3 text-center text-[11px] text-brandDark/70 sm:text-left'>
              Prefer calling?{' '}
              <a
                href='tel:+919108910832'
                className='font-semibold text-brandPink underline underline-offset-2 hover:text-brandPink2'
              >
                +91 9108 9108 32
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
