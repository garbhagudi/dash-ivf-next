import DoctorLocation from "components/cards/doctorLocation";
import React from "react";
import LocationHeader from "components/locationHeader";
import CallToAction from "sections/home/subscribe-us";
import { doctors } from "components/doctors";

const Jayanagar = () => {
  return (
    <div>
      <LocationHeader
        branch="Jayanagar"
        mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124389.58988191826!2d77.50394971640624!3d13.024545500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1596b02fd78f%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1663846658020!5m2!1sen!2sin"
        phone="+918880000909"
        address={
          "Park Landing, 5AC-709, Dr Puneeth Rajkumar Rd, Balachandra Layout, HRBR Layout 2nd Block, Chelekare, Extension, Bengaluru, Karnataka 560043"
        }
      />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {doctors.map(
          (items) =>
            items.location.includes("Jayanagar") && (
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
    </div>
  );
};

export default Jayanagar;
