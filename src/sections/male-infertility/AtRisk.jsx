import React from "react";
import Image from "components/image";

const AtRisk = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-2xl sm:text-4xl font-heading font-bold text-center">
          Who is at risk of male infertility?{" "}
        </div>
        <div className="text-center py-2">
          You are more likely to experience male infertility if you have:
        </div>
        <div className="mt-4">
          <ul className="space-y-2 list-inside list-disc">
            <li>Previous prostate inflammation or genital infections</li>
            <li>Testicular injury or twisting (torsion) </li>
            <li>Puberty, either early or late</li>
            <li>High-temperature exposure of the genitals</li>
            <li>Hernia repair</li>
            <li>Testicles that haven&apos;t descended</li>
          </ul>
        </div>
        <div className="my-4">
          You may also be at risk if you use certain prescription medications.
          Medicines for ulcers, psoriasis, depression and high blood pressure
          are among them.
        </div>
      </div>
    </div>
  );
};

export default AtRisk;
