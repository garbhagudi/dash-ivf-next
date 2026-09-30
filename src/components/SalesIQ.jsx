import { useEffect, useRef } from 'react';

import {
  ZOHO_SALESIQ_WIDGET_SRC,
  holdSalesIqClosedOnMobile,
} from 'data/zohoSalesIqWidget';

/**
 * Site-wide Zoho SalesIQ (home + inner pages except where `_app` omits this).
 * Same embed as `/landing-next` (`zohopublic.com/widget?wc=…`); no auto-popup.
 *
 * Loads after the first user gesture, or after 15s for visitors who never
 * interact, so the launcher (and Zoho's cookies) stay out of first load.
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
      /* Mobile: keep Zoho's auto-opened window hidden until the bubble is tapped. */
      holdSalesIqClosedOnMobile();

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
    // Fallback for visitors who never interact; keeps the widget (and its
    // third-party cookies) out of first load / audits.
    const fallback = setTimeout(loadZoho, 15000);

    return () => {
      window.removeEventListener('scroll', loadZoho);
      window.removeEventListener('mousemove', loadZoho);
      window.removeEventListener('touchstart', loadZoho);
      clearTimeout(fallback);
    };
  }, []);
}

export default function SalesIQ() {
  useZohoSalesIQ();
  return null;
}
