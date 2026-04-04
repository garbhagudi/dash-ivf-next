import NextImage from 'next/image';
import Link from 'next/link';

const heroImage =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_1200/v1735814525/Image_Artboard_copy_3_ic0le8.jpg';

/** Tiny blur placeholder (pink wash) so the frame never looks “empty” before the hero loads. */
const heroBlurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmNlN2VkIi8+PC9zdmc+';

export default function LandingNextHero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-pink-300 to-purple-100'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent' />
      <div className='relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 shadow-sm ring-1 ring-brandPink4/40'>
            <span
              className='h-2 w-2 rounded-full bg-brandPink'
              aria-hidden
            />
            <p className='text-xs font-bold uppercase tracking-wider text-brandPurpleDark sm:text-sm'>
              GarbhaGudi IVF Centre
            </p>
          </div>
          <h1 className='mt-5 font-heading text-3xl font-bold leading-tight text-brandDark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]'>
            Fertility care that feels clear, calm, and expert-led
          </h1>
          <div className='mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />
          <p className='mt-5 max-w-xl text-base leading-relaxed text-brandDark/90 sm:text-lg'>
            Evidence-based treatment, transparent guidance, and a team focused on
            your journey—not noise at the top of the page.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <a
              href='#consultation'
              className='inline-flex items-center justify-center rounded-lg bg-brandPink px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brandPink/25 transition hover:bg-brandPink2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark'
            >
              Book a free fertility consultation
            </a>
            <Link
              href='/'
              className='text-sm font-bold text-brandPurpleDark underline decoration-brandPink decoration-2 underline-offset-4 transition hover:text-brandPink'
            >
              View main site
            </Link>
          </div>
        </div>
        <div className='relative mx-auto w-full max-w-lg lg:max-w-none'>
          <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brandPink3/50 to-purple-500/30 blur-2xl' />
          <div className='relative overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-brandPink5/70 to-purple-100 shadow-2xl drop-shadow-2xl'>
            <div className='relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3] lg:min-h-[min(420px,50vh)]'>
              <NextImage
                src={heroImage}
                alt='Calm, modern care environment at GarbhaGudi'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
                placeholder='blur'
                blurDataURL={heroBlurDataURL}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
