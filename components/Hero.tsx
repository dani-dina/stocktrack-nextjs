import Image from 'next/image';
import Button from './Button';

const Hero : React.FC = () => {
  return (
    <section className='w-full mt-[7em]'>
      <div className='mx-7 md:mx-15 flex flex-col-reverse md:flex-row'>
        <div className='md:w-1/2 py-6'>
          <div className=''>
            <h1 className='text-4xl font-[poppins] font-bold'>
              The World's Biggest Inventory Managment System
            </h1>
            <p className='text-gray-400 my-4 py-2'>
              If you want, I can make you a side-by-side code demo of the same animation in Framer Motion and
              GSAP so you can see the difference in approach.
            </p>
            <Button
              children='Get Started'
              className='py-2 px-4 border-1 border-gray-400 rounded-md font-[poppins]'
            />
          </div>
        </div>
        <div className='md:w-1/2 flex items-center justify-start md:justify-end py-4'>
          <Image
            src={'/banner2.png'}
            alt='Banner'
            width={350}
            height={200}
            className=''
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;