import DoctorLocation from "components/cards/doctorLocation";
import React from "react";
import LocationHeader from "components/locationHeader";
import { doctors } from "components/doctors";
import CallToAction from "sections/home/subscribe-us";

const HanumanthaNagar = () => {
  return (
    <div>
      <LocationHeader
        branch="Hanumanthanagar"
        mapLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.886019164418!2d77.556468!3d12.9416527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61c537027ad19840!2sGarbhaGudi%20IVF%20Centre%2C%20Hanumanthanagar.!5e0!3m2!1sen!2sin!4v1663838744587!5m2!1sen!2sin"
        phone="+918880000909"
        address={
          "Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050"
        }
      />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {doctors.map(
          (items) =>
            items.location.includes("HanumanthaNagar") && (
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

export default HanumanthaNagar;
