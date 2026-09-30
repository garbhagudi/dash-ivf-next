/**
 * Zoho SalesIQ website embed — `wc` query identifies the widget (Zoho portal:
 * Share → Website). Same URL is used on `/landing-next` and site-wide
 * (`components/SalesIQ.jsx`).
 *
 * Override in env if the portal issues a new embed URL:
 *   NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC=https://salesiq.zohopublic.com/widget?wc=…
 */
export const ZOHO_SALESIQ_WIDGET_SRC =
  process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC?.trim() ||
  'https://salesiq.zohopublic.com/widget?wc=siq972f5d7b03057cc80029ab10323f5bbf044b7286b067ba3d6c1e851505d4c958';

/**
 * Zoho auto-opens the chat window on load, which on mobile (<768px) covers the whole
 * screen. Call this BEFORE the widget script is added: it hides the window from the very
 * start (no flash), quietly closes Zoho's internal "open" state, and reveals the window
 * again on the visitor's first tap of the chat bubble. Desktop is left as Zoho has it.
 */
export function holdSalesIqClosedOnMobile() {
  if (typeof window === 'undefined') return;
  if (!window.matchMedia('(max-width: 767px)').matches) return;
  if (document.getElementById('siq-mobile-hold')) return;

  const root = document.documentElement;
  const style = document.createElement('style');
  style.id = 'siq-mobile-hold';
  style.textContent =
    'html.siq-hold #zsiq_chat_wrap{visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:none!important}';
  document.head.appendChild(style);
  root.classList.add('siq-hold');

  let released = false;
  let timer;

  const closeIfOpen = () => {
    const wrap = document.getElementById('zsiq_chat_wrap');
    const fw = window.$zoho?.salesiq?.floatwindow;
    if (wrap?.className.includes('chat-iframe-open') && typeof fw?.close === 'function') {
      fw.close();
    }
  };

  const onTap = (e) => {
    if (!e.target?.closest?.('#zsiq_float')) return;
    closeIfOpen();
    released = true;
    root.classList.remove('siq-hold');
    window.clearInterval(timer);
    document.removeEventListener('pointerdown', onTap, true);
    document.removeEventListener('touchstart', onTap, true);
  };
  document.addEventListener('pointerdown', onTap, true);
  document.addEventListener('touchstart', onTap, true);

  let tries = 0;
  timer = window.setInterval(() => {
    tries += 1;
    if (!released) closeIfOpen();
    if (released || tries > 100) window.clearInterval(timer);
  }, 300);
}
