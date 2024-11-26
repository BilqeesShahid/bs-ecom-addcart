"use client"
import React from 'react'
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks'

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart)
  const total = cartArray.reduce((total,arr) => {return(total+
    ((arr.price-(arr.price * arr.discount)/100
  ))*arr.Quantity)},0)
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1'>
    {/*items*/}
    <div className='col-span-2'>
      <CartCard/>
    </div>
    {/*summary*/}
    <div className='bg-myBlackHead/5 p-5 rounded-xl'>
    {/*heading*/}
    <h2 className='scroll-m-20 text-lg font-medium tracking-tight uppercase text-myBlackHead'>Order Summary</h2>
    {/*divider*/}
    <div className="divider mt-0 mb-1"></div>
    {/*pricing*/}
  
    <div className='text-sm font-medium tracking-tight text-myBlackPara'>
       {/*product prices*/}
      <div className='flex item-center justify-between capitalize'>
        <h2>sub total</h2>
        <h2>{total}PKR</h2>
      </div>
      {/*delivery charges to be declared TBD*/}
      <div className='flex item-center justify-between capitalize'>
        <h2>Delivery charges</h2>
        <h2>TBD</h2>
      </div>
       {/*service charges declared TBD*/}
       <div className='flex item-center justify-between capitalize'>
        <h2>sales tax</h2>
        <h2>TBD</h2>
      </div>

    </div>
     {/*divider*/}
     <div className="divider mt-0 mb-1"></div>
     {/*estimated total*/}
     <div className='flex item-center justify-between uppercase
      font-semibold text-sm tracking-tight text-myBlackhead'>
        <h2>estimated total</h2>
        <h2>{total}PKR</h2>
      </div>
       {/*divider*/}
     <div className="divider mt-0 mb-1"></div>
     {/*proceed to check out button*/}
     <div className='flex item-center justify-center w-full'>
      <Button className='bg-myBlackHead hover:bd-transparent duration-300
      text-myWhite hover:text-myBlackHead capitalize
      scroll-m-20 text-sm font-semibold tracking-tight hover:shadow-md rounded-xl'>proceed to check out</Button>

     </div>
      {/*divider*/}
      <div className="divider mt-0 mb-1"></div>
      {/*note*/}
      <p className='text-xs font-semibold tracking-tight
       text-myBlackhead w-[97%] text-center italic capitalize'>
        {`*delivery charges and sales tax charges are calculated at check out page`}
       </p>
    </div>
  </div>

    
  )
}

export default CartPage