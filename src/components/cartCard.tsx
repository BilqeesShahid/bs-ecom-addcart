"use client"
import React from 'react'
import { Button } from './ui/button'
import {FaPlus,FaMinus,FaTrash} from 'react-icons/fa'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import {  delItem,addCart, subtractCart } from '@/app/store/features/cart'
const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch();
  return (
<>
{ cartArray.length >= 1 &&
cartArray.map((item , i)=> (
  <div key={i} className='flex px-10 py-3'>
      {/*image*/}
      <Image src={item.image[0]}
       alt={item.title}
        width={80}
         height={80}
          className='w-[100px] h-[100px]'/>
      {/*some info*/}
      <div className='flex px-5 justify-between item-center w-full'>
        <div> {/*title*/}
        <h1 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
          {item.title}
        </h1>
        {/*size*/}
        <p className='mt-2 text-sm text-myBlackHead/80 leading-none line-clamp-1 font-semibold'>
          size:&nbsp;<span>{item.size}</span>
        </p>
         {/*color*/}
         <p className='mt-2 text-sm text-myBlackHead/80 leading-none line-clamp-1 font-semibold'>
          color:&nbsp;<span>
          <button 
                  key={i} 
                  className="border-2 border-gray-300 mr-1 rounded-full
                   w-[15px] h-[15px] focus:outline-none
                  active:border-none focus:border-none"
                  style={{backgroundColor:item.color}} />
          </span>
        </p>
        {/*quantity*/}
        <div className='mt-2 flex item-center'>
          <Button onClick={() => (dispatch(subtractCart(item)))} className='group hover:bg-myWhite bg-myBlackHead 
          text-myWhite hover:myBlackHead w-fit h-fit rounded-lg text-xs duration-300'>
            <FaMinus className='h-2 w-2 group-hover:text-myBlackHead'/>
            </Button>
            <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80'>
            {item.Quantity}</div>
            <Button onClick={() => (dispatch(addCart(item)))} className='group hover:bg-myWhite bg-myBlackHead
          text-myWhite hover:myBlackHead w-fit h-fit rounded-lg text-xs duration-300'>
            <FaPlus className='h-2 w-2 group-hover:text-myBlackHead'/>
            </Button>
            </div>
            {/*price and delete*/}
            <div className='mt-2 lg:hidden flex flex-col gap-2'>
        <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
          <span>Price:&nbsp;</span>&#36;{item.discount> 0 ? 
          (item.price - ((item.price * item.discount)/100))*item.Quantity: 
          item.price * item.Quantity}</h3>
          <FaTrash onClick={()=> dispatch(delItem(item.uuid))} className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
      </div>
        </div>
      </div>
      {/*price and delete*/}
      <div className='hidden lg:flex flex-col items-end gap-5'>
        <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
          <span>Price:&nbsp;</span>&#36;{item.discount> 0 ? 
          (item.price - ((item.price * item.discount)/100))*item.Quantity: 
          item.price * item.Quantity}</h3>
          <FaTrash onClick={()=> dispatch(delItem(item.uuid))} className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
      </div>
    </div>
    
))}

     
    </>
  )
}

export default CartCard