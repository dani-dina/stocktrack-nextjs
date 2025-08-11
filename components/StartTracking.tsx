import Image from 'next/image';

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
            className="h-[90vh] w-[80vw] "
          />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src="/dashboard-mobile.png"
          alt="Dashboard"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      </div>
    </section>
  );
}

export default StartTracking;