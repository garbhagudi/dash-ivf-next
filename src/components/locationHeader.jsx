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
            <p>
              GarbhaGudi is a place where dreams come alive, hopes never fade,
              and possibilities never end. We strive tirelessly to assist you to
              treasure the golden moment of holding your little bundles of joy.
            </p>
            <p className="mt-4">
              You no longer need to go long distances for fertility treatments!
              GarbhaGudi now has five strategically positioned branches in
              Bengaluru and wants to expand to additional places in the near
              future.
            </p>
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
