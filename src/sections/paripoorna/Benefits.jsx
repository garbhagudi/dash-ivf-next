import SectionHeading from 'components/section-heading';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className='px-3'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <Image
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1700126545/garbhagudi-ivf/Paripoorna/2023_Paripoorna_Ads_V1_Lat_Artboard_copy_3-min_blsezv.webp'
              alt='benefits'
              className='rounded-xl my-4'
              width={500}
              height={500}
            />
          </div>
          <div className='flex items-center justify-center flex-col'>
            <h3 className='py-10 text-3xl font-heading font-bold'>
              Avail the benefits of paripoorna and turn your dream of parenthood
              into reality
            </h3>
            <div className='flex items-center justify-center flex-col'>
              The word &apos;PARIPOORNA&apos; means fulfilment. GarbhaGudi under
              Dr Asha&apos;s medical supervision, is trying to fulfil the dreams
              of many of couples in achieving their parenthood. <br />
              <br />
              Paripoorna is an initiative of GarbhaGudi IVF Centre and is being
              done in association with GarbhaGnan Foundation. It is a special
              benefit plan for patients who want to go in for fertility
              treatment, but are unable to bear the costs. It is applicable to a
              limited number of couples and is based on their eligibility.{' '}
              <br /> <br />
              Due to the financial challenges, a couple dreaming of having a
              baby through IVF gets shattered. Hence, GarbhaGudi IVF Centre is
              leveraging a special discount on IVF procedures. This unique offer
              is brought to you by the GarbhaGnan Foundation, a unit of
              GarbhaGudi. <br />
              <br />
              Under Paripoorna program, waiver on IVF treatment will be on the
              eligibility of the couples. A couple who needs support can apply
              to the program. GarbhaGnan foundation will check their eligibility
              and select the patient as per their discretion, with no compromise
              on quality for the treatment. <br />
              <br />A humble CSR initiative of GarbhaGudi IVF Centre and
              GarbhaGnan Foundation. It provides substantial discount on IVF
              treatment to couples who are unable to bear the treatment costs.
              It is termed “Paripoorna”.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
