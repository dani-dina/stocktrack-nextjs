import FeaturesCard from './FeaturesCard';

const Features = () => {
  return (
    <section className='w-full min-h-min '>
      <div className='mx-7 md:mx-15 mt-12 flex flex-col items-center justify-center'>
        <h1 className='text-white text-2xl md:text-center md:text-4xl md:w-2/4 md:font-semibold'>
          Cutting-Egde Features For Advanced Analytics 
        </h1>
        <FeaturesCard />
      </div>
    </section>
  );
}

export default Features;