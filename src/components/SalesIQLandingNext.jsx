import { useEffect, useRef } from 'react';

import { ZOHO_SALESIQ_WIDGET_SRC } from 'data/zohoSalesIqWidget';

/**
 * Official Zoho SalesIQ embed (Share → Website) — see `data/zohoSalesIqWidget.js`.
 * Auto-open behaviour is only in this component (`/landing-next`).
 */

/** User has read a meaningful portion of the page. */
const SCROLL_OPEN_THRESHOLD_PCT = 30;

/** Minimum time on page before we auto-show the widget (engagement + load). */
const SHOW_AFTER_MS = 5000;

/** Max wait for `floatwindow` after Zoho fires `ready` (it often attaches one tick later). */
const FLOAT_WINDOW_WAIT_MS = 20000;

/* Launcher ids only — do not include full chat window ids or we break the open panel. */
const ZOHO_FLOAT_IDS = ['zsiq_float', 'zsiq_floatwindow', 'zsiq_float_window'];

const ATTR = 'data-gg-zoho-sticky-offset';

/** Mobile launcher offset — Zoho uses `.siq_bR` on `.zsiq_floatmain`; 100px clears the sticky CTA. */
const LANDING_NEXT_MOBILE_SALESIQ_BOTTOM = '100px';

function isMobileLandingNextSticky() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
}

/** Do not offset the full-size chat panel when it is open. */
function isSalesIqLauncherHost(el) {
  const r = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (r.width >= vw * 0.9 && r.height >= vh * 0.45) return false;
  return true;
}

function clearAllZohoStickyOffsets() {
  document.querySelectorAll(`[${ATTR}]`).forEach((el) => {
    el.style.removeProperty('bottom');
    el.style.removeProperty('margin-bottom');
    el.style.removeProperty('margin-right');
    el.style.removeProperty('transform');
    el.removeAttribute(ATTR);
  });
  ZOHO_FLOAT_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.removeProperty('bottom');
      el.style.removeProperty('margin-bottom');
      el.style.removeProperty('margin-right');
      el.style.removeProperty('transform');
    }
  });
}

/** SalesIQ float: small fixed chip bottom-right (not full-width sticky/footer). */
function isLikelySalesIQLauncher(el) {
  const st = getComputedStyle(el);
  if (st.position !== 'fixed') return false;
  const r = el.getBoundingClientRect();
  if (!r.width || !r.height) return false;
  /* Exclude full-width sticky/footer; allow slightly wider Zoho wrappers. */
  if (r.width > 360 || r.height > 320) return false;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const right = parseFloat(st.right);
  const bottom = parseFloat(st.bottom);
  const left = parseFloat(st.left);
  /* Bottom-right launcher: CSS right/bottom, or visually in the bottom-right corner. */
  const inBottomRightQuadrant =
    r.left + r.width > vw * 0.52 && r.top + r.height > vh * 0.65;
  const anchoredRight =
    (Number.isFinite(right) && right <= 260) ||
    (Number.isFinite(left) && left > vw * 0.35) ||
    inBottomRightQuadrant;
  if (!anchoredRight) return false;
  if (Number.isFinite(bottom) && bottom > 380) return false;
  return true;
}

function isZohoSalesIqIframeSrc(src) {
  const s = (src || '').toLowerCase();
  return (
    s.includes('salesiq') ||
    s.includes('zoho') ||
    s.includes('zsiq') ||
    s.includes('siq.zoho')
  );
}

/** Zoho often renders the launcher as a small fixed iframe (or inside a small fixed wrapper). */
function collectZohoSalesIqIframes(out) {
  document.querySelectorAll('iframe').forEach((iframe) => {
    if (!isZohoSalesIqIframeSrc(iframe.getAttribute('src'))) return;
    const r = iframe.getBoundingClientRect();
    const st = getComputedStyle(iframe);
    /* Tiny embed = almost always the launcher chip (even if `position: absolute` inside a fixed host). */
    if (r.width > 0 && r.height > 0 && r.width <= 140 && r.height <= 140) {
      out.add(iframe);
    }
    if (st.position === 'fixed' && r.width <= 280 && r.height <= 280) {
      out.add(iframe);
    }
    let p = iframe.parentElement;
    for (let i = 0; i < 14 && p && p !== document.body; i += 1) {
      const cs = getComputedStyle(p);
      const br = p.getBoundingClientRect();
      if (
        cs.position === 'fixed' &&
        br.width > 0 &&
        br.height > 0 &&
        br.width <= 360 &&
        br.height <= 320
      ) {
        out.add(p);
        break;
      }
      p = p.parentElement;
    }
  });
}

function collectFromShadowRoot(root, out, depth = 0) {
  if (!root || depth > 8) return;
  try {
    root.querySelectorAll('*').forEach((node) => {
      if (node.shadowRoot) collectFromShadowRoot(node.shadowRoot, out, depth + 1);
    });
    root.querySelectorAll('*').forEach((node) => {
      if (isLikelySalesIQLauncher(node)) out.add(node);
    });
  } catch {
    /* cross-origin shadow */
  }
}

function collectZohoLauncherElements() {
  const out = new Set();

  document.querySelectorAll('.zsiq_floatmain.siq_bR').forEach((el) => {
    if (isSalesIqLauncherHost(el)) out.add(el);
  });

  ZOHO_FLOAT_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el && isSalesIqLauncherHost(el)) out.add(el);
  });

  const host = document.getElementById('zsiqwidget');
  if (host) {
    host.querySelectorAll('*').forEach((node) => {
      if (isLikelySalesIQLauncher(node)) out.add(node);
      if (node.shadowRoot) collectFromShadowRoot(node.shadowRoot, out, 0);
    });
  }

  collectZohoSalesIqIframes(out);

  return out;
}

function syncZohoFloatAboveLandingSticky() {
  /* This component only mounts on `/landing-next`; offer-sticky class was easy to miss vs Zoho timing. */
  if (!isMobileLandingNextSticky()) {
    clearAllZohoStickyOffsets();
    return;
  }

  const next = collectZohoLauncherElements();
  document.querySelectorAll(`[${ATTR}]`).forEach((el) => {
    if (!next.has(el)) {
      el.style.removeProperty('bottom');
      el.style.removeProperty('margin-bottom');
      el.style.removeProperty('margin-right');
      el.style.removeProperty('transform');
      el.removeAttribute(ATTR);
    }
  });

  next.forEach((el) => {
    try {
      el.style.setProperty('bottom', LANDING_NEXT_MOBILE_SALESIQ_BOTTOM, 'important');
      el.style.setProperty('margin-right', '10px', 'important');
      el.setAttribute(ATTR, '1');
    } catch {
      /* ignore */
    }
  });
}

function scrollDepthPercent() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  if (scrollable <= 0) return 100;
  const top = window.scrollY ?? doc.scrollTop;
  return (top / scrollable) * 100;
}

function getSalesIqFloatWindow() {
  return window.$zoho?.salesiq?.floatwindow;
}

/**
 * Zoho often calls `salesiq.ready` before `floatwindow` is attached. Wait
 * until the API object exists so `open` / `visible` are not no-ops.
 */
function waitForFloatWindow(maxMs, onFound) {
  const start = Date.now();
  const id = window.setInterval(() => {
    const fw = getSalesIqFloatWindow();
    if (
      fw &&
      (typeof fw.open === 'function' || typeof fw.visible === 'function')
    ) {
      window.clearInterval(id);
      onFound(fw);
    } else if (Date.now() - start > maxMs) {
      window.clearInterval(id);
      onFound(null);
    }
  }, 50);
  return () => window.clearInterval(id);
}

/** Last resort: Zoho sometimes only exposes the launcher as a DOM chip. */
function tryClickSalesIqLauncher() {
  for (const id of ZOHO_FLOAT_IDS) {
    const el = document.getElementById(id);
    if (el && typeof el.click === 'function') {
      try {
        el.click();
        return true;
      } catch {
        /* ignore */
      }
    }
  }
  const chip = document.querySelector('.zsiq_floatmain.siq_bR');
  if (chip && typeof chip.click === 'function') {
    try {
      chip.click();
      return true;
    } catch {
      /* ignore */
    }
  }
  return false;
}

/**
 * Zoho SalesIQ for `/landing-next` only: load on mount, then show/open the float
 * once the widget is ready and either (a) ~5s have passed or (b) user scrolled ~30%.
 */
