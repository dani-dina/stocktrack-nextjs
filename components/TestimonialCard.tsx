import { FaQuoteLeft } from "react-icons/fa"; 
import Image from "next/image";

const TestimonialCard : React.FC = () => {
  return (
    <div className='w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-7'>
      <div className='p-7'>
        <div className='py-5'>
          <FaQuoteLeft size={50} className="text-gray-500" />
        </div>
        <div className='py-5'>
          <p className=''>
            Do you want me to give you a double quote icon that looks more like a decorative testimonial symbol?
          </p>
        </div>
        <div className='flex items-center gap-7'>
          <Image
            src={'/profile.jpg'}
            width={50}
            height={50}
            alt="Profile Avator"
            className="rounded-full"
          />
          <div>
            <h1 className='font-semibold'>Daniel Abera</h1>
            <h2 className='text-white/60'>Web Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;