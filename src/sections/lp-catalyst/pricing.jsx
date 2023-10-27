/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { HiCheck, HiMinus, HiChevronDown } from 'react-icons/hi';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import MyModal from 'sections/lp-catalyst/modal';
import Treatment from 'sections/female-infertility/diagtreat/treatment';

const tiers = [
  {
    name: 'IVF Essentials',
    href: '/contact.html',
    priceMonthly: '90,000',
  },
  {
    name: 'Plus',
    href: '/contact.html',
    priceMonthly: '1,50,000',
  },
  {
    name: 'Premium',
    href: '/contact.html',
    priceMonthly: '2,20,000',
  },
];
const sections = [
  {
    name: 'Services*',
    features: [
      {
        id: 1,
        name: 'Consultations',
        tiers: { Plus: true, Premium: true, 'IVF Essentials': true },
      },
      {
        id: 2,
        name: 'Follicular Monitoring',
        tiers: { Plus: true, Premium: true, 'IVF Essentials': false },
      },
      {
        id: 3,
        name: 'Stimulation Injections',
        tiers: { Plus: false, 'IVF Essentials': false, Premium: true },
      },
      {
        id: 4,
        name: (
          <span className=''>
            Investigations during Stimulation Cycle <br />
            (Estradiol,
            <br /> Luteinizing Hormone, <br />
            Progesterone)
          </span>
        ),
        tiers: { Plus: true, 'IVF Essentials': false, Premium: true },
      },
      {
        id: 5,
        name: 'Other Specific Investiagtions',
        tiers: { Plus: false, 'IVF Essentials': false, Premium: false },
      },
      {
        id: 6,
        name: 'FET',
        tiers: {
          'IVF Essentials': '1 Cycle',
          Premium: '1 Cycle',
          Plus: '1 Cycle',
        },
      },
      { id: 7, name: 'Blastocyst', tiers: { Premium: true, Plus: true } },
      {
        id: 8,
        name: (
          <span className=''>
            Freezing charges <br /> (1 Year)
          </span>
        ),
        tiers: { Premium: true, Plus: true },
      },
      {
        id: 9,
        name: 'OPU Charges',
        tiers: { Plus: true, 'IVF Essentials': true, Premium: true },
      },
      {
        id: 10,
        name: 'Ward Charges',
        tiers: { Plus: true, 'IVF Essentials': true, Premium: true },
      },
    ],
  },
];

