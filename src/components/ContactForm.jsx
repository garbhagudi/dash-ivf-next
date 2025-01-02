'use client';

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    'Last Name': '',
    Phone: '',
    Email: '',
    Description: 'Values',
    'Lead Source': 'Online',
    'Lead SubSource': 'GarbhaGudi Website',
  });

  const router = useRouter();
  const [utmData, setUtmData] = useState({
    utm_campaign: '',
    utm_source: '',
  });

  useEffect(() => {
    if (router.query) {
      const { utm_campaign, utm_source } = router.query;
      setUtmData({
        utm_campaign: utm_campaign || '',
        utm_source: utm_source || '',
      });
    }
  }, [router.query]);

  console.log('utm check', utmData);

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptchaError, setShowCaptchaError] = useState(false);

  useEffect(() => {
    // Load Google Tag Manager
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5T77DVZ');
    `;
    document.head.appendChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    setShowCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData['Last Name'] || !formData['Phone']) {
      alert('Full Name and Phone cannot be empty.');
      return;
    }

    if (formData['email'] && !validateEmail(formData['email'])) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!captchaVerified) {
      setShowCaptchaError(true);
      return;
    }

    // Submit form to Zoho CRM
    console.log('started');

    e.target.submit();
    console.log('submitted');
  };

  const handleReset = () => {
    setFormData({
      'Last Name': '',
      Phone: '',
      Email: '',
      Description: 'Values',
      'Lead Source': 'Online',
      'Lead SubSource': 'GarbhaGudi Website',
    });
    setCaptchaVerified(false);
  };

  return (
    <div
      id='crmWebToEntityForm'
      className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'
    >
      <form
        action='https://crm.zoho.com/crm/WebToLeadForm'
        name='WebToLeads3505252000085291164'
        method='POST'
        onSubmit={handleSubmit}
        acceptCharset='UTF-8'
      >
        <input
          type='text'
          style={{ display: 'none' }}
          name='xnQsjsdp'
          value='17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2'
        />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input
          type='text'
          style={{ display: 'none' }}
          name='xmIwtLD'
          value='61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdeb'
        />
        <input
          type='text'
          style={{ display: 'none' }}
          name='actionType'
          value='TGVhZHM='
        />
        <input
          type='text'
          style={{ display: 'none' }}
          name='returnURL'
          value='https://garbhagudi-ivf.com/thank-you.html'
        />

        <div className='py-8 text-center font-[B612] text-xl font-bold text-gray-100 lg:text-2xl'>
          Consult our Fertility Experts
        </div>

        <div className='mx-auto space-y-3 px-3'>
          <div className='mx-auto max-w-sm'>
            <input
              type='text'
              id='Last_Name'
              placeholder='Full Name'
              name='Last Name'
              value={formData.lastName}
              onChange={handleInputChange}
              maxLength='80'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
            />
          </div>

          <div className='mx-auto max-w-sm'>
            <input
              type='text'
              id='Phone'
              placeholder='Phone'
              name='Phone'
              value={formData.phone}
              onChange={handleInputChange}
              maxLength='30'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
            />
          </div>

          <div className='mx-auto max-w-sm'>
            <input
              type='text'
              id='Email'
              placeholder='Email'
              name='Email'
              value={formData.email}
              onChange={handleInputChange}
              maxLength='100'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
            />
          </div>
        </div>

        <input type='hidden' name='Description' value={formData.Description} />
        <input
          type='hidden'
          name='Lead Source'
          value={formData['Lead Source']}
        />
        <input
          type='hidden'
          name='LEADCF6'
          value={formData['Lead SubSource']}
        />
        {utmData.utm_campaign && (
          <input type='hidden' name='LEADCF122' value={utmData.utm_campaign} />
        )}

        <div className='zcwf_row flex flex-col items-center justify-center pt-6'>
          <div className='zcwf_col_fld mx-auto flex flex-col items-center justify-center'>
            <ReCAPTCHA
              sitekey='6LegDMIiAAAAAEdpZNW8tk7jSYoTFJu7-1smV3xB'
              onChange={handleCaptchaChange}
            />
            {showCaptchaError && (
              <div className='mt-2 text-sm text-red-500'>
                Please complete the captcha verification.
              </div>
            )}
          </div>
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_fld mt-4 flex items-center justify-center space-x-3'>
            <button
              type='submit'
              className='formsubmit zcwf_button rounded-lg bg-[#ea4b6a] px-3 py-2 font-[nunito] text-base font-bold text-white hover:bg-[#ee6f88] focus:outline-none active:outline-none'
            >
              Submit
            </button>
            <button
              type='button'
              onClick={handleReset}
              className='zcwf_button rounded-lg bg-[#ea4b6a] px-3 py-2 font-[nunito] text-base font-bold text-white hover:bg-[#ee6f88] focus:outline-none active:outline-none'
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
