import Image from 'next/image';
import Button from './Button';
const Hero : React.FC = ()=>{

  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <div className='w-full py-10 mx-15 flex items-center '>
        <div className='w-1/2 '>
          <h1 className='text-5xl font-bold font-[poppins] text-white'>
            The World's Biggest <br /> Inventory Managment System
          </h1>
          <p className='text-gray-600 my-7'>
            Manage your stock smarter with real-time insights, powerful analytics, and an intuitive dashboard built to scale your business.
          </p>
          <div className='relative'>
            <input
            placeholder='your email'
            value={''}
            name='emailField'
            className='bg-white w-4/5 p-2 rounded-md'
            />
            <Button 
              children={'Sign up for free'}
              className='absolute top-1 right-33 bg-amber-600 rounded-md text-white px-2 py-1'
            />
          </div>
        </div>
        <div className='relative w-1/2 flex items-center justify-center'>
          <div className='fixed right-0'>
            <Image
              src={'/banner2.png'}
              width={500}
              height={200}
              alt='Banner'
            />
            {/* <Image 
              src={'/banner1.png'}
              width={500}
              height={200}
              alt='Banner'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;