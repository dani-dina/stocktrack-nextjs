import TestimonialCard from "./TestimonialCard";

const Testimonials : React.FC = () => {
  return (
    <section className='py-10 mt-8'>
      <div className='mx-7 md:mx-15'>
        <div className='flex items-center justify-between'>
          <h1 className='text-5xl font-bold'>
            What People are <br /> saying about us
          </h1>
          <p className='text-white/60'>
            Everything you need to accept card payment <br /> and grow your business anywhere on the planet
          </p>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center justify-between mt-10'>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;