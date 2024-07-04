import React from 'react';

const Note = () => {
  return (
    <div className='mx-auto max-w-7xl px-5 py-10'>
      <h1 className='pb-10 text-center font-heading text-4xl font-bold lg:text-5xl'>
        Some important points to note
      </h1>
      <div>
        <ul className='mx-auto max-w-4xl list-outside list-disc text-lg'>
          <li>
            The loan is given at 0% interest to the patient. So there is no
            additional burden on the patient because of financing
          </li>
          <li>
            The amount to be disbursed is decided based on the repayment
            capacity of the applicant
          </li>
          <li>
            If the couple undergoing treatment do not have a bank account or
            proper address proof, the couple may ask a relative to be the
            primary applicant to fulfil the requirements for financing. The
            couple may become the co-applicants
          </li>
          <li>
            Most of the process happens online. So the couple does not have to
            travel to the office of the financing company many times. Usually,
            the in-person meeting will happen at GarbhaGudi
          </li>
          <li>
            If the treatment is cancelled due to some reason or if the cost of
            the treatment becomes less than the planned cost, then the amount is
            refunded to the patient
          </li>
          <li>
            If there is a cost escalation beyond what was anticipated at the
            beginning, the couple may plan for additional financing from the
            same company. That process is very simple
          </li>
          <li>
            The couple may opt for 3 months, 6months, 9 months or 12 months EMI
            options
          </li>
          <li>
            GarbhaGudi is NOT financing the treatment, nor is GarbhaGudi part of
            the financing company
          </li>
          <li>
            This is just a partnership between the financing company and
            GarbhaGudi to help patients
          </li>
          <li>
            Collection of the instalments is the sole responsibility of the
            financing company. GarbhaGudi does not get involved in this process
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Note;
