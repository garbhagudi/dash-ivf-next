import Treatment from "sections/female-infertility/diagtreat/treatment";
import Diagnosis from "sections/female-infertility/diagtreat/diagnosis";
import { Tab } from "@headlessui/react";

const data = [
  {
    id: 1,
    title: "Diagnosis",
    content: <Diagnosis />,
  },
  {
    id: 2,
    title: "Treatment",
    content: <Treatment />,
  },
];

const DiagnosisTreatment = () => {
  return (
    <div className="px-3 max-w-7xl mx-auto">
      <section className="pt-8 lg:pt-12 pb-6 lg:pb-2" id="diag">
        <h2 className="text-4xl lg:5xl font-bold font-heading pb-4 text-center">
          Diagnosis & Treatment for Female Infertility
        </h2>
        <p className="max-w-4xl mx-auto text-center">
          If a couple have been unable to conceive in a reasonable amount of
          time, seek help from a fertility specialist for evaluation and
          subsequent treatment.
        </p>
        <div className="max-w-6xl mx-auto mt-12">
          <Tab.Group>
            <Tab.List className={"flex items-center justify-evenly"}>
              <Tab className="outline-none">
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? `border-b-2 py-6 border-brandPink text-xl font-heading`
                        : `border-none text-xl font-heading`
                    }
                  >
                    Diagnosis
                  </div>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? `border-b-2 py-6 border-brandPink text-xl font-heading`
                        : `border-none text-xl font-heading`
                    }
                  >
                    Treatments
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className={"mt-6"}>
              <Tab.Panel>
                <Diagnosis />
              </Tab.Panel>
              <Tab.Panel>
                <Treatment />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default DiagnosisTreatment;
