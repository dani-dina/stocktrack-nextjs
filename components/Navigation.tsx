'use client'

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { FaX,FaMeta } from 'react-icons/fa6';
import { navLinks } from '../constants';
import { useState } from 'react';

const Navigation : React.FC = () =>{
  const [openNavigation,setOpenNavigation] = useState(false);

  const handleNavigation = () =>{
    if(openNavigation){
      setOpenNavigation(!openNavigation);
    }else{
      setOpenNavigation(!openNavigation);
    }
  }

  return (
    <div className='fixed md:static top-0 left-0 w-full z-50'>
      <div className='flex items-center justify-between px-7 md:mx-15 my-5 '>
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
        <nav className={
          ` ${openNavigation ? 'flex' : 'hidden'} z-50 fixed md:flex top-[5rem] left-0 right-0 bottom-0 md:static`
        }>
          <div className='flex flex-col md:flex-row gap-3 z-10 bg-[#0D0F42] w-full'>
            {
              navLinks.map((items) =>(
                <Link
                  key={items.id}
                  href={items.href}
                  className='font-[Inter] font-thin text-center my-4'
                >
                  {items.label}
                </Link>
              ))
            }
          </div>
        </nav>
        <Button
          children={ openNavigation ? <FaMeta /> : < FaX/>}
          onClick={handleNavigation}
          className='md:hidden'
        />
        <div className='hidden md:flex gap-4'>
          <Button 
            children='Sign up'
            className=''
          />
          <Button
            children='Log in'
            className='py-1 px-2.5 border-1 border-gray-400 rounded-md'
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;