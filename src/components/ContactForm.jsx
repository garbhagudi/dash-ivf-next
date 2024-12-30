import axios from 'axios';
import React, { useState, useEffect } from 'react';

// https://creator.zoho.com/api/v2/GG CRM Admin/Leads/form/https://crm.zoho.com/crm/org674009382/settings/webform/3505252000130723002/preview?module=Leads

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    lastName: '',
    phone: '',
    email: '',
    description: 'Values',
    leadSource: 'Online',
    leadSubSource: 'GarbhaGudi Website',
    xnQsjsdp:
      '17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2',
    xmIwtLD: '61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdeb',
    actionType: 'TGVhZHM=',
    returnURL: 'http://localhost:3001/thank-you.html',
    ldeskuid: '',
    LDTuvid: '',
    'g-recaptcha-response':
      '03AFcWeA4sNHmeraNGOP9YwhbRe_DLXtKNhWLJ8jRXPixYk4FDSjzLSIdLqnJQV7Xu2FDRZda7LPSU_gqOES0_qvOKb6aLUo45acrWVixhPqZBhYbFqeekwSacIsAAnTzUgFrH3-5isdIeMWXjPs8BwiRZkg4cFB5T3YvDXdPCX_vK10-372xSFx39oRkUOY1fgNgck7ziUHx1a4_l7OsjauC_rrivLYVyQ_PWN_9JNMYxTjI-CIRfcKTiQ6DCENSC0LorM11jKk7d7hXtCvAuTtIgVny024e9eYiwIDXHyxOBJLrBnbLAQ71xgac38cpi139Xe7VKv0seBp6CVx_MCw7kssJcxnpL3yLkmgFoVK_aEOQyI65EMPDvWjCChW4UfY-x1smg3G7uKp_UMGu9ECoOseGxB9Y2r7tSKdLakr57EzVprppfuioJ3rqf9hhFebgjrlpRndWr0-kEPPCmE3vKoW1Zekiv0g9l207VSuwHXm0CaDz3kicb9ymExkS88lXYZfxvmPqpWlSTx40Svo1pZ6NYWeIX4JYOgACBvaQZjJ36KlnxcB8OLi3iKKzHza4BuTJswFtQlpTgUP4cciIPsZ7FXVYYyH5mMGqtW1z_4lM1dZr3FBr823hY5bELOp6UpZRlzClA8UjHs0FpPkTR1BqTZGg1cy3BjWNLhd9aDNquiYWTuouKcgOV5PmT6meXxbsot-BjkFMS4O5dbMNFsgNWOyb5k__Wt-sePpoNFmNlMVMA0sAHuTiGsJvyc6yC8vY1ei_BwQAHBtaaUuJ7cOD9XunrAoo48w-kQg99TgizIxFsTzvrMjRxcGFUmHA-NvEvynp_raiowfajYvlP4N1PXSGTYJvhEbZ9nG1xSlt7D6JUo7mnlpl4rxhZFqrlN7g3dMux',
    te: true,
    wbfIanaFrD:
      '1a2d04c0edfaa2fa255fdd38ff927ec8c3a33a5c3938035bf9e8ffee1e2037ba020bc10f892c307635ef860ab9466524',
    rw: '52aca069f057e866511f1cba61d9c8f074fb9583be025b7962fd699bb74a2dda',
    la: '97c77c5fe11cf425ecd8cd6c405de8754cd01f3db9b4e38bb33f6b755c17eff1',
    eo: 'd34470f0f355fd1d68da392c11ff06fff2839af0c2410b2942e365d0992ce4a8',
    webform_analytics_submission: {
      total_time: 18554,
      field_analytics: [
        { field_name: 'Last Name', correction: 0, total_time: 4480 },
        { field_name: 'Phone', correction: 0, total_time: 3161 },
        { field_name: 'Email', correction: 0, total_time: 6192 },
      ],
      pwXsmCp: 'http://localhost:3001',
    },
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [isCaptchaLoaded, setIsCaptchaLoaded] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsCaptchaLoaded(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
    setCaptchaError(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const leadData = {
      Last_Name: formValues.lastName,
      Email: formValues.email,
      Mobile: formValues.phone,
    };
    // const leadData = {
    //   First_Name: 'John',
    //   Last_Name: 'Doe',
    //   Email: 'john.doe@example.com',
    //   Mobile: '1234567890',
    // };

    const accessToken =
      '1000.b9206cc79bc24f2b127b4f7ff04f0776.c0c6a92c5519b1261ab022be0f564059';
    const apiUrl = 'https://www.zohoapis.com/crm/v2/WebToLeadForm';

    try {
      // Create FormData
      const formData = new FormData();
      Object.entries(leadData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Fetch request
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message}`);
      }

      const responseData = await response.json();
      console.log('Record created successfully:', responseData);
    } catch (error) {
      console.error('Error creating record:', error.message || error);
    }
  };

  const checkMandatory = () => {
    const { lastName, phone } = formValues;
    if (!lastName || !phone) {
      alert('Full Name and Phone cannot be empty.');
      return false;
    }
    if (!validateEmail(formValues.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!captchaVerified) {
      setCaptchaError(true);
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const atpos = email.indexOf('@');
    const dotpos = email.lastIndexOf('.');
    return atpos > 0 && dotpos > atpos + 1 && dotpos + 2 < email.length;
  };

  return (
    <div className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'>
      <div className='py-8 text-center font-[B612] text-xl font-bold text-gray-100 lg:text-2xl'>
        Consult our Fertility Experts
      </div>
      <form onSubmit={handleSubmit} acceptCharset='UTF-8'>
        <input
          type='hidden'
          name='returnURL'
          value='https://garbhagudi-ivf.com/thank-you.html'
        />
        <input type='hidden' id='ldeskuid' name='ldeskuid' />
        <input type='hidden' id='LDTuvid' name='LDTuvid' />

        <div className='mx-auto space-y-3 px-3'>
          <div className='mx-auto max-w-sm'>
            <input
              type='text'
              id='Last_Name'
              placeholder='Full Name'
              name='lastName'
              maxLength='80'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>

          <div className='mx-auto max-w-sm'>
            <input
              type='text'
              id='Phone'
              placeholder='Phone'
              name='phone'
              maxLength='30'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>

          <div className='mx-auto max-w-sm'>
            <input
              type='email'
              id='Email'
              placeholder='Email'
              name='email'
              maxLength='100'
              className='mt-2 w-full rounded-md border border-[#ea4b6a] px-3 py-1 font-[nunito] text-base focus:border-[#ea4b6a] focus:outline-none focus:ring-2 focus:ring-[#ea4b6a] active:outline-none lg:mt-0'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='zcwf_row wfrm_fld_dpNn hidden'>
          <div
            className='zcwf_col_lab'
            style={{ fontSize: '15px', fontFamily: 'Verdana' }}
          >
            <label htmlFor='Description'>Description</label>
          </div>
          <div className='zcwf_col_fld'>
            <input
              id='Description'
              name='description'
              value={formValues.description}
              onChange={handleChange}
              placeholder='Values'
            />
          </div>
        </div>

        <div className='zcwf_row wfrm_fld_dpNn hidden'>
          <div
            className='zcwf_col_lab'
            style={{ fontSize: '15px', fontFamily: 'Verdana' }}
          >
            <label htmlFor='Lead_Source'>Lead Source</label>
          </div>
          <div className='zcwf_col_fld hidden'>
            <select
              className='zcwf_col_fld_slt'
              id='Lead_Source'
              name='leadSource'
              value={formValues.leadSource}
              onChange={handleChange}
            >
              <option value='-None-'>-None-</option>
              <option value='Online'>Online</option>
              <option value='Media'>Media</option>
              <option value='Listing'>Listing</option>
              <option value='Referred'>Referral</option>
              <option value='Camp'>Camp &amp; Events</option>
              <option value='Sponsor'>Display</option>
            </select>
          </div>
        </div>

        <div className='zcwf_row wfrm_fld_dpNn hidden'>
          <div
            className='zcwf_col_lab'
            style={{ fontSize: '15px', fontFamily: 'Verdana' }}
          >
            <label htmlFor='LEADCF6'>Lead Sub Source</label>
          </div>
          <div className='zcwf_col_fld'>
            <select
              className='zcwf_col_fld_slt'
              id='LEADCF6'
              name='leadSubSource'
              value={formValues.leadSubSource}
              onChange={handleChange}
            >
              <option value='-None-'>-None-</option>
              <option value='GarbhaGudi&#x20;Website'>
                GarbhaGudi Website
              </option>
              <option value='Bagepalli'>Bagepalli</option>
              <option value='Youtube'>Youtube</option>
              <option value='Geo&#x20;Ads'>
                Geo Ads &#x28;Ads Media network&#x29;
              </option>
              <option value='Affiliate&#x20;Marketing'>
                Affiliate Marketing
              </option>
              <option value='IndiaMART'>IndiaMART</option>
              <option value='TeleConsult&#x20;Tool'>TeleConsult Tool</option>
              <option value='Medobal'>Medobal</option>
              <option value='Live&#x20;events&#x20;&amp;&#x20;Webinar'>
                Live events &amp; Webinar
              </option>
              <option value='Vaidam'>Vaidam</option>
              <option value='Linkedin'>Linkedin</option>
              <option value='Picky&#x20;Assist'>Picky Assist</option>
              <option value='Kagglipura&#x20;Camp'>Kagglipura Camp</option>
              <option value='Ferticare'>Ferticare</option>
              <option value='Zealthy'>Zealthy</option>
              <option value='Facebook'>Facebook</option>
              <option value='Live&#x20;Chat'>Live Chat</option>
              <option value='Punyahealth'>Punyahealth</option>
              <option value='Healthcare&#x20;365'>Healthcare 365</option>
              <option value='Old&#x20;Camps'>Old Camps</option>
              <option value='Mfine'>Mfine</option>
              <option value='Google'>Google</option>
              <option value='Tiptur&#x20;OPD'>Tiptur OPD</option>
              <option value='Foore'>Foore</option>
              <option value='Instagram'>Instagram</option>
              <option value='Chitradurga&#x20;camp'>Chitradurga camp</option>
              <option value='Doctor&#x20;4&#x20;Africa'>Doctor 4 Africa</option>
              <option value='Television'>Television</option>
              <option value='Placidway'>Placidway</option>
              <option value='Radio'>Radio</option>
              <option value='Theater&#x20;Adds'>Theater Adds</option>
              <option value='News&#x20;paper'>News paper</option>
              <option value='Ziffy'>Ziffy</option>
              <option value='Name&#x20;boards'>Name boards</option>
              <option value='Quora'>Quora</option>
              <option value='Practo'>Practo</option>
              <option value='Just&#x20;Dial'>Just Dial</option>
              <option value='Clinic&#x20;spot'>Clinic spot</option>
              <option value='Sira&#x20;Thumkur'>Sira</option>
              <option value='Whatclinic'>Whatclinic</option>
              <option value='Ovu'>Ovu</option>
              <option value='EllaWomen'>EllaWomen</option>
              <option value='Doctor&#x20;Referral'>Doctor Referral</option>
              <option value='Kunigal&#x20;OPD'>Kunigal OPD</option>
              <option value='GarbhaGudi&#x20;Employee'>
                GarbhaGudi Employee
              </option>
              <option value='Friend&#x20;&amp;&#x20;Family'>
                Friend &amp; Family
              </option>
              <option value='Camp&#x20;&#x20;-&#x20;Kanakapura'>
                Camp - Kanakapura
              </option>
              <option value='KONANKUNTE&#x20;CAMP'>KONANKUNTE CAMP</option>
              <option value='Cure&#x20;consult'>Cure consult</option>
              <option value='ClinicSpots'>ClinicSpots</option>
              <option value='lybrate'>lybrate</option>
              <option value='Doc&#x20;prime'>Doc prime</option>
              <option value='Ellie&#x20;chat'>Ellie chat</option>
              <option value='Future&#x20;Care'>Future Care</option>
              <option value='ExpertChikitsa'>ExpertChikitsa</option>
              <option value='Others'>Others</option>
              <option value='Elite&#x20;Hospital'>Elite Hospital</option>
              <option value='Shanthinilaya&#x20;Hospital'>
                Shanthinilaya Hospital
              </option>
              <option value='Kanakapura'>Kanakapura</option>
              <option value='Harohalli'>Harohalli</option>
              <option value='Hoardings'>Hoardings</option>
              <option value='Display&#x20;vans'>Display vans</option>
              <option value='Banners'>Banners</option>
              <option value='Wall&#x20;paintings'>Wall paintings</option>
              <option value='Bus&#x20;advertisements'>
                Bus advertisements
              </option>
            </select>
          </div>
        </div>

        <div className='zcwf_row flex flex-col items-center justify-center pt-6'>
          <div className='zcwf_col_fld mx-auto flex flex-col items-center justify-center'>
            {isCaptchaLoaded && (
              <div
                className='g-recaptcha'
                data-sitekey='6LegDMIiAAAAAEdpZNW8tk7jSYoTFJu7-1smV3xB'
                data-theme='light'
                data-callback={handleCaptchaVerify}
                captcha-verified='true'
              ></div>
            )}
            {captchaError && (
              <div style={{ fontSize: '12px', color: 'red' }}>
                Captcha validation failed. If you are not a robot then please
                try again.
              </div>
            )}
          </div>
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_fld flex items-center justify-center space-x-3'>
            <input
              type='submit'
              id='formsubmit'
              className='formsubmit zcwf_button rounded-lg bg-[#ea4b6a] px-3 py-2 font-[nunito] text-base font-bold text-white hover:bg-[#ee6f88] focus:outline-none active:outline-none'
              value='Submit'
            />
            <input
              type='reset'
              className='zcwf_button rounded-lg bg-[#ea4b6a] px-3 py-2 font-[nunito] text-base font-bold text-white hover:bg-[#ee6f88] focus:outline-none active:outline-none'
              value='Reset'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
