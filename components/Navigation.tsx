import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { FaX } from 'react-icons/fa6';

const Navigation : React.FC = () =>{
  return (
    <div className='fixed top-0 left-0 w-full'>
      <div className='flex items-center justify-between mx-15 my-5'>
        <Link
          href={'/'}
        >
          <Image
            src={'/logo.png'}
            width={150}
            height={60}
            alt='LOGO'
          />
        </Link>
        <nav className=''>
          <div className=''>

          </div>
          <Button
            children={<FaX />}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navigation;