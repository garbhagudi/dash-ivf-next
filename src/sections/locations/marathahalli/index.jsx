import DoctorLocation from "components/cards/doctorLocation";
import React from "react";
import { doctors } from "components/doctors";

const Marathahalli = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {doctors.map(
        (items) =>
          items.location.includes("Marathahalli") && (
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
  );
};

export default Marathahalli;
