import { growingSteps } from "../constants";

const GrowingSteps : React.FC = () => {
  return (
    <section className='w-w-full my-7 py-5 '>
      <h1 className='mx-7 md:mx-15 text-5xl font-bold my-7'>Grow Our <br /> Business Now</h1>
      <div className='w-full flex items-center justify-center my-8 pt-15'>
        <div className='w-4/5 mx-7 md:mx-15 flex items-start justify-between gap-7'>
          <div className='w-1/3 mt-4'>
            {
              growingSteps.map((items) => (
                <div 
                  key={items.id}
                  className='flex items-center gap-10 mb-7'
                >
                  <h1
                    className='text-4xl font-semibold rounded-full p-5 bg-gradient-to-r from-[#FE2F92] to-[#544AA5]'
                  >
                    {items.number}
                  </h1>
                  <p className='text-white/70'>
                    {items.message}
                  </p>
                </div>
              ))
            }
          </div> 
          <div className='w-1/3 flex flex-col justify-between '>
            <h1 className='text-5xl font-bold py-8'>3 Easy Steps </h1>
            <h2 className='text-4xl font-semibold text-white/60 py-15'>To Grow Your Bussinsess With ABS Strategies </h2>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default GrowingSteps;
