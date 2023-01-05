import React from "react";
import { Tab } from "@headlessui/react";

const data = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/whatclinic_trexqz.webp",
    author: "By Anees, on WhatClinic",
    quote: `Doctor Chaitra was very helpful and explained every bit very clearly, and sisters were also very helpful, I was happy going to GarbhaGudi, they have explained about the treatment and cost for it, I have to decide and get back to them.”`,
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780902/garbhagudi-ivf/Logos/practo_warfpj.webp",
    author: "By Manjunath T H, on Practo",
    quote: `Dr Chaitra S K is very friendly in nature, first she recognises the problem and then she uses to start the treatment. Dr Chaitra is very expertise in this,so she can give a good results to the patients.I 'll suggest my friends who are facing difficulties,that to take the treatment under Dr Chaitra S K,Garbhagudi IVF,Kalyan Nagar.”`,
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/justdial_jyy9ky.webp",
    author: "By Shivani Madan, on JustDial",
    quote: `“Hi i m Arpitha Prakash . Thank you for Dr. Maheshwari and Dr Asha S Vijay madam and Garbhagudi team , after 5 years our dream came true.The people at garbhagudi are very caring supportive. Atmosphere is like family. I wish the garbhagudi Hanumanthnagar branch to be successful and get more positive results and All the best to this team.”`,
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780903/garbhagudi-ivf/Logos/google_jfknrj.webp",
    author: "By Kumar Salunke, on Google",
    quote: `“We are feeling so happy and blessed to knew about this place and its amazing hospital with fabulous doctor and staff. Thank you so much to Dr Chinmayie mam and all the staff members and team. They are very caring and treated very well and all the staff are well behaved. All the test results are accurate and helpful to know the issue and starts treatment within no time. A big thank you to all”`,
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780902/garbhagudi-ivf/Logos/facebook_mrzesi.webp",
    author: "By Rammurthi, on Facebook",
    quote: `“Very well organized hospital with well-trained experts who guide you throughout the process and explain things in detail!  Affordable prices and treatments at its best! Qualitative services! Would recommend this place for best IVF treatments”`,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-3 ">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center pt-10 lg:pt-16">
          Experience the Joy of Being Complete
        </h2>
        <div className="text-sm lg:text-lg text-center mt-4 max-w-prose mx-auto">
          GarbhaGudi IVF Center is guided by the highest ethical standards,
          providing patients with the best quality, individualized,
          compassionate care.
        </div>
        <Tab.Group>
          <Tab.List
            className={"flex items-center justify-around my-10 border-b"}
          >
            {data.map((items) => (
              <Tab key={items.id} className="outline-none">
                {({ selected }) => (
                  <div
                    className={
                      selected ? `border-b-2 border-brandPink` : `border-none`
                    }
                  >
                    <img
                      src={items.logo}
                      alt={items.author}
                      className="h-7 md:h-11 px-4 py-2"
                    />
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {data.map((items) => (
              <Tab.Panel key={items.id} className="mt-10 max-w-6xl mx-auto">
                <div className="bg-[url(https://res.cloudinary.com/garbhagudi/image/upload/v1633780928/garbhagudi-ivf/Icons/quote_lhrts2.webp)] bg-no-repeat bg-left-top">
                  <div className="max-w-4xl mx-auto text-lg lg:text-2xl font-heading lg:leading-loose">
                    {items.quote}
                  </div>
                </div>
                <div className="text-center text-lg py-7">{items.author}</div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Testimonials;
