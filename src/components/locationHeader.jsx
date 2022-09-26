import Script from "next/script";
import React from "react";

const LocationHeader = ({ branch, mapLink, address, phone }) => {
  return (
    <div>
      <div className="relative bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.jpg')] h-48 bg-bottom bg-cover flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <h1 className="relative text-center text-white text-3xl md:text-4xl font-bold font-heading">
          {branch}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center px-1 justify-center">
            <iframe
              src={mapLink}
              allowfullscreen="True"
              loading="lazy"
              className="aspect-square w-full sm:w-1/2 lg:w-11/12 rounded-xl border-2 "
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center px-3 lg:px-10 pt-10 lg:pt-0">
            GarbhaGudi is a place where dreams come alive, hopes never fade, and
            possibilities never end. We ceaselessly work to help you cherish the
            golden moment of holding your little bundles of joy.
            <br />
            <br />
            Worry no more to travel far distances for your fertlity Treatments!
            GarbhaGudi has five strategically located branches in Bengaluru and
            plans to expand to other areas soon.
            <div className="pt-4 flex flex-col space-y-4">
              <div>
                Phone:{" "}
                <a href={`tel:${phone}`} className="text-brandPink font-bold">
                  {phone}
                </a>
              </div>
              <div>
                Address : <span className="">{address}</span>
              </div>
              <div>
                E mail:{" "}
                <a
                  href="mailto:dreams@garbhagudi.com"
                  className="text-brandPink font-bold"
                >
                  dreams@garbhagudi.com
                </a>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643287945/Banner/1200x500_4Directors_nqn9eg.jpg"
              alt="image"
              className="h-40 object-cover object-center rounded-xl mt-8"
            />
            {/* <div>
              <Script
                strategy="afterInteractive"
                id="form"
                dangerouslySetInnerHTML={{
                  __html: `function wfa_pstMesgFrmFom (evt){if(evt.origin === 'https://crm.zoho.com'|| evt.origin === 'https://crm.zohopublic.com'){var loc_obj=JSON.stringify({ origin:window.location.origin, pathname:window.location.pathname, search:window.location.search, hash:window.location.hash}); evt.source.postMessage(('prnt_wnd_pg_lc_rc_frm_prwindow_'+loc_obj), evt.origin);}}window.addEventListener('message', wfa_pstMesgFrmFom, false);`,
                }}
              />
              <iframe
                className="w-screen max-w-xl h-80"
                src="https://crm.zoho.com/crm/WebFormServeServlet?rid=61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdebgid17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-center py-10 text-2xl md:text-4xl font-heading font-bold">
        Fertility Experts at {branch}
      </div>
    </div>
  );
};

export default LocationHeader;
