import React, { useState } from 'react';

export const Treatments = ({ onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState('all');

  const treatmentsData = [
    { title: 'ICSI Treatment', category: 'Advanced', desc: 'Direct sperm injection into the egg for cases of severe male factor infertility, significantly improving fertilisation rates.' },
    { title: 'Genetic Testing (PGD / PGT)', category: 'Advanced', desc: 'Pre-implantation genetic diagnosis to screen embryos for genetic disorders before transfer, reducing the risk of inherited conditions.' },
    { title: 'IVF Treatment', category: 'Women', desc: 'In-vitro fertilisation with advanced blastocyst culture for maximised implantation success.' },
    { title: 'Egg Freezing', category: 'Women', desc: 'Preserve your fertility for the future with our advanced oocyte vitrification technology.' },
    { title: 'PCOS / PCOD Management', category: 'Women', desc: 'Comprehensive hormonal evaluation and targeted treatment to restore ovulatory cycles and fertility.' },
    { title: 'IUI (Intrauterine Insemination)', category: 'Women', desc: 'A minimally invasive procedure that places healthy sperm directly in the uterus during ovulation.' },
    { title: 'Male Infertility Assessment', category: 'MEN', desc: 'Advanced semen analysis, hormonal evaluation, and comprehensive male fertility workup.' },
    { title: 'TESA / PESA', category: 'MEN', desc: 'Surgical sperm retrieval for men with obstructive or non-obstructive azoospermia, enabling fatherhood even with low or absent sperm count.' },
  ];

  const filteredTreatments = treatmentsData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'women') return item.category.toLowerCase() === 'women';
    if (activeTab === 'men') return item.category.toLowerCase() === 'men';
    return true;
  });

  return (
    <section className="commanSection sectionFour">
      <div className="container">
        <h5 className="smallHeading">Our Treatments</h5>
        <h2 className="mainHeading">Comprehensive <b>Fertility</b> Solutions</h2>
        <p className="subText">
          <b>Advanced treatments</b> for both men and women, tailored to your unique needs from diagnosis to successful pregnancy.
        </p>
        <div className="boxTabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')} type="button">All Treatments</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'women' ? 'active' : ''}`} onClick={() => setActiveTab('women')} type="button">For Women</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'men' ? 'active' : ''}`} onClick={() => setActiveTab('men')} type="button">For Men</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="rowFourColumn">
              {filteredTreatments.map((treatment, idx) => (
                <div key={idx} className="columnInner">
                  <div className="iconFeels"><img src="/assets/img/skin-laser.svg" alt="Treatment icon" /></div>
                  <h4><b>{treatment.title.split(' ')[0]}</b> {treatment.title.split(' ').slice(1).join(' ')}</h4>
                  <h6>{treatment.category}</h6>
                  <p>{treatment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="textCenter">
          <button onClick={onBookConsultation} className="btn btn-primary">
            Book Free Consultation
          </button>
        </p>
      </div>
    </section>
  );
};
