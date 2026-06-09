const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Expert Callback',
    desc: 'A fertility counsellor will call you within 24 hours to understand your needs.',
  },
  {
    num: '02',
    icon: '🩺',
    title: 'Free Consultation',
    desc: 'Meet our specialist who will review your history and recommend a personalised path.',
  },
  {
    num: '03',
    icon: '🔬',
    title: 'Advanced Diagnostics',
    desc: 'State-of-the-art tests to give us the clearest picture of your fertility health.',
  },
  {
    num: '04',
    icon: '💗',
    title: 'Your Baby Plan',
    desc: 'A tailored treatment roadmap designed just for you — transparent, caring, and hopeful.',
  },
];

export default function ThankYouSteps() {
  return (
    <section className="section">
      <div className="section-label">Your Journey Begins</div>
      <div className="section-title">What <span>Happens Next?</span></div>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
