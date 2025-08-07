import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { FaX } from 'react-icons/fa6';
import { navLinks } from '../constants';

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
          <div className='flex gap-3'>
            {
              navLinks.map((items) =>(
                <Link
                  key={items.id}
                  href={items.href}
                >
                  {items.label}
                </Link>
              ))
            }
          </div>
          <Button
            children={<FaX />}
            className='md:hidden'
          />
        </nav>
        <div className='flex gap-4'>
          <Button 
            children='Sign up'
          />
          <Button
            children='Log in'
            className='py-1 px-2 border-1 border-gray-400 rounded-md'
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;