import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          About Us
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className='grid gap-4 items-center py-8 px-4 md:grid-cols-2 xl:gap-8 sm:py-16 xl:px-16'>
        <div className='space-y-6'>
        <Image  className ="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
         src="/pictures/banner12.png" alt="about"  width={600}
        height={500}/>
        <Image  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
         src="/pictures/about.png" alt="about"  width={600}
        height={500}/>
        </div>
        <ul className='text-base sm:text-xl lg:text-2xl font-serif'>
       <li> Welcome to <span className='text-myOrange font-bold'>BS MART</span>, where fashion meets confidence. 
        We are passionate about empowering women with stylish clothing, 
        chic shoes, and exquisite accessories designed to celebrate individuality and elegance.</li><br/>

        <li>Our collection is thoughtfully curated to cater to every mood, moment, 
        and milestone in your life. From timeless classics to trendsetting designs,
         we aim to inspire your wardrobe with pieces that make you feel bold, beautiful, and unstoppable.</li><br/>

      <li>At  <span className='text-myOrange font-bold'>BS MART</span>, we believe in quality, 
       comfort, and sustainability. Our commitment is to deliver 
       exceptional products that not only enhance your style but also 
       reflect your values. Whether you are dressing for work, play, 
       or something in between, we have got you covered.</li><br/>

     <li>Step into the world of <span className='text-myOrange font-bold'>BS MART</span>
      and discover fashion that speaks to your soul. 
      Because every woman deserves to shine, and your style story starts here.
     </li></ul>
      </div>
      </div>
  )
}

export default About
