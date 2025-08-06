'use client'

import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { navLinks } from '../constants';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';
import { set } from 'zod';

const Navigation : React.FC = () =>{
  const [toggle,setToggle] = useState(true);

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
      <div className='my-4 flex items-center justify-around'>
        {/* Logo section */}
        <Image
          src={'/logo.png'}
          width={200}
          height={70}
          alt='Logo'
        />
        {/* Right side navigations*/}
        <div className='hidden md:flex w-3/5 items-center justify-between'>
          <nav className='flex gap-4'>
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
          </nav>
          <div className='flex gap-2 m-2'>
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
            children={toggle ? <FiX /> : <FiMenu />}
            onClick={handleMenu}
          />
        </div>
      </div>
    </div>
  );
} 

export default Navigation;