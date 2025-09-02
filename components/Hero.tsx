import Image from 'next/image';
import Button from './Button';
import Circles from '../svgs/Circles';
import BackgroundGradient from '../svgs/BackgroundGradient';

const Hero : React.FC = () => {
  return (
    <section className='w-full mt-[5em] md:mt-[3em]'>
      <div className='mx-7 md:mx-15 flex flex-col-reverse md:flex-row'>
        <div className='md:w-1/2 py-6'>
          <div className=''>
            <h1 className='text-4xl md:text-6xl md:w-5/5 font-[poppins] font-bold md:pr-4'>
              The World's <br/> Biggest Inventory Managment System
            </h1>
            <p className='text-gray-400 my-4 py-4'>
              Track, manage, and optimize your inventory in real-time with ease.
              Stay in control of stock, sales, and growth — all in one powerful platform.
            </p>
            <Button
              children='Get Started'
              className='py-2 px-4 bg-gradient-to-r from-[#FE2F92] to-[#544AA5] rounded-md font-[poppins]'
            />
            <div className='hidden md:flex items-center justify-between mt-3 py-6'>
              <div>
                <h1 className='text-2xl font-semibold font-[poppins] text-white'>$ 75 Million</h1>
                <p className='text-gray-400 pt-2'>UI animations in React</p>
              </div>
              <div className='w-[1px] bg-gray-400 rounded-lg py-7'></div>
              <div>
                <h1 className='text-2xl font-semibold font-[poppins] text-white'>$ 75 Million</h1>
                <p className='text-gray-400 pt-2'>UI animations in React</p>
              </div>
              <div className='w-[1px] bg-gray-400 rounded-lg py-7'></div>
              <div>
                <h1 className='text-2xl font-semibold font-[poppins] text-white'>$ 75 Million</h1>
                <p className='text-gray-400 pt-2'>UI animations in React</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 flex items-center justify-start md:justify-end py-4 z-2'>
          <Image
            src={'/banner2.png'}
            alt='Banner'
            width={350}
            height={200}
            className='md:w-[80%] md:h-[95%]'
          />
          <div className='relative'>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;