import Image from 'next/image';
import Button from './Button';
import { featuresCard } from '../constants';

const FeaturesCard : React.FC = () => {
  return (
    <div className='w-full md:grid grid-cols-3 gap-x-7'>
      {
        featuresCard.map(({id, icon: Icon, title, description }) => (
          <div
            key={id}
            className='py-10 my-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-around '
          >
            <Icon size={70} color="#544AA3" />
            <h3 className='text-3xl font-bold p-4'>{title}</h3>
            <p className='text-center px-2'>{description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FeaturesCard;