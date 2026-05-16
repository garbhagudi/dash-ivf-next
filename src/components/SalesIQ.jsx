import { useEffect, useRef } from 'react';

import { ZOHO_SALESIQ_WIDGET_SRC } from 'data/zohoSalesIqWidget';

/**
 * Site-wide Zoho SalesIQ (home + inner pages except where `_app` omits this).
 * Same embed as `/landing-next` (`zohopublic.com/widget?wc=…`); no auto-popup.
 *
 * Loads after first user gesture *or* when `window` fires `load`, so the home
 * page gets the launcher without forcing scroll.
 */
export function useZohoSalesIQ() {
  const loadedRef = useRef(false);

  useEffect(() => {
    const loadZoho = () => {
      if (loadedRef.current) return;
      if (document.getElementById('zsiqscript')) {
        loadedRef.current = true;
        return;
      }
      loadedRef.current = true;

      /* Same bootstrap as Zoho’s inline snippet before `#zsiqscript`. */
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };
      window.$zoho.salesiq.values = window.$zoho.salesiq.values || {};

      if (!document.getElementById('zsiqwidget')) {
        const widgetDiv = document.createElement('div');
        widgetDiv.id = 'zsiqwidget';
        document.body.appendChild(widgetDiv);
      }

      if (document.getElementById('zsiqscript')) return;

      const script = document.createElement('script');
      script.id = 'zsiqscript';
      script.src = ZOHO_SALESIQ_WIDGET_SRC;
      script.defer = true;
      document.body.appendChild(script);
    };

    window.addEventListener('scroll', loadZoho, { once: true });
    window.addEventListener('mousemove', loadZoho, { once: true });
    window.addEventListener('touchstart', loadZoho, { once: true });
    window.addEventListener('load', loadZoho, { once: true });

    return () => {
      window.removeEventListener('scroll', loadZoho);
      window.removeEventListener('mousemove', loadZoho);
      window.removeEventListener('touchstart', loadZoho);
      window.removeEventListener('load', loadZoho);
    };
  }, []);
}

export default function SalesIQ() {
  useZohoSalesIQ();
  return null;
}
