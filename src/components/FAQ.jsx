import React, { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    { question: 'Is the consultation really free?', answer: 'Yes, your initial consultation is completely free with no obligations. Our fertility specialist will review your history, understand your concerns, and recommend the most suitable path forward, all at no cost to you.' },
    { question: 'What is the success rate of IVF at GarbhaGudi?', answer: 'Our IVF success rates range between 65–73%, which is significantly higher than the national average. Success rates vary based on age, medical history, and type of treatment. During your free consultation, our specialists will provide a realistic assessment based on your individual situation.' },
    { question: 'Do you treat male infertility as well?', answer: 'Absolutely. Nearly 40% of infertility cases involve male factors. Our andrology team specialises in advanced semen analysis, hormonal assessments, and surgical sperm retrieval procedures like TESA and PESA. We treat both partners comprehensively.' },
    { question: "What if I've had failed IVF cycles at another clinic?", answer: 'Many of our successful patients came to us after failed cycles elsewhere. We take a fresh, thorough approach — reviewing previous protocols, conducting additional diagnostics, and designing a revised strategy.' },
    { question: 'How much does IVF treatment cost at GarbhaGudi?', answer: 'IVF costs typically range from ₹1,50,000 to ₹3,00,000 depending on individual treatment needs. We believe cost should never be a barrier to parenthood, which is why we offer Zero interest EMI options. Book a free consultation for a personalised cost estimate.' },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="commanSection sectionElevan">
      <div className="container">
        <h5 className="smallHeading">Common Questions</h5>
        <h2 className="mainHeading"><b>Frequently</b> Asked Questions</h2>
        <p className="subText">Get answers to the most common questions about fertility treatments at GarbhaGudi.</p>
        <div className="accordion" id="accordionFAQ">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    style={{ cursor: 'pointer' }}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className="accordion-collapse"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out',
                    display: 'block',
                  }}
                >
                  <div className="accordion-body" style={{ padding: '15px 0px' }}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
