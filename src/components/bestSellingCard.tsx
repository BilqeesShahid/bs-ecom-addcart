import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import BestsellingAddToCart from './bestsellingAddToCart';
const BestSellingCard = ({ src, alt, title,slug,category,description, price,discount}:{ src: string,
     alt:  string
     title: string, 
     slug:string,
     category:string,
     description: string, 
     price: number ,
     discount:number,
    }) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
      {/*image div*/}
      <div className='block h-[23rem] rounded overflow-hidden'>
        <Image src={src} alt={alt} width={400} height={400} layout="responsive" objectFit="cover" />
      </div>
      {/*typography div*/ }
      <div className="mt-4">
        {title && (
          <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">{title}</h2>
        )}
        {description && (
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">{description}</p>
        )}
        {price && (
          <div className='flex gap-4'>
          <p className={`scroll-m-20 border-b pb-2  text-base font-semibold 
          tracking-tight  text-myBlackHead line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>Rs-{price}</p>
          {/*discounted value*/}
          {discount > 0 && (
          <p className="scroll-m-20 border-b pb-2 text-base font-semibold 
          tracking-tight text-myBlackHead line-clamp-1">Rs-{price - (price * discount/100)}</p>
        )}
      </div>
        )}
        </div>
      </Link>
      {/*buttons div*/}
      <div>
        <div className='absolute bottom-2 right-2'>
<BestsellingAddToCart slug={slug}/>
        </div>
        
        <Button className='bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 border-b pb-2 text-xs rounded-xl
         absolute bottom-2 left-2 font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange' />Buy Now!
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-xs font-semibold tracking-tight
           text-myWhite bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center
            uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
        )}
      </div>
    </div>
  )
}

export default BestSellingCard;
