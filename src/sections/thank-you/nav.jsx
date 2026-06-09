import Image from 'next/image';

export default function ThankYouNav() {
  return (
    <nav>
      <a href='https://www.garbhagudi-ivf.com/'>
        <Image
          src='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg'
          alt='GarbhaGudi IVF Centre'
          width={200}
          height={44}
          priority
        />
      </a>
      <a className='phone' href='tel:+919108910832'>
        📞 +91 9108 9108 32
      </a>
    </nav>
  );
}
