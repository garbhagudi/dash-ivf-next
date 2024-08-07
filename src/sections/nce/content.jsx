import React from 'react';

const Content = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='grid grid-cols-1 gap-x-10 px-4 py-20 lg:grid-cols-2'>
        <div className='mb-4 flex items-center justify-center text-lg lg:text-xl'>
          At GarbhaGudi, we believe that the cost of the treatment should not
          limit your dream of becoming a parent. Since health insurance does not
          usually cover the costs of treating infertility, treatments are often
          neglected and this is not advisable as time is not on your side.
          Taking this into consideration, we have tied up with one of the top
          financing organizations to provide financial assistance to patients
          undergoing treatment at GarbhaGudi. The best part about this financing
          option is that it is given at zero per cent interest with the option
          of repayment in easy installments.
        </div>
        <div className='flex items-center justify-center'>
          <img
            src='https://media.graphassets.com/DOAD1Xy2S2KJxuKlipGw'
            alt=''
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
