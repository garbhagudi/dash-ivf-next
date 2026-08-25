import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function ThankYouNav() {
  const logoUrl =
    'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms76155yh1on07pnqpdnqyzk';
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
      <a className='phone' href='tel:+919108910832'>
        <Phone size={16} strokeWidth={2} />
        <span className='phone-text'>+91 9108 9108 32</span>
      </a>
    </nav>
  );
}
