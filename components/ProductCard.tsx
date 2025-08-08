import Image from 'next/image';
import Button from './Button';

const ProductCard : React.FC = () => {
  return (
    <div className='border-1 border-gray-300 rounded-2xl w-1/4'>
      <div>
        <div className='bg-red-600'>
          <Image 
            src={'/logo.png'}
            width={80}
            height={80}
            alt='Icon'
            className='fixed rounded-[50%]'
          />
        </div>
        <h1 className='text-2xl p-4'>
          Headless Product
        </h1>
        <p>
          Sometimes universities or local companies create internal tools and call them things like "WindSurf" or
           "WinSurf" — if you saw it in a classroom or lab, it may refer to that.
        </p>
        <Button
        children='Read more'
        />
      </div>
    </div>
  );
}

export default ProductCard;