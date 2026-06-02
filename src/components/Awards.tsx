import React from 'react';
import { CustomCarousel } from './CustomCarousel';

export const Awards: React.FC = () => {
  const awardsList = [
    {
      img: '/assets/img/National-Award-Web-Bnr-1-scaled.webp',
      desc: (
        <>
          National excellency <b>Award 2024</b> – awarded by the World Health Congress
        </>
      ),
    },
    {
      img: '/assets/img/RadioCity-Awards_Web-Bnr-Eng-2-1-scaled.webp',
      desc: (
        <>
          Fastest Growing<br /> <b>IVF Centre</b>
        </>
      ),
    },
    {
      img: '/assets/img/ETHealthWorld-Fertility-Awards-2023-2-1-min-scaled.jpg',
      desc: (
        <>
          <b>ICON of the Year</b> IVF (south) <br />Dr. Asha S Vijay
        </>
      ),
    },
    {
      img: '/assets/img/Argoya_Silver-Award_Web-Bnr-min-scaled.jpg',
      desc: (
        <>
          <b>GarbhaGudi</b> – Certified Healthy Workplace
        </>
      ),
    },
    {
      img: '/assets/img/2022_Web-Banner_Revised_Nov22-9-1-min-scaled.jpg',
      desc: (
        <>
          <b>Best IVF</b> Clinic of the Year -<br /> ETHealth
        </>
      ),
    },
    {
      img: '/assets/img/2022_Web-Banner_Revised_Nov22-6-min-scaled.jpg',
      desc: (
        <>
          <b>GarbhaGudi</b> Ranked Among Top 10 IVF Centres in India
        </>
      ),
    },
    {
      img: '/assets/img/2022_Web-Banner_Revised_Nov22-3-min-min-scaled.jpg',
      desc: (
        <>
          <b>GarbhaGudi Recognised</b> as Best IVF & Fertility Hospital in India
        </>
      ),
    },
  ];

  return (
    <section className="commanSection sectionEight">
      <div className="container">
        <h5 className="smallHeading">Awards & Accolades</h5>
        <h2 className="mainHeading">
          <b>Recognised for Excellence</b> in Fertility Care
        </h2>
        <p className="subText">
          GarbhaGudi's commitment to clinical excellence and patient outcomes has been recognised by leading
          healthcare bodies across India.
        </p>

        <div className="awards-slider">
          <CustomCarousel desktopItems={3} mobileItems={1} gap={20}>
            {awardsList.map((award, idx) => (
              <div key={idx} className="boxAwards">
                <img src={award.img} alt={`Award ${idx + 1}`} style={{ width: '100%' }} />
                <h6>{award.desc}</h6>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
};
