"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { FaShoppingCart } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { useState } from "react"
import { addToCart } from "@/app/store/features/cart"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BestsellingAddToCart = ({slug}:{slug:string}) => {
  //calling products
  const product= useAppSelector((state) => state.products).find((val)=> val.slug == slug)
  //add to cart
  const dispatch= useAppDispatch()
  //setting cart items
  const [cartItem,setCartItem]=useState(
    {
      id:product?.id,
      title:product?.title,
      image:product?.image,
      slug:product?.slug,
      price:product?.price,
      discount:product?.discount,
      category:product?.category,
      size: product?.size[0],
      Quantity:product?.Quantity,
      color: product?.color[0]
    }
  );
  //notify
  const notify = () => 
    toast.success('Product Added successfully', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
   
  return (
    <div>
      <Popover>
      <PopoverTrigger asChild>
      <Button  className='group bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 text-xs rounded-xl 
        font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />Add to Cart
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[15rem]">
      <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight
               text-myBlackHead">Size</span>
              
                <div className='form-control w-full max-w-xs'>
               
  <select 
  onChange={(e)=>setCartItem({...cartItem,size:e.target.value})} 
  className="select select-bordered bg-[#FAFAFA] text-myBlackPara">
    <option disabled defaultValue={"Select Size"}>Select Size</option>
     {product?.size.map((item,i) =>( 
       <option key={i}>{item}</option>
        
    ))} 
     
  </select>
</div>
            </div>
            <div className="flex mt-5">
              {/*colors*/}
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                Color
                </span>
                {product?.color.map((item,i) => (
                  <button 
                   key={i} 
                   onClick={()=>setCartItem({...cartItem, color:item})}
                  className="border-2 border-gray-300 mr-1 rounded-full
                   w-6 h-6 focus:outline-none
                  active:border-black focus:border-black"
                   style={{backgroundColor:item}} 
                  />
                 ))} 
               </div>
               <div className="w-fit" onClick={notify}> 
               <Button onClick={()=> dispatch(addToCart(cartItem))} className='mt-5 w-full bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 text-xs rounded-xl 
         font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange' />Add to Cart
        </Button>
        </div>
         
      </PopoverContent>
    </Popover>
    <ToastContainer
         position="top-left"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"/>
    </div>
  )
}

export default BestsellingAddToCart