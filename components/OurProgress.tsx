import { progressItem } from '../constants';

const OurProgress : React.FC = () => {

  return (
    <section className='w-full min-h-screen'>
      <div className='mx-7 md:mx-15 '>
        <h1 className='font-semibold text-4xl'>There is Some Title Here</h1>
        <div className='flex gap-x-5 mt-7'>
          <div className='px-15  bg-white/10 backdrop-blur-md border border-white/20 rounded-xl'>
            <h2 className='py-4 text-4xl font-semibold'>Total BTCE on Stock</h2>
            <h1 className='text-2xl'>$ 125,875,986.000</h1>
            <div className='h-[1px] bg-gray-400 rounded-2xl px-12 my-8'></div>
            <div className='flex items-center justify-between gap-7'>
              {
                progressItem.map((items) => (
                  <div 
                    key={items.id}
                    className={`${items.isLine ? 'w-[1px] py-5 bg-white/30 rounded-2xl ' : ''} py-4`}>
                    <h1 className='text-2xl font-bold text-[#FE2F92]'>{items.title}</h1>
                    <h1>{items.description}</h1>
                  </div>
                ))
              }
            </div>
          </div>
          <div className=''>

          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProgress;