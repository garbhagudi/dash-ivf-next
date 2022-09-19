import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div>
      <main className="flex-auto flex items-center justify-center text-center text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl sm:text-4.5xl text-gray-800 font-extrabold mb-4 font-heading">
            Thank you!
          </h1>
          <p className="mb-8 max-w-lg mx-auto text-gray-600 font-dm">
            Our representative will get in touch with you soon! Feel free to
            browse our website a little more to get more information or use the
            live chat option to speak to our representatives instantly.
          </p>
          <Link href="/">
            <a className="inline-flex justify-center w-full max-w-[8rem] font-dm bg-brandPink text-white rounded-md text-sm font-semibold py-3 px-4 hover:bg-brandPink4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandPink4 focus-visible:ring-offset-2 focus-visible:ring-offset-brandPink">
              Home
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
