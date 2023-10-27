import React from 'react';
import Banner from 'sections/lp-catalyst/banner';
import Navbar from 'sections/lp-catalyst/nav';
import dynamic from 'next/dynamic';
import Faq from 'sections/female-infertility/faq';
import SubscribeUs from 'sections/lp-catalyst/subscribe-us';
import Packages from 'sections/lp-catalyst/pricing';
const OtherServices = dynamic(() => import('sections/lp-catalyst/main'));
const Testimonials = dynamic(() => import('sections/lp-catalyst/testimonial'));

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <section id='home'>
        <Banner />
      </section>
      <section id='why-garbhagudi' className='min-h-screen bg-white'>
        <OtherServices />
      </section>
      <section id='ivf-packages' className='min-h-screen bg-gray-200'>
        <Packages />
      </section>
      <section id='testimonials' className='bg-gray-200 pt-12'>
        <Testimonials />
      </section>
      <section id='faq' className='min-h-screen bg-gray-50'>
        <Faq />
      </section>
      <section id='subscribe' className='bg-white mt-0 sm:mt-6'>
        <SubscribeUs />
      </section>
    </div>
  );
};

export default IndexPage;