export default function SalesIQLandingNext() {
  const pollRef = useRef(null);
  const widgetReadyRef = useRef(false);
  const openedRef = useRef(false);
  const pageEnteredAtRef = useRef(0);
  const delayTimerRef = useRef(null);
  const scrollRafRef = useRef(null);
  const moRef = useRef(null);
  const moDebounceRef = useRef(null);
  const floatWaitClearRef = useRef(null);

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

    const clearFloatWait = () => {
      if (typeof floatWaitClearRef.current === 'function') {
        floatWaitClearRef.current();
        floatWaitClearRef.current = null;
      }
    };

    const openChat = () => {
      if (openedRef.current) return;
      const fw = getSalesIqFloatWindow();
      let didSomething = false;

      if (
        fw &&
        (typeof fw.open === 'function' || typeof fw.visible === 'function')
      ) {
        try {
          /* Zoho docs: `.open()` is the primary API; `visible('show')` helps when
           * the embed only reveals the launcher first. */
          if (typeof fw.open === 'function') {
            fw.open(() => {});
            didSomething = true;
          }
          if (typeof fw.visible === 'function') {
            fw.visible('show');
            didSomething = true;
          }
        } catch {
          /* ignore */
        }
      }

      if (!didSomething && tryClickSalesIqLauncher()) {
        didSomething = true;
      }

      if (!didSomething) return;

      openedRef.current = true;
      clearDelayTimer();
      clearScrollRaf();
      window.removeEventListener('scroll', onScroll);
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

    const markWidgetReady = () => {
      if (widgetReadyRef.current) return;
      widgetReadyRef.current = true;
      syncZohoFloatAboveLandingSticky();
      tryOpen();
      if (!openedRef.current) {
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    };

    const onWidgetReady = () => {
      if (widgetReadyRef.current) return;
      clearFloatWait();
      floatWaitClearRef.current = waitForFloatWindow(FLOAT_WINDOW_WAIT_MS, () => {
        floatWaitClearRef.current = null;
        markWidgetReady();
      });
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
      clearFloatWait();
      window.removeEventListener('scroll', onScroll);
      if (moDebounceRef.current != null) {
        window.clearTimeout(moDebounceRef.current);
        moDebounceRef.current = null;
      }
      if (moRef.current) {
        moRef.current.disconnect();
        moRef.current = null;
      }
      clearAllZohoStickyOffsets();
    };

    delayTimerRef.current = window.setTimeout(() => {
      delayTimerRef.current = null;
      tryOpen();
    }, SHOW_AFTER_MS);

    // Widget script already injected (e.g. client nav from home) — poll for API.
    const scheduleMoSync = () => {
      if (moDebounceRef.current != null) window.clearTimeout(moDebounceRef.current);
      moDebounceRef.current = window.setTimeout(() => {
        moDebounceRef.current = null;
        syncZohoFloatAboveLandingSticky();
      }, 100);
    };

    if (document.getElementById('zsiqscript')) {
      pollRef.current = window.setInterval(() => {
        const fw = getSalesIqFloatWindow();
        if (
          fw &&
          (typeof fw.open === 'function' || typeof fw.visible === 'function')
        ) {
          clearPoll();
          clearFloatWait();
          markWidgetReady();
        }
      }, 200);
      const mo = new MutationObserver(scheduleMoSync);
      mo.observe(document.body, { childList: true, subtree: true });
      moRef.current = mo;
      const maxPoll = window.setTimeout(clearPoll, 30000);
      return () => {
        window.clearTimeout(maxPoll);
        cleanup();
      };
    }

    /* Match Zoho's official bootstrap (same as inline snippet before #zsiqscript). */
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };
    window.$zoho.salesiq.values = window.$zoho.salesiq.values || {};
    const prevReady = window.$zoho.salesiq.ready;
    window.$zoho.salesiq.ready = function salesiqReadyLandingNext(embedinfo) {
      if (typeof prevReady === 'function') {
        try {
          prevReady.call(this, embedinfo);
        } catch {
          /* ignore */
        }
      }
      onWidgetReady();
    };

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

    const mo = new MutationObserver(scheduleMoSync);
    mo.observe(document.body, { childList: true, subtree: true });
    moRef.current = mo;

    return cleanup;
  }, []);

  /** Keep SalesIQ launcher above the sticky bar (Zoho re-applies inline styles often). */
  useEffect(() => {
    let rafId = 0;
    let frames = 0;
    let burstStop = false;
    const burst = () => {
      if (burstStop) return;
      syncZohoFloatAboveLandingSticky();
      frames += 1;
      if (frames < 300) rafId = window.requestAnimationFrame(burst);
    };
    rafId = window.requestAnimationFrame(burst);

    const id = window.setInterval(syncZohoFloatAboveLandingSticky, 120);
    window.addEventListener('resize', syncZohoFloatAboveLandingSticky);
    return () => {
      burstStop = true;
      window.cancelAnimationFrame(rafId);
      window.clearInterval(id);
      window.removeEventListener('resize', syncZohoFloatAboveLandingSticky);
      clearAllZohoStickyOffsets();
    };
  }, []);

  return null;
}