const Packages = () => {
  return (
    <div className='font-content'>
      <div className='text-center py-10 lg:py-16 px-3'>
        <h2 className='font-heading font-bold text-3xl lg:text-5xl text-gray-800'>
          IVF Packages at GarbhaGudi
        </h2>
        <p className='pt-4 font-content'>
          Here is a brief comparison of the{' '}
          <Link
            href='/treatments/ivf-treatment-cost-in-bangalore'
            className='text-brandPink hover:underline'
          >
            cost of IVF
          </Link>{' '}
          packages at GarbhaGudi. No matter the financial status, we&apos;ve got
          a package that works for you.
        </p>
      </div>
      <div className='max-w-7xl mx-auto py-16 sm:pb-24 sm:px-6 lg:px-8'>
        {/* xs to lg */}
        <div className='max-w-sm mx-auto space-y-2 striped lg:hidden '>
          {tiers.map((tier) => (
            <section
              key={tier.name}
              className='border border-gray-400 rounded-md bg-gray-50 hover:bg-gray-100'
            >
              <div className='p-4 mb-8 '>
                <h2 className='text-lg leading-6 text-gray-800 font-bold font-heading text-center'>
                  {tier.name}
                </h2>
                <p className='mt-4 text-center '>
                  <span className='text-4xl font-extrabold text-brandPink  '>
                    ₹{tier.priceMonthly}
                  </span>{' '}
                </p>
                <div className='block w-36 mx-auto mt-4 bg-gg-400 rounded-md py-2 text-sm font-bold font-heading text-brandDark text-center hover:bg-gg-500'>
                  <MyModal title={'Know More'} />
                </div>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex items-center justify-center my-4 w-56 mx-auto text-brandPink font-bold'>
                      {open ? 'See less' : 'See More'}
                      <HiChevronDown
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gg-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='text-gray-800'>
                      {sections.map((section) => (
                        <table key={section.name} className='w-full'>
                          <caption className='text-xl border-t border-gray-200 py-3 px-4  font-heading font-bold text-left'>
                            {section.name}
                          </caption>
                          <thead>
                            <tr>
                              <th className='sr-only' scope='col'>
                                Feature
                              </th>
                              <th className='sr-only' scope='col'>
                                Included
                              </th>
                            </tr>
                          </thead>
                          <tbody className='divide-y divide-gray-300'>
                            {section.features.map((feature) => (
                              <tr
                                key={feature.id}
                                className='border-t border-gray-00'
                              >
                                <th
                                  className='py-5 px-4 text-sm font-normal text-left'
                                  scope='row'
                                >
                                  {feature.name}
                                </th>
                                <td className='py-5 pr-4'>
                                  {typeof feature.tiers[tier.name] ===
                                  'string' ? (
                                    <span className='block text-sm text-right'>
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <HiCheck
                                          className='ml-auto h-5 w-5 text-green-500'
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <HiMinus
                                          className='ml-auto h-5 w-5 text-gray-400'
                                          aria-hidden='true'
                                        />
                                      )}

                                      <span className='sr-only'>
                                        {feature.tiers[tier.name] === true
                                          ? 'Yes'
                                          : 'No'}
                                      </span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </section>
          ))}
        </div>
        {/* lg+ */}
        <div className='hidden lg:block'>
          <table className='w-full h-px table-fixed'>
            <caption className='sr-only'>Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className='pb-4 px-6 text-sm font-medium text-gray-800 text-left'
                  scope='col'
                >
                  <span className='sr-only'>Feature by</span>
                  <span>IVF Treatment Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className='w-1/4 pb-4 px-6 text-lg leading-6 font-bold font-heading text-gray-800 text-center mx-auto'
                    scope='col'
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='border-t border-gray-300 divide-y divide-gray-300'>
              <tr>
                <th
                  className='py-8 px-6 text-sm font-medium text-gray-800 text-left align-top'
                  scope='row'
                >
                  IVF Treatment Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='h-full py-8 px-6 align-top'>
                    <div className='h-full '>
                      <p className='text-center'>
                        <span className='text-4xl font-extrabold text-brandPink'>
                          ₹{tier.priceMonthly}
                        </span>{' '}
                      </p>
                      <div className='block w-36 mx-auto mt-4 text-sm font-bold font-heading text-white text-center'>
                        <MyModal title={'Know More'} />
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className='py-3 pl-6 text-gray-800 text-xl text-left font-heading font-bold'
                      colSpan={4}
                      scope='colgroup'
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.id}>
                      <th
                        className='py-5 px-6 text-sm text-left font-medium text-gray-800'
                        scope='row'
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className='py-5 px-6 text-center'>
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className='block text-sm'>
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <HiCheck
                                  className='h-7 w-7 text-green-500 mx-auto'
                                  aria-hidden='true'
                                />
                              ) : (
                                <HiMinus
                                  className='h-5 text-gray-400 mx-auto'
                                  aria-hidden='true'
                                />
                              )}

                              <span className='sr-only'>
                                {feature.tiers[tier.name] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className='border-t border-gray-200'>
                <th className='sr-only' scope='row'>
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='pt-5 px-6'>
                    <div className='block w-36 mx-auto mt-4 text-sm font-bold font-heading text-white text-center hover:bg-gg-500'>
                      <MyModal title={'Know More'} />
                    </div>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='text-xs text-center lg:text mt-4'>
          *Any additional procedures and tests recommended by the doctor may or
          may not be included. Please contact the financial advisor at the
          centre for more information.
        </div>
      </div>
    </div>
  );
};

export default Packages;
