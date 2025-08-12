import React from "react";
import Image from "next/image";

const NotFound : React.FC = ()=>{
  return (
    <section className='w-full '>
      <div className='mx-7 md:mx-15 flex items-center justify-center'>
        <div>
          <Image
            src={'/astronout.png'}
            width={400}
            height={200}
            alt='Astronout'
            className='p-5'
          />
          <h1 className='text-4xl font-semibold'>
            Oops Page Not Found | 404
          </h1>
        </div>
      </div>
    </section>
  );
}

export default NotFound;