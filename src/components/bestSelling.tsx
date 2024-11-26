 "use client";

import React from 'react';
import BestSellingCard from './bestSellingCard';
import { useAppSelector } from '@/app/store/hooks';

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.slice(0, 3);

  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Best Selling
        </h1>
      </div>

      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
      </div>

      {/* Best selling products */}
      <div className='flex flex-wrap justify-center gap-5'>
        {
          bestSell.map((items: any, index: number) => (
            <BestSellingCard
              key={index}
              src={items.image[0]}
              alt={items.title}
              title={items.title}
              slug={items.slug}
              category={items.category}
              description={items.description}
              price={items.price}
              discount={items.discount}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BestSelling;
