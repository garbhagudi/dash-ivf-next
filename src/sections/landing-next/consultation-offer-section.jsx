import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const OFFER_DURATION_SEC = 5 * 60;

function formatHms(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    sec: String(s).padStart(2, '0'),
  };
}

const stickyUnits = [
  { key: 'h', label: 'Hrs' },
  { key: 'm', label: 'Min' },
  { key: 's', label: 'Sec' },
];

export default function LandingNextConsultationOfferSection() {
  const [isClient, setIsClient] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION_SEC);
  const stickyBarRef = useRef(null);

  useEffect(() => setIsClient(true), []);

  /** Publish measured sticky height so Zoho SalesIQ float sits above it (mobile). */
  useLayoutEffect(() => {
    if (!isClient) return undefined;
    const root = document.documentElement;
    const mq = window.matchMedia('(max-width: 767px)');

    const publishStickyHeight = () => {
      const el = stickyBarRef.current;
      if (!mq.matches || !el) {
        root.style.removeProperty('--landing-offer-sticky-h');
        root.style.removeProperty('--landing-offer-main-pad');
        return;
      }
      const h = Math.ceil(el.getBoundingClientRect().height);
      if (h < 8) {
        root.style.removeProperty('--landing-offer-sticky-h');
        root.style.removeProperty('--landing-offer-main-pad');
        return;
      }
      /* Full bar height (includes safe-area padding on the bar). */
      root.style.setProperty('--landing-offer-sticky-h', `${h}px`);
      /* Tighter scroll pad: do not add env() again (already inside measured h). */
      root.style.setProperty(
        '--landing-offer-main-pad',
        `${Math.max(44, h - 14)}px`,
      );
    };

    publishStickyHeight();
    const ro = new ResizeObserver(publishStickyHeight);
    let observedEl = null;
    const observeSticky = () => {
      const el = stickyBarRef.current;
      if (!el || el === observedEl) return;
      if (observedEl) ro.unobserve(observedEl);
      ro.observe(el);
      observedEl = el;
    };
    observeSticky();
    requestAnimationFrame(() => requestAnimationFrame(observeSticky));
    mq.addEventListener('change', publishStickyHeight);
    window.addEventListener('resize', publishStickyHeight);
    const t = window.setTimeout(publishStickyHeight, 150);

    return () => {
      window.clearTimeout(t);
      if (observedEl) ro.unobserve(observedEl);
      ro.disconnect();
      mq.removeEventListener('change', publishStickyHeight);
      window.removeEventListener('resize', publishStickyHeight);
      root.style.removeProperty('--landing-offer-sticky-h');
      root.style.removeProperty('--landing-offer-main-pad');
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return undefined;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return OFFER_DURATION_SEC;
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [isClient]);

  const { h, m, sec } = formatHms(secondsLeft);
  const stickyValues = [h, m, sec];

  return (
    <>
      <section
        className='relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-brandPink5/35 to-purple-100/40 pb-1 pt-5 text-brandDark sm:scroll-mt-28 sm:py-10'
        id='consultation-offer'
        aria-label='Limited-time consultation offer'
      >
        <div
          className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandPink4/50 to-transparent'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-brandPink/10 blur-3xl'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-brandPurple/15 blur-3xl'
          aria-hidden
        />

        <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='mx-auto flex max-w-lg flex-col items-center gap-5 text-center sm:gap-6 md:max-w-xl'>
            <div className='flex w-full flex-col items-center gap-3 sm:gap-4'>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-brandPink'>
                Limited-time offer
              </p>
              <a
                href='#consultation-form'
                className='inline-flex w-full max-w-md items-center justify-center rounded-2xl bg-brandPink px-6 py-3.5 text-base font-bold text-white shadow-md shadow-brandPink/30 transition hover:bg-brandPink2 hover:shadow-lg hover:shadow-brandPink/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark sm:px-8 sm:py-4 sm:text-lg'
              >
                Book your Consultation now
              </a>
              <p className='max-w-md text-pretty px-1 text-sm leading-snug text-brandDark/75 sm:text-base'>
                <span className='text-brandDark/50 line-through decoration-brandPink4/80'>
                  Original price Rs.499
                </span>
                <span className='mx-2 text-brandDark/40' aria-hidden>
                  ·
                </span>
                <span className='font-semibold text-brandPurpleDark'>
                  Grab{' '}
                  <span className='whitespace-nowrap text-brandPink'>75% off</span> now
                </span>
              </p>
            </div>

            <div
              className='my-0.5 h-px w-full max-w-md bg-gradient-to-r from-transparent via-brandPink4/45 to-transparent'
              aria-hidden
            />

            <div className='flex w-full flex-col items-center gap-3 sm:gap-4'>
              <p className='font-heading text-xs font-bold uppercase tracking-[0.22em] text-brandPink'>
                Offer closes in
              </p>
              <div className='grid w-full max-w-md grid-cols-3 gap-3 sm:max-w-lg sm:gap-4'>
                {[
                  { value: h, label: 'Hours' },
                  { value: m, label: 'Minutes' },
                  { value: sec, label: 'Seconds' },
                ].map((box) => (
                  <div
                    key={box.label}
                    className='flex flex-col items-center gap-1.5 sm:gap-2'
                  >
                    <div className='flex w-full min-h-[2.875rem] items-center justify-center rounded-xl bg-white/75 px-1.5 py-2 text-center text-lg font-bold tabular-nums tracking-tight text-brandPurpleDark backdrop-blur-sm sm:min-h-[3.25rem] sm:rounded-2xl sm:px-2 sm:py-2.5 sm:text-xl md:text-2xl'>
                      {box.value}
                    </div>
                    <span className='text-[10px] font-semibold uppercase tracking-[0.12em] text-brandPurpleDark/70 sm:text-xs'>
                      {box.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: fixed bottom bar — same countdown as section above */}
      <div
        ref={stickyBarRef}
        className='fixed inset-x-0 bottom-0 z-50 border-t border-brandPink4/50 bg-white/95 shadow-[0_-6px_28px_rgba(97,42,123,0.14)] backdrop-blur-md md:hidden'
        style={{
          paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom, 0px))',
        }}
        role='complementary'
        aria-label='Consultation offer and countdown'
      >
        <div className='mx-auto flex max-w-lg items-stretch gap-2.5 px-3 pt-2.5'>
          <div className='flex min-w-0 flex-1 flex-col justify-center gap-1'>
            <p className='text-[10px] font-bold uppercase tracking-wide text-brandPurpleDark'>
              Offer ends in
            </p>
            <div className='flex items-end justify-start gap-1'>
              {stickyUnits.map((u, i) => (
                <div
                  key={u.key}
                  className='flex flex-col items-center gap-0.5'
                >
                  <div className='flex h-8 min-w-[2rem] items-center justify-center rounded-md bg-brandPink5 px-1 text-sm font-bold tabular-nums text-brandPurpleDark'>
                    {stickyValues[i]}
                  </div>
                  <span className='text-[8px] font-semibold uppercase tracking-wide text-brandPurpleDark/75'>
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <a
            href='#consultation-form'
            className='flex max-w-[58%] shrink-0 flex-col items-center justify-center rounded-xl bg-brandPink px-3 py-2 text-center text-[11px] font-bold leading-snug text-white shadow-md shadow-brandPink/25 transition active:bg-brandPink2 sm:px-4 sm:text-xs'
          >
            <span>Book your</span>
            <span>Consultation now</span>
          </a>
        </div>
      </div>
    </>
  );
}
