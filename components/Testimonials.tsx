import TestimonialCard from "./TestimonialCard";
import { testimonials } from '../constants/index';

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 mt-8">
      <div className="mx-7 md:mx-15">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-5xl font-bold py-4">
            What People are <br /> saying about us
          </h1>
          <p className="text-white/60">
            Everything you need to manage inventory <br /> and grow your business anywhere on the planet
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;