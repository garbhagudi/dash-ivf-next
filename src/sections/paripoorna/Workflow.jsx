import MyModal from 'components/modal';
import Popup from 'components/Popup';

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
    <div className='mb-10 bg-amber-100 py-10'>
      <div className='mx-auto max-w-7xl'>
        <h3 className='text-center font-heading text-3xl font-bold'>
          How to avail this offer?
        </h3>

        <div className='grid gap-8 py-8 md:grid-cols-2'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col space-x-4 sm:flex-row'>
              <div className='ml-4 w-6 text-2xl'>{`0${item.id}`}</div>
              <div className='flex flex-col'>
                <div className='pb-3 text-2xl'>{item.title}</div>
                <div>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto mt-12 text-center'>
        <Popup
          title={'Book an Appointment'}
          btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
        />
      </div>
    </div>
  );
}
