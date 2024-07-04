import Treatment from 'sections/female-infertility/diagtreat/treatment';
import Diagnosis from 'sections/female-infertility/diagtreat/diagnosis';
import { Tab } from '@headlessui/react';

const data = [
  {
    id: 1,
    title: 'Diagnosis',
    content: <Diagnosis />,
  },
  {
    id: 2,
    title: 'Treatment',
    content: <Treatment />,
  },
];

const DiagnosisTreatment = () => {
  return (
    <div className='mx-auto max-w-7xl px-3'>
      <section className='pb-6 pt-8 lg:pb-2 lg:pt-12' id='diag'>
        <h2 className='lg:5xl pb-4 text-center font-heading text-4xl font-bold'>
          Diagnosis & Treatment for Female Infertility
        </h2>
        <p className='mx-auto max-w-4xl text-center'>
          If a couple have been unable to conceive in a reasonable amount of
          time, seek help from a fertility specialist for evaluation and
          subsequent treatment.
        </p>
        <div className='mx-auto mt-12 max-w-6xl'>
          <Tab.Group>
            <Tab.List className={'flex items-center justify-evenly'}>
              <Tab className='outline-none'>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? `border-b-2 border-brandPink py-6 font-heading text-xl`
                        : `border-none font-heading text-xl`
                    }
                  >
                    Diagnosis
                  </div>
                )}
              </Tab>
              <Tab className='outline-none'>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? `border-b-2 border-brandPink py-6 font-heading text-xl`
                        : `border-none font-heading text-xl`
                    }
                  >
                    Treatments
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className={'mt-6'}>
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
