import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
const Contact = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Contact Us
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className='grid gap-4 items-center py-8 px-4 md:grid-cols-2 xl:gap-8 sm:py-16 xl:px-16'>
      <div><Image className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
          src="/pictures/contact.jpg" alt="contact" width={500} height={500}/></div>
          <div className='space-y-6'>
        <h1 className='text-myOrange font-bold text-3xl'>
      Let&#39;s Connect&#33;
        </h1>
        <p className='text-base sm:text-xl lg:text-2xl font-serif'>Wet&#39;d love to hear from you&#33;<br/>
           Whether you have a question about our products,<br/>
          need assistance with your order, or simply want to share your feedback,<br/> 
          wet&#39;re here to help.</p>
      
       
        <div className='socials flex gap-4'>
        <Link href="https://github.com" target="_blank">
          <FaGithub className='text-2xl text-myBlue hover:text-myOrange' />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className='text-2xl text-myBlue hover:text-myOrange' />
        </Link>
      </div>
      
      <div className='flex items-center  gap-2 text-myBlackHead hover:text-myOrange text-bold'>
        <BsEnvelope/><span className='text-myBlue font-bold'>Email Us&#58;</span>bilqeesshahid@gmail.com</div>
      <div className='flex items-center gap-2 text-myBlackHead hover:text-myOrange text-bold'><BsFillTelephoneMinusFill/><span className='text-myBlue font-bold'>Call Us&#58;</span>003839829839</div>
    
        </div>
      </div>
      </div>
  )
}

export default Contact