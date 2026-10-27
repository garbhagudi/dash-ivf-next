import { useEffect } from 'react';

import { ZOHO_SALESIQ_WIDGET_SRC } from 'data/zohoSalesIqWidget';

const GESTURES = [
  'scroll',
  'pointerdown',
  'keydown',
  'touchstart',
  'mousemove',
];

/** Upper bound on the idle wait after `load` for visitors who don't interact. */
const ZOHO_IDLE_TIMEOUT_MS = 3000;

export default function SalesIQ() {
  useEffect(() => {
    if (document.getElementById('zsiqscript')) return undefined;

    let cancelIdle = () => {};

    const stop = () => {
      GESTURES.forEach((e) => window.removeEventListener(e, loadZoho));
      window.removeEventListener('load', scheduleIdle);
      cancelIdle();
    };

    function loadZoho() {
      stop();

      /* Same bootstrap as Zoho’s inline snippet before `#zsiqscript`. */
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {};
      window.$zoho.salesiq.values = window.$zoho.salesiq.values || {};

      if (!document.getElementById('zsiqwidget')) {
        const widgetDiv = document.createElement('div');
        widgetDiv.id = 'zsiqwidget';
        document.body.appendChild(widgetDiv);
      }

      const script = document.createElement('script');
      script.id = 'zsiqscript';
      script.src = ZOHO_SALESIQ_WIDGET_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Visitors who never interact: load once the page has finished loading
    // and the browser is idle (Safari has no requestIdleCallback).
    function scheduleIdle() {
      if (typeof window.requestIdleCallback === 'function') {
        const id = window.requestIdleCallback(loadZoho, {
          timeout: ZOHO_IDLE_TIMEOUT_MS,
        });
        cancelIdle = () => window.cancelIdleCallback(id);
      } else {
        const id = setTimeout(loadZoho, ZOHO_IDLE_TIMEOUT_MS);
        cancelIdle = () => clearTimeout(id);
      }
    }

    GESTURES.forEach((e) =>
      window.addEventListener(e, loadZoho, { passive: true }),
    );
    if (document.readyState === 'complete') scheduleIdle();
    else window.addEventListener('load', scheduleIdle, { once: true });

    return stop;
  }, []);

  return null;
}
