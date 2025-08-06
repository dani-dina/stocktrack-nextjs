import Image from 'next/image';
const Hero : React.FC = ()=>{

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-[85%] flex items-center'>
        <div className='w-1/2'>
          <h1 className='text-4xl text-white'>
            The World's Biggest <br /> Inventory Managment System
          </h1>
          <p>

          </p>
        </div>
        <div className='w-1/2'>
          <div>
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