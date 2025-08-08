import Image from 'next/image';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';

export default function Home() {
  return (
    <div className="w-full min-h-min">
      <Hero />
      <div className='w-full'>
        <div className='md:mx-15'>
         {/* <h1>What we offer </h1> */}
         <div className='flex items-center justify-between'>
            {/* <ProductCard /> */}
         </div>
        </div>
      </div>
    </div>
  );
}
