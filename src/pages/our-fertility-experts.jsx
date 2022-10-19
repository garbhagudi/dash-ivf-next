import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { doctors } from "components/doctors";
import DoctorLayout from "components/doctorsLayout";

const FertilityExperts = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-heading font-bold text-center py-10 lg:py-24">
        Our Fertility Experts
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-5 px-2">
        {doctors.map((items) => (
          <DoctorLayout
            key={items.id}
            index={items.id}
            imageComponent={
              <ImageComponent
                name={items.name}
                image={items.image}
                qualification={items.qualification}
                designation={items.designation}
              />
            }
            activeIndex={activeIndex}
            image={items.image}
            name={items.name}
            bio={items.bio}
            setActiveIndex={setActiveIndex}
          ></DoctorLayout>
        ))}
      </div>
    </div>
  );
};

export default FertilityExperts;

const ImageComponent = ({ name, image, qualification, designation }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={image}
        alt={name}
        className="h-40 w-40 md:h-64 md:w-64 rounded-full"
      />
      <div className="text-center">
        <div className="text-xl font-heading font-bold mt-4">{name}</div>
        <div className="text-xs font-content mt-2">{qualification}</div>
        <div className="text-sm font-content mt-2 mb-4">{designation}</div>
      </div>
    </div>
  );
};
