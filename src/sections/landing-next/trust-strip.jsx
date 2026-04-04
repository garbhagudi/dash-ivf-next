import { Baby, CalendarDays, Leaf, MapPinned } from 'lucide-react';

const items = [
  {
    id: 'babies',
    Icon: Baby,
    value: '15,000+',
    label: 'Babies welcomed',
  },
  {
    id: 'since',
    Icon: CalendarDays,
    value: '2011',
    label: 'Serving since',
  },
  {
    id: 'centres',
    Icon: MapPinned,
    value: 'Multiple',
    label: 'Bangalore centres',
  },
  {
    id: 'approach',
    Icon: Leaf,
    value: 'Holistic & ethical',
    label: 'Approach',
    valueClass:
      'text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight max-w-[11rem] mx-auto sm:max-w-none',
  },
];

export default function LandingNextTrustStrip() {
  return (
    <section
      className='relative border-y-2 border-brandPink5 bg-gradient-to-r from-white via-brandPink5/35 to-purple-100/70'
      aria-labelledby='trust-strip-heading'
    >
      <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' />

      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:py-16'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-xs font-bold uppercase tracking-[0.2em] text-brandPink'>
            GarbhaGudi in numbers
          </p>
          <h2
            id='trust-strip-heading'
            className='mt-2 font-heading text-xl font-bold text-brandPurpleDark sm:text-2xl'
          >
            Why families choose us
          </h2>
          <div className='mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-brandPink to-brandPurple' />
        </div>

        <div className='mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:mt-12'>
          {items.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                className='group relative overflow-hidden rounded-2xl border border-brandPink4/50 bg-white/90 px-4 py-5 text-center shadow-md shadow-brandPurple/5 ring-1 ring-white/80 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-brandPink hover:bg-white hover:shadow-xl hover:shadow-brandPink/15 sm:px-5 sm:py-6 md:py-7'
              >
                <div
                  className='pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-brandPink/10 to-brandPurple/10 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-brandPink/20 group-hover:to-purple-200/30'
                  aria-hidden
                />

                <div className='relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandPink to-brandPurpleDark text-white shadow-lg shadow-brandPink/25 transition duration-300 group-hover:scale-105 group-hover:shadow-brandPink/40'>
                  <Icon
                    className='h-7 w-7'
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>

                <p
                  className={`relative mt-5 font-heading font-bold text-brandPink ${item.valueClass ?? 'text-2xl sm:text-3xl lg:text-4xl'}`}
                >
                  {item.value}
                </p>
                <p className='relative mt-2 text-sm font-semibold leading-snug text-brandPurpleDark'>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
