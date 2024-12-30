import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    lastName: '',
    phone: '',
    email: '',
    description: 'Values',
    leadSource: 'Online',
    leadSubSource: 'GarbhaGudi Website',
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

    // if (!checkMandatory()) return;

    // Send the form data to the server
    // fetch('https://crm.zoho.com/crm/WebToLeadForm', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('Form submitted successfully');
    //       // Handle success (e.g., show a success message)
    //     } else {
    //       console.error('Form submission failed');
    //       // Handle error (e.g., show an error message)
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     // Handle network error
    //   });

    // const ZOHO_API_URL = 'https://www.zohoapis.com/crm/v2/Leads';
    // const accessToken = process.env.NEXT_ACCESS_TOKEN;

    // // console.log(ZOHO_API_URL, accessToken, formValues);

    // try {
    //   const response = await fetch(ZOHO_API_URL, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer 1000.4b66b8d29e3d6e6fa663a28b9a92f716.0eb0c70dfd4bd8b00519211734d6acca`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ data: [formValues] }),
    //   });
    //   console.log(response);

    //   if (!response.ok) {
    //     // Handle HTTP errors
    //     const errorData = await response.json();
    //     throw new Error(
    //       `Error creating lead: ${response.status} ${response.statusText}, ${JSON.stringify(
    //         errorData,
    //       )}`,
    //     );
    //   }

    //   const result = await response.json();
    //   console.log('Lead created successfully:', result);
    //   return result;
    // } catch (error) {
    //   console.error('Error creating lead:', error.message);
    // }

    // Function to get access token
    const getAccessToken = async () => {
      const url = 'https://accounts.zoho.com/oauth/v2/token';
      const params = new URLSearchParams({
        client_id: '1000.1NXDSVHWUSWV1BVHBEVXU1QMZBZATH', // Your Zoho client ID
        client_secret: '1451825b7e7ba454bb1697e81bdf2491f1066bf6d6', // Your Zoho client secret
        grant_type: 'authorization_code', // Grant type for client credentials flow
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const data = await response.json();
        console.log('1- access token', data);

        if (response.ok) {
          return data.access_token; // Return the access token
        } else {
          throw new Error(
            data.error_description || 'Failed to get access token',
          );
        }
      } catch (error) {
        console.error('Error obtaining access token:', error);
        throw error;
      }
    };

    // Function to create a lead in Zoho CRM
    const createLead = async () => {
      try {
        // Get the access token
        const accessToken = await getAccessToken();

        // Prepare the lead data
        const leadData = {
          data: [
            {
              'Last Name': formValues.lastName,
              Email: formValues.email,
              Phone: formValues.phone,
            },
          ],
        };

        // Make the API call to create a lead
        const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
          method: 'POST',
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        const data = await response.json();
        console.log('2-completed', data);

        if (response.ok) {
          console.log('Lead Created:', data);
        } else {
          console.error('Error creating lead:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function to create a lead
    createLead();
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
