import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
     
      <section className="body-font mb-[100px] mt-[100px]">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Our Services
      </h1>
       
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {/*delivery*/}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
    
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
           <Image src='/pictures/van.png' alt="Delivery" width={100} height={100} className="w-20 h-20"/>
          
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 
          capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl cursor-pointer">
            free delivery
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300line-clamp-2 scroll-m-20   text-base font-semibold tracking-tight mt-3">
            Free Delivery On Order Above $1000&#33;
          </p>
           
        </div>
      </div>
      {/*24/7 services */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
    
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
       <Image src="/pictures/CustomerService.jpg" alt="Delivery" width={100} height={100} className="w-20 h-20"/>
      
    </div>
    <div className="flex-grow">
      <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 
      capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl cursor-pointer">
        24/7 customer services
      </h2>
      <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight mt-3">
        For Queries and Questions Feel Free to Contact&#33;
      </p>
       
    </div>
  </div>
  {/*money back*/}
  <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
    
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
       <Image src="/pictures/money1.jpg" alt="Delivery" width={100} height={100} className="w-20 h-20"/>
      
    </div>
    <div className="flex-grow">
      <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 
      capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl cursor-pointer">
        Money back guarantee
      </h2>
      <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300line-clamp-2 scroll-m-20   text-base font-semibold tracking-tight mt-3">
        Get money back guarantee on product damage&#33;
      </p>
       
    </div>
  </div>
   
    </div>
     
  </div>
</section>

    
  )
}

export default Services