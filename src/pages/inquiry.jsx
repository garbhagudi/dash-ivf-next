import Image from 'components/image';
import Head from 'next/head';
const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>GarbhaGudi IVF Center | Know your Fertility Score</title>
      </Head>
      <div className='mx-auto max-w-3xl'>
        <h1></h1>
        <Image
          src={
            'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwezh0us07pnk1qjjmvg'
          }
          alt='Inquiry'
          loading='lazy'
        />
        <iframe
          src='/contact_2.html'
          className='mx-auto h-[80vh] w-screen max-w-md md:h-[60vh] lg:max-w-2xl'
        ></iframe>
      </div>
    </div>
  );
};

export default IndexPage;
