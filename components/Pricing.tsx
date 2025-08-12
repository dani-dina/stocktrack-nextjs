'use client'

import React from "react";
import { useState } from "react";
import Button from "./Button";
import PricingCard from "./PricingCard";
import { pricingPlans } from '../constants/index';

const Pricing : React.FC = () => {
  const [ planType,setPlanType ] = useState<'annual' | 'monthly'>('annual');
  return (
    <section className='w-full'>
      <div className='mx-7 md:mx-15'>
        <h1 className='text-3xl font-semibold text-center'>
          Choose Your Plan
        </h1>
        <p className='text-center my-4'>
          Here’s a JavaScript array with 6 objects for your inventory management system’s <br />
          features page, following your requested format:
        </p>
        <div className='w-full flex items-center justify-center'>
          <div className='py-1.5 px-4  bg-white/10 backdrop-blur-md border border-white/20  rounded-3xl flex gap-4 mt-2'>
            <Button 
              children='Anually'
              className={`${
                 planType === 'annual' ? 'bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl px-4 py-2'
                 : 'text-white/60' } `} 
              onClick={ () => setPlanType('annual') }
            />
            <Button
              children='Monthly'
              className={`${
                planType === 'monthly' ? 'bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl px-4 py-2' 
                : 'text-white/60' } `} 
              onClick={()=> setPlanType('monthly')}
            />
          </div>
          
        </div>
        <div className='w-full flex flex-col md:flex-row items-center justify-around gap-12'>
          {
            pricingPlans.map((items) => (
              <PricingCard
                key={items.id}
                children={items.title}
                btnTitle={items.btnTitle}
                annualPrice={items.annualPrice}
                monthlyPrice={items.yearlyPrice}
                packages={items.packages}
                description={items.description}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Pricing;