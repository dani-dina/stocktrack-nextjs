import Button from './Button';
import { pricingProp } from '../types';
import { FaCheckCircle } from "react-icons/fa";

const PricingCard : React.FC<pricingProp> = ({children,btnTitle,monthlyPrice,annualPrice,packages,description}) => {

  return (
    <div className='w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl my-5'>
      <div className='p-5'>
        <h1 className='py-4'>
          {children}
        </h1>
        <h1 className='text-4xl font-bold'>{annualPrice}/ <span className='text-sm font-normal text-[#FE2F92]'>Month</span> </h1> 
        <p className='my-4'>
          {description}
        </p>
        <Button
          children={btnTitle}
          className='py-2 px-5 border border-white/20 bg-[#FE2F92] rounded-2xl'
        />
        <ul className='pt-7'>
          {
            packages.map((items,key)=>(
              <li key={key} className='flex items-center py-4 gap-2'>
                <FaCheckCircle className="text-[#FE2F92]" />
                <span>{items}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;