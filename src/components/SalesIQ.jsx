// import { Fragment, useEffect } from 'react';

// //Zoho Sales Iq Script:
// const useScript = (url, widgetCode) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.setAttribute('type', 'text/javascript');
//     script.setAttribute('defer', 'true');

//     let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

//     script.appendChild(document.createTextNode(code));
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url, widgetCode]);
// };

// export default function SalesIQ() {
//   return (
//     <Fragment>
//       {useScript(
//         'https://salesiq.zoho.com/widget',
//         '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0',
//       )}
//     </Fragment>
//   );
// }

import { useEffect, useRef } from 'react';

export function useZohoSalesIQ() {
  const loadedRef = useRef(false);

  useEffect(() => {
    const loadZoho = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;

      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = {
        widgetcode:
          '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0',
        values: {},
        ready: function () {},
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
    };

    window.addEventListener('scroll', loadZoho, { once: true });
    window.addEventListener('mousemove', loadZoho, { once: true });
    window.addEventListener('touchstart', loadZoho, { once: true });

    return () => {
      window.removeEventListener('scroll', loadZoho);
      window.removeEventListener('mousemove', loadZoho);
      window.removeEventListener('touchstart', loadZoho);
    };
  }, []);
}

export default function SalesIQ() {
  useZohoSalesIQ();
  return null;
}
