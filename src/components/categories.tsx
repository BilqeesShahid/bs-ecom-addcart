import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

 
const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/*Categories start here*/}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/stitched"}>
            <div className="relative w-[300px] h-[300px]">
              <Image
                src='/pictures/kurti1.jpg'
                alt="Stitched"
                layout='fill'
                objectFit='cover'
                className='rounded-xl duration-500 hover:scale-110'
              />
            </div>
            <div className='hidden lg:block absolute -bottom-24 duration-500 
             group-hover:bottom-2 scroll-m-20 text-3xl font-extrabold 
             tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>stitched</h1>
            </div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100]
             scroll-m-20 text-3xl font-extrabold 
             tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>stitched</h1>
            </div>
          </Link>
        </div>
        {/* Category 2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/unstitched"}>
            <div className="relative w-[300px] h-[300px]">
              <Image
                src='/pictures/suit1.jpg'
                alt="Unstitched"
                layout='fill'
                objectFit='cover'
                className='rounded-xl duration-500 hover:scale-110'
              />
            </div>
            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Unstitched</h1>
            </div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100]
             scroll-m-20 text-3xl font-extrabold 
             tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>UnStitched</h1>
            </div>
          </Link>
        </div>
        {/* Category 3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/accessories"}>
            <div className="relative w-[300px] h-[300px]">
              <Image
                src='/pictures/accessories.jpg'
                alt="Accessories"
                layout='fill'
                objectFit='cover'
                className='rounded-xl duration-500 hover:scale-110'
              />
            </div>
            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1>
            </div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100]
             scroll-m-20 text-3xl font-extrabold 
             tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1>
            </div>
          </Link>
        </div>
        {/* Category 4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/shoes"}>
            <div className="relative w-[300px] h-[300px]">
              <Image
                src='/pictures/shoe1.webp'
                alt="Shoes"
                layout='fill'
                objectFit='cover'
                className='rounded-xl duration-500 hover:scale-110'
              />
            </div>
            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1>
            </div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100]
             scroll-m-20 text-3xl font-extrabold 
             tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
