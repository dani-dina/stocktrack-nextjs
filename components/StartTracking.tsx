import Image from 'next/image';
import Button from './Button';

const StartTracking : React.FC = () => {
  return (
    <section className='w-full min-h-min my-5'>
      <div className='mx-7 md:mx-15 flex flex-col items-center'>
        <h1 className='text-white text-3xl font-semibold py-4 text-center md:text-5xl md:w-4/5'>
          Start Tracking Your Users Analytics Like Never Before
        </h1>
        <p className='text-white/50 text-center py-4 md:w-3/5'>
          If you want, I can add custom Tailwind colors to your features array icons so each feature gets a unique color automatically.
        </p>
        <div className="hidden md:block">
          <Image
            src="/dashboard-desktop.jpg"
            alt="Dashboard"
            width={500}
            height={500}
            className="h-[90vh] w-[80vw] rounded-2xl my-4"
          />
      </div>

      {/* Mobile image */}
      <div className="w-full block md:hidden ">
        <Image
          src="/dashboard-mobile.png"
          alt="Dashboard"
          width={500}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>
      <Button
        children='Get Started'
        className='text-white py-2 px-4 bg-gradient-to-r from-[#FE2F92] to-[#544AA5] rounded-md font-[poppins] my-7'
      />
      </div>
    </section>
  );
}

export default StartTracking;