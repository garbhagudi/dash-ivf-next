import Image from 'next/image';

export default function ThankYouNav() {
  const logoUrl =
    'https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg';
  return (
    <nav>
      <a href='https://www.garbhagudi-ivf.com/'>
        <Image
          src={logoUrl}
          alt='GarbhaGudi IVF Centre'
          width={200}
          height={44}
          priority
        />
      </a>
      <a className='phone' href='tel:+918951813344'>
        📞 +91 89518 13344
      </a>
    </nav>
  );
}
