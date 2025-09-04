import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-7">
      <div className="p-7">
        {/* Quote Icon */}
        <div className="py-5">
          <FaQuoteLeft size={40} className="text-gray-400" />
        </div>

        {/* Message */}
        <div className="py-5">
          <p className="text-white/80 italic">"{testimonial.message}"</p>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-5">
          <Image
            src={testimonial.image}
            width={50}
            height={50}
            alt={`${testimonial.name} avatar`}
            className="rounded-full"
          />
          <div>
            <h1 className="font-semibold">{testimonial.name}</h1>
            <h2 className="text-white/60 text-sm">{testimonial.role}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
