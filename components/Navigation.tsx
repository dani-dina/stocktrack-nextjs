'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { FaX } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { navLinks } from '../constants';
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navigation: React.FC = () => {
  const pathname = usePathname(); // ✅ SSR-safe replacement for window.location.pathname
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigation = () => {
    setOpenNavigation(prev => {
      const newState = !prev;
      newState ? disablePageScroll() : enablePageScroll();
      return newState;
    });
  };

  return (
    <div
      className={`${
        pathname === '/dashboard' ? 'hidden bg-amber-500' : 'block'
      } fixed top-0 md:static left-0 w-full z-50 backdrop-blur-3xl`}
    >
      <div className="flex items-center justify-between mx-7 md:mx-15 my-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={60}
            alt="LOGO"
          />
        </Link>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed md:flex z-50 top-[5rem] left-0 right-0 bottom-0 md:static`}
        >
          <div className="relative inset-0 z-40 flex flex-col md:flex-row gap-6 w-full">
            {navLinks.map((items) => (
              <Link
                key={items.id}
                href={items.href}
                className="font-[Inter] font-thin text-center my-4"
              >
                {items.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <Button
          children={openNavigation ? <FaX /> : <FiMenu />}
          onClick={handleNavigation}
          className="md:hidden border-1 border-gray-500 rounded-md p-2"
        />

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Button children="Sign up" />
          <Button
            children="Log in"
            className="py-1 px-4 bg-gradient-to-r from-[#FE2F92] to-[#544AA5] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
