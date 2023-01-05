import React from "react";
import { Tab } from "@headlessui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    tabTitle: "Treatment Options",
    title: `You are not fighting alone against Infertility!`,
    description: `"GarbhaGudi provides an in-depth analysis of infertility issues and makes a tailored treatment protocol since every individual is unique."`,
    moreLink: "/online-consultation",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780860/garbhagudi-ivf/Images%20/treatment_wykcf3.webp",
    list: [
      "IVF",
      "IUI",
      "MACS",
      "Laparosccopy",
      "OPU/ET",
      "TESA/PESA",
      "ICSI",
      "Hyesteroscopy",
    ],
  },
  {
    id: 2,
    tabTitle: "Value Added Services",
    title: `Concerned about stepping out of your home during this Pandemic ?`,
    description: `Our value added service was started specially for patients seeking infertility treatment during the ongoing pandemic. The idea is to help you start IVF treatment right from the safety of your home and minimize travel risks.`,
    moreLink: "/ivf-from-home",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1665994575/garbhagudi-ivf/New%20Website/IVF-From-Home-min_pz1yhy.webp",
    list: [
      "IVF from Home",
      "GarbhaGriha ",
      "Zero Cost EMI",
      "Paripoorna",
      "GG Care",
      "and more",
    ],
  },
];

const WhyUs = () => {
  return (
    <div className="bg-green-50">
      <div className="max-w-7xl mx-auto">
        <Tab.Group>
          <Tab.List
            className={"flex items-center justify-around pt-10 border-b"}
          >
            {data.map((items) => (
              <Tab key={items.id} className="outline-none">
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? `border-b-2 py-6 border-brandPink text-xl font-heading`
                        : `border-none text-xl font-heading`
                    }
                  >
                    {items.tabTitle}
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {data.map((items) => (
              <Tab.Panel key={items.id} className="py-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex items-center justify-center">
                    <img
                      src={items.image}
                      alt={items.tabTitle}
                      className="max-w-sm md:max-w-md"
                    />
                  </div>
                  <div className="px-3">
                    <div className="text-3xl lg:text-4xl font-heading font-bold lg:leading-normal pt-10">
                      {items.title}
                    </div>
                    <div className="leading-relaxed mt-5">
                      {items.description}
                    </div>
                    <div className="mt-6 grid grid-cols-2 justify gap-8">
                      {items.list.map((item, i) => (
                        <div key={i} className="flex items-center">
                          <RiCheckboxCircleFill color="#3FDBB1" size="20px" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 rounded-lg text-white font-bold hover:bg-brandPink4 bg-brandPink px-3 py-2 border ">
                      Learn More
                    </button>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default WhyUs;
