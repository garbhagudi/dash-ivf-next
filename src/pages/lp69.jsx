import React from 'react';
import Banner from 'sections/lp-catalyst/banner';
import Navbar from 'sections/lp-catalyst/nav';
import dynamic from 'next/dynamic';
const OtherServices = dynamic(() => import('sections/lp-catalyst/main'));
const Testimonials = dynamic(() => import('sections/lp-catalyst/testimonial'));
import Packages from 'sections/lp-catalyst/pricing';
import FeaturesBlocks from 'sections/about-us/featuresBlock';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <section id='home'>
        <Banner />
      </section>
      <section id='why-garbhagudi' className='bg-gray-200'>
        <OtherServices />
      </section>
      <section id='our-success' className='bg-gray-200'>
        <Packages />
      </section>
      <section id='testimonials' className='bg-gray-200'>
        <Testimonials />
      </section>
      <section id='awards' className='bg-gray-50'>
        <FeaturesBlocks />
      </section>
      {/* <section id='subscribe' className='bg-white mt-0 sm:mt-6'>
        <SubscribeUs />
      </section> */}
    </div>
  );
};

export default IndexPage;
