import MyModal from 'components/modal';

const data = [
  {
    id: 1,
    title: 'Visit your nearest GG branch 📍',
    text: 'Embark on your fertility journey by stepping into our warm and welcoming GarbhaGudi branch. Our state-of-the-art facilities are designed to provide you with the utmost care and comfort from the moment you walk through our doors.',
  },
  {
    id: 2,
    title: 'Consult the doctor  🌟',
    text: 'Meet our experienced and compassionate fertility experts who are dedicated to understanding your unique needs. Our doctors will guide you through personalized fertility solutions, ensuring you receive the care that suits your individual journey.',
  },
  {
    id: 3,
    title: 'Speak to the financial counsellor 💬',
    text: 'Navigating the financial aspects of fertility treatment can be stress-free with GarbhaGudi. Our dedicated financial counsellors are here to assist you, offering transparent and tailored solutions to make your path to parenthood as smooth as possible.',
  },
  {
    id: 4,
    title: 'Sit back and relax 🌈',
    text: `Once you've taken the initial steps, it's time to sit back and relax. Trust in GarbhaGudi's expertise to handle the rest. Our team is committed to providing you with unparalleled support, allowing you to focus on the excitement of building your family.`,
  },
];

export default function WorkFlow() {
  return (
    <div className='bg-amber-100 py-10 mb-10'>
      <div className='max-w-7xl mx-auto'>
        <h3 className='text-3xl font-heading text-center font-bold'>
          How to avail this offer?
        </h3>

        <div className='grid md:grid-cols-2 gap-8 py-8'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col sm:flex-row space-x-4'>
              <div className='text-2xl w-6 ml-4'>{`0${item.id}`}</div>
              <div className=' flex flex-col'>
                <div className='text-2xl pb-3'>{item.title}</div>
                <div>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto text-center mt-12'>
        <MyModal title={'Book an Appointment'} />
      </div>
    </div>
  );
}
