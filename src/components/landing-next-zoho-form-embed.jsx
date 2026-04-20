'use client';

/**
 * Zoho Forms JS embed: host div + iframe on client + postMessage height (`zf_rszfm=1`).
 * Unique host id per mount so section + dialog can both render.
 */
import { useEffect, useId, useRef } from 'react';
import { getZohoFormPermaFromEmbedSrc } from 'data/landingNextZohoForm';

const INITIAL_IFRAME_HEIGHT_PX = 480;
const RESIZE_HEIGHT_EXTRA_PX = 8;

function withResizeParam(url) {
  const s = String(url || '').trim();
  if (!s) return '';
  if (s.includes('zf_rszfm=')) return s;
  return s.includes('?') ? `${s}&zf_rszfm=1` : `${s}?zf_rszfm=1`;
}

export default function LandingNextZohoFormEmbed({
  embedSrc,
  title = 'Book a consultation',
  className = '',
  minHeightClass = 'min-h-[280px] sm:min-h-[300px]',
  variant = 'section',
}) {
  const reactId = useId().replace(/:/g, '');
  const perma = embedSrc ? getZohoFormPermaFromEmbedSrc(embedSrc) : '';
  const hostDivId = perma ? `zf_div_${perma}_${reactId}` : '';
  const hostRef = useRef(null);

  useEffect(() => {
    if (!embedSrc || !perma || !hostDivId) return undefined;

    const d = hostRef.current;
    if (!d) return undefined;

    d.innerHTML = '';
    const f = document.createElement('iframe');
    f.src = withResizeParam(embedSrc);
    f.style.border = 'none';
    f.style.height = `${INITIAL_IFRAME_HEIGHT_PX}px`;
    f.style.width = '100%';
    f.style.transition = 'all 0.5s ease';
    f.setAttribute('aria-label', title);
    d.appendChild(f);

    const patchIframeUtm = () => {
      try {
        window.zfutm_zfAdvLead?.zfautm_iframeSprt?.();
      } catch {
        /* ZFAdvLead loads via /zoho-forms/zf-zfadvlead-utm.js on landing-next */
      }
    };
    patchIframeUtm();
    window.setTimeout(patchIframeUtm, 0);
    window.setTimeout(patchIframeUtm, 300);

    const onMessage = (event) => {
      const evntData = event.data;
      if (!evntData || typeof evntData !== 'string') return;
      const zfIfrmData = evntData.split('|');
      if (zfIfrmData.length !== 2 && zfIfrmData.length !== 3) return;

      const zfPerma = zfIfrmData[0];
      const zfIfrmHtNw = `${parseInt(zfIfrmData[1], 10) + RESIZE_HEIGHT_EXTRA_PX}px`;
      const host = hostRef.current;
      if (!host) return;
      const iframe = host.getElementsByTagName('iframe')[0];
      if (!iframe) return;
      if (
        iframe.src.indexOf('formperma') <= 0 ||
        iframe.src.indexOf(zfPerma) <= 0
      ) {
        return;
      }

      const prevIframeHeight = iframe.style.height;
      let zfTout = false;
      if (zfIfrmData.length === 3) {
        iframe.scrollIntoView();
        zfTout = true;
      }
      if (prevIframeHeight !== zfIfrmHtNw) {
        if (zfTout) {
          window.setTimeout(() => {
            iframe.style.height = zfIfrmHtNw;
          }, 500);
        } else {
          iframe.style.height = zfIfrmHtNw;
        }
      }
    };

    window.addEventListener('message', onMessage, false);
    return () => {
      window.removeEventListener('message', onMessage, false);
      d.innerHTML = '';
    };
  }, [embedSrc, perma, hostDivId, title]);

  if (!embedSrc) {
    return (
      <p className='rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950'>
        Set{' '}
        <span className='font-mono text-xs'>
          NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_EMBED_SRC
        </span>{' '}
        to your Zoho Forms permalink URL (include <span className='font-mono text-xs'>formperma/</span>
        ), then rebuild.
      </p>
    );
  }

  if (!perma) {
    return (
      <p className='rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950'>
        URL must include <span className='font-mono text-xs'>formperma/…</span>, or set{' '}
        <span className='font-mono text-xs'>NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_PERMA</span>.
      </p>
    );
  }

  const isSection = variant === 'section';

  return (
    <div
      className={[
        'flex w-full flex-col overflow-hidden rounded-xl',
        isSection
          ? 'border border-brandPink4/35 bg-gradient-to-b from-white via-white to-brandPink5/20 shadow-sm shadow-brandPurple/10 ring-1 ring-brandPink4/20'
          : 'bg-transparent',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-gg-zoho-form-embed
    >
      {isSection ? (
        <div
          className='h-1 w-full shrink-0 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark'
          aria-hidden
        />
      ) : null}
      <div className={['w-full', minHeightClass].filter(Boolean).join(' ')}>
        <div id={hostDivId} ref={hostRef} className='w-full' />
      </div>
    </div>
  );
}
