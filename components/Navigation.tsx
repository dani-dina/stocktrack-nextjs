'use client'

import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { navLinks } from '../constants';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';
import { set } from 'zod';

const Navigation : React.FC = () =>{
  const [toggle,setToggle] = useState(false);

  const handleMenu = () => {
    if(toggle){
      setToggle(!toggle)
      console.log(!toggle)
    }else{
      setToggle(!toggle);
      console.log(!toggle);
    }
  }

  return (
    <div className='w-full'>
      <div className='w-full my-4 flex items-center justify-around'>
        {/* Logo section */}
        <Link
          href={'/'}
        >
          <Image
          src={'/logo.png'}
          width={200}
          height={70}
          alt='Logo'
        />
        </Link>
        {/* Right side navigations*/}
        <div className={`${toggle ? 'flex' : 'hidden'} md:flex w-full md:w-3/5 items-center justify-between`}>
          <nav className='fixed top-5 flex flex-col w-full h-full bg-red-800 md:flex-row gap-4'>
            {
              navLinks.map((items) =>(
                <Link
                  key={items.id}
                  href={items.href}
                  className='font-[poppins]'
                >
                  {items.label}
                </Link>
              ))
            }
          </nav>
          <div className='hidden md:flex gap-2 m-2'>
            <Button 
              className=''
              children='Sign in'
            />
            <Button 
            className='border-1 border-primary ml-2 py-1 px-4 rounded-md'
            children={'Log in'}
            />
          </div>
        </div>
        <div className='md:hidden'>
          <Button
            children={toggle ? <FiX width={30}/> : <FiMenu />}
            onClick={handleMenu}
          />
        </div>
      </div>
    </div>
  );
} 

export default Navigation;