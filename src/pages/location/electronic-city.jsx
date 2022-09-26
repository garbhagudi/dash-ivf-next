import DoctorLocation from "components/cards/doctorLocation";
import React from "react";
import { doctors } from "components/doctors";
import LocationHeader from "components/locationHeader";
import CallToAction from "sections/home/subscribe-us";
import Script from "next/script";

const ElectronicCity = () => {
  return (
    <div>
      <LocationHeader
        branch="Electronic City"
        mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.860805420732!2d77.66559191525012!3d12.852265620961985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c972baa2581%3A0x38dd3f8049f5f606!2sGarbhaGudi%20IVF%20Centre%2C%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1663845628153!5m2!1sen!2sin"
        phone="+918880000909"
        address={
          "Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100"
        }
      />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {doctors.map(
          (items) =>
            items.location.includes("ElectronicCity") && (
              <DoctorLocation
                key={items.id}
                name={items.name}
                qualification={items.qualification}
                designation={items.designation}
                image={items.image}
              />
            )
        )}
      </div>
      <div className="pt-8">
        <CallToAction />
      </div>
      <Script src="https://crm.zoho.com/crm/WebFormServeServlet?rid=61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdebgid17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2&script=$sYG"></Script>
    </div>
  );
};

export default ElectronicCity;
