import { useEffect, useRef } from 'react';

const WIDGET_CODE =
  '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0';

function scheduleOpenChatAfter6s() {
  return window.setTimeout(() => {
    try {
      const fw = window.$zoho?.salesiq?.floatwindow;
      if (!fw) return;
      if (typeof fw.visible === 'function') fw.visible('show');
      if (typeof fw.open === 'function') fw.open(() => {});
    } catch {
      /* ignore */
    }
  }, 6000);
}

/**
 * Zoho SalesIQ for `/landing-next` only: load without waiting for scroll,
 * then show/open the float window after 6 seconds once the widget is ready.
 */
export default function SalesIQLandingNext() {
  const openTimerRef = useRef(null);
  const pollRef = useRef(null);
  const openScheduledRef = useRef(false);

  useEffect(() => {
    const clearTimers = () => {
      if (openTimerRef.current != null) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
      if (pollRef.current != null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };

    const armOpenWhenReady = () => {
      if (openScheduledRef.current) return;
      openScheduledRef.current = true;
      openTimerRef.current = scheduleOpenChatAfter6s();
    };

    // Widget script already injected (e.g. client nav from home) — poll for API then delay 6s.
    if (document.getElementById('zsiqscript')) {
      pollRef.current = window.setInterval(() => {
        if (window.$zoho?.salesiq?.floatwindow) {
          window.clearInterval(pollRef.current);
          pollRef.current = null;
          armOpenWhenReady();
        }
      }, 200);
      const maxPoll = window.setTimeout(() => {
        if (pollRef.current != null) {
          window.clearInterval(pollRef.current);
          pollRef.current = null;
        }
      }, 30000);
      return () => {
        clearTimers();
        window.clearTimeout(maxPoll);
      };
    }

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = {
      widgetcode: WIDGET_CODE,
      values: {},
      ready() {
        armOpenWhenReady();
      },
    };

    if (!document.getElementById('zsiqwidget')) {
      const widgetDiv = document.createElement('div');
      widgetDiv.id = 'zsiqwidget';
      document.body.appendChild(widgetDiv);
    }

    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zoho.com/widget';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return clearTimers;
  }, []);

  return null;
}
