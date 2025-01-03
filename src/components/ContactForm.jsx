'use client';

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = ({ title }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    'Last Name': '',
    Phone: '',
    Email: '',
    'Lead Source': 'Online',
    'Lead SubSource': 'GarbhaGudi Website',
    'UTM Campign': '',
  });

  useEffect(() => {
    if (router.query) {
      const { utm_campaign } = router.query;
      setFormData({ 'UTM Campign': utm_campaign });
    }
  }, [router.query]);
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

    // Create and append the analytics script
    const analyticScript = document.createElement('script');
    analyticScript.id = 'wf_anal';
    analyticScript.src =
      'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=10db38b50d3143e27965b364398348ee8b080fb27f8bec9e24f75f0df210fcba7b970dc67600a6b7e0c3ffd6eaf6f9edgidbcf773dae8749b004d3dc29f0f1fb9714a996ba17d6a3770df222cbc5215fb3bgid7dc5ab9953badc7311b39ecc151ab45d0baf96bccc2ed64a7295d2a5fdbb6277gidc08b3680fc8dc3545c5c03fae82c543a364403e35591e428003c79024185eac3&tw=6c80c7c22e385cf5f7474eb6fb1ce0b3506093530f8ea42aeb6c544afeef0dbb';

    analyticScript.async = true;

    // Only append if the script doesn't already exist
    if (!document.getElementById('wf_anal')) {
      document.body.appendChild(analyticScript);
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('wf_anal');
      if (existingScript) {
        existingScript.remove();
      }
    };
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

    e.target.submit();
  };

  const handleReset = () => {
    setFormData({});
    setCaptchaVerified(false);
    setShowCaptchaError(false);
  };

  return (
    <div
      id='crmWebToEntityForm'
      className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'
    >
      <form
        action='https://crm.zoho.com/crm/WebToLeadForm'
        name='WebToLeads3505252000084677079'
        method='POST'
        onSubmit={handleSubmit}
        acceptCharset='UTF-8'
      >
        <input
          type='text'
          style={{ display: 'none' }}
          name='xnQsjsdp'
          value='1c4d025c73947e5aba8a8e018b4a05728a8276239bd940adac43b4a4865eb7d2'
        />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input
          type='text'
          style={{ display: 'none' }}
          name='xmIwtLD'
          value='665f0f2ebcb43dfefb765b299d547459aeef5f93d35b4495ecae51f68620b55a6240e6000d0ca159ed5401596766b76b'
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
        <input
          type='text'
          style={{ display: 'none' }}
          id='ldeskuid'
          name='ldeskuid'
        ></input>
        <input
          type='text'
          style={{ display: 'none' }}
          id='LDTuvid'
          name='LDTuvid'
        ></input>

        <div className='pb-12 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
          {title}
        </div>

        <div className='mx-auto flex flex-col space-y-2 px-3'>
          <div className='mx-auto max-w-sm rounded-md'>
            <label
              htmlFor='Last Name'
              className='flex items-center justify-start'
            >
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Full Name
              </span>
              <input
                type='text'
                id='Last_Name'
                placeholder='Enter full name'
                name='Last Name'
                value={formData['Last Name']}
                onChange={handleInputChange}
                maxLength='80'
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Phone' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Phone
              </span>
              <input
                type='text'
                id='Phone'
                placeholder='Enter phone number'
                name='Phone'
                value={formData['Phone']}
                onChange={handleInputChange}
                maxLength='30'
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Email' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Email
              </span>
              <input
                type='email'
                id='Email'
                placeholder='Enter email'
                name='Email'
                value={formData['Email']}
                onChange={handleInputChange}
                maxLength='100'
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
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
        <input type='hidden' name='LEADCF122' value={formData['UTM Campign']} />

        <div className='zcwf_row relative flex flex-col items-center justify-center pt-6'>
          <div className='zcwf_col_fld mx-auto flex flex-col items-center justify-center'>
            <ReCAPTCHA
              sitekey='6LegDMIiAAAAAEdpZNW8tk7jSYoTFJu7-1smV3xB'
              onChange={handleCaptchaChange}
            />
            {showCaptchaError && (
              <div className='absolute -bottom-5 text-sm text-red-500'>
                Please complete the captcha verification.
              </div>
            )}
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_fld mb-6 mt-8 flex items-center justify-center space-x-4'>
            <button
              type='submit'
              className='rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88] focus:outline-none focus:ring focus:ring-pink-300 md:w-auto lg:w-28'
            >
              Submit
            </button>

            <button
              type='reset'
              onClick={handleReset}
              className='rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88] focus:outline-none focus:ring focus:ring-pink-300 md:w-auto lg:w-28'
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
