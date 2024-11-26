"use client"
import SlugComponent from '@/components/slugcomponent'
import { Button } from '@/components/ui/button'
import { FaHeart,FaPlus,FaMinus} from 'react-icons/fa'
import { useAppSelector } from "../../store/hooks";
import { useState } from 'react';
import AddToCartToast from '@/components/addToCartToast';
 

const SlugPage = ({params}:{params:{slug:string}}) => {
   const product= useAppSelector((state) => state.products)
   
  const slug=product.filter((items)=> items.slug == params.slug)
  // const dispatch= useAppDispatch()
  const [cartItem,setCartItem]=useState(
    {
      id:slug[0].id,
      title:slug[0].title,
      image: slug[0].image,
      slug:slug[0].slug,
      price:slug[0].price,
      discount:slug[0].discount,
      category:slug[0].category,
      size: slug[0].size[0],
      Quantity:slug[0].Quantity,
      color: slug[0].color[0]
    }
  );

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
     {/*image*/}
        <SlugComponent image={slug[0].image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/*category*/}
          <h2 className="text-sm font-semibold tracking-widest text-grey-600 uppercase">
          {slug[0].category}
          </h2>
          


          {/*title/heading*/}
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
          {slug[0].title}
          </h1>
           {/*rating*/}
           <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-5"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
<div className="divider"></div>
          {/*description*/}
          <p className="leading-relaxed scroll-m-20 text-base font-semibold  text-myBlackPara">
          {slug[0].description}
          </p>
          <div className="flex mt-6 items-center  mb-5">
            <div className="flex">
              {/*colors*/}
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                Color
                </span>
                {slug[0].color.map((item,i) => (
                  <button 
                  key={i} 
                  onClick={()=>setCartItem({...cartItem, color:item})}
                  className="border-2 border-gray-300 mr-1 rounded-full
                   w-6 h-6 focus:outline-none
                  active:border-black focus:border-black"
                  style={{backgroundColor:item}} />
                ))}
               
              
            </div>
            {/*size*/}
            <div className="flex ml-6 items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight
               text-myBlackHead">Size</span>
              
                <div className='form-control w-full max-w-xs'>
               
  <select onChange={(e)=>setCartItem({...cartItem,size:e.target.value})} className="select select-bordered">
    <option disabled selected>Select Size</option>
    {slug[0].size.map((item,i) =>(
       <option key={i}>{item}</option>
    ))}
     
  </select>
</div>
            </div>
          </div>
          {/*quantity*/}
          <div className='flex item-center'>
          <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight
           text-myBlackHead">Quantity</span>
          <Button onClick={()=> (setCartItem
          ({...cartItem,Quantity:cartItem.Quantity <=1?1: --cartItem.Quantity}))}
          className='group bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 text-xs rounded-xl 
         font-semibold w-fit h-fit tracking-tight'>
          <FaMinus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />Less
        </Button>
        <div className='mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight'> 
        {cartItem.Quantity}
        </div>
        <Button onClick={()=> setCartItem({...cartItem,Quantity:++cartItem.Quantity})} className='group bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 text-xs rounded-xl 
         font-semibold w-fit h-fit tracking-tight'>
          <FaPlus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />Add
        </Button>
          </div>
          <div className="divider"></div>
          <div className="flex item-center justify-between">

            {/*price*/}
            <div>
               
            <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead  
              ${cartItem.discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
              Rs-{cartItem.price * cartItem.Quantity}
            </span>
            
            {/*discounted value*/}
          {cartItem.discount > 0 && (
          <span className="ml-3 scroll-m-20 text-2xl font-semibold 
          tracking-tight text-myBlackHead">
            Rs-{(cartItem.price - (cartItem.price * cartItem.discount)/100) * cartItem.Quantity}</span>
        )} 
        </div>
            {/* {/*add to cart*/ }
             <AddToCartToast cartItem ={cartItem}/> 
          </div>
          {/*buy now*/}
          <Button className='group mt-3 w-full bg-myBlackHead hover:bg-transparent text-myWhite 
        hover:text-myBlackHead scroll-m-20 text-xs rounded-xl 
         font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />Buy Now
        </Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SlugPage;