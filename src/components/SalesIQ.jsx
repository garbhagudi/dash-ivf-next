import { useEffect } from 'react';

const useScript = (url, widgetCode, condition) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !condition) return;

    // Prevent duplicate scripts
    if (document.getElementById('zsiqscript')) return;

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('defer', 'true');
    script.src = url;
    script.id = 'zsiqscript';

    document.body.appendChild(script);

    // Add widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'zsiqwidget';
    document.body.appendChild(widgetDiv);

    // Initialize Zoho SalesIQ
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: widgetCode,
      values: {},
      ready: function () {},
    };

    return () => {
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) existingScript.remove();
      const existingWidget = document.getElementById('zsiqwidget');
      if (existingWidget) existingWidget.remove();
    };
  }, [url, widgetCode, condition]);
};

export default function SalesIQ({ condition }) {
  useScript(
    'https://salesiq.zoho.com/widget',
    '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0',
    condition,
  );

  return null;
}
