import { useEffect, useRef } from 'react';

const WIDGET_CODE =
  '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0';

/** User has read a meaningful portion of the page. */
const SCROLL_OPEN_THRESHOLD_PCT = 30;

/** Minimum time on page before we auto-show the widget (engagement + load). */
const SHOW_AFTER_MS = 8000;

function scrollDepthPercent() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  if (scrollable <= 0) return 100;
  const top = window.scrollY ?? doc.scrollTop;
  return (top / scrollable) * 100;
}

/**
 * Zoho SalesIQ for `/landing-next` only: load on mount, then show/open the float
 * once the widget is ready and either (a) 8s have passed or (b) user scrolled ~30%.
 */
export default function SalesIQLandingNext() {
  const pollRef = useRef(null);
  const widgetReadyRef = useRef(false);
  const openedRef = useRef(false);
  const pageEnteredAtRef = useRef(0);
  const delayTimerRef = useRef(null);
  const scrollRafRef = useRef(null);

  useEffect(() => {
    pageEnteredAtRef.current = Date.now();

    const clearScrollRaf = () => {
      if (scrollRafRef.current != null) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };

    const clearDelayTimer = () => {
      if (delayTimerRef.current != null) {
        window.clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }
    };

    const openChat = () => {
      if (openedRef.current) return;
      try {
        const fw = window.$zoho?.salesiq?.floatwindow;
        if (!fw) return;
        openedRef.current = true;
        clearDelayTimer();
        clearScrollRaf();
        window.removeEventListener('scroll', onScroll);
        if (typeof fw.visible === 'function') fw.visible('show');
        if (typeof fw.open === 'function') fw.open(() => {});
      } catch {
        /* ignore */
      }
    };

    const elapsedOk = () => Date.now() - pageEnteredAtRef.current >= SHOW_AFTER_MS;

    const tryOpen = () => {
      if (!widgetReadyRef.current || openedRef.current) return;
      if (elapsedOk() || scrollDepthPercent() >= SCROLL_OPEN_THRESHOLD_PCT) {
        openChat();
        window.removeEventListener('scroll', onScroll);
      }
    };

    const onScroll = () => {
      if (scrollRafRef.current != null) return;
      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null;
        tryOpen();
      });
    };

    const onWidgetReady = () => {
      if (widgetReadyRef.current) return;
      widgetReadyRef.current = true;
      tryOpen();
      if (!openedRef.current) {
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    };

    const clearPoll = () => {
      if (pollRef.current != null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };

    const cleanup = () => {
      clearPoll();
      clearDelayTimer();
      clearScrollRaf();
      window.removeEventListener('scroll', onScroll);
    };

    delayTimerRef.current = window.setTimeout(() => {
      delayTimerRef.current = null;
      tryOpen();
    }, SHOW_AFTER_MS);

    // Widget script already injected (e.g. client nav from home) — poll for API.
    if (document.getElementById('zsiqscript')) {
      pollRef.current = window.setInterval(() => {
        if (window.$zoho?.salesiq?.floatwindow) {
          clearPoll();
          onWidgetReady();
        }
      }, 200);
      const maxPoll = window.setTimeout(clearPoll, 30000);
      return () => {
        cleanup();
        window.clearTimeout(maxPoll);
      };
    }

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = {
      widgetcode: WIDGET_CODE,
      values: {},
      ready() {
        onWidgetReady();
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

    return cleanup;
  }, []);

  return null;
}
