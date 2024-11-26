import React from 'react'
import { Button } from './ui/button'
import { GiShoppingBag } from "react-icons/gi"

const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div
  className="hero min-h-[100vh] custom-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold
       tracking-tight lg:text-5xl text-myWhite">Futuristic <span className="text-myOrange">Clothing</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
         Upgrade your wardrobe with Sleek and Stylish Apparels and Top&#45;Notch Shoes
      </p>
      <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      <GiShoppingBag className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce" />Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero