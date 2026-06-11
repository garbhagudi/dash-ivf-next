import { Phone, Stethoscope, Microscope, Heart } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: Phone,
    color: '#c0452a',
    title: 'Expert Callback',
    desc: 'A fertility counsellor will call you within 24 hours to understand your needs.',
  },
  {
    num: '02',
    Icon: Stethoscope,
    color: '#e8704a',
    title: 'Free Consultation',
    desc: 'Meet our specialist who will review your history and recommend a personalised path.',
  },
  {
    num: '03',
    Icon: Microscope,
    color: '#c8963e',
    title: 'Advanced Diagnostics',
    desc: 'State-of-the-art tests to give us the clearest picture of your fertility health.',
  },
  {
    num: '04',
    Icon: Heart,
    color: '#c0452a',
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
            <div className="step-icon"><step.Icon size={28} color={step.color} /></div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
