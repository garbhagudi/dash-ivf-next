import React from "react";
import { useRouter } from "next/router";
import ElectronicCity from "sections/locations/electronic-city";
import KalyanNagar from "sections/locations/kalyan-nagar";
import Jayanagar from "sections/locations/south-end-circle";
import Marathahalli from "sections/locations/marathahalli";
import HanumanthaNagar from "sections/locations/hanumanthanagar";

const Index = () => {
  const router = useRouter();
  return (
    <div>
      <div className="">
        <div>
          {router.asPath === "/branch/electronic-city" && <ElectronicCity />}
        </div>
        <div>{router.asPath === "/branch/kalyan-nagar" && <KalyanNagar />}</div>
        <div>
          {router.asPath === "/branch/marathahalli" && <Marathahalli />}
        </div>
        <div>
          {router.asPath === "/branch/south-end-circle" && <Jayanagar />}
        </div>
        <div>
          {router.asPath === "/branch/hanumanthanagar" && <HanumanthaNagar />}
        </div>
      </div>
    </div>
  );
};

export default Index;
